import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface BorrowArgs { t: TransactionObjectInput; k: bigint | TransactionArgument }

export function borrow( tx: Transaction, typeArg: string, args: BorrowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::table_queue::borrow`, typeArguments: [typeArg], arguments: [ obj(tx, args.t), pure(tx, args.k, `u64`) ], }) }

export interface BorrowMutArgs { t: TransactionObjectInput; k: bigint | TransactionArgument }

export function borrowMut( tx: Transaction, typeArg: string, args: BorrowMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::table_queue::borrow_mut`, typeArguments: [typeArg], arguments: [ obj(tx, args.t), pure(tx, args.k, `u64`) ], }) }

export function destroyEmpty( tx: Transaction, typeArg: string, t: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::table_queue::destroy_empty`, typeArguments: [typeArg], arguments: [ obj(tx, t) ], }) }

export function empty( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::table_queue::empty`, typeArguments: [typeArg], arguments: [ ], }) }

export function isEmpty( tx: Transaction, typeArg: string, t: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::table_queue::is_empty`, typeArguments: [typeArg], arguments: [ obj(tx, t) ], }) }

export function length( tx: Transaction, typeArg: string, t: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::table_queue::length`, typeArguments: [typeArg], arguments: [ obj(tx, t) ], }) }

export interface PushBackArgs { t: TransactionObjectInput; e: GenericArg }

export function pushBack( tx: Transaction, typeArg: string, args: PushBackArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::table_queue::push_back`, typeArguments: [typeArg], arguments: [ obj(tx, args.t), generic(tx, `${typeArg}`, args.e) ], }) }

export function popFront( tx: Transaction, typeArg: string, t: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::table_queue::pop_front`, typeArguments: [typeArg], arguments: [ obj(tx, t) ], }) }

export function head( tx: Transaction, typeArg: string, t: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::table_queue::head`, typeArguments: [typeArg], arguments: [ obj(tx, t) ], }) }

export function tail( tx: Transaction, typeArg: string, t: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::table_queue::tail`, typeArguments: [typeArg], arguments: [ obj(tx, t) ], }) }

export function borrowFront( tx: Transaction, typeArg: string, t: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::table_queue::borrow_front`, typeArguments: [typeArg], arguments: [ obj(tx, t) ], }) }

export function borrowFrontMut( tx: Transaction, typeArg: string, t: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::table_queue::borrow_front_mut`, typeArguments: [typeArg], arguments: [ obj(tx, t) ], }) }
