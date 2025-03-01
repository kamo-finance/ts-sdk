import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::init`, arguments: [ ], }) }

export interface SetDepositFeeArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput; depositFee: bigint | TransactionArgument }

export function setDepositFee( tx: Transaction, args: SetDepositFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::set_deposit_fee`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking), pure(tx, args.depositFee, `u64`) ], }) }

export interface SetRewardFeeArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput; rewardFee: bigint | TransactionArgument }

export function setRewardFee( tx: Transaction, args: SetRewardFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::set_reward_fee`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking), pure(tx, args.rewardFee, `u64`) ], }) }

export interface SetServiceFeeArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput; serviceFee: bigint | TransactionArgument }

export function setServiceFee( tx: Transaction, args: SetServiceFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::set_service_fee`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking), pure(tx, args.serviceFee, `u64`) ], }) }

export interface SetValidatorCountArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput; validatorCount: bigint | TransactionArgument }

export function setValidatorCount( tx: Transaction, args: SetValidatorCountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::set_validator_count`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking), pure(tx, args.validatorCount, `u64`) ], }) }

export interface SetValidatorRewardFeeArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput; validatorRewardFee: bigint | TransactionArgument }

export function setValidatorRewardFee( tx: Transaction, args: SetValidatorRewardFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::set_validator_reward_fee`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking), pure(tx, args.validatorRewardFee, `u64`) ], }) }

export interface SetWithdrawTimeLimitArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput; withdrawTimeLimit: bigint | TransactionArgument }

export function setWithdrawTimeLimit( tx: Transaction, args: SetWithdrawTimeLimitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::set_withdraw_time_limit`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking), pure(tx, args.withdrawTimeLimit, `u64`) ], }) }

export interface CollectRewardsFeeArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput; account: string | TransactionArgument }

export function collectRewardsFee( tx: Transaction, args: CollectRewardsFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::collect_rewards_fee`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking), pure(tx, args.account, `address`) ], }) }

export interface CollectServiceFeeArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput; account: string | TransactionArgument }

export function collectServiceFee( tx: Transaction, args: CollectServiceFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::collect_service_fee`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking), pure(tx, args.account, `address`) ], }) }

export interface DoStakeArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput; wrapper: TransactionObjectInput; validators: Array<string | TransactionArgument> | TransactionArgument }

export function doStake( tx: Transaction, args: DoStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::do_stake`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking), obj(tx, args.wrapper), pure(tx, args.validators, `vector<address>`) ], }) }

export interface InitializeArgs { cap: TransactionObjectInput; treasuryCap: TransactionObjectInput }

export function initialize( tx: Transaction, args: InitializeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::initialize`, arguments: [ obj(tx, args.cap), obj(tx, args.treasuryCap) ], }) }

export interface MigrateArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput }

export function migrate( tx: Transaction, args: MigrateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::migrate`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking) ], }) }

export interface ToggleStakeArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput; status: boolean | TransactionArgument }

export function toggleStake( tx: Transaction, args: ToggleStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::toggle_stake`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking), pure(tx, args.status, `bool`) ], }) }

export interface ToggleUnstakeArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput; status: boolean | TransactionArgument }

export function toggleUnstake( tx: Transaction, args: ToggleUnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::toggle_unstake`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking), pure(tx, args.status, `bool`) ], }) }

export interface UpdateTotalRewardsOnchainArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput; wrapper: TransactionObjectInput }

export function updateTotalRewardsOnchain( tx: Transaction, args: UpdateTotalRewardsOnchainArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::update_total_rewards_onchain`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking), obj(tx, args.wrapper) ], }) }

export interface DoUnstakeOnchainArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput; wrapper: TransactionObjectInput; validators: Array<string | TransactionArgument> | TransactionArgument }

export function doUnstakeOnchain( tx: Transaction, args: DoUnstakeOnchainArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::do_unstake_onchain`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking), obj(tx, args.wrapper), pure(tx, args.validators, `vector<address>`) ], }) }

export interface UnstakePoolsArgs { adminCap: TransactionObjectInput; staking: TransactionObjectInput; wrapper: TransactionObjectInput; validators: Array<string | TransactionArgument> | TransactionArgument }

export function unstakePools( tx: Transaction, args: UnstakePoolsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::manage::unstake_pools`, arguments: [ obj(tx, args.adminCap), obj(tx, args.staking), obj(tx, args.wrapper), pure(tx, args.validators, `vector<address>`) ], }) }
