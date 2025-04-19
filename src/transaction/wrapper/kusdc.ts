import { coinWithBalance, Transaction } from "@mysten/sui/transactions";
import { FACTORY, STATE_ADDRESS_MAP, SUPPORTED_MARKETS } from "../../const";
import { KamoClient, suiClient } from "../../client/client";
import { PUBLISHED_AT as KAMO_PACKAGE } from "../../kamo_generated/kamo";
import { binarySearchPtAmount, getSyAmountNeedForExactPt, improvedBinarySearchPtAmount, mergeYieldObjects, binarySearchSyAmountToYT } from "../../utils";
import { FixedPoint64 as MoveFixedPoint64 } from "../../kamo_generated/legato-math/fixed-point64/structs";
import { FixedPoint64 } from "../../utils/fixedpoint64";
import { YieldObject } from "../../kamo_generated/kamo/yield-object/structs";
import { PUBLISHED_AT as KUSDC_WRAPPER_PACKAGE_ID } from "../../kamo_generated/kusdc_wrapper";
import { AddLiquidityParams, KamoTransaction, MintParams, NewStateParams, RedeemBeforeMaturityParams, RemoveLiquidityParams, SwapPtForSyParams, SwapSyForExactPtParams, SwapSyForPtParams, SwapSyForYoParams, SwapYoForSyParams } from "../transaction";
import { addLiquidity, borrowPt, borrowSy, createNewState, getKusdcToUsdcExchangeRate, merge, mint, redeemAfterMaturity, redeemBeforeMaturity, refundPt, refundSy, removeLiquidity, routerSwapExactSyForPt, split, swapExactPtForSy, swapExactPtForSyWithHotPotato, swapSyForExactPt, swapSyForExactPtWithHotPotato, routerSwapExactYoForSy, routerSwapExactSyForYo } from '../../kamo_generated/kusdc_wrapper/wrapper/functions';
import { State } from "../../kamo_generated/kusdc_wrapper/wrapper/structs";
import { createFromRawValue } from "../../kamo_generated/legato-math/fixed-point64/functions";
import { faucet, firstPutUsdc, putUsdc } from "../../kamo_generated/kusdc/system/functions";
import { USDC } from "../../kamo_generated/_dependencies/source/0xa1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29/usdc/structs";
import { mint as mintKusdc } from "../../kamo_generated/kusdc/system/functions";

const KUSDC_SYSTEM = "0x336e27425bd6ce6b163b3904d33682d5c923fdcd2264cf91d80407dab9acc0fc";
const KUSDC_TREASURY_CAP = "0x8fb1cd112e1b93d8c99500e1d328feebdcfdb4592c3b2014d291911475c9a172";
const DEFAULT_STATE_ID = STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.KUSDC)!;

export class KUSDCTransaction extends KamoTransaction {
    async mint(params: MintParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        if (Date.now() > state.market.expiry) {
            throw new Error("Market expired");
        }
        if (!params.coin && !params.sy_amount_in) {
            throw new Error("Either coin or sy_amount_in must be provided");
        }
        const [pt, yield_object] = mint(tx, {
            state: DEFAULT_STATE_ID,
            kusdcCoinIn: params.coin || coinWithBalance({
                type: state.market.$typeArgs[1],
                balance: params.sy_amount_in ?? 0
            }),
            system: KUSDC_SYSTEM,
            clock: tx.object.clock()
        });
        tx.transferObjects([pt, yield_object], params.sender);
        return tx;
    }

    async redeemBeforeMaturity(params: RedeemBeforeMaturityParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        const pt = coinWithBalance({
            type: state.market.$typeArgs[0],
            balance: params.ptAmountBurned
        }); 
        const kamoClient = new KamoClient({
            client: suiClient
        });
        const yieldObjects = await kamoClient.getYieldObjects({
            stateId: DEFAULT_STATE_ID,
            owner: params.sender
        });
        for (let i = 1; i < yieldObjects.length; i++) {
            const currentYieldObject = yieldObjects[i];
            merge(tx,             
            {
                state: DEFAULT_STATE_ID,
                self: yieldObjects[0].id,
                yieldObject: currentYieldObject.id,
                system: KUSDC_SYSTEM,
            })
        }
        const splitedYieldObject = split(tx, 
        {
            state: DEFAULT_STATE_ID,
            yieldObject: yieldObjects[0].id,
            amount: params.ptAmountBurned
        });
        const sy = redeemBeforeMaturity(tx, {
            state: DEFAULT_STATE_ID,
            ptCoinIn: pt,
            yieldObject: splitedYieldObject,
            system: KUSDC_SYSTEM,
            clock: tx.object.clock()
        });
        tx.transferObjects([sy], params.sender);
        return tx;
    }

