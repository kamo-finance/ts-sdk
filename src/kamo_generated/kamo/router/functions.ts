import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface SwapExactPtForSyArgs { market: TransactionObjectInput; syExchangeRate: TransactionObjectInput; exactPtInCoin: TransactionObjectInput; clock: TransactionObjectInput }

export function swapExactPtForSy( tx: Transaction, typeArgs: [string, string], args: SwapExactPtForSyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap_exact_pt_for_sy`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.syExchangeRate), obj(tx, args.exactPtInCoin), obj(tx, args.clock) ], }) }

export interface BssyamounttoytArgs { market: TransactionObjectInput; syExchangeRate: TransactionObjectInput; syAmount: bigint | TransactionArgument; maxSyBorrow: bigint | TransactionArgument; clock: TransactionObjectInput }

export function bssyamounttoyt( tx: Transaction, typeArgs: [string, string], args: BssyamounttoytArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::bsSyAmountToYt`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.syExchangeRate), pure(tx, args.syAmount, `u64`), pure(tx, args.maxSyBorrow, `u64`), obj(tx, args.clock) ], }) }

export interface SwapExactSyForPtArgs { market: TransactionObjectInput; syExchangeRate: TransactionObjectInput; syInCoin: TransactionObjectInput; maxPtAmount: bigint | TransactionArgument; clock: TransactionObjectInput }

export function swapExactSyForPt( tx: Transaction, typeArgs: [string, string], args: SwapExactSyForPtArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap_exact_sy_for_pt`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.syExchangeRate), obj(tx, args.syInCoin), pure(tx, args.maxPtAmount, `u64`), obj(tx, args.clock) ], }) }

export interface SwapExactSyForYoArgs { registry: TransactionObjectInput; market: TransactionObjectInput; syExchangeRate: TransactionObjectInput; exactSyInCoin: TransactionObjectInput; maxSyBorrow: bigint | TransactionArgument; clock: TransactionObjectInput }

export function swapExactSyForYo( tx: Transaction, typeArgs: [string, string], args: SwapExactSyForYoArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap_exact_sy_for_yo`, typeArguments: typeArgs, arguments: [ obj(tx, args.registry), obj(tx, args.market), obj(tx, args.syExchangeRate), obj(tx, args.exactSyInCoin), pure(tx, args.maxSyBorrow, `u64`), obj(tx, args.clock) ], }) }

export interface SwapExactYoForSyArgs { registry: TransactionObjectInput; market: TransactionObjectInput; syExchangeRate: TransactionObjectInput; yo: TransactionObjectInput; clock: TransactionObjectInput }

export function swapExactYoForSy( tx: Transaction, typeArgs: [string, string], args: SwapExactYoForSyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap_exact_yo_for_sy`, typeArguments: typeArgs, arguments: [ obj(tx, args.registry), obj(tx, args.market), obj(tx, args.syExchangeRate), obj(tx, args.yo), obj(tx, args.clock) ], }) }
