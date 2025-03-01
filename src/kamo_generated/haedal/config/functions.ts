import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewArgs { depositFee: bigint | TransactionArgument; rewardFee: bigint | TransactionArgument; validatorRewardFee: bigint | TransactionArgument; serviceFee: bigint | TransactionArgument; withdrawTimeLimit: bigint | TransactionArgument; validatorCount: bigint | TransactionArgument }

export function new_( tx: Transaction, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::new`, arguments: [ pure(tx, args.depositFee, `u64`), pure(tx, args.rewardFee, `u64`), pure(tx, args.validatorRewardFee, `u64`), pure(tx, args.serviceFee, `u64`), pure(tx, args.withdrawTimeLimit, `u64`), pure(tx, args.validatorCount, `u64`) ], }) }

export function getDepositFee( tx: Transaction, config: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::get_deposit_fee`, arguments: [ obj(tx, config) ], }) }

export function getRewardFee( tx: Transaction, config: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::get_reward_fee`, arguments: [ obj(tx, config) ], }) }

export function getServiceFee( tx: Transaction, config: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::get_service_fee`, arguments: [ obj(tx, config) ], }) }

export function getValidatorCount( tx: Transaction, config: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::get_validator_count`, arguments: [ obj(tx, config) ], }) }

export function getValidatorRewardFee( tx: Transaction, config: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::get_validator_reward_fee`, arguments: [ obj(tx, config) ], }) }

export function getWithdrawTimeLimit( tx: Transaction, config: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::get_withdraw_time_limit`, arguments: [ obj(tx, config) ], }) }

export interface NewEventArgs { depositFee: bigint | TransactionArgument; rewardFee: bigint | TransactionArgument; validatorRewardFee: bigint | TransactionArgument; serviceFee: bigint | TransactionArgument; withdrawTimeLimit: bigint | TransactionArgument; validatorCount: bigint | TransactionArgument }

export function newEvent( tx: Transaction, args: NewEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::new_event`, arguments: [ pure(tx, args.depositFee, `u64`), pure(tx, args.rewardFee, `u64`), pure(tx, args.validatorRewardFee, `u64`), pure(tx, args.serviceFee, `u64`), pure(tx, args.withdrawTimeLimit, `u64`), pure(tx, args.validatorCount, `u64`) ], }) }

export interface SetDepositFeeArgs { config: TransactionObjectInput; depositFee: bigint | TransactionArgument }

export function setDepositFee( tx: Transaction, args: SetDepositFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::set_deposit_fee`, arguments: [ obj(tx, args.config), pure(tx, args.depositFee, `u64`) ], }) }

export interface SetRewardFeeArgs { config: TransactionObjectInput; rewardFee: bigint | TransactionArgument }

export function setRewardFee( tx: Transaction, args: SetRewardFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::set_reward_fee`, arguments: [ obj(tx, args.config), pure(tx, args.rewardFee, `u64`) ], }) }

export interface SetServiceFeeArgs { config: TransactionObjectInput; serviceFee: bigint | TransactionArgument }

export function setServiceFee( tx: Transaction, args: SetServiceFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::set_service_fee`, arguments: [ obj(tx, args.config), pure(tx, args.serviceFee, `u64`) ], }) }

export interface SetValidatorCountArgs { config: TransactionObjectInput; validatorCount: bigint | TransactionArgument }

export function setValidatorCount( tx: Transaction, args: SetValidatorCountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::set_validator_count`, arguments: [ obj(tx, args.config), pure(tx, args.validatorCount, `u64`) ], }) }

export interface SetValidatorRewardFeeArgs { config: TransactionObjectInput; validatorRewardFee: bigint | TransactionArgument }

export function setValidatorRewardFee( tx: Transaction, args: SetValidatorRewardFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::set_validator_reward_fee`, arguments: [ obj(tx, args.config), pure(tx, args.validatorRewardFee, `u64`) ], }) }

export interface SetWithdrawTimeLimitArgs { config: TransactionObjectInput; withdrawTimeLimit: bigint | TransactionArgument }

export function setWithdrawTimeLimit( tx: Transaction, args: SetWithdrawTimeLimitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::set_withdraw_time_limit`, arguments: [ obj(tx, args.config), pure(tx, args.withdrawTimeLimit, `u64`) ], }) }
