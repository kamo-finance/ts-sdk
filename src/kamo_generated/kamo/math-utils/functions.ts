import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface AddDivFixed64Args { a: TransactionObjectInput; b: TransactionObjectInput; c: TransactionObjectInput }

export function addDivFixed64( tx: Transaction, args: AddDivFixed64Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math_utils::add_div_fixed64`, arguments: [ obj(tx, args.a), obj(tx, args.b), obj(tx, args.c) ], }) }

export interface DivFixed64Args { a: TransactionObjectInput; b: TransactionObjectInput }

export function divFixed64( tx: Transaction, args: DivFixed64Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math_utils::div_fixed64`, arguments: [ obj(tx, args.a), obj(tx, args.b) ], }) }

export interface MuldivFixed64U64U64Args { a: TransactionObjectInput; b: bigint | TransactionArgument; c: bigint | TransactionArgument }

export function muldivFixed64U64U64( tx: Transaction, args: MuldivFixed64U64U64Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math_utils::muldiv_fixed64_u64_u64`, arguments: [ obj(tx, args.a), pure(tx, args.b, `u64`), pure(tx, args.c, `u64`) ], }) }

export interface SubDivFixed64Args { a: TransactionObjectInput; b: TransactionObjectInput; c: TransactionObjectInput }

export function subDivFixed64( tx: Transaction, args: SubDivFixed64Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math_utils::sub_div_fixed64`, arguments: [ obj(tx, args.a), obj(tx, args.b), obj(tx, args.c) ], }) }