    async redeemAfterMaturity(params: RedeemBeforeMaturityParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        const pt = coinWithBalance({
            type: state.market.$typeArgs[0],
            balance: params.ptAmountBurned
        });
        const sy = redeemAfterMaturity(tx, {
            state: DEFAULT_STATE_ID,
            ptCoinIn: pt,
            system: KUSDC_SYSTEM,
            clock: tx.object.clock()
        });
        tx.transferObjects([sy], params.sender);
        return tx;
    }

    async addLiquidity(params: AddLiquidityParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        const ptCoin = coinWithBalance({
            type: state.market.$typeArgs[0],
            balance: params.amountPT
        });
        const syCoin = coinWithBalance({
            type: state.market.$typeArgs[1],
            balance: params.amountSY
        });
        const lp = addLiquidity(
            tx,
            {
                state: DEFAULT_STATE_ID,
                ptCoin,
                syCoin,
                system: KUSDC_SYSTEM,
                clock: tx.object.clock()
            }
        )
        tx.transferObjects([lp], params.sender);
        return tx;
    }

    async removeLiquidity(params: RemoveLiquidityParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        const lp = coinWithBalance({
            type: `${KAMO_PACKAGE}::amm::LP<${state.market.$typeArgs[0]}, ${state.market.$typeArgs[1]}>`,
            balance: params.amountLP
        });
        const [pt, sy] = removeLiquidity(
            tx,
            {
                state: DEFAULT_STATE_ID,
                lp,
            }
        )
        tx.transferObjects([pt, sy], params.sender);
        return tx;
    }

    async swapPtForSy(params: SwapPtForSyParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        const pt = coinWithBalance({
            type: state.market.$typeArgs[0],
            balance: params.ptAmount
        });
        const sy = swapExactPtForSy(tx, {
            state: DEFAULT_STATE_ID,
            ptCoin: pt,
            system: KUSDC_SYSTEM,
            clock: tx.object.clock()
        });
        tx.transferObjects([sy], params.sender);
        return tx;
    }

    async swapSyForPt(params: SwapSyForPtParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        const sy = coinWithBalance({
            type: state.market.$typeArgs[1],
            balance: params.syAmount
        });
        const {
            ptOut,
            syUsed
        } = await improvedBinarySearchPtAmount(DEFAULT_STATE_ID, params.syAmount, await this.getSyExchangeRate());
        const pt = routerSwapExactSyForPt(tx, {
            state: DEFAULT_STATE_ID,
            syInCoin: sy,
            system: KUSDC_SYSTEM,
            maxPtAmount: ptOut,
            clock: tx.object.clock()
        })
        tx.transferObjects([pt], params.sender);
        return tx;
    }

    async swapSyForExactPt(params: SwapSyForExactPtParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        const sy = coinWithBalance({
            type: state.market.$typeArgs[1],
            balance: params.syAmount
        });
        const pt = swapSyForExactPt(tx, {
            state: DEFAULT_STATE_ID,
            syCoin: sy,
            system: KUSDC_SYSTEM,
            ptAmount: params.ptAmount,
            clock: tx.object.clock()
        });
        tx.transferObjects([pt], params.sender);
        return tx;
    }

    async getSyExchangeRate(): Promise<FixedPoint64> {
        const tx = new Transaction();
        getKusdcToUsdcExchangeRate(tx, KUSDC_SYSTEM);
        const result = await suiClient.devInspectTransactionBlock({
            transactionBlock: tx,
            sender: "0xda64a21e23f5943e7774d47d1b15eb60e4a8dee1d55be0487dad2292e2b51eae"
        });
        const exchangeRate = result.results?.[0].returnValues?.[0]?.[0];
        const fixedPoint64 = MoveFixedPoint64.fromBcs(Uint8Array.from(exchangeRate ?? []));
        return new FixedPoint64(fixedPoint64.value);
    }

