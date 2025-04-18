import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface SplitArgs { state: TransactionObjectInput; yieldObject: TransactionObjectInput; amount: bigint | TransactionArgument }

export function split( tx: Transaction, args: SplitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::split`, arguments: [ obj(tx, args.state), obj(tx, args.yieldObject), pure(tx, args.amount, `u64`) ], }) }

export interface MintArgs { state: TransactionObjectInput; hasuiCoinIn: TransactionObjectInput; staking: TransactionObjectInput; clock: TransactionObjectInput }

export function mint( tx: Transaction, args: MintArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::mint`, arguments: [ obj(tx, args.state), obj(tx, args.hasuiCoinIn), obj(tx, args.staking), obj(tx, args.clock) ], }) }

export function getExchangeRate( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::get_exchange_rate`, arguments: [ obj(tx, staking) ], }) }

export interface MergeArgs { state: TransactionObjectInput; self: TransactionObjectInput; yieldObject: TransactionObjectInput; staking: TransactionObjectInput }

export function merge( tx: Transaction, args: MergeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::merge`, arguments: [ obj(tx, args.state), obj(tx, args.self), obj(tx, args.yieldObject), obj(tx, args.staking) ], }) }

export interface AddLiquidityArgs { state: TransactionObjectInput; ptCoin: TransactionObjectInput; syCoin: TransactionObjectInput; staking: TransactionObjectInput; clock: TransactionObjectInput }

export function addLiquidity( tx: Transaction, args: AddLiquidityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::add_liquidity`, arguments: [ obj(tx, args.state), obj(tx, args.ptCoin), obj(tx, args.syCoin), obj(tx, args.staking), obj(tx, args.clock) ], }) }

export interface BorrowPtArgs { state: TransactionObjectInput; ptAmount: bigint | TransactionArgument; clock: TransactionObjectInput }

export function borrowPt( tx: Transaction, args: BorrowPtArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::borrow_pt`, arguments: [ obj(tx, args.state), pure(tx, args.ptAmount, `u64`), obj(tx, args.clock) ], }) }

export interface BorrowSyArgs { state: TransactionObjectInput; syAmount: bigint | TransactionArgument; clock: TransactionObjectInput }

export function borrowSy( tx: Transaction, args: BorrowSyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::borrow_sy`, arguments: [ obj(tx, args.state), pure(tx, args.syAmount, `u64`), obj(tx, args.clock) ], }) }

export function claimFee( tx: Transaction, state: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::claim_fee`, arguments: [ obj(tx, state) ], }) }

export interface RefundPtArgs { state: TransactionObjectInput; hotPotato: TransactionObjectInput; ptCoin: TransactionObjectInput }

export function refundPt( tx: Transaction, args: RefundPtArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::refund_pt`, arguments: [ obj(tx, args.state), obj(tx, args.hotPotato), obj(tx, args.ptCoin) ], }) }

export interface RefundSyArgs { state: TransactionObjectInput; hotPotato: TransactionObjectInput; syCoin: TransactionObjectInput }

export function refundSy( tx: Transaction, args: RefundSyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::refund_sy`, arguments: [ obj(tx, args.state), obj(tx, args.hotPotato), obj(tx, args.syCoin) ], }) }

export interface RemoveLiquidityArgs { state: TransactionObjectInput; lp: TransactionObjectInput }

export function removeLiquidity( tx: Transaction, args: RemoveLiquidityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::remove_liquidity`, arguments: [ obj(tx, args.state), obj(tx, args.lp) ], }) }

export interface SwapExactPtForSyArgs { state: TransactionObjectInput; ptCoin: TransactionObjectInput; staking: TransactionObjectInput; clock: TransactionObjectInput }

export function swapExactPtForSy( tx: Transaction, args: SwapExactPtForSyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::swap_exact_pt_for_sy`, arguments: [ obj(tx, args.state), obj(tx, args.ptCoin), obj(tx, args.staking), obj(tx, args.clock) ], }) }

export interface SwapExactPtForSyWithHotPotatoArgs { state: TransactionObjectInput; hotPotato: TransactionObjectInput; ptCoin: TransactionObjectInput; staking: TransactionObjectInput; clock: TransactionObjectInput }

