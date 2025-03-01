import {PUBLISHED_AT} from "..";
import {obj, pure, vector} from "../../_framework/util";
import {StakedSui} from "../../sui-system/staking-pool/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface ClaimArgs { staking: TransactionObjectInput; ticket: TransactionObjectInput }

export function claim( tx: Transaction, args: ClaimArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::claim`, arguments: [ obj(tx, args.staking), obj(tx, args.ticket) ], }) }

export interface ApproveClaimAndFeeArgs { staking: TransactionObjectInput; unstakedBal: TransactionObjectInput; epoch: bigint | TransactionArgument }

export function approveClaimAndFee( tx: Transaction, args: ApproveClaimAndFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::approve_claim_and_fee`, arguments: [ obj(tx, args.staking), obj(tx, args.unstakedBal), pure(tx, args.epoch, `u64`) ], }) }

export function assertVersion( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::assert_version`, arguments: [ obj(tx, staking) ], }) }

export interface CalculateStakedSuiRewardsArgs { wrapper: TransactionObjectInput; stakedSuiRef: TransactionObjectInput; currentEpoch: bigint | TransactionArgument }

export function calculateStakedSuiRewards( tx: Transaction, args: CalculateStakedSuiRewardsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::calculate_staked_sui_rewards`, arguments: [ obj(tx, args.wrapper), obj(tx, args.stakedSuiRef), pure(tx, args.currentEpoch, `u64`) ], }) }

export interface CalculateValidatorPoolRewardsIncreaseArgs { wrapper: TransactionObjectInput; pool: TransactionObjectInput; currentEpoch: bigint | TransactionArgument }

export function calculateValidatorPoolRewardsIncrease( tx: Transaction, args: CalculateValidatorPoolRewardsIncreaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::calculate_validator_pool_rewards_increase`, arguments: [ obj(tx, args.wrapper), obj(tx, args.pool), pure(tx, args.currentEpoch, `u64`) ], }) }

export interface ClaimCoinArgs { staking: TransactionObjectInput; ticket: TransactionObjectInput }

export function claimCoin( tx: Transaction, args: ClaimCoinArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::claim_coin`, arguments: [ obj(tx, args.staking), obj(tx, args.ticket) ], }) }

export interface ClaimEpochRecordArgs { staking: TransactionObjectInput; epoch: bigint | TransactionArgument; suiAmount: bigint | TransactionArgument }

export function claimEpochRecord( tx: Transaction, args: ClaimEpochRecordArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::claim_epoch_record`, arguments: [ obj(tx, args.staking), pure(tx, args.epoch, `u64`), pure(tx, args.suiAmount, `u64`) ], }) }

export interface CollectRewardsFeeArgs { staking: TransactionObjectInput; account: string | TransactionArgument }

export function collectRewardsFee( tx: Transaction, args: CollectRewardsFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::collect_rewards_fee`, arguments: [ obj(tx, args.staking), pure(tx, args.account, `address`) ], }) }

export interface CollectServiceFeeArgs { staking: TransactionObjectInput; account: string | TransactionArgument }

export function collectServiceFee( tx: Transaction, args: CollectServiceFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::collect_service_fee`, arguments: [ obj(tx, args.staking), pure(tx, args.account, `address`) ], }) }

export interface DoBeforeUnstakeArgs { staking: TransactionObjectInput; approve: boolean | TransactionArgument }

export function doBeforeUnstake( tx: Transaction, args: DoBeforeUnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::do_before_unstake`, arguments: [ obj(tx, args.staking), pure(tx, args.approve, `bool`) ], }) }

export interface DoStakeArgs { staking: TransactionObjectInput; wrapper: TransactionObjectInput; validators: Array<string | TransactionArgument> | TransactionArgument }