    async swapYoForSy(params: SwapYoForSyParams) {
        const kamoClient = new KamoClient({
            client: suiClient
        });
        const yieldObjects = await kamoClient.getYieldObjects({
            stateId: DEFAULT_STATE_ID,
            owner: params.sender
        });
        const tx = params.tx || new Transaction();
        const yo = mergeYieldObjects({
            sender: params.sender,
            desiredAmount: params.yoAmount,
            yieldObjects,
            splitFunc: (yieldObject, amount) => {
                return split(tx, {
                    state: DEFAULT_STATE_ID,
                    yieldObject: yieldObject.id,
                    amount  
                });
            },
            mergeFunc: (yieldObjectA, yieldObjectB) => {
                return merge(tx, {
                    state: DEFAULT_STATE_ID,
                    self: yieldObjectA instanceof YieldObject ? yieldObjectA.id : yieldObjectA,
                    yieldObject: yieldObjectB instanceof YieldObject ? yieldObjectB.id : yieldObjectB,
                    system: KUSDC_SYSTEM
                });
            }
        });
        const sy = routerSwapExactYoForSy(tx, {
            state: DEFAULT_STATE_ID,
            yo: yo instanceof YieldObject ? yo.id : yo,
            system: KUSDC_SYSTEM,
            clock: tx.object.clock()
        });
        tx.transferObjects([sy], params.sender);
        return tx;
    }

    async swapSyForYo(params: SwapSyForYoParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        const syExchangeRate = await this.getSyExchangeRate();
        let syBorrowAmount = await binarySearchSyAmountToYT(DEFAULT_STATE_ID, params.syAmount, syExchangeRate);
        const [syRemain, yo] = routerSwapExactSyForYo(tx, {
            state: DEFAULT_STATE_ID,
            exactSyInCoin: coinWithBalance({
                type: state.market.$typeArgs[1],
                balance: params.syAmount
            }),
            maxSyBorrow: syBorrowAmount,
            system: KUSDC_SYSTEM,
            clock: tx.object.clock()
        });
        tx.transferObjects([yo, syRemain], params.sender);
        return tx;
    }

    async newState(params: NewStateParams) {
        const tx = new Transaction();
        const objects = await suiClient.getOwnedObjects({
            owner: params.owner,
            options: {
                showType: true,
            },
            filter: {
                StructType: `0x2::coin::TreasuryCap<${KUSDC_WRAPPER_PACKAGE_ID}::PT::PT>`
            }
        });
        const treasuryCap = objects.data[0];
        if (!treasuryCap || !treasuryCap.data) {
            throw new Error(`TreasuryCap not found`);
        }
        createNewState(tx, {
            factory: FACTORY,
            treasury: treasuryCap.data.objectId,
            expiry: params.expiry,
            scalarRoot: createFromRawValue(tx, params.scalarRoot),
            initialAnchor: createFromRawValue(tx, params.initialAnchor),
            lnFeeRateRoot: createFromRawValue(tx, params.lnFeeRateRoot),
            clock: tx.object.clock()
        });
        await this.firstPutUsdc({
            amount: 100,
            tx
        });
        return tx;  
    }

    async firstPutUsdc(params: {
        amount: string | number;
        tx?: Transaction;
    }) {
        const tx = params.tx || new Transaction();
        const coin = coinWithBalance({
            type: USDC.$typeName,
            balance: BigInt(params.amount)
        });
        firstPutUsdc(tx, {
            system: KUSDC_SYSTEM,
            coin
        });
        return tx;
    }

    mint_kusdc(params: {
        amount: string | number;
        sender: string;
        tx?: Transaction;
    }) {
        const tx = params.tx || new Transaction();
        const kusdc = mintKusdc(tx, {
            system: KUSDC_SYSTEM,
            cap: KUSDC_TREASURY_CAP,
            coin: coinWithBalance({
                type: USDC.$typeName,
                balance: BigInt(params.amount)
            })
        });
        return {
            tx,
            coin: kusdc
        };
    }

    faucet_kusdc(params: {
        tx?: Transaction;
        sender: string;
    }) {
        const tx = params.tx || new Transaction();
        const coin = faucet(tx, {
            cap: KUSDC_TREASURY_CAP,
            amount: BigInt(1000 * 10 ** 6)
        });
        tx.transferObjects([coin], params.sender);
        return tx;
    }

    addRewardsKusdc(params: {
        tx?: Transaction,
        amountUsdcAdded: bigint
    }) {
        const tx = params.tx || new Transaction();
        const coin = coinWithBalance({
            type: USDC.$typeName,
            balance: params.amountUsdcAdded
        });
        putUsdc(tx, {
            system: KUSDC_SYSTEM,
            coin
        });
        return tx;
    }
}