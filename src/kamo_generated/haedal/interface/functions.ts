import {PUBLISHED_AT} from "..";
import {obj, pure, vector} from "../../_framework/util";
import {StakedSui} from "../../sui-system/staking-pool/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface ClaimArgs { staking: TransactionObjectInput; ticket: TransactionObjectInput }

export function claim( tx: Transaction, args: ClaimArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interface::claim`, arguments: [ obj(tx, args.staking), obj(tx, args.ticket) ], }) }

export interface ImportStakeSuiVecArgs { wrapper: TransactionObjectInput; staking: TransactionObjectInput; inputs: Array<TransactionObjectInput> | TransactionArgument; validator: string | TransactionArgument }

export function importStakeSuiVec( tx: Transaction, args: ImportStakeSuiVecArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interface::import_stake_sui_vec`, arguments: [ obj(tx, args.wrapper), obj(tx, args.staking), vector(tx, `${StakedSui.$typeName}`, args.inputs), pure(tx, args.validator, `address`) ], }) }

export interface RequestUnstakeDelayArgs { staking: TransactionObjectInput; clock: TransactionObjectInput; input: TransactionObjectInput }

export function requestUnstakeDelay( tx: Transaction, args: RequestUnstakeDelayArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interface::request_unstake_delay`, arguments: [ obj(tx, args.staking), obj(tx, args.clock), obj(tx, args.input) ], }) }

export interface RequestUnstakeInstantArgs { staking: TransactionObjectInput; input: TransactionObjectInput }

export function requestUnstakeInstant( tx: Transaction, args: RequestUnstakeInstantArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interface::request_unstake_instant`, arguments: [ obj(tx, args.staking), obj(tx, args.input) ], }) }

export interface RequestStakeArgs { wrapper: TransactionObjectInput; staking: TransactionObjectInput; input: TransactionObjectInput; validator: string | TransactionArgument }

export function requestStake( tx: Transaction, args: RequestStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interface::request_stake`, arguments: [ obj(tx, args.wrapper), obj(tx, args.staking), obj(tx, args.input), pure(tx, args.validator, `address`) ], }) }
