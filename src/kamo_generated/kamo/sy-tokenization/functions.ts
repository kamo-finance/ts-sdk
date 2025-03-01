import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface SplitArgs { market: TransactionObjectInput; yieldObject: TransactionObjectInput; amount: bigint | TransactionArgument }

export function split( tx: Transaction, typeArgs: [string, string], args: SplitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sy_tokenization::split`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.yieldObject), pure(tx, args.amount, `u64`) ], }) }

export interface MintArgs { registry: TransactionObjectInput; market: TransactionObjectInput; syCoinIn: TransactionObjectInput; exchangeRate: TransactionObjectInput; clock: TransactionObjectInput }

export function mint( tx: Transaction, typeArgs: [string, string], args: MintArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sy_tokenization::mint`, typeArguments: typeArgs, arguments: [ obj(tx, args.registry), obj(tx, args.market), obj(tx, args.syCoinIn), obj(tx, args.exchangeRate), obj(tx, args.clock) ], }) }

export interface MergeArgs { market: TransactionObjectInput; self: TransactionObjectInput; yieldObject: TransactionObjectInput; exchangeRate: TransactionObjectInput }

export function merge( tx: Transaction, typeArgs: [string, string], args: MergeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sy_tokenization::merge`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.self), obj(tx, args.yieldObject), obj(tx, args.exchangeRate) ], }) }

export interface ClaimInterestArgs { registry: TransactionObjectInput; market: TransactionObjectInput; yieldObject: TransactionObjectInput; clock: TransactionObjectInput }

export function claimInterest( tx: Transaction, typeArgs: [string, string], args: ClaimInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sy_tokenization::claim_interest`, typeArguments: typeArgs, arguments: [ obj(tx, args.registry), obj(tx, args.market), obj(tx, args.yieldObject), obj(tx, args.clock) ], }) }

export interface CreateNewRegistryArgs { factory: TransactionObjectInput; treasury: TransactionObjectInput }

export function createNewRegistry( tx: Transaction, typeArgs: [string, string], args: CreateNewRegistryArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sy_tokenization::create_new_registry`, typeArguments: typeArgs, arguments: [ obj(tx, args.factory), obj(tx, args.treasury) ], }) }

export interface EarnInterestArgs { market: TransactionObjectInput; yieldObject: TransactionObjectInput; exchangeRate: TransactionObjectInput; clock: TransactionObjectInput }

export function earnInterest( tx: Transaction, typeArgs: [string, string], args: EarnInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sy_tokenization::earn_interest`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.yieldObject), obj(tx, args.exchangeRate), obj(tx, args.clock) ], }) }

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sy_tokenization::init`, arguments: [ ], }) }

export interface RedeemAfterMaturityArgs { registry: TransactionObjectInput; market: TransactionObjectInput; ptCoinIn: TransactionObjectInput; exchangeRate: TransactionObjectInput; clock: TransactionObjectInput }

export function redeemAfterMaturity( tx: Transaction, typeArgs: [string, string], args: RedeemAfterMaturityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sy_tokenization::redeem_after_maturity`, typeArguments: typeArgs, arguments: [ obj(tx, args.registry), obj(tx, args.market), obj(tx, args.ptCoinIn), obj(tx, args.exchangeRate), obj(tx, args.clock) ], }) }

export interface RedeemBeforeMaturityArgs { registry: TransactionObjectInput; market: TransactionObjectInput; ptCoinIn: TransactionObjectInput; yieldObject: TransactionObjectInput; exchangeRate: TransactionObjectInput; clock: TransactionObjectInput }

export function redeemBeforeMaturity( tx: Transaction, typeArgs: [string, string], args: RedeemBeforeMaturityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sy_tokenization::redeem_before_maturity`, typeArguments: typeArgs, arguments: [ obj(tx, args.registry), obj(tx, args.market), obj(tx, args.ptCoinIn), obj(tx, args.yieldObject), obj(tx, args.exchangeRate), obj(tx, args.clock) ], }) }