export function doStake( tx: Transaction, args: DoStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::do_stake`, arguments: [ obj(tx, args.staking), obj(tx, args.wrapper), pure(tx, args.validators, `vector<address>`) ], }) }

export interface DoUnstakeOnchainByValidatorArgs { staking: TransactionObjectInput; wrapper: TransactionObjectInput; validators: Array<string | TransactionArgument> | TransactionArgument }

export function doUnstakeOnchainByValidator( tx: Transaction, args: DoUnstakeOnchainByValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::do_unstake_onchain_by_validator`, arguments: [ obj(tx, args.staking), obj(tx, args.wrapper), pure(tx, args.validators, `vector<address>`) ], }) }

export interface DoValidatorUnstakeArgs { staking: TransactionObjectInput; wrapper: TransactionObjectInput; unstakedBal: TransactionObjectInput; validator: string | TransactionArgument; needAmount: bigint | TransactionArgument; currentEpoch: bigint | TransactionArgument }

export function doValidatorUnstake( tx: Transaction, args: DoValidatorUnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::do_validator_unstake`, arguments: [ obj(tx, args.staking), obj(tx, args.wrapper), obj(tx, args.unstakedBal), pure(tx, args.validator, `address`), pure(tx, args.needAmount, `u64`), pure(tx, args.currentEpoch, `u64`) ], }) }

export function getCachedValidatorNumber( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_cached_validator_number`, arguments: [ obj(tx, staking) ], }) }

export function getConfigMut( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_config_mut`, arguments: [ obj(tx, staking) ], }) }

export interface GetEpochClaimArgs { staking: TransactionObjectInput; epoch: bigint | TransactionArgument }

export function getEpochClaim( tx: Transaction, args: GetEpochClaimArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_epoch_claim`, arguments: [ obj(tx, args.staking), pure(tx, args.epoch, `u64`) ], }) }

export function getExchangeRate( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_exchange_rate`, arguments: [ obj(tx, staking) ], }) }

export function getProtocolSuiVaultAmount( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_protocol_sui_vault_amount`, arguments: [ obj(tx, staking) ], }) }

export function getServiceSuiVaultAmount( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_service_sui_vault_amount`, arguments: [ obj(tx, staking) ], }) }

export interface GetSplitAmountArgs { wrapper: TransactionObjectInput; stakedSuiRef: TransactionObjectInput; needAmount: bigint | TransactionArgument; currentEpoch: bigint | TransactionArgument }

export function getSplitAmount( tx: Transaction, args: GetSplitAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_split_amount`, arguments: [ obj(tx, args.wrapper), obj(tx, args.stakedSuiRef), pure(tx, args.needAmount, `u64`), pure(tx, args.currentEpoch, `u64`) ], }) }

export interface GetStakedValidatorArgs { staking: TransactionObjectInput; validator: string | TransactionArgument }

export function getStakedValidator( tx: Transaction, args: GetStakedValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_staked_validator`, arguments: [ obj(tx, args.staking), pure(tx, args.validator, `address`) ], }) }

export function getStakedValidators( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_staked_validators`, arguments: [ obj(tx, staking) ], }) }

export interface GetStsuiBySuiArgs { staking: TransactionObjectInput; suiAmount: bigint | TransactionArgument }

export function getStsuiBySui( tx: Transaction, args: GetStsuiBySuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_stsui_by_sui`, arguments: [ obj(tx, args.staking), pure(tx, args.suiAmount, `u64`) ], }) }

export function getStsuiSupply( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_stsui_supply`, arguments: [ obj(tx, staking) ], }) }

export interface GetSuiByStsuiArgs { staking: TransactionObjectInput; stAmount: bigint | TransactionArgument }

export function getSuiByStsui( tx: Transaction, args: GetSuiByStsuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_sui_by_stsui`, arguments: [ obj(tx, args.staking), pure(tx, args.stAmount, `u64`) ], }) }

export function getSuiVaultAmount( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_sui_vault_amount`, arguments: [ obj(tx, staking) ], }) }

export function getTotalProtocolFees( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_total_protocol_fees`, arguments: [ obj(tx, staking) ], }) }

export function getTotalRewards( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_total_rewards`, arguments: [ obj(tx, staking) ], }) }

