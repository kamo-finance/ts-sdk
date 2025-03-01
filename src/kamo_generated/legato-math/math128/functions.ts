import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {Transaction, TransactionArgument} from "@mysten/sui/transactions";

export interface MaxArgs { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function max( tx: Transaction, args: MaxArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math128::max`, arguments: [ pure(tx, args.a, `u128`), pure(tx, args.b, `u128`) ], }) }

export interface MinArgs { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function min( tx: Transaction, args: MinArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math128::min`, arguments: [ pure(tx, args.a, `u128`), pure(tx, args.b, `u128`) ], }) }

export interface PowArgs { n: bigint | TransactionArgument; e: bigint | TransactionArgument }

export function pow( tx: Transaction, args: PowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math128::pow`, arguments: [ pure(tx, args.n, `u128`), pure(tx, args.e, `u128`) ], }) }

export function sqrt( tx: Transaction, x: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math128::sqrt`, arguments: [ pure(tx, x, `u128`) ], }) }

export interface AverageArgs { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function average( tx: Transaction, args: AverageArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math128::average`, arguments: [ pure(tx, args.a, `u128`), pure(tx, args.b, `u128`) ], }) }

export interface CeilDivArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function ceilDiv( tx: Transaction, args: CeilDivArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math128::ceil_div`, arguments: [ pure(tx, args.x, `u128`), pure(tx, args.y, `u128`) ], }) }

export interface ClampArgs { x: bigint | TransactionArgument; lower: bigint | TransactionArgument; upper: bigint | TransactionArgument }

export function clamp( tx: Transaction, args: ClampArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math128::clamp`, arguments: [ pure(tx, args.x, `u128`), pure(tx, args.lower, `u128`), pure(tx, args.upper, `u128`) ], }) }

export function floorLog2( tx: Transaction, x: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math128::floor_log2`, arguments: [ pure(tx, x, `u128`) ], }) }

export function log264( tx: Transaction, x: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math128::log2_64`, arguments: [ pure(tx, x, `u128`) ], }) }

export interface MulDivArgs { a: bigint | TransactionArgument; b: bigint | TransactionArgument; c: bigint | TransactionArgument }

export function mulDiv( tx: Transaction, args: MulDivArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math128::mul_div`, arguments: [ pure(tx, args.a, `u128`), pure(tx, args.b, `u128`), pure(tx, args.c, `u128`) ], }) }
