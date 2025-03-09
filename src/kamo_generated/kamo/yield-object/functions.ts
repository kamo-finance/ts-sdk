import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function delete_( tx: Transaction, typeArgs: [string, string], yieldObject: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_object::delete`, typeArguments: typeArgs, arguments: [ obj(tx, yieldObject) ], }) }

export interface SplitArgs { yieldObject: TransactionObjectInput; amount: bigint | TransactionArgument }

export function split( tx: Transaction, typeArgs: [string, string], args: SplitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_object::split`, typeArguments: typeArgs, arguments: [ obj(tx, args.yieldObject), pure(tx, args.amount, `u64`) ], }) }

export interface MintArgs { amount: bigint | TransactionArgument; exchangeRate: TransactionObjectInput }

export function mint( tx: Transaction, typeArgs: [string, string], args: MintArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_object::mint`, typeArguments: typeArgs, arguments: [ pure(tx, args.amount, `u64`), obj(tx, args.exchangeRate) ], }) }

export function claim( tx: Transaction, typeArgs: [string, string], yieldObject: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_object::claim`, typeArguments: typeArgs, arguments: [ obj(tx, yieldObject) ], }) }

export interface EarnArgs { yieldObject: TransactionObjectInput; exchangeRate: TransactionObjectInput }

export function earn( tx: Transaction, typeArgs: [string, string], args: EarnArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_object::earn`, typeArguments: typeArgs, arguments: [ obj(tx, args.yieldObject), obj(tx, args.exchangeRate) ], }) }

export function getAmount( tx: Transaction, typeArgs: [string, string], yieldObject: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_object::get_amount`, typeArguments: typeArgs, arguments: [ obj(tx, yieldObject) ], }) }

export function getExchangeRate( tx: Transaction, typeArgs: [string, string], yieldObject: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_object::get_exchange_rate`, typeArguments: typeArgs, arguments: [ obj(tx, yieldObject) ], }) }

export interface MergeArgs { self: TransactionObjectInput; yieldObject: TransactionObjectInput; exchangeRate: TransactionObjectInput }

export function merge( tx: Transaction, typeArgs: [string, string], args: MergeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_object::merge`, typeArguments: typeArgs, arguments: [ obj(tx, args.self), obj(tx, args.yieldObject), obj(tx, args.exchangeRate) ], }) }

export function syUnclaimedAmount( tx: Transaction, typeArgs: [string, string], yieldObject: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_object::sy_unclaimed_amount`, typeArguments: typeArgs, arguments: [ obj(tx, yieldObject) ], }) }
