// import BigNumber from "bignumber.js";
// import { suiClient } from "../client";
// import { PhantomTypeArgument } from "../kamo_generated/_framework/reified";
// import { State } from "../kamo_generated/hasui_wrapper/wrapper/structs";
// import { Market } from "../kamo_generated/kamo/amm/structs";
// import { SwapSyForExactPtParams } from "../transaction";
// import { SUPPORTED_MARKETS } from "../transaction/const";
// import { mappingState } from "../transaction/utils";
// import { FixedPoint64 } from "./fixedpoint64";

// export interface NewYieldMarketParams {
//   stateId: string;
// }

// export interface SimulateSwapSyForExactPtParams {
//   syAmount: bigint;
//   ptAmount: bigint;
//   exchangeRate: FixedPoint64;
// }

// export interface GetRateAnchorParams {
//   totalPt: bigint;
//   totalAsset: bigint;
//   rateScalar: FixedPoint64;
//   timeToExpiry: bigint;
// }

// const IMPLIED_RATE_TIME = BigInt(1000 * 60 * 60 * 24 * 365);

// function syToAsset(syAmount: bigint, exchangeRate: FixedPoint64): bigint {
//   return syAmount * exchangeRate.value >> BigInt(64);
// }

// export class YieldMarket {
//   market: Market<PhantomTypeArgument, PhantomTypeArgument>;

//   static async GetFromState(params: NewYieldMarketParams): Promise<YieldMarket> {
//     const type = mappingState(params.stateId);
//     if (type === SUPPORTED_MARKETS.HASUI) {
//       const state = await State.fetch(suiClient, params.stateId);
//       const yieldMarket = new YieldMarket();
//       yieldMarket.market = state.market;
//       return yieldMarket;
//     }
//     throw new Error("Unsupported market type");
//   }

//   getRateScalar(timeToExpiry: bigint): FixedPoint64 {
//     const rateScalar = this.market.scalarRoot.value * IMPLIED_RATE_TIME / timeToExpiry;
//     return new FixedPoint64(rateScalar);
//   }

//   getExchangeRateFromImpliedRate(lnImpliedRate: bigint, timeToExpiry: bigint): FixedPoint64 {
//     const rt = lnImpliedRate * timeToExpiry / IMPLIED_RATE_TIME;
//     return FixedPoint64.exp(rt);
//   }

//   get_rate_anchor(params: GetRateAnchorParams): FixedPoint64 {
//     const exchangeRate = getExchangeRateFromImpliedRate(this.market.lastLnImpliedRate.value, timeToExpiry);
//   }

//   pre_compute_value(exchangeRate: FixedPoint64) {
//     const timeToExpiry = this.market.expiry - BigInt(Date.now());
//     const rateScalar = this.getRateScalar(timeToExpiry);
//     const totalPt = this.market.totalPt.value;
//     const totalAsset = syToAsset(this.market.totalSy.value, exchangeRate);
//     const rateAnchor = 
//   }

//   execute_trade_core_sell_sy(params: SimulateSwapSyForExactPtParams) {
//     const preComputeValue = 
//   }

//   swap_sy_for_exact_pt(params: SimulateSwapSyForExactPtParams) {

//   }
// }