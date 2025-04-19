import BigNumber from "bignumber.js";
import { suiClient } from "../client";
import { PhantomTypeArgument } from "../kamo_generated/_framework/reified";
import { State as HasuiState, State } from "../kamo_generated/hasui_wrapper/wrapper/structs";
import { State as KusdcState } from "../kamo_generated/kusdc_wrapper/wrapper/structs";
import { Market } from "../kamo_generated/kamo/amm/structs";
import { RemoveLiquidityParams, SwapSyForExactPtParams } from "../transaction";
import { SUPPORTED_MARKETS } from "../const";
import { binarySearchPtAmount, binarySearchSyAmountToYT, improvedBinarySearchPtAmount, mappingState } from "../utils";
import { BigIntMath } from "../utils/bigint_math";
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

export interface SimulateSwapExactPtForSyParams {
  ptAmount: bigint;
  exchangeRate: FixedPoint64;
  now: number;
}

export interface SimulateSwapExactSyForPtParams {
  syAmount: bigint;
  exchangeRate: FixedPoint64;
  now: number;
}

export interface SimulateAddLiquidityExactPtParams {
  ptAmount: bigint;
}

export interface SimulateAddLiquidityExactSyParams {
  syAmount: bigint;
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

export interface SimulateAddLiquidityParams {
    ptAmount: bigint;
    syAmount: bigint;
}

export interface SimulateRemoveLiquidityParams {
    lpAmount: bigint;
}

export interface SimulateSwapExactYoForSyParams {
  yoAmount: bigint;
  syExchangeRate: FixedPoint64;
  now: number;
}

export interface SimulateSwapExactSyForYoParams {
  syAmount: bigint;
  syExchangeRate: FixedPoint64;
  now: number;
}

const IMPLIED_RATE_TIME = BigInt(1000 * 60 * 60 * 24 * 365);


function syToAsset(syAmount: bigint, exchangeRate: FixedPoint64): bigint {
  return (syAmount * exchangeRate.value) >> BigInt(64);
}

function assetToSy(assetAmount: bigint, exchangeRate: FixedPoint64): bigint {
  return (assetAmount << BigInt(64)) / exchangeRate.value;
}

export class YieldMarket {
  market: Market<PhantomTypeArgument, PhantomTypeArgument>;
  stateId: string;

  static async GetFromState(params: NewYieldMarketParams): Promise<YieldMarket> {
    const type = mappingState(params.stateId);
    if (type === SUPPORTED_MARKETS.HASUI) {
      const state = await HasuiState.fetch(new SuiClient(
      {
          url: getFullnodeUrl("testnet"),
      }), params.stateId);
      const yieldMarket = new YieldMarket();
      yieldMarket.market = state.market;
      yieldMarket.stateId = params.stateId;
      return yieldMarket;
    }
    if (type === SUPPORTED_MARKETS.KUSDC) {
      const state = await KusdcState.fetch(new SuiClient(
      {
          url: getFullnodeUrl("testnet"),
      }), params.stateId);
      const yieldMarket = new YieldMarket();
      yieldMarket.market = state.market;
      yieldMarket.stateId = params.stateId;
      return yieldMarket;
    }
    throw new Error("Unsupported market type");
  }

  getRateScalar(timeToExpiry: bigint): FixedPoint64 {
    const rateScalar = this.market.scalarRoot.value * IMPLIED_RATE_TIME / timeToExpiry;
    if (rateScalar === BigInt(0)) {
      throw new Error(`Market rate scalar below zero`);
    }
    return new FixedPoint64(rateScalar);
  }

  getExchangeRateFromImpliedRate(lnImpliedRate: FixedPoint64, timeToExpiry: bigint): FixedPoint64 {
    const rt = lnImpliedRate.muldivU128U128(timeToExpiry, IMPLIED_RATE_TIME);
    return FixedPoint64.Exp(rt);
  }