export function swapExactPtForSyWithHotPotato( tx: Transaction, args: SwapExactPtForSyWithHotPotatoArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::swap_exact_pt_for_sy_with_hot_potato`, arguments: [ obj(tx, args.state), obj(tx, args.hotPotato), obj(tx, args.ptCoin), obj(tx, args.staking), obj(tx, args.clock) ], }) }

export interface SwapSyForExactPtArgs { state: TransactionObjectInput; syCoin: TransactionObjectInput; staking: TransactionObjectInput; ptAmount: bigint | TransactionArgument; clock: TransactionObjectInput }

export function swapSyForExactPt( tx: Transaction, args: SwapSyForExactPtArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::swap_sy_for_exact_pt`, arguments: [ obj(tx, args.state), obj(tx, args.syCoin), obj(tx, args.staking), pure(tx, args.ptAmount, `u64`), obj(tx, args.clock) ], }) }

export interface SwapSyForExactPtWithHotPotatoArgs { state: TransactionObjectInput; hotPotato: TransactionObjectInput; syCoin: TransactionObjectInput; staking: TransactionObjectInput; ptAmount: bigint | TransactionArgument; clock: TransactionObjectInput }

export function swapSyForExactPtWithHotPotato( tx: Transaction, args: SwapSyForExactPtWithHotPotatoArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::swap_sy_for_exact_pt_with_hot_potato`, arguments: [ obj(tx, args.state), obj(tx, args.hotPotato), obj(tx, args.syCoin), obj(tx, args.staking), pure(tx, args.ptAmount, `u64`), obj(tx, args.clock) ], }) }

export interface ClaimInterestArgs { state: TransactionObjectInput; yieldObject: TransactionObjectInput; clock: TransactionObjectInput }

export function claimInterest( tx: Transaction, args: ClaimInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::claim_interest`, arguments: [ obj(tx, args.state), obj(tx, args.yieldObject), obj(tx, args.clock) ], }) }

export interface EarnInterestArgs { state: TransactionObjectInput; yieldObject: TransactionObjectInput; staking: TransactionObjectInput; clock: TransactionObjectInput }

export function earnInterest( tx: Transaction, args: EarnInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::earn_interest`, arguments: [ obj(tx, args.state), obj(tx, args.yieldObject), obj(tx, args.staking), obj(tx, args.clock) ], }) }

export interface RedeemAfterMaturityArgs { state: TransactionObjectInput; ptCoinIn: TransactionObjectInput; staking: TransactionObjectInput; clock: TransactionObjectInput }

export function redeemAfterMaturity( tx: Transaction, args: RedeemAfterMaturityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::redeem_after_maturity`, arguments: [ obj(tx, args.state), obj(tx, args.ptCoinIn), obj(tx, args.staking), obj(tx, args.clock) ], }) }

export interface RedeemBeforeMaturityArgs { state: TransactionObjectInput; ptCoinIn: TransactionObjectInput; yieldObject: TransactionObjectInput; staking: TransactionObjectInput; clock: TransactionObjectInput }

export function redeemBeforeMaturity( tx: Transaction, args: RedeemBeforeMaturityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::redeem_before_maturity`, arguments: [ obj(tx, args.state), obj(tx, args.ptCoinIn), obj(tx, args.yieldObject), obj(tx, args.staking), obj(tx, args.clock) ], }) }

export interface CreateNewStateArgs { factory: TransactionObjectInput; treasury: TransactionObjectInput; expiry: bigint | TransactionArgument; scalarRoot: TransactionObjectInput; initialAnchor: TransactionObjectInput; lnFeeRateRoot: TransactionObjectInput; clock: TransactionObjectInput }

export function createNewState( tx: Transaction, args: CreateNewStateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::wrapper::create_new_state`, arguments: [ obj(tx, args.factory), obj(tx, args.treasury), pure(tx, args.expiry, `u64`), obj(tx, args.scalarRoot), obj(tx, args.initialAnchor), obj(tx, args.lnFeeRateRoot), obj(tx, args.clock) ], }) }
