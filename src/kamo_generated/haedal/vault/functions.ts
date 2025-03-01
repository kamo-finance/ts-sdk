import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function new_( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::new`, typeArguments: [typeArg], arguments: [ ], }) }

export function withdrawAll( tx: Transaction, typeArg: string, vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::withdraw_all`, typeArguments: [typeArg], arguments: [ obj(tx, vault) ], }) }

export interface WithdrawArgs { vault: TransactionObjectInput; amount: bigint | TransactionArgument }

export function withdraw( tx: Transaction, typeArg: string, args: WithdrawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::withdraw`, typeArguments: [typeArg], arguments: [ obj(tx, args.vault), pure(tx, args.amount, `u64`) ], }) }

export interface DepositArgs { vault: TransactionObjectInput; input: TransactionObjectInput }

export function deposit( tx: Transaction, typeArg: string, args: DepositArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::deposit`, typeArguments: [typeArg], arguments: [ obj(tx, args.vault), obj(tx, args.input) ], }) }

export function vaultAmount( tx: Transaction, typeArg: string, vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::vault_amount`, typeArguments: [typeArg], arguments: [ obj(tx, vault) ], }) }
