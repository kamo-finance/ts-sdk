import {PUBLISHED_AT} from "..";
import {obj, pure, vector} from "../../_framework/util";
import {Validator} from "../validator/structs";
import {VotingPowerInfoV2} from "./structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface InsertArgs { infoList: Array<TransactionObjectInput> | TransactionArgument; newInfo: TransactionObjectInput }

export function insert( tx: Transaction, args: InsertArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::voting_power::insert`, arguments: [ vector(tx, `${VotingPowerInfoV2.$typeName}`, args.infoList), obj(tx, args.newInfo) ], }) }

export function setVotingPower( tx: Transaction, validators: Array<TransactionObjectInput> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::voting_power::set_voting_power`, arguments: [ vector(tx, `${Validator.$typeName}`, validators) ], }) }

export function totalStake( tx: Transaction, validators: Array<TransactionObjectInput> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::voting_power::total_stake`, arguments: [ vector(tx, `${Validator.$typeName}`, validators) ], }) }

export interface AdjustVotingPowerArgs { infoList: Array<TransactionObjectInput> | TransactionArgument; threshold: bigint | TransactionArgument; remainingPower: bigint | TransactionArgument }

export function adjustVotingPower( tx: Transaction, args: AdjustVotingPowerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::voting_power::adjust_voting_power`, arguments: [ vector(tx, `${VotingPowerInfoV2.$typeName}`, args.infoList), pure(tx, args.threshold, `u64`), pure(tx, args.remainingPower, `u64`) ], }) }

export function checkInvariants( tx: Transaction, v: Array<TransactionObjectInput> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::voting_power::check_invariants`, arguments: [ vector(tx, `${Validator.$typeName}`, v) ], }) }

export interface InitVotingPowerInfoArgs { validators: Array<TransactionObjectInput> | TransactionArgument; threshold: bigint | TransactionArgument }

export function initVotingPowerInfo( tx: Transaction, args: InitVotingPowerInfoArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::voting_power::init_voting_power_info`, arguments: [ vector(tx, `${Validator.$typeName}`, args.validators), pure(tx, args.threshold, `u64`) ], }) }

export function quorumThreshold( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::voting_power::quorum_threshold`, arguments: [ ], }) }

export function totalVotingPower( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::voting_power::total_voting_power`, arguments: [ ], }) }

export interface UpdateVotingPowerArgs { validators: Array<TransactionObjectInput> | TransactionArgument; infoList: Array<TransactionObjectInput> | TransactionArgument }

export function updateVotingPower( tx: Transaction, args: UpdateVotingPowerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::voting_power::update_voting_power`, arguments: [ vector(tx, `${Validator.$typeName}`, args.validators), vector(tx, `${VotingPowerInfoV2.$typeName}`, args.infoList) ], }) }
