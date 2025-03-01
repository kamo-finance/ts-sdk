import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface DoStakeArgs { operatorCap: TransactionObjectInput; staking: TransactionObjectInput; wrapper: TransactionObjectInput; validators: Array<string | TransactionArgument> | TransactionArgument }

export function doStake( tx: Transaction, args: DoStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::operate::do_stake`, arguments: [ obj(tx, args.operatorCap), obj(tx, args.staking), obj(tx, args.wrapper), pure(tx, args.validators, `vector<address>`) ], }) }

export interface UpdateTotalRewardsOnchainArgs { operatorCap: TransactionObjectInput; staking: TransactionObjectInput; wrapper: TransactionObjectInput }

export function updateTotalRewardsOnchain( tx: Transaction, args: UpdateTotalRewardsOnchainArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::operate::update_total_rewards_onchain`, arguments: [ obj(tx, args.operatorCap), obj(tx, args.staking), obj(tx, args.wrapper) ], }) }

export interface DoUnstakeOnchainArgs { operatorCap: TransactionObjectInput; staking: TransactionObjectInput; wrapper: TransactionObjectInput; validators: Array<string | TransactionArgument> | TransactionArgument }

export function doUnstakeOnchain( tx: Transaction, args: DoUnstakeOnchainArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::operate::do_unstake_onchain`, arguments: [ obj(tx, args.operatorCap), obj(tx, args.staking), obj(tx, args.wrapper), pure(tx, args.validators, `vector<address>`) ], }) }

export interface UnstakePoolsArgs { operatorCap: TransactionObjectInput; staking: TransactionObjectInput; wrapper: TransactionObjectInput; validators: Array<string | TransactionArgument> | TransactionArgument }

export function unstakePools( tx: Transaction, args: UnstakePoolsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::operate::unstake_pools`, arguments: [ obj(tx, args.operatorCap), obj(tx, args.staking), obj(tx, args.wrapper), pure(tx, args.validators, `vector<address>`) ], }) }
