import * as amm from "./amm/structs";
import * as kamo from "./kamo/structs";
import * as syTokenization from "./sy-tokenization/structs";
import * as vekamo from "./vekamo/structs";
import * as yieldObject from "./yield-object/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(amm.AddLiquidityEvent);
loader.register(amm.BuyYoBorrowSy);
loader.register(amm.LP);
loader.register(amm.Market);
loader.register(amm.PreComputeMarket);
loader.register(amm.RemoveLiquidityEvent);
loader.register(amm.SellYoBorrowPt);
loader.register(amm.SwapExactPtForSyEvent);
loader.register(amm.SwapSyForExactPtEvent);
loader.register(kamo.KAMO);
loader.register(kamo.KamoTreasuryCap);
loader.register(kamo.TokensBurned);
loader.register(kamo.TokensMinted);
loader.register(yieldObject.ClaimInterestEvent);
loader.register(yieldObject.DeleteYieldObjectEvent);
loader.register(yieldObject.EarnInterestEvent);
loader.register(yieldObject.MergeYieldObjectEvent);
loader.register(yieldObject.SplitYieldObjectEvent);
loader.register(yieldObject.YieldObject);
loader.register(syTokenization.Factory);
loader.register(syTokenization.NewRegistryEvent);
loader.register(syTokenization.Registry);
loader.register(syTokenization.TypenameItem);
loader.register(vekamo.VeKAMOUpdated);
loader.register(vekamo.VotingEscrow);
 }
