import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface MintArgs { state: TransactionObjectInput; hasuiCoinIn: TransactionObjectInput; staking: TransactionObjectInput; clock: TransactionObjectInput }

export function mint( tx: Transaction, args: MintArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::mint`, arguments: [ obj(tx, args.state), obj(tx, args.hasuiCoinIn), obj(tx, args.staking), obj(tx, args.clock) ], }) }

export interface AddLiquidityArgs { state: TransactionObjectInput; ptCoin: TransactionObjectInput; syCoin: TransactionObjectInput; staking: TransactionObjectInput; clock: TransactionObjectInput }

export function addLiquidity( tx: Transaction, args: AddLiquidityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::add_liquidity`, arguments: [ obj(tx, args.state), obj(tx, args.ptCoin), obj(tx, args.syCoin), obj(tx, args.staking), obj(tx, args.clock) ], }) }

export interface CreateNewMarketArgs { expiry: bigint | TransactionArgument; scalarRoot: TransactionObjectInput; initialAnchor: TransactionObjectInput; lnFeeRateRoot: TransactionObjectInput; clock: TransactionObjectInput }

export function createNewMarket( tx: Transaction, args: CreateNewMarketArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::create_new_market`, arguments: [ pure(tx, args.expiry, `u64`), obj(tx, args.scalarRoot), obj(tx, args.initialAnchor), obj(tx, args.lnFeeRateRoot), obj(tx, args.clock) ], }) }

export function getExchangeRate( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::get_exchange_rate`, arguments: [ obj(tx, staking) ], }) }

export interface RemoveLiquidityArgs { state: TransactionObjectInput; lp: TransactionObjectInput }

export function removeLiquidity( tx: Transaction, args: RemoveLiquidityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::remove_liquidity`, arguments: [ obj(tx, args.state), obj(tx, args.lp) ], }) }

export interface SwapExactPtForSyArgs { state: TransactionObjectInput; ptCoin: TransactionObjectInput; staking: TransactionObjectInput; clock: TransactionObjectInput }

export function swapExactPtForSy( tx: Transaction, args: SwapExactPtForSyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::swap_exact_pt_for_sy`, arguments: [ obj(tx, args.state), obj(tx, args.ptCoin), obj(tx, args.staking), obj(tx, args.clock) ], }) }

export interface ClaimInterestArgs { state: TransactionObjectInput; yieldObject: TransactionObjectInput; clock: TransactionObjectInput }

export function claimInterest( tx: Transaction, args: ClaimInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::claim_interest`, arguments: [ obj(tx, args.state), obj(tx, args.yieldObject), obj(tx, args.clock) ], }) }

export interface EarnInterestArgs { state: TransactionObjectInput; yieldObject: TransactionObjectInput; staking: TransactionObjectInput; clock: TransactionObjectInput }

export function earnInterest( tx: Transaction, args: EarnInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::earn_interest`, arguments: [ obj(tx, args.state), obj(tx, args.yieldObject), obj(tx, args.staking), obj(tx, args.clock) ], }) }

export interface RedeemAfterMaturityArgs { state: TransactionObjectInput; ptCoinIn: TransactionObjectInput; staking: TransactionObjectInput; clock: TransactionObjectInput }

export function redeemAfterMaturity( tx: Transaction, args: RedeemAfterMaturityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::redeem_after_maturity`, arguments: [ obj(tx, args.state), obj(tx, args.ptCoinIn), obj(tx, args.staking), obj(tx, args.clock) ], }) }

export interface RedeemBeforeMaturityArgs { state: TransactionObjectInput; ptCoinIn: TransactionObjectInput; yieldObject: TransactionObjectInput; staking: TransactionObjectInput; clock: TransactionObjectInput }

export function redeemBeforeMaturity( tx: Transaction, args: RedeemBeforeMaturityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::redeem_before_maturity`, arguments: [ obj(tx, args.state), obj(tx, args.ptCoinIn), obj(tx, args.yieldObject), obj(tx, args.staking), obj(tx, args.clock) ], }) }