export function getTotalStaked( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_total_staked`, arguments: [ obj(tx, staking) ], }) }

export function getTotalSui( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_total_sui`, arguments: [ obj(tx, staking) ], }) }

export function getTotalSuiCap( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_total_sui_cap`, arguments: [ obj(tx, staking) ], }) }

export function getTotalUnstaked( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_total_unstaked`, arguments: [ obj(tx, staking) ], }) }

export function getUnclaimedSuiAmount( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_unclaimed_sui_amount`, arguments: [ obj(tx, staking) ], }) }

export function getUncollectedProtocolFees( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_uncollected_protocol_fees`, arguments: [ obj(tx, staking) ], }) }

export function getUserSelectedStaking( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_user_selected_staking`, arguments: [ obj(tx, staking) ], }) }

export interface GetUserSelectedValidatorsArgs { staking: TransactionObjectInput; activeValidators: Array<string | TransactionArgument> | TransactionArgument }

export function getUserSelectedValidators( tx: Transaction, args: GetUserSelectedValidatorsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_user_selected_validators`, arguments: [ obj(tx, args.staking), pure(tx, args.activeValidators, `vector<address>`) ], }) }

export function getValidatorStakedInfo( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_validator_staked_info`, arguments: [ obj(tx, staking) ], }) }

export function getVersion( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::get_version`, arguments: [ obj(tx, staking) ], }) }

export interface ImportStakeSuiVecArgs { wrapper: TransactionObjectInput; staking: TransactionObjectInput; inputs: Array<TransactionObjectInput> | TransactionArgument; validator: string | TransactionArgument }

export function importStakeSuiVec( tx: Transaction, args: ImportStakeSuiVecArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::import_stake_sui_vec`, arguments: [ obj(tx, args.wrapper), obj(tx, args.staking), vector(tx, `${StakedSui.$typeName}`, args.inputs), pure(tx, args.validator, `address`) ], }) }

export function initialize( tx: Transaction, cap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::initialize`, arguments: [ obj(tx, cap) ], }) }

export interface IsActiveValidatorArgs { validator: string | TransactionArgument; activeValidators: Array<string | TransactionArgument> | TransactionArgument }

export function isActiveValidator( tx: Transaction, args: IsActiveValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::is_active_validator`, arguments: [ pure(tx, args.validator, `address`), pure(tx, args.activeValidators, `vector<address>`) ], }) }

export function migrate( tx: Transaction, staking: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::migrate`, arguments: [ obj(tx, staking) ], }) }

export interface RequestStakeCoinArgs { wrapper: TransactionObjectInput; staking: TransactionObjectInput; input: TransactionObjectInput; validator: string | TransactionArgument }

export function requestStakeCoin( tx: Transaction, args: RequestStakeCoinArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::request_stake_coin`, arguments: [ obj(tx, args.wrapper), obj(tx, args.staking), obj(tx, args.input), pure(tx, args.validator, `address`) ], }) }

export interface RequestUnstakeDelayArgs { staking: TransactionObjectInput; clock: TransactionObjectInput; input: TransactionObjectInput }

export function requestUnstakeDelay( tx: Transaction, args: RequestUnstakeDelayArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::request_unstake_delay`, arguments: [ obj(tx, args.staking), obj(tx, args.clock), obj(tx, args.input) ], }) }

export interface RequestUnstakeInstantArgs { staking: TransactionObjectInput; input: TransactionObjectInput }

export function requestUnstakeInstant( tx: Transaction, args: RequestUnstakeInstantArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::request_unstake_instant`, arguments: [ obj(tx, args.staking), obj(tx, args.input) ], }) }

export interface SaveUserSelectedStakingArgs { staking: TransactionObjectInput; input: TransactionObjectInput; validator: string | TransactionArgument }

export function saveUserSelectedStaking( tx: Transaction, args: SaveUserSelectedStakingArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::save_user_selected_staking`, arguments: [ obj(tx, args.staking), obj(tx, args.input), pure(tx, args.validator, `address`) ], }) }

export interface StakeToValidatorArgs { bal: TransactionObjectInput; staking: TransactionObjectInput; wrapper: TransactionObjectInput; validator: string | TransactionArgument }

export function stakeToValidator( tx: Transaction, args: StakeToValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::stake_to_validator`, arguments: [ obj(tx, args.bal), obj(tx, args.staking), obj(tx, args.wrapper), pure(tx, args.validator, `address`) ], }) }

export interface StakeUserSelectedValidatorsArgs { staking: TransactionObjectInput; wrapper: TransactionObjectInput; activeValidators: Array<string | TransactionArgument> | TransactionArgument }

export function stakeUserSelectedValidators( tx: Transaction, args: StakeUserSelectedValidatorsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::stake_user_selected_validators`, arguments: [ obj(tx, args.staking), obj(tx, args.wrapper), pure(tx, args.activeValidators, `vector<address>`) ], }) }

export function ticketClaimEpoch( tx: Transaction, ticket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::ticket_claim_epoch`, arguments: [ obj(tx, ticket) ], }) }

export function ticketClaimTimestampMs( tx: Transaction, ticket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::ticket_claim_timestamp_ms`, arguments: [ obj(tx, ticket) ], }) }

export function ticketStAmount( tx: Transaction, ticket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::ticket_st_amount`, arguments: [ obj(tx, ticket) ], }) }

export function ticketSuiAmount( tx: Transaction, ticket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::ticket_sui_amount`, arguments: [ obj(tx, ticket) ], }) }

export function ticketUnstakeTimestampMs( tx: Transaction, ticket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::ticket_unstake_timestamp_ms`, arguments: [ obj(tx, ticket) ], }) }

export interface ToggleStakeArgs { staking: TransactionObjectInput; status: boolean | TransactionArgument }

export function toggleStake( tx: Transaction, args: ToggleStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::toggle_stake`, arguments: [ obj(tx, args.staking), pure(tx, args.status, `bool`) ], }) }

export interface ToggleUnstakeArgs { staking: TransactionObjectInput; status: boolean | TransactionArgument }

export function toggleUnstake( tx: Transaction, args: ToggleUnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::toggle_unstake`, arguments: [ obj(tx, args.staking), pure(tx, args.status, `bool`) ], }) }

export interface UnstakeInactiveValidatorsArgs { staking: TransactionObjectInput; wrapper: TransactionObjectInput }

export function unstakeInactiveValidators( tx: Transaction, args: UnstakeInactiveValidatorsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::unstake_inactive_validators`, arguments: [ obj(tx, args.staking), obj(tx, args.wrapper) ], }) }

export interface UnstakeValidatorPoolsArgs { staking: TransactionObjectInput; wrapper: TransactionObjectInput; validators: Array<string | TransactionArgument> | TransactionArgument }

export function unstakeValidatorPools( tx: Transaction, args: UnstakeValidatorPoolsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::unstake_validator_pools`, arguments: [ obj(tx, args.staking), obj(tx, args.wrapper), pure(tx, args.validators, `vector<address>`) ], }) }

export interface UpdateTotalRewardsOnchainArgs { staking: TransactionObjectInput; wrapper: TransactionObjectInput }

export function updateTotalRewardsOnchain( tx: Transaction, args: UpdateTotalRewardsOnchainArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::update_total_rewards_onchain`, arguments: [ obj(tx, args.staking), obj(tx, args.wrapper) ], }) }

export interface WithdrawStakedSuiArgs { wrapper: TransactionObjectInput; stakedSui: TransactionObjectInput; unstakedBal: TransactionObjectInput }

export function withdrawStakedSui( tx: Transaction, args: WithdrawStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking::withdraw_staked_sui`, arguments: [ obj(tx, args.wrapper), obj(tx, args.stakedSui), obj(tx, args.unstakedBal) ], }) }
