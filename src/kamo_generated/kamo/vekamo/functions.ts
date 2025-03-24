import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface WithdrawArgs { escrow: TransactionObjectInput; clock: TransactionObjectInput }

export function withdraw( tx: Transaction, args: WithdrawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vekamo::withdraw`, arguments: [ obj(tx, args.escrow), obj(tx, args.clock) ], }) }

export interface CalculateInitialVotingPowerArgs { amount: bigint | TransactionArgument; lockDuration: bigint | TransactionArgument }

export function calculateInitialVotingPower( tx: Transaction, args: CalculateInitialVotingPowerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vekamo::calculate_initial_voting_power`, arguments: [ pure(tx, args.amount, `u64`), pure(tx, args.lockDuration, `u64`) ], }) }

export interface CalculateVotingPowerArgs { escrow: TransactionObjectInput; time: bigint | TransactionArgument }

export function calculateVotingPower( tx: Transaction, args: CalculateVotingPowerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vekamo::calculate_voting_power`, arguments: [ obj(tx, args.escrow), pure(tx, args.time, `u64`) ], }) }

export interface CreateLockArgs { amount: TransactionObjectInput; lockDuration: bigint | TransactionArgument; clock: TransactionObjectInput }

export function createLock( tx: Transaction, args: CreateLockArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vekamo::create_lock`, arguments: [ obj(tx, args.amount), pure(tx, args.lockDuration, `u64`), obj(tx, args.clock) ], }) }

export function getLockEnd( tx: Transaction, escrow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vekamo::get_lock_end`, arguments: [ obj(tx, escrow) ], }) }

export function getLockedAmount( tx: Transaction, escrow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vekamo::get_locked_amount`, arguments: [ obj(tx, escrow) ], }) }

export function getVotingPower( tx: Transaction, escrow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vekamo::get_voting_power`, arguments: [ obj(tx, escrow) ], }) }

export function maxLockTime( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vekamo::max_lock_time`, arguments: [ ], }) }
