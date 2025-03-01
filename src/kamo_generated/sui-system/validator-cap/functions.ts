import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function newFromUnverified( tx: Transaction, cap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_cap::new_from_unverified`, arguments: [ obj(tx, cap) ], }) }

export function newUnverifiedValidatorOperationCapAndTransfer( tx: Transaction, validatorAddress: string | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_cap::new_unverified_validator_operation_cap_and_transfer`, arguments: [ pure(tx, validatorAddress, `address`) ], }) }

export function unverifiedOperationCapAddress( tx: Transaction, cap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_cap::unverified_operation_cap_address`, arguments: [ obj(tx, cap) ], }) }

export function verifiedOperationCapAddress( tx: Transaction, cap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_cap::verified_operation_cap_address`, arguments: [ obj(tx, cap) ], }) }
