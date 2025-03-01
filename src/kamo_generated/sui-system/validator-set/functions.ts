import {PUBLISHED_AT} from "..";
import {obj, pure, vector} from "../../_framework/util";
import {ID} from "../../sui/object/structs";
import {Validator} from "../validator/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function new_( tx: Transaction, initActiveValidators: Array<TransactionObjectInput> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::new`, arguments: [ vector(tx, `${Validator.$typeName}`, initActiveValidators) ], }) }

export interface ConvertToFungibleStakedSuiArgs { self: TransactionObjectInput; stakedSui: TransactionObjectInput }

export function convertToFungibleStakedSui( tx: Transaction, args: ConvertToFungibleStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::convert_to_fungible_staked_sui`, arguments: [ obj(tx, args.self), obj(tx, args.stakedSui) ], }) }

export function processPendingStakesAndWithdraws( tx: Transaction, validators: Array<TransactionObjectInput> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::process_pending_stakes_and_withdraws`, arguments: [ vector(tx, `${Validator.$typeName}`, validators) ], }) }

export interface RedeemFungibleStakedSuiArgs { self: TransactionObjectInput; fungibleStakedSui: TransactionObjectInput }

export function redeemFungibleStakedSui( tx: Transaction, args: RedeemFungibleStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::redeem_fungible_staked_sui`, arguments: [ obj(tx, args.self), obj(tx, args.fungibleStakedSui) ], }) }

export interface RequestAddStakeArgs { self: TransactionObjectInput; validatorAddress: string | TransactionArgument; stake: TransactionObjectInput }

export function requestAddStake( tx: Transaction, args: RequestAddStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::request_add_stake`, arguments: [ obj(tx, args.self), pure(tx, args.validatorAddress, `address`), obj(tx, args.stake) ], }) }

export interface RequestWithdrawStakeArgs { self: TransactionObjectInput; stakedSui: TransactionObjectInput }

export function requestWithdrawStake( tx: Transaction, args: RequestWithdrawStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::request_withdraw_stake`, arguments: [ obj(tx, args.self), obj(tx, args.stakedSui) ], }) }

export function adjustStakeAndGasPrice( tx: Transaction, validators: Array<TransactionObjectInput> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::adjust_stake_and_gas_price`, arguments: [ vector(tx, `${Validator.$typeName}`, validators) ], }) }

export function effectuateStagedMetadata( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::effectuate_staged_metadata`, arguments: [ obj(tx, self) ], }) }

export interface RequestSetCommissionRateArgs { self: TransactionObjectInput; newCommissionRate: bigint | TransactionArgument }

export function requestSetCommissionRate( tx: Transaction, args: RequestSetCommissionRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::request_set_commission_rate`, arguments: [ obj(tx, args.self), pure(tx, args.newCommissionRate, `u64`) ], }) }

export function totalStake( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::total_stake`, arguments: [ obj(tx, self) ], }) }

export function activeValidatorAddresses( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::active_validator_addresses`, arguments: [ obj(tx, self) ], }) }

export function activeValidators( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::active_validators`, arguments: [ obj(tx, self) ], }) }

export interface AdvanceEpochArgs { self: TransactionObjectInput; computationReward: TransactionObjectInput; storageFundReward: TransactionObjectInput; validatorReportRecords: TransactionObjectInput; rewardSlashingRate: bigint | TransactionArgument; lowStakeThreshold: bigint | TransactionArgument; veryLowStakeThreshold: bigint | TransactionArgument; lowStakeGracePeriod: bigint | TransactionArgument }

export function advanceEpoch( tx: Transaction, args: AdvanceEpochArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::advance_epoch`, arguments: [ obj(tx, args.self), obj(tx, args.computationReward), obj(tx, args.storageFundReward), obj(tx, args.validatorReportRecords), pure(tx, args.rewardSlashingRate, `u64`), pure(tx, args.lowStakeThreshold, `u64`), pure(tx, args.veryLowStakeThreshold, `u64`), pure(tx, args.lowStakeGracePeriod, `u64`) ], }) }

export interface AssertNoPendingOrActiveDuplicatesArgs { self: TransactionObjectInput; validator: TransactionObjectInput }

export function assertNoPendingOrActiveDuplicates( tx: Transaction, args: AssertNoPendingOrActiveDuplicatesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::assert_no_pending_or_active_duplicates`, arguments: [ obj(tx, args.self), obj(tx, args.validator) ], }) }

export function calculateTotalStakes( tx: Transaction, validators: Array<TransactionObjectInput> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::calculate_total_stakes`, arguments: [ vector(tx, `${Validator.$typeName}`, validators) ], }) }

export interface CleanReportRecordsLeavingValidatorArgs { validatorReportRecords: TransactionObjectInput; leavingValidatorAddr: string | TransactionArgument }

export function cleanReportRecordsLeavingValidator( tx: Transaction, args: CleanReportRecordsLeavingValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::clean_report_records_leaving_validator`, arguments: [ obj(tx, args.validatorReportRecords), pure(tx, args.leavingValidatorAddr, `address`) ], }) }

export interface ComputeAdjustedRewardDistributionArgs { validators: Array<TransactionObjectInput> | TransactionArgument; totalVotingPower: bigint | TransactionArgument; totalSlashedValidatorVotingPower: bigint | TransactionArgument; unadjustedStakingRewardAmounts: Array<bigint | TransactionArgument> | TransactionArgument; unadjustedStorageFundRewardAmounts: Array<bigint | TransactionArgument> | TransactionArgument; totalStakingRewardAdjustment: bigint | TransactionArgument; individualStakingRewardAdjustments: TransactionObjectInput; totalStorageFundRewardAdjustment: bigint | TransactionArgument; individualStorageFundRewardAdjustments: TransactionObjectInput }

export function computeAdjustedRewardDistribution( tx: Transaction, args: ComputeAdjustedRewardDistributionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::compute_adjusted_reward_distribution`, arguments: [ vector(tx, `${Validator.$typeName}`, args.validators), pure(tx, args.totalVotingPower, `u64`), pure(tx, args.totalSlashedValidatorVotingPower, `u64`), pure(tx, args.unadjustedStakingRewardAmounts, `vector<u64>`), pure(tx, args.unadjustedStorageFundRewardAmounts, `vector<u64>`), pure(tx, args.totalStakingRewardAdjustment, `u64`), obj(tx, args.individualStakingRewardAdjustments), pure(tx, args.totalStorageFundRewardAdjustment, `u64`), obj(tx, args.individualStorageFundRewardAdjustments) ], }) }

export interface ComputeRewardAdjustmentsArgs { slashedValidatorIndices: Array<bigint | TransactionArgument> | TransactionArgument; rewardSlashingRate: bigint | TransactionArgument; unadjustedStakingRewardAmounts: Array<bigint | TransactionArgument> | TransactionArgument; unadjustedStorageFundRewardAmounts: Array<bigint | TransactionArgument> | TransactionArgument }

export function computeRewardAdjustments( tx: Transaction, args: ComputeRewardAdjustmentsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::compute_reward_adjustments`, arguments: [ pure(tx, args.slashedValidatorIndices, `vector<u64>`), pure(tx, args.rewardSlashingRate, `u64`), pure(tx, args.unadjustedStakingRewardAmounts, `vector<u64>`), pure(tx, args.unadjustedStorageFundRewardAmounts, `vector<u64>`) ], }) }

export interface ComputeSlashedValidatorsArgs { self: TransactionObjectInput; validatorReportRecords: TransactionObjectInput }

export function computeSlashedValidators( tx: Transaction, args: ComputeSlashedValidatorsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::compute_slashed_validators`, arguments: [ obj(tx, args.self), obj(tx, args.validatorReportRecords) ], }) }

export interface ComputeUnadjustedRewardDistributionArgs { validators: Array<TransactionObjectInput> | TransactionArgument; totalVotingPower: bigint | TransactionArgument; totalStakingReward: bigint | TransactionArgument; totalStorageFundReward: bigint | TransactionArgument }

export function computeUnadjustedRewardDistribution( tx: Transaction, args: ComputeUnadjustedRewardDistributionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::compute_unadjusted_reward_distribution`, arguments: [ vector(tx, `${Validator.$typeName}`, args.validators), pure(tx, args.totalVotingPower, `u64`), pure(tx, args.totalStakingReward, `u64`), pure(tx, args.totalStorageFundReward, `u64`) ], }) }

export interface CountDuplicatesTablevecArgs { validators: TransactionObjectInput; validator: TransactionObjectInput }

export function countDuplicatesTablevec( tx: Transaction, args: CountDuplicatesTablevecArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::count_duplicates_tablevec`, arguments: [ obj(tx, args.validators), obj(tx, args.validator) ], }) }

export interface CountDuplicatesVecArgs { validators: Array<TransactionObjectInput> | TransactionArgument; validator: TransactionObjectInput }

export function countDuplicatesVec( tx: Transaction, args: CountDuplicatesVecArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::count_duplicates_vec`, arguments: [ vector(tx, `${Validator.$typeName}`, args.validators), obj(tx, args.validator) ], }) }

export function deriveReferenceGasPrice( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::derive_reference_gas_price`, arguments: [ obj(tx, self) ], }) }

export interface DistributeRewardArgs { validators: Array<TransactionObjectInput> | TransactionArgument; adjustedStakingRewardAmounts: Array<bigint | TransactionArgument> | TransactionArgument; adjustedStorageFundRewardAmounts: Array<bigint | TransactionArgument> | TransactionArgument; stakingRewards: TransactionObjectInput; storageFundReward: TransactionObjectInput }

export function distributeReward( tx: Transaction, args: DistributeRewardArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::distribute_reward`, arguments: [ vector(tx, `${Validator.$typeName}`, args.validators), pure(tx, args.adjustedStakingRewardAmounts, `vector<u64>`), pure(tx, args.adjustedStorageFundRewardAmounts, `vector<u64>`), obj(tx, args.stakingRewards), obj(tx, args.storageFundReward) ], }) }

export interface EmitValidatorEpochEventsArgs { newEpoch: bigint | TransactionArgument; vs: Array<TransactionObjectInput> | TransactionArgument; poolStakingRewardAmounts: Array<bigint | TransactionArgument> | TransactionArgument; storageFundStakingRewardAmounts: Array<bigint | TransactionArgument> | TransactionArgument; reportRecords: TransactionObjectInput; slashedValidators: Array<string | TransactionArgument> | TransactionArgument }

export function emitValidatorEpochEvents( tx: Transaction, args: EmitValidatorEpochEventsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::emit_validator_epoch_events`, arguments: [ pure(tx, args.newEpoch, `u64`), vector(tx, `${Validator.$typeName}`, args.vs), pure(tx, args.poolStakingRewardAmounts, `vector<u64>`), pure(tx, args.storageFundStakingRewardAmounts, `vector<u64>`), obj(tx, args.reportRecords), pure(tx, args.slashedValidators, `vector<address>`) ], }) }

export interface FindValidatorArgs { validators: Array<TransactionObjectInput> | TransactionArgument; validatorAddress: string | TransactionArgument }

export function findValidator( tx: Transaction, args: FindValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::find_validator`, arguments: [ vector(tx, `${Validator.$typeName}`, args.validators), pure(tx, args.validatorAddress, `address`) ], }) }

export interface FindValidatorFromTableVecArgs { validators: TransactionObjectInput; validatorAddress: string | TransactionArgument }

export function findValidatorFromTableVec( tx: Transaction, args: FindValidatorFromTableVecArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::find_validator_from_table_vec`, arguments: [ obj(tx, args.validators), pure(tx, args.validatorAddress, `address`) ], }) }

export interface GetActiveOrPendingOrCandidateValidatorMutArgs { self: TransactionObjectInput; validatorAddress: string | TransactionArgument; includeCandidate: boolean | TransactionArgument }

export function getActiveOrPendingOrCandidateValidatorMut( tx: Transaction, args: GetActiveOrPendingOrCandidateValidatorMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::get_active_or_pending_or_candidate_validator_mut`, arguments: [ obj(tx, args.self), pure(tx, args.validatorAddress, `address`), pure(tx, args.includeCandidate, `bool`) ], }) }

export interface GetActiveOrPendingOrCandidateValidatorRefArgs { self: TransactionObjectInput; validatorAddress: string | TransactionArgument; whichValidator: number | TransactionArgument }

export function getActiveOrPendingOrCandidateValidatorRef( tx: Transaction, args: GetActiveOrPendingOrCandidateValidatorRefArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::get_active_or_pending_or_candidate_validator_ref`, arguments: [ obj(tx, args.self), pure(tx, args.validatorAddress, `address`), pure(tx, args.whichValidator, `u8`) ], }) }

export interface GetActiveValidatorRefArgs { self: TransactionObjectInput; validatorAddress: string | TransactionArgument }

export function getActiveValidatorRef( tx: Transaction, args: GetActiveValidatorRefArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::get_active_validator_ref`, arguments: [ obj(tx, args.self), pure(tx, args.validatorAddress, `address`) ], }) }

export interface GetCandidateOrActiveValidatorMutArgs { self: TransactionObjectInput; validatorAddress: string | TransactionArgument }

export function getCandidateOrActiveValidatorMut( tx: Transaction, args: GetCandidateOrActiveValidatorMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::get_candidate_or_active_validator_mut`, arguments: [ obj(tx, args.self), pure(tx, args.validatorAddress, `address`) ], }) }

export interface GetPendingValidatorRefArgs { self: TransactionObjectInput; validatorAddress: string | TransactionArgument }

export function getPendingValidatorRef( tx: Transaction, args: GetPendingValidatorRefArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::get_pending_validator_ref`, arguments: [ obj(tx, args.self), pure(tx, args.validatorAddress, `address`) ], }) }

export interface GetValidatorIndicesArgs { validators: Array<TransactionObjectInput> | TransactionArgument; validatorAddresses: Array<string | TransactionArgument> | TransactionArgument }

export function getValidatorIndices( tx: Transaction, args: GetValidatorIndicesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::get_validator_indices`, arguments: [ vector(tx, `${Validator.$typeName}`, args.validators), pure(tx, args.validatorAddresses, `vector<address>`) ], }) }

export interface GetValidatorMutArgs { validators: Array<TransactionObjectInput> | TransactionArgument; validatorAddress: string | TransactionArgument }

export function getValidatorMut( tx: Transaction, args: GetValidatorMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::get_validator_mut`, arguments: [ vector(tx, `${Validator.$typeName}`, args.validators), pure(tx, args.validatorAddress, `address`) ], }) }

export function getValidatorMutWithCtx( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::get_validator_mut_with_ctx`, arguments: [ obj(tx, self) ], }) }

export function getValidatorMutWithCtxIncludingCandidates( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::get_validator_mut_with_ctx_including_candidates`, arguments: [ obj(tx, self) ], }) }

export interface GetValidatorMutWithVerifiedCapArgs { self: TransactionObjectInput; verifiedCap: TransactionObjectInput; includeCandidate: boolean | TransactionArgument }

export function getValidatorMutWithVerifiedCap( tx: Transaction, args: GetValidatorMutWithVerifiedCapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::get_validator_mut_with_verified_cap`, arguments: [ obj(tx, args.self), obj(tx, args.verifiedCap), pure(tx, args.includeCandidate, `bool`) ], }) }

export interface GetValidatorRefArgs { validators: Array<TransactionObjectInput> | TransactionArgument; validatorAddress: string | TransactionArgument }

export function getValidatorRef( tx: Transaction, args: GetValidatorRefArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::get_validator_ref`, arguments: [ vector(tx, `${Validator.$typeName}`, args.validators), pure(tx, args.validatorAddress, `address`) ], }) }

export interface IsActiveValidatorBySuiAddressArgs { self: TransactionObjectInput; validatorAddress: string | TransactionArgument }

export function isActiveValidatorBySuiAddress( tx: Transaction, args: IsActiveValidatorBySuiAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::is_active_validator_by_sui_address`, arguments: [ obj(tx, args.self), pure(tx, args.validatorAddress, `address`) ], }) }

export interface IsDuplicateValidatorArgs { validators: Array<TransactionObjectInput> | TransactionArgument; newValidator: TransactionObjectInput }

export function isDuplicateValidator( tx: Transaction, args: IsDuplicateValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::is_duplicate_validator`, arguments: [ vector(tx, `${Validator.$typeName}`, args.validators), obj(tx, args.newValidator) ], }) }

export interface IsDuplicateWithActiveValidatorArgs { self: TransactionObjectInput; newValidator: TransactionObjectInput }

export function isDuplicateWithActiveValidator( tx: Transaction, args: IsDuplicateWithActiveValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::is_duplicate_with_active_validator`, arguments: [ obj(tx, args.self), obj(tx, args.newValidator) ], }) }

export interface IsDuplicateWithPendingValidatorArgs { self: TransactionObjectInput; newValidator: TransactionObjectInput }

export function isDuplicateWithPendingValidator( tx: Transaction, args: IsDuplicateWithPendingValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::is_duplicate_with_pending_validator`, arguments: [ obj(tx, args.self), obj(tx, args.newValidator) ], }) }

export interface IsInactiveValidatorArgs { self: TransactionObjectInput; stakingPoolId: string | TransactionArgument }

export function isInactiveValidator( tx: Transaction, args: IsInactiveValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::is_inactive_validator`, arguments: [ obj(tx, args.self), pure(tx, args.stakingPoolId, `${ID.$typeName}`) ], }) }

export interface IsValidatorCandidateArgs { self: TransactionObjectInput; addr: string | TransactionArgument }

export function isValidatorCandidate( tx: Transaction, args: IsValidatorCandidateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::is_validator_candidate`, arguments: [ obj(tx, args.self), pure(tx, args.addr, `address`) ], }) }

export function nextEpochValidatorCount( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::next_epoch_validator_count`, arguments: [ obj(tx, self) ], }) }

export interface PoolExchangeRatesArgs { self: TransactionObjectInput; poolId: string | TransactionArgument }

export function poolExchangeRates( tx: Transaction, args: PoolExchangeRatesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::pool_exchange_rates`, arguments: [ obj(tx, args.self), pure(tx, args.poolId, `${ID.$typeName}`) ], }) }

export interface ProcessPendingRemovalsArgs { self: TransactionObjectInput; validatorReportRecords: TransactionObjectInput }

export function processPendingRemovals( tx: Transaction, args: ProcessPendingRemovalsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::process_pending_removals`, arguments: [ obj(tx, args.self), obj(tx, args.validatorReportRecords) ], }) }

export interface ProcessPendingValidatorsArgs { self: TransactionObjectInput; newEpoch: bigint | TransactionArgument }

export function processPendingValidators( tx: Transaction, args: ProcessPendingValidatorsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::process_pending_validators`, arguments: [ obj(tx, args.self), pure(tx, args.newEpoch, `u64`) ], }) }

export interface ProcessValidatorDepartureArgs { self: TransactionObjectInput; validator: TransactionObjectInput; validatorReportRecords: TransactionObjectInput; isVoluntary: boolean | TransactionArgument }

export function processValidatorDeparture( tx: Transaction, args: ProcessValidatorDepartureArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::process_validator_departure`, arguments: [ obj(tx, args.self), obj(tx, args.validator), obj(tx, args.validatorReportRecords), pure(tx, args.isVoluntary, `bool`) ], }) }

export interface RequestAddValidatorArgs { self: TransactionObjectInput; minJoiningStakeAmount: bigint | TransactionArgument }

export function requestAddValidator( tx: Transaction, args: RequestAddValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::request_add_validator`, arguments: [ obj(tx, args.self), pure(tx, args.minJoiningStakeAmount, `u64`) ], }) }

export interface RequestAddValidatorCandidateArgs { self: TransactionObjectInput; validator: TransactionObjectInput }

export function requestAddValidatorCandidate( tx: Transaction, args: RequestAddValidatorCandidateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::request_add_validator_candidate`, arguments: [ obj(tx, args.self), obj(tx, args.validator) ], }) }

export function requestRemoveValidator( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::request_remove_validator`, arguments: [ obj(tx, self) ], }) }

export function requestRemoveValidatorCandidate( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::request_remove_validator_candidate`, arguments: [ obj(tx, self) ], }) }

export function sortRemovalList( tx: Transaction, withdrawList: Array<bigint | TransactionArgument> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::sort_removal_list`, arguments: [ pure(tx, withdrawList, `vector<u64>`) ], }) }

export function stakingPoolMappings( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::staking_pool_mappings`, arguments: [ obj(tx, self) ], }) }

export interface SumVotingPowerByAddressesArgs { vs: Array<TransactionObjectInput> | TransactionArgument; addresses: Array<string | TransactionArgument> | TransactionArgument }

export function sumVotingPowerByAddresses( tx: Transaction, args: SumVotingPowerByAddressesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::sum_voting_power_by_addresses`, arguments: [ vector(tx, `${Validator.$typeName}`, args.vs), pure(tx, args.addresses, `vector<address>`) ], }) }

export interface UpdateAndProcessLowStakeDeparturesArgs { self: TransactionObjectInput; lowStakeThreshold: bigint | TransactionArgument; veryLowStakeThreshold: bigint | TransactionArgument; lowStakeGracePeriod: bigint | TransactionArgument; validatorReportRecords: TransactionObjectInput }

export function updateAndProcessLowStakeDepartures( tx: Transaction, args: UpdateAndProcessLowStakeDeparturesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::update_and_process_low_stake_departures`, arguments: [ obj(tx, args.self), pure(tx, args.lowStakeThreshold, `u64`), pure(tx, args.veryLowStakeThreshold, `u64`), pure(tx, args.lowStakeGracePeriod, `u64`), obj(tx, args.validatorReportRecords) ], }) }

export interface ValidatorAddressByPoolIdArgs { self: TransactionObjectInput; poolId: string | TransactionArgument }

export function validatorAddressByPoolId( tx: Transaction, args: ValidatorAddressByPoolIdArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::validator_address_by_pool_id`, arguments: [ obj(tx, args.self), pure(tx, args.poolId, `${ID.$typeName}`) ], }) }

export interface ValidatorStakeAmountArgs { self: TransactionObjectInput; validatorAddress: string | TransactionArgument }

export function validatorStakeAmount( tx: Transaction, args: ValidatorStakeAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::validator_stake_amount`, arguments: [ obj(tx, args.self), pure(tx, args.validatorAddress, `address`) ], }) }

export interface ValidatorStakingPoolIdArgs { self: TransactionObjectInput; validatorAddress: string | TransactionArgument }

export function validatorStakingPoolId( tx: Transaction, args: ValidatorStakingPoolIdArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::validator_staking_pool_id`, arguments: [ obj(tx, args.self), pure(tx, args.validatorAddress, `address`) ], }) }

export interface ValidatorTotalStakeAmountArgs { self: TransactionObjectInput; validatorAddress: string | TransactionArgument }

export function validatorTotalStakeAmount( tx: Transaction, args: ValidatorTotalStakeAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::validator_total_stake_amount`, arguments: [ obj(tx, args.self), pure(tx, args.validatorAddress, `address`) ], }) }

export interface ValidatorVotingPowerArgs { self: TransactionObjectInput; validatorAddress: string | TransactionArgument }

export function validatorVotingPower( tx: Transaction, args: ValidatorVotingPowerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::validator_voting_power`, arguments: [ obj(tx, args.self), pure(tx, args.validatorAddress, `address`) ], }) }

export interface VerifyCapArgs { self: TransactionObjectInput; cap: TransactionObjectInput; whichValidator: number | TransactionArgument }

export function verifyCap( tx: Transaction, args: VerifyCapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator_set::verify_cap`, arguments: [ obj(tx, args.self), obj(tx, args.cap), pure(tx, args.whichValidator, `u8`) ], }) }
