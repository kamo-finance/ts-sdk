import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function value( tx: Transaction, entry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::nitro_attestation::value`, arguments: [ obj(tx, entry) ], }) }

export function index( tx: Transaction, entry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::nitro_attestation::index`, arguments: [ obj(tx, entry) ], }) }

export function publicKey( tx: Transaction, attestation: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::nitro_attestation::public_key`, arguments: [ obj(tx, attestation) ], }) }

export function digest( tx: Transaction, attestation: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::nitro_attestation::digest`, arguments: [ obj(tx, attestation) ], }) }

export interface LoadNitroAttestationArgs { attestation: Array<number | TransactionArgument> | TransactionArgument; clock: TransactionObjectInput }

export function loadNitroAttestation( tx: Transaction, args: LoadNitroAttestationArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::nitro_attestation::load_nitro_attestation`, arguments: [ pure(tx, args.attestation, `vector<u8>`), obj(tx, args.clock) ], }) }

export interface LoadNitroAttestationInternalArgs { attestation: Array<number | TransactionArgument> | TransactionArgument; currentTimestamp: bigint | TransactionArgument }

export function loadNitroAttestationInternal( tx: Transaction, args: LoadNitroAttestationInternalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::nitro_attestation::load_nitro_attestation_internal`, arguments: [ pure(tx, args.attestation, `vector<u8>`), pure(tx, args.currentTimestamp, `u64`) ], }) }

export function moduleId( tx: Transaction, attestation: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::nitro_attestation::module_id`, arguments: [ obj(tx, attestation) ], }) }

export function nonce( tx: Transaction, attestation: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::nitro_attestation::nonce`, arguments: [ obj(tx, attestation) ], }) }

export function pcrs( tx: Transaction, attestation: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::nitro_attestation::pcrs`, arguments: [ obj(tx, attestation) ], }) }

export function timestamp( tx: Transaction, attestation: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::nitro_attestation::timestamp`, arguments: [ obj(tx, attestation) ], }) }

export function userData( tx: Transaction, attestation: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::nitro_attestation::user_data`, arguments: [ obj(tx, attestation) ], }) }
