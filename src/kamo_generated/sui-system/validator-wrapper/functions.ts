import {PUBLISHED_AT} from "..";
import {obj} from "../../_framework/util";
import {Transaction, TransactionObjectInput} from "@mysten/sui/transactions";

export function version( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_wrapper::version`, arguments: [ obj(tx, self) ], }) }

export function destroy( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_wrapper::destroy`, arguments: [ obj(tx, self) ], }) }

export function createV1( tx: Transaction, validator: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_wrapper::create_v1`, arguments: [ obj(tx, validator) ], }) }

export function loadValidatorMaybeUpgrade( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_wrapper::load_validator_maybe_upgrade`, arguments: [ obj(tx, self) ], }) }

export function upgradeToLatest( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_wrapper::upgrade_to_latest`, arguments: [ obj(tx, self) ], }) }
