import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface PowRawArgs { x: TransactionObjectInput; n: bigint | TransactionArgument }

export function powRaw( tx: Transaction, args: PowRawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::legato_math::pow_raw`, arguments: [ obj(tx, args.x), pure(tx, args.n, `u64`) ], }) }

export interface AbsoluteArgs { a: TransactionObjectInput; b: TransactionObjectInput }

export function absolute( tx: Transaction, args: AbsoluteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::legato_math::absolute`, arguments: [ obj(tx, args.a), obj(tx, args.b) ], }) }

export function ln( tx: Transaction, input: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::legato_math::ln`, arguments: [ obj(tx, input) ], }) }

export interface NthRootArgs { x: TransactionObjectInput; n: bigint | TransactionArgument }

export function nthRoot( tx: Transaction, args: NthRootArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::legato_math::nth_root`, arguments: [ obj(tx, args.x), pure(tx, args.n, `u64`) ], }) }

export interface PowerArgs { n: TransactionObjectInput; e: TransactionObjectInput }

export function power( tx: Transaction, args: PowerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::legato_math::power`, arguments: [ obj(tx, args.n), obj(tx, args.e) ], }) }