  getRateAnchor(params: GetRateAnchorParams): FixedPoint64 {
    const exchangeRate = this.getExchangeRateFromImpliedRate(new FixedPoint64(this.market.lastLnImpliedRate.value), params.timeToExpiry);
    if (exchangeRate.value < FixedPoint64.CreateFromU128(BigInt(1)).value) {
      throw new Error(`Market exchange rate below one`);
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
      throw new Error(`Market zero total PT or total asset`);
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
    if (newPtAmount <= BigInt(0)) {
      throw new Error(`Market zero total PT`);
    }
    const proportion = FixedPoint64.CreateFromRational(newPtAmount, params.totalPt + params.preCompute.totalAsset);
    if (proportion.value > FixedPoint64.CreateFromRational(BigInt(96), BigInt(100)).value) {
      throw new Error(`Market proportion too high`);
    }
    const iProportion = FixedPoint64.CreateFromRational(proportion.value, FixedPoint64.CreateFromU128(BigInt(1)).value - proportion.value);
    const lnProportion = iProportion.ln();
    let exchangeRate;
    if (iProportion.value < FixedPoint64.CreateFromU128(BigInt(1)).value) {
        exchangeRate = params.preCompute.rateAnchor.subDivFixed64(lnProportion, params.preCompute.rateScalar);
    } else {
        exchangeRate = params.preCompute.rateAnchor.addDivFixed64(lnProportion, params.preCompute.rateScalar);
    }
    if (exchangeRate.value < FixedPoint64.CreateFromU128(BigInt(1)).value) {
      throw new Error(`Market exchange rate below one`);
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

  swapSyForExactPt(params: SimulateSwapSyForExactPtParams) {
    if (params.ptAmount === BigInt(0)) {
      throw new Error(`Market zero amounts input`);
    }
    const preComputeValue = this.preComputeValue(params.exchangeRate, params.now);
    const {
        syAmount: netSyToMarket,
        syFee: netSyFee,
    } = this.calcTrade(preComputeValue, params.exchangeRate, params.ptAmount, false);
    if (netSyToMarket === BigInt(0)) {
      throw new Error(`Market insufficient liquidity`);
    }
    return {
        netSyToMarket,
        netSyFee
    }
  }

  async swapExactSyForPt(params: SimulateSwapExactSyForPtParams) {
    if (params.syAmount === BigInt(0)) {
      throw new Error(`Market zero amounts input`);
    }
    const amount = await improvedBinarySearchPtAmount(this.stateId, params.syAmount, params.exchangeRate);
    return amount;
  }

  swapExactPtForSy(params: SimulateSwapExactPtForSyParams) {
    if (params.ptAmount === BigInt(0)) {
      throw new Error(`Market zero amounts input`);
    }
    const preComputeValue = this.preComputeValue(params.exchangeRate, params.now);
    const {
      syAmount: netSyToAccount,
      syFee: netSyFee,
    } = this.calcTrade(preComputeValue, params.exchangeRate, params.ptAmount, true);
    if (netSyToAccount === BigInt(0)) {
      throw new Error(`Market insufficient liquidity`);
    }
    return {
        netSyToAccount,
        netSyFee
    }
  }

  swapExactYoForSy(params: SimulateSwapExactYoForSyParams) {
    if (params.yoAmount === BigInt(0)) {
      throw new Error(`Market zero amounts input`);
    }
    const syRedeem = BigInt(FixedPoint64.CreateFromU128(params.yoAmount).div(params.syExchangeRate).toBigNumber().toFixed(0));
    console.log("borrow amount", params.yoAmount);
    console.log(syRedeem);
    const preComputeValue = this.preComputeValue(params.syExchangeRate, params.now);
    const {
      syAmount: netSyToMarket,
      syFee: netSyFee,
    } = this.calcTrade(preComputeValue, params.syExchangeRate, params.yoAmount, false);
    if (netSyToMarket === BigInt(0)) {
      throw new Error(`Market insufficient liquidity`);
    }
    return (syRedeem - (netSyToMarket + netSyFee));
  }

  async swapExactSyForYo(params: SimulateSwapExactSyForYoParams) {
    if (params.syAmount === BigInt(0)) {
      throw new Error(`Market zero amounts input`);
    }
    const syAmountToBorrow = await binarySearchSyAmountToYT(this.stateId, params.syAmount, params.syExchangeRate);
    const totalSyAfterBorrow = syAmountToBorrow + params.syAmount;
    const ptAmountToMint = BigInt(params.syExchangeRate.mul_bigint(totalSyAfterBorrow).toBigNumber().toFixed(0));
    return ptAmountToMint;
  }

  addLiquidity(params: SimulateAddLiquidityParams): {
    ptUsed: bigint;
    syUsed: bigint;
    lpToAccount: bigint;
  } {
    const {
      ptAmount,
      syAmount,
    } = params;

    if (ptAmount === BigInt(0) || syAmount === BigInt(0)) {
      throw new Error(`Market zero amounts input`);
    }

    const currentLp = this.market.lpSupply.value;
    const totalPt = this.market.totalPt;
    const totalSy = this.market.totalSy;

    let lpToAccount = BigInt(0);
    let lpToReserve = BigInt(0);
    let syUsed = BigInt(0);
    let ptUsed = BigInt(0);
    let isBootstrapped = false;

    if (currentLp === BigInt(0)) {
      // First liquidity provider
      lpToAccount = BigIntMath.sqrt(ptAmount * syAmount) - BigInt(1000); // MINIMUM_LIQUIDITY
      lpToReserve = BigInt(1000);
      syUsed = syAmount;
      ptUsed = ptAmount;
      isBootstrapped = true;
    } else {
      const netLpByPt = (ptAmount * currentLp) / totalPt;
      const netLpBySy = (syAmount * currentLp) / totalSy;

      if (netLpByPt < netLpBySy) {
        lpToAccount = netLpByPt;
        ptUsed = ptAmount;
        syUsed = (totalSy * lpToAccount) / currentLp;
      } else {
        lpToAccount = netLpBySy;
        syUsed = syAmount;
        ptUsed = (totalPt * lpToAccount) / currentLp;
      }
    }

    if (lpToAccount <= BigInt(0) || syUsed <= BigInt(0) || ptUsed <= BigInt(0)) {
      throw new Error(`Market insufficient liquidity`);
    }

    if (ptUsed > ptAmount) {
      throw new Error(`Market insufficient amount`);
    }

    if (syUsed > syAmount) {
      throw new Error(`Market insufficient amount`);
    }

    return {
      ptUsed,
      syUsed,
      lpToAccount,
    };
  }

  addLiquidityExactPt(params: SimulateAddLiquidityExactPtParams): {
    syNeeded: bigint;
    lpToAccount: bigint;
  } {
    const {
      ptAmount,
    } = params;

    if (ptAmount === BigInt(0)) {
      throw new Error(`Market zero amounts input`);
    }

    let left = BigInt(0);
    let right = BigInt(2) ** BigInt(32);
    while (right - left > BigInt(1)) {
      const mid = (left + right) / BigInt(2);
      try {
        const {
          ptUsed,
          syUsed,
        } = this.addLiquidity({
          ptAmount,
          syAmount: mid,
        });
        if (ptUsed >= ptAmount) {
          right = mid;
        } else {
          left = mid;
        }
      } catch (e) {
        left = mid;
      }
    }
    const {
      ptUsed,
      syUsed,
      lpToAccount,
    } = this.addLiquidity({
      ptAmount,
      syAmount: right,
    });
    return {
      syNeeded: right,
      lpToAccount,
    }
  }  

  addLiquidityExactSy(params: SimulateAddLiquidityExactSyParams): {
    ptNeeded: bigint;
    lpToAccount: bigint;
  } {
    const {
      syAmount,
    } = params;

    if (syAmount === BigInt(0)) {
      throw new Error(`Market zero amounts input`);
    }
    
    let left = BigInt(0);
    let right = BigInt(2) ** BigInt(32);
    while (right - left > BigInt(1)) {
      const mid = (left + right) / BigInt(2);
      try {
        const {
          syUsed,
        } = this.addLiquidity({
          ptAmount: mid,
          syAmount,
        });
        if (syUsed >= syAmount) {
          right = mid;
        } else {
          left = mid;
        }
      } catch (e) {
        left = mid;
      }
    }
    const {
      ptUsed,
      syUsed,
      lpToAccount,
    } = this.addLiquidity({
      ptAmount: right,
      syAmount,
    });
    return {
      ptNeeded: right,
      lpToAccount,
    }
  }

  removeLiquidity(params: SimulateRemoveLiquidityParams): {
    ptToAccount: bigint;
    syToAccount: bigint;
    lpToMarket: bigint;
  } {
    const {
      lpAmount
    } = params;

    if (!lpAmount) {
      throw new Error(`Market zero amounts input`);
    }

    const currentLp = this.market.lpSupply.value;
    const totalPt = this.market.totalPt;
    const totalSy = this.market.totalSy;

    const netSyToAccount = (lpAmount * totalSy) / currentLp;
    const netPtToAccount = (lpAmount * totalPt) / currentLp;

    if (netSyToAccount === BigInt(0) || netPtToAccount === BigInt(0)) {
      throw new Error(`Market insufficient liquidity`);
    }

    return {
      ptToAccount: netPtToAccount,
      syToAccount: netSyToAccount,
      lpToMarket: lpAmount,
    };
  }
}