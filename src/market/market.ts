import BigNumber from "bignumber.js";
import { suiClient } from "../client";
import { PhantomTypeArgument } from "../kamo_generated/_framework/reified";
import { State } from "../kamo_generated/hasui_wrapper/wrapper/structs";
import { Market } from "../kamo_generated/kamo/amm/structs";
import { SwapSyForExactPtParams } from "../transaction";
import { SUPPORTED_MARKETS } from "../const";
import { mappingState } from "../utils";
import { FixedPoint64 } from "../utils/fixedpoint64";
import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";

export interface NewYieldMarketParams {
  stateId: string;
}

export interface SimulateSwapSyForExactPtParams {
  ptAmount: bigint;
  exchangeRate: FixedPoint64;
  now: number;
}

export interface GetRateAnchorParams {
  totalPt: bigint;
  totalAsset: bigint;
  rateScalar: FixedPoint64;
  timeToExpiry: bigint;
}

export interface PreComputeMarket {
    rateScalar: FixedPoint64;
    totalAsset: bigint;
    rateAnchor: FixedPoint64;
    feeRate: FixedPoint64;
}

export interface GetExchangeRatePtToAssetParams {
    preCompute: PreComputeMarket;
    totalPt: bigint;
    ptAmount: bigint;
    sell: boolean;
}

const IMPLIED_RATE_TIME = BigInt(1000 * 60 * 60 * 24 * 365);

// Error codes
const EMarketZeroAmountsInput = 0;
const EMarketInsufficientLiquidity = 1;
const EMarketRateScalarBelowZero = 4;
const EMarketZeroTotalPtOrTotalAsset = 5;
const EMarketExchangeRateBelowOne = 6;
const EMarketProportionTooHigh = 7;


function syToAsset(syAmount: bigint, exchangeRate: FixedPoint64): bigint {
  return (syAmount * exchangeRate.value) >> BigInt(64);
}

function assetToSy(assetAmount: bigint, exchangeRate: FixedPoint64): bigint {
  return (assetAmount << BigInt(64)) / exchangeRate.value;
}

export class YieldMarket {
  market: Market<PhantomTypeArgument, PhantomTypeArgument>;

  static async GetFromState(params: NewYieldMarketParams): Promise<YieldMarket> {
    const type = mappingState(params.stateId);
    if (type === SUPPORTED_MARKETS.HASUI) {
      const state = await State.fetch(new SuiClient(
      {
          url: getFullnodeUrl("mainnet"),
      }), params.stateId);
      const yieldMarket = new YieldMarket();
      yieldMarket.market = state.market;
      return yieldMarket;
    }
    throw new Error("Unsupported market type");
  }

  getRateScalar(timeToExpiry: bigint): FixedPoint64 {
    const rateScalar = this.market.scalarRoot.value * IMPLIED_RATE_TIME / timeToExpiry;
    if (rateScalar === BigInt(0)) {
      throw new Error(`Market rate scalar below zero: ${EMarketRateScalarBelowZero}`);
    }
    return new FixedPoint64(rateScalar);
  }

  getExchangeRateFromImpliedRate(lnImpliedRate: FixedPoint64, timeToExpiry: bigint): FixedPoint64 {
    const rt = lnImpliedRate.muldivU128U128(timeToExpiry, IMPLIED_RATE_TIME);
    return FixedPoint64.Exp(rt);
  }

  getRateAnchor(params: GetRateAnchorParams): FixedPoint64 {
    const exchangeRate = this.getExchangeRateFromImpliedRate(new FixedPoint64(this.market.lastLnImpliedRate.value), params.timeToExpiry);
    if (exchangeRate.value < BigInt(1)) {
      throw new Error(`Market exchange rate below one: ${EMarketExchangeRateBelowOne}`);
    }
    const proportion = FixedPoint64.CreateFromRational(params.totalPt, params.totalPt + params.totalAsset);
    const iProportion = FixedPoint64.CreateFromRational(proportion.value, FixedPoint64.CreateFromU128(BigInt(1)).value - proportion.value);
    const lnProportion = iProportion.ln();
    let rateAnchor;
    if (iProportion.value < FixedPoint64.CreateFromU128(BigInt(1)).value) {
        rateAnchor = exchangeRate.addDivFixed64(lnProportion, params.rateScalar);
    } else {
        rateAnchor = exchangeRate.subDivFixed64(lnProportion, params.rateScalar);
    }
    return rateAnchor;
  }

  preComputeValue(exchangeRate: FixedPoint64, now: number): PreComputeMarket {
    const timeToExpiry = this.market.expiry - BigInt(now);
    const rateScalar = this.getRateScalar(timeToExpiry);
    const totalPt = this.market.totalPt;
    const totalAsset = syToAsset(this.market.totalSy, exchangeRate);
    if (totalPt === BigInt(0) || totalAsset === BigInt(0)) {
      throw new Error(`Market zero total PT or total asset: ${EMarketZeroTotalPtOrTotalAsset}`);
    }
    const rateAnchor = this.getRateAnchor({
        totalPt,
        totalAsset,
        rateScalar,
        timeToExpiry
    });
    const feeRate = this.getExchangeRateFromImpliedRate(new FixedPoint64(this.market.lnFeeRateRoot.value), timeToExpiry);
    return {
        rateScalar,
        totalAsset, 
        rateAnchor,
        feeRate
    }
  }

  getExchangeRatePtToAsset(params: GetExchangeRatePtToAssetParams): FixedPoint64 {
    const newPtAmount = params.sell ? params.totalPt + params.ptAmount : params.totalPt - params.ptAmount;
    const proportion = FixedPoint64.CreateFromRational(newPtAmount, params.totalPt + params.preCompute.totalAsset);
    if (proportion.value > FixedPoint64.CreateFromRational(BigInt(96), BigInt(100)).value) {
      throw new Error(`Market proportion too high: ${EMarketProportionTooHigh}`);
    }
    const iProportion = FixedPoint64.CreateFromRational(proportion.value, FixedPoint64.CreateFromU128(BigInt(1)).value - proportion.value);
    const lnProportion = iProportion.ln();
    let exchangeRate;
    if (iProportion.value < FixedPoint64.CreateFromU128(BigInt(1)).value) {
        exchangeRate = params.preCompute.rateAnchor.subDivFixed64(lnProportion, params.preCompute.rateScalar);
    } else {
        exchangeRate = params.preCompute.rateAnchor.addDivFixed64(lnProportion, params.preCompute.rateScalar);
    }
    if (exchangeRate.value < BigInt(1)) {
      throw new Error(`Market exchange rate below one: ${EMarketExchangeRateBelowOne}`);
    }
    return exchangeRate;
  } 

  calcTrade(preCompute: PreComputeMarket, exchangeRate: FixedPoint64, ptAmount: bigint, sell: boolean) {
    const preFeeExchangeRate = this.getExchangeRatePtToAsset({
        preCompute,
        totalPt: this.market.totalPt,
        ptAmount,
        sell
    });
    const preFeeAssetAmount = (ptAmount << BigInt(64)) / preFeeExchangeRate.value;
    const postFeeExchangeRate = preFeeExchangeRate.mul(preCompute.feeRate);
    const postFeeAssetAmount = (ptAmount << BigInt(64)) / postFeeExchangeRate.value;
    const fee = preFeeAssetAmount - postFeeAssetAmount;
    const syAmount = assetToSy(postFeeAssetAmount, exchangeRate);
    const syFee = assetToSy(fee, exchangeRate);
    return {
        syAmount,
        syFee
    }
  } 

  executeSellSy(params: SimulateSwapSyForExactPtParams) {
    if (params.ptAmount === BigInt(0)) {
      throw new Error(`Market zero amounts input: ${EMarketZeroAmountsInput}`);
    }
    const preComputeValue = this.preComputeValue(params.exchangeRate, params.now);
    const {
        syAmount: netSyToMarket,
        syFee: netSyFee,
    } = this.calcTrade(preComputeValue, params.exchangeRate, params.ptAmount, false);
    if (netSyToMarket === BigInt(0) || netSyFee === BigInt(0)) {
      throw new Error(`Market insufficient liquidity: ${EMarketInsufficientLiquidity}`);
    }
    return {
        netSyToMarket,
        netSyFee
    }
  }
}