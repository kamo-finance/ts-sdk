import {PUBLISHED_AT} from "..";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {obj, pure, vector} from "../../_framework/util";
import {Coin} from "../../sui/coin/structs";
import {ID} from "../../sui/object/structs";
import {SUI} from "../../sui/sui/structs";
import {Validator} from "../validator/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function epoch( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::epoch`, arguments: [ obj(tx, self) ], }) }

export interface CreateArgs { validators: Array<TransactionObjectInput> | TransactionArgument; initialStorageFund: TransactionObjectInput; protocolVersion: bigint | TransactionArgument; epochStartTimestampMs: bigint | TransactionArgument; parameters: TransactionObjectInput; stakeSubsidy: TransactionObjectInput }

export function create( tx: Transaction, args: CreateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::create`, arguments: [ vector(tx, `${Validator.$typeName}`, args.validators), obj(tx, args.initialStorageFund), pure(tx, args.protocolVersion, `u64`), pure(tx, args.epochStartTimestampMs, `u64`), obj(tx, args.parameters), obj(tx, args.stakeSubsidy) ], }) }

export interface ConvertToFungibleStakedSuiArgs { self: TransactionObjectInput; stakedSui: TransactionObjectInput }

export function convertToFungibleStakedSui( tx: Transaction, args: ConvertToFungibleStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::convert_to_fungible_staked_sui`, arguments: [ obj(tx, args.self), obj(tx, args.stakedSui) ], }) }

export interface RedeemFungibleStakedSuiArgs { self: TransactionObjectInput; fungibleStakedSui: TransactionObjectInput }

export function redeemFungibleStakedSui( tx: Transaction, args: RedeemFungibleStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::redeem_fungible_staked_sui`, arguments: [ obj(tx, args.self), obj(tx, args.fungibleStakedSui) ], }) }

export interface RequestAddStakeArgs { self: TransactionObjectInput; stake: TransactionObjectInput; validatorAddress: string | TransactionArgument }

export function requestAddStake( tx: Transaction, args: RequestAddStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::request_add_stake`, arguments: [ obj(tx, args.self), obj(tx, args.stake), pure(tx, args.validatorAddress, `address`) ], }) }

export interface RequestWithdrawStakeArgs { self: TransactionObjectInput; stakedSui: TransactionObjectInput }

export function requestWithdrawStake( tx: Transaction, args: RequestWithdrawStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::request_withdraw_stake`, arguments: [ obj(tx, args.self), obj(tx, args.stakedSui) ], }) }

export interface RequestSetCommissionRateArgs { self: TransactionObjectInput; newCommissionRate: bigint | TransactionArgument }

export function requestSetCommissionRate( tx: Transaction, args: RequestSetCommissionRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::request_set_commission_rate`, arguments: [ obj(tx, args.self), pure(tx, args.newCommissionRate, `u64`) ], }) }

export interface RequestSetGasPriceArgs { self: TransactionObjectInput; cap: TransactionObjectInput; newGasPrice: bigint | TransactionArgument }

export function requestSetGasPrice( tx: Transaction, args: RequestSetGasPriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::request_set_gas_price`, arguments: [ obj(tx, args.self), obj(tx, args.cap), pure(tx, args.newGasPrice, `u64`) ], }) }

export function activeValidatorAddresses( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::active_validator_addresses`, arguments: [ obj(tx, self) ], }) }

export interface AdvanceEpochArgs { self: TransactionObjectInput; newEpoch: bigint | TransactionArgument; nextProtocolVersion: bigint | TransactionArgument; storageReward: TransactionObjectInput; computationReward: TransactionObjectInput; storageRebateAmount: bigint | TransactionArgument; nonRefundableStorageFeeAmount: bigint | TransactionArgument; storageFundReinvestRate: bigint | TransactionArgument; rewardSlashingRate: bigint | TransactionArgument; epochStartTimestampMs: bigint | TransactionArgument }

export function advanceEpoch( tx: Transaction, args: AdvanceEpochArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::advance_epoch`, arguments: [ obj(tx, args.self), pure(tx, args.newEpoch, `u64`), pure(tx, args.nextProtocolVersion, `u64`), obj(tx, args.storageReward), obj(tx, args.computationReward), pure(tx, args.storageRebateAmount, `u64`), pure(tx, args.nonRefundableStorageFeeAmount, `u64`), pure(tx, args.storageFundReinvestRate, `u64`), pure(tx, args.rewardSlashingRate, `u64`), pure(tx, args.epochStartTimestampMs, `u64`) ], }) }

export interface PoolExchangeRatesArgs { self: TransactionObjectInput; poolId: string | TransactionArgument }

export function poolExchangeRates( tx: Transaction, args: PoolExchangeRatesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::pool_exchange_rates`, arguments: [ obj(tx, args.self), pure(tx, args.poolId, `${ID.$typeName}`) ], }) }

export function requestAddValidator( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::request_add_validator`, arguments: [ obj(tx, self) ], }) }

export interface RequestAddValidatorCandidateArgs { self: TransactionObjectInput; pubkeyBytes: Array<number | TransactionArgument> | TransactionArgument; networkPubkeyBytes: Array<number | TransactionArgument> | TransactionArgument; workerPubkeyBytes: Array<number | TransactionArgument> | TransactionArgument; proofOfPossession: Array<number | TransactionArgument> | TransactionArgument; name: Array<number | TransactionArgument> | TransactionArgument; description: Array<number | TransactionArgument> | TransactionArgument; imageUrl: Array<number | TransactionArgument> | TransactionArgument; projectUrl: Array<number | TransactionArgument> | TransactionArgument; netAddress: Array<number | TransactionArgument> | TransactionArgument; p2PAddress: Array<number | TransactionArgument> | TransactionArgument; primaryAddress: Array<number | TransactionArgument> | TransactionArgument; workerAddress: Array<number | TransactionArgument> | TransactionArgument; gasPrice: bigint | TransactionArgument; commissionRate: bigint | TransactionArgument }

export function requestAddValidatorCandidate( tx: Transaction, args: RequestAddValidatorCandidateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::request_add_validator_candidate`, arguments: [ obj(tx, args.self), pure(tx, args.pubkeyBytes, `vector<u8>`), pure(tx, args.networkPubkeyBytes, `vector<u8>`), pure(tx, args.workerPubkeyBytes, `vector<u8>`), pure(tx, args.proofOfPossession, `vector<u8>`), pure(tx, args.name, `vector<u8>`), pure(tx, args.description, `vector<u8>`), pure(tx, args.imageUrl, `vector<u8>`), pure(tx, args.projectUrl, `vector<u8>`), pure(tx, args.netAddress, `vector<u8>`), pure(tx, args.p2PAddress, `vector<u8>`), pure(tx, args.primaryAddress, `vector<u8>`), pure(tx, args.workerAddress, `vector<u8>`), pure(tx, args.gasPrice, `u64`), pure(tx, args.commissionRate, `u64`) ], }) }

export function requestRemoveValidator( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::request_remove_validator`, arguments: [ obj(tx, self) ], }) }

export function requestRemoveValidatorCandidate( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::request_remove_validator_candidate`, arguments: [ obj(tx, self) ], }) }

export interface ValidatorAddressByPoolIdArgs { self: TransactionObjectInput; poolId: string | TransactionArgument }

export function validatorAddressByPoolId( tx: Transaction, args: ValidatorAddressByPoolIdArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::validator_address_by_pool_id`, arguments: [ obj(tx, args.self), pure(tx, args.poolId, `${ID.$typeName}`) ], }) }

export interface ValidatorStakeAmountArgs { self: TransactionObjectInput; validatorAddr: string | TransactionArgument }

export function validatorStakeAmount( tx: Transaction, args: ValidatorStakeAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::validator_stake_amount`, arguments: [ obj(tx, args.self), pure(tx, args.validatorAddr, `address`) ], }) }

export interface ValidatorStakingPoolIdArgs { self: TransactionObjectInput; validatorAddr: string | TransactionArgument }

export function validatorStakingPoolId( tx: Transaction, args: ValidatorStakingPoolIdArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::validator_staking_pool_id`, arguments: [ obj(tx, args.self), pure(tx, args.validatorAddr, `address`) ], }) }

export function activeValidatorVotingPowers( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::active_validator_voting_powers`, arguments: [ obj(tx, self) ], }) }

export function epochStartTimestampMs( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::epoch_start_timestamp_ms`, arguments: [ obj(tx, self) ], }) }

export function protocolVersion( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::protocol_version`, arguments: [ obj(tx, self) ], }) }

export interface CreateSystemParametersArgs { epochDurationMs: bigint | TransactionArgument; stakeSubsidyStartEpoch: bigint | TransactionArgument; maxValidatorCount: bigint | TransactionArgument; minValidatorJoiningStake: bigint | TransactionArgument; validatorLowStakeThreshold: bigint | TransactionArgument; validatorVeryLowStakeThreshold: bigint | TransactionArgument; validatorLowStakeGracePeriod: bigint | TransactionArgument }

export function createSystemParameters( tx: Transaction, args: CreateSystemParametersArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::create_system_parameters`, arguments: [ pure(tx, args.epochDurationMs, `u64`), pure(tx, args.stakeSubsidyStartEpoch, `u64`), pure(tx, args.maxValidatorCount, `u64`), pure(tx, args.minValidatorJoiningStake, `u64`), pure(tx, args.validatorLowStakeThreshold, `u64`), pure(tx, args.validatorVeryLowStakeThreshold, `u64`), pure(tx, args.validatorLowStakeGracePeriod, `u64`) ], }) }

export interface ExtractCoinBalanceArgs { coins: Array<TransactionObjectInput> | TransactionArgument; amount: (bigint | TransactionArgument | TransactionArgument | null) }

export function extractCoinBalance( tx: Transaction, args: ExtractCoinBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::extract_coin_balance`, arguments: [ vector(tx, `${Coin.$typeName}<${SUI.$typeName}>`, args.coins), pure(tx, args.amount, `${Option.$typeName}<u64>`) ], }) }

export function genesisSystemStateVersion( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::genesis_system_state_version`, arguments: [ ], }) }

export interface GetReportersOfArgs { self: TransactionObjectInput; addr: string | TransactionArgument }

export function getReportersOf( tx: Transaction, args: GetReportersOfArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::get_reporters_of`, arguments: [ obj(tx, args.self), pure(tx, args.addr, `address`) ], }) }

export function getStorageFundObjectRebates( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::get_storage_fund_object_rebates`, arguments: [ obj(tx, self) ], }) }

export function getStorageFundTotalBalance( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::get_storage_fund_total_balance`, arguments: [ obj(tx, self) ], }) }

export interface ReportValidatorArgs { self: TransactionObjectInput; cap: TransactionObjectInput; reporteeAddr: string | TransactionArgument }

export function reportValidator( tx: Transaction, args: ReportValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::report_validator`, arguments: [ obj(tx, args.self), obj(tx, args.cap), pure(tx, args.reporteeAddr, `address`) ], }) }

export interface ReportValidatorImplArgs { verifiedCap: TransactionObjectInput; reporteeAddr: string | TransactionArgument; validatorReportRecords: TransactionObjectInput }

export function reportValidatorImpl( tx: Transaction, args: ReportValidatorImplArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::report_validator_impl`, arguments: [ obj(tx, args.verifiedCap), pure(tx, args.reporteeAddr, `address`), obj(tx, args.validatorReportRecords) ], }) }

export interface RequestAddStakeMulCoinArgs { self: TransactionObjectInput; stakes: Array<TransactionObjectInput> | TransactionArgument; stakeAmount: (bigint | TransactionArgument | TransactionArgument | null); validatorAddress: string | TransactionArgument }

export function requestAddStakeMulCoin( tx: Transaction, args: RequestAddStakeMulCoinArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::request_add_stake_mul_coin`, arguments: [ obj(tx, args.self), vector(tx, `${Coin.$typeName}<${SUI.$typeName}>`, args.stakes), pure(tx, args.stakeAmount, `${Option.$typeName}<u64>`), pure(tx, args.validatorAddress, `address`) ], }) }

export function rotateOperationCap( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::rotate_operation_cap`, arguments: [ obj(tx, self) ], }) }

export interface SetCandidateValidatorCommissionRateArgs { self: TransactionObjectInput; newCommissionRate: bigint | TransactionArgument }

export function setCandidateValidatorCommissionRate( tx: Transaction, args: SetCandidateValidatorCommissionRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::set_candidate_validator_commission_rate`, arguments: [ obj(tx, args.self), pure(tx, args.newCommissionRate, `u64`) ], }) }

export interface SetCandidateValidatorGasPriceArgs { self: TransactionObjectInput; cap: TransactionObjectInput; newGasPrice: bigint | TransactionArgument }

export function setCandidateValidatorGasPrice( tx: Transaction, args: SetCandidateValidatorGasPriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::set_candidate_validator_gas_price`, arguments: [ obj(tx, args.self), obj(tx, args.cap), pure(tx, args.newGasPrice, `u64`) ], }) }

export interface StoreExecutionTimeEstimatesArgs { self: TransactionObjectInput; estimates: Array<number | TransactionArgument> | TransactionArgument }

export function storeExecutionTimeEstimates( tx: Transaction, args: StoreExecutionTimeEstimatesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::store_execution_time_estimates`, arguments: [ obj(tx, args.self), pure(tx, args.estimates, `vector<u8>`) ], }) }

export function systemStateVersion( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::system_state_version`, arguments: [ obj(tx, self) ], }) }

export interface UndoReportValidatorArgs { self: TransactionObjectInput; cap: TransactionObjectInput; reporteeAddr: string | TransactionArgument }

export function undoReportValidator( tx: Transaction, args: UndoReportValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::undo_report_validator`, arguments: [ obj(tx, args.self), obj(tx, args.cap), pure(tx, args.reporteeAddr, `address`) ], }) }

export interface UndoReportValidatorImplArgs { verifiedCap: TransactionObjectInput; reporteeAddr: string | TransactionArgument; validatorReportRecords: TransactionObjectInput }

export function undoReportValidatorImpl( tx: Transaction, args: UndoReportValidatorImplArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::undo_report_validator_impl`, arguments: [ obj(tx, args.verifiedCap), pure(tx, args.reporteeAddr, `address`), obj(tx, args.validatorReportRecords) ], }) }

export interface UpdateCandidateValidatorNetworkAddressArgs { self: TransactionObjectInput; networkAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateValidatorNetworkAddress( tx: Transaction, args: UpdateCandidateValidatorNetworkAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_candidate_validator_network_address`, arguments: [ obj(tx, args.self), pure(tx, args.networkAddress, `vector<u8>`) ], }) }

export interface UpdateCandidateValidatorNetworkPubkeyArgs { self: TransactionObjectInput; networkPubkey: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateValidatorNetworkPubkey( tx: Transaction, args: UpdateCandidateValidatorNetworkPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_candidate_validator_network_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.networkPubkey, `vector<u8>`) ], }) }

export interface UpdateCandidateValidatorP2pAddressArgs { self: TransactionObjectInput; p2PAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateValidatorP2pAddress( tx: Transaction, args: UpdateCandidateValidatorP2pAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_candidate_validator_p2p_address`, arguments: [ obj(tx, args.self), pure(tx, args.p2PAddress, `vector<u8>`) ], }) }

export interface UpdateCandidateValidatorPrimaryAddressArgs { self: TransactionObjectInput; primaryAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateValidatorPrimaryAddress( tx: Transaction, args: UpdateCandidateValidatorPrimaryAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_candidate_validator_primary_address`, arguments: [ obj(tx, args.self), pure(tx, args.primaryAddress, `vector<u8>`) ], }) }

export interface UpdateCandidateValidatorProtocolPubkeyArgs { self: TransactionObjectInput; protocolPubkey: Array<number | TransactionArgument> | TransactionArgument; proofOfPossession: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateValidatorProtocolPubkey( tx: Transaction, args: UpdateCandidateValidatorProtocolPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_candidate_validator_protocol_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.protocolPubkey, `vector<u8>`), pure(tx, args.proofOfPossession, `vector<u8>`) ], }) }

export interface UpdateCandidateValidatorWorkerAddressArgs { self: TransactionObjectInput; workerAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateValidatorWorkerAddress( tx: Transaction, args: UpdateCandidateValidatorWorkerAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_candidate_validator_worker_address`, arguments: [ obj(tx, args.self), pure(tx, args.workerAddress, `vector<u8>`) ], }) }

export interface UpdateCandidateValidatorWorkerPubkeyArgs { self: TransactionObjectInput; workerPubkey: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateValidatorWorkerPubkey( tx: Transaction, args: UpdateCandidateValidatorWorkerPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_candidate_validator_worker_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.workerPubkey, `vector<u8>`) ], }) }

export interface UpdateValidatorDescriptionArgs { self: TransactionObjectInput; description: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorDescription( tx: Transaction, args: UpdateValidatorDescriptionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_validator_description`, arguments: [ obj(tx, args.self), pure(tx, args.description, `vector<u8>`) ], }) }

export interface UpdateValidatorImageUrlArgs { self: TransactionObjectInput; imageUrl: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorImageUrl( tx: Transaction, args: UpdateValidatorImageUrlArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_validator_image_url`, arguments: [ obj(tx, args.self), pure(tx, args.imageUrl, `vector<u8>`) ], }) }

export interface UpdateValidatorNameArgs { self: TransactionObjectInput; name: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorName( tx: Transaction, args: UpdateValidatorNameArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_validator_name`, arguments: [ obj(tx, args.self), pure(tx, args.name, `vector<u8>`) ], }) }

export interface UpdateValidatorNextEpochNetworkAddressArgs { self: TransactionObjectInput; networkAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorNextEpochNetworkAddress( tx: Transaction, args: UpdateValidatorNextEpochNetworkAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_validator_next_epoch_network_address`, arguments: [ obj(tx, args.self), pure(tx, args.networkAddress, `vector<u8>`) ], }) }

export interface UpdateValidatorNextEpochNetworkPubkeyArgs { self: TransactionObjectInput; networkPubkey: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorNextEpochNetworkPubkey( tx: Transaction, args: UpdateValidatorNextEpochNetworkPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_validator_next_epoch_network_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.networkPubkey, `vector<u8>`) ], }) }

export interface UpdateValidatorNextEpochP2pAddressArgs { self: TransactionObjectInput; p2PAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorNextEpochP2pAddress( tx: Transaction, args: UpdateValidatorNextEpochP2pAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_validator_next_epoch_p2p_address`, arguments: [ obj(tx, args.self), pure(tx, args.p2PAddress, `vector<u8>`) ], }) }

export interface UpdateValidatorNextEpochPrimaryAddressArgs { self: TransactionObjectInput; primaryAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorNextEpochPrimaryAddress( tx: Transaction, args: UpdateValidatorNextEpochPrimaryAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_validator_next_epoch_primary_address`, arguments: [ obj(tx, args.self), pure(tx, args.primaryAddress, `vector<u8>`) ], }) }

export interface UpdateValidatorNextEpochProtocolPubkeyArgs { self: TransactionObjectInput; protocolPubkey: Array<number | TransactionArgument> | TransactionArgument; proofOfPossession: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorNextEpochProtocolPubkey( tx: Transaction, args: UpdateValidatorNextEpochProtocolPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_validator_next_epoch_protocol_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.protocolPubkey, `vector<u8>`), pure(tx, args.proofOfPossession, `vector<u8>`) ], }) }

export interface UpdateValidatorNextEpochWorkerAddressArgs { self: TransactionObjectInput; workerAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorNextEpochWorkerAddress( tx: Transaction, args: UpdateValidatorNextEpochWorkerAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_validator_next_epoch_worker_address`, arguments: [ obj(tx, args.self), pure(tx, args.workerAddress, `vector<u8>`) ], }) }

export interface UpdateValidatorNextEpochWorkerPubkeyArgs { self: TransactionObjectInput; workerPubkey: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorNextEpochWorkerPubkey( tx: Transaction, args: UpdateValidatorNextEpochWorkerPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_validator_next_epoch_worker_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.workerPubkey, `vector<u8>`) ], }) }

export interface UpdateValidatorProjectUrlArgs { self: TransactionObjectInput; projectUrl: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorProjectUrl( tx: Transaction, args: UpdateValidatorProjectUrlArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::update_validator_project_url`, arguments: [ obj(tx, args.self), pure(tx, args.projectUrl, `vector<u8>`) ], }) }

export function v1ToV2( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::v1_to_v2`, arguments: [ obj(tx, self) ], }) }

export function validatorStakingPoolMappings( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system_state_inner::validator_staking_pool_mappings`, arguments: [ obj(tx, self) ], }) }
