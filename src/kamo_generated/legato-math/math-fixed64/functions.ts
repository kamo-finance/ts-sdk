import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface PowArgs { x: TransactionObjectInput; n: bigint | TransactionArgument }

export function pow( tx: Transaction, args: PowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math_fixed64::pow`, arguments: [ obj(tx, args.x), pure(tx, args.n, `u64`) ], }) }

export function sqrt( tx: Transaction, x: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math_fixed64::sqrt`, arguments: [ obj(tx, x) ], }) }

export interface MulDivArgs { x: TransactionObjectInput; y: TransactionObjectInput; z: TransactionObjectInput }

export function mulDiv( tx: Transaction, args: MulDivArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math_fixed64::mul_div`, arguments: [ obj(tx, args.x), obj(tx, args.y), obj(tx, args.z) ], }) }

export function exp( tx: Transaction, x: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math_fixed64::exp`, arguments: [ obj(tx, x) ], }) }

export function expRaw( tx: Transaction, x: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math_fixed64::exp_raw`, arguments: [ pure(tx, x, `u256`) ], }) }

export function lnPlus32ln2( tx: Transaction, x: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math_fixed64::ln_plus_32ln2`, arguments: [ obj(tx, x) ], }) }

export function log2Plus64( tx: Transaction, x: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math_fixed64::log2_plus_64`, arguments: [ obj(tx, x) ], }) }

export interface PowRawArgs { x: bigint | TransactionArgument; n: bigint | TransactionArgument }

export function powRaw( tx: Transaction, args: PowRawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math_fixed64::pow_raw`, arguments: [ pure(tx, args.x, `u256`), pure(tx, args.n, `u128`) ], }) }
