import {PUBLISHED_AT} from "..";
import {obj} from "../../_framework/util";
import {Transaction, TransactionObjectInput} from "@mysten/sui/transactions";

export interface MintArgs { state: TransactionObjectInput; market: TransactionObjectInput; syCoinIn: TransactionObjectInput; exchangeRate: TransactionObjectInput; clock: TransactionObjectInput }

export function mint( tx: Transaction, typeArgs: [string, string], args: MintArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manager::mint`, typeArguments: typeArgs, arguments: [ obj(tx, args.state), obj(tx, args.market), obj(tx, args.syCoinIn), obj(tx, args.exchangeRate), obj(tx, args.clock) ], }) }

export interface ClaimInterestArgs { state: TransactionObjectInput; market: TransactionObjectInput; yieldObject: TransactionObjectInput; clock: TransactionObjectInput }

export function claimInterest( tx: Transaction, typeArgs: [string, string], args: ClaimInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manager::claim_interest`, typeArguments: typeArgs, arguments: [ obj(tx, args.state), obj(tx, args.market), obj(tx, args.yieldObject), obj(tx, args.clock) ], }) }

export interface EarnInterestArgs { market: TransactionObjectInput; yieldObject: TransactionObjectInput; exchangeRate: TransactionObjectInput; clock: TransactionObjectInput }

export function earnInterest( tx: Transaction, typeArgs: [string, string], args: EarnInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manager::earn_interest`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.yieldObject), obj(tx, args.exchangeRate), obj(tx, args.clock) ], }) }

export function newState( tx: Transaction, typeArgs: [string, string], treasury: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manager::new_state`, typeArguments: typeArgs, arguments: [ obj(tx, treasury) ], }) }

export interface RedeemAfterMaturityArgs { state: TransactionObjectInput; market: TransactionObjectInput; ptCoinIn: TransactionObjectInput; exchangeRate: TransactionObjectInput; clock: TransactionObjectInput }

export function redeemAfterMaturity( tx: Transaction, typeArgs: [string, string], args: RedeemAfterMaturityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manager::redeem_after_maturity`, typeArguments: typeArgs, arguments: [ obj(tx, args.state), obj(tx, args.market), obj(tx, args.ptCoinIn), obj(tx, args.exchangeRate), obj(tx, args.clock) ], }) }

export interface RedeemBeforeMaturityArgs { state: TransactionObjectInput; market: TransactionObjectInput; ptCoinIn: TransactionObjectInput; yieldObject: TransactionObjectInput; exchangeRate: TransactionObjectInput; clock: TransactionObjectInput }

export function redeemBeforeMaturity( tx: Transaction, typeArgs: [string, string], args: RedeemBeforeMaturityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manager::redeem_before_maturity`, typeArguments: typeArgs, arguments: [ obj(tx, args.state), obj(tx, args.market), obj(tx, args.ptCoinIn), obj(tx, args.yieldObject), obj(tx, args.exchangeRate), obj(tx, args.clock) ], }) }
