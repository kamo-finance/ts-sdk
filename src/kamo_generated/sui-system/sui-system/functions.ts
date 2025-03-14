import {PUBLISHED_AT} from "..";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {obj, pure, vector} from "../../_framework/util";
import {Coin} from "../../sui/coin/structs";
import {ID} from "../../sui/object/structs";
import {SUI} from "../../sui/sui/structs";
import {Validator} from "../validator/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface CreateArgs { id: TransactionObjectInput; validators: Array<TransactionObjectInput> | TransactionArgument; storageFund: TransactionObjectInput; protocolVersion: bigint | TransactionArgument; epochStartTimestampMs: bigint | TransactionArgument; parameters: TransactionObjectInput; stakeSubsidy: TransactionObjectInput }

export function create( tx: Transaction, args: CreateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::create`, arguments: [ obj(tx, args.id), vector(tx, `${Validator.$typeName}`, args.validators), obj(tx, args.storageFund), pure(tx, args.protocolVersion, `u64`), pure(tx, args.epochStartTimestampMs, `u64`), obj(tx, args.parameters), obj(tx, args.stakeSubsidy) ], }) }

export interface ConvertToFungibleStakedSuiArgs { wrapper: TransactionObjectInput; stakedSui: TransactionObjectInput }

export function convertToFungibleStakedSui( tx: Transaction, args: ConvertToFungibleStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::convert_to_fungible_staked_sui`, arguments: [ obj(tx, args.wrapper), obj(tx, args.stakedSui) ], }) }

export interface RedeemFungibleStakedSuiArgs { wrapper: TransactionObjectInput; fungibleStakedSui: TransactionObjectInput }

export function redeemFungibleStakedSui( tx: Transaction, args: RedeemFungibleStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::redeem_fungible_staked_sui`, arguments: [ obj(tx, args.wrapper), obj(tx, args.fungibleStakedSui) ], }) }

export interface RequestAddStakeArgs { wrapper: TransactionObjectInput; stake: TransactionObjectInput; validatorAddress: string | TransactionArgument }

export function requestAddStake( tx: Transaction, args: RequestAddStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::request_add_stake`, arguments: [ obj(tx, args.wrapper), obj(tx, args.stake), pure(tx, args.validatorAddress, `address`) ], }) }

export interface RequestWithdrawStakeArgs { wrapper: TransactionObjectInput; stakedSui: TransactionObjectInput }

export function requestWithdrawStake( tx: Transaction, args: RequestWithdrawStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::request_withdraw_stake`, arguments: [ obj(tx, args.wrapper), obj(tx, args.stakedSui) ], }) }

export interface RequestSetCommissionRateArgs { wrapper: TransactionObjectInput; newCommissionRate: bigint | TransactionArgument }

export function requestSetCommissionRate( tx: Transaction, args: RequestSetCommissionRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::request_set_commission_rate`, arguments: [ obj(tx, args.wrapper), pure(tx, args.newCommissionRate, `u64`) ], }) }

export interface RequestSetGasPriceArgs { wrapper: TransactionObjectInput; cap: TransactionObjectInput; newGasPrice: bigint | TransactionArgument }

export function requestSetGasPrice( tx: Transaction, args: RequestSetGasPriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::request_set_gas_price`, arguments: [ obj(tx, args.wrapper), obj(tx, args.cap), pure(tx, args.newGasPrice, `u64`) ], }) }

export function activeValidatorAddresses( tx: Transaction, wrapper: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::active_validator_addresses`, arguments: [ obj(tx, wrapper) ], }) }

export interface AdvanceEpochArgs { storageReward: TransactionObjectInput; computationReward: TransactionObjectInput; wrapper: TransactionObjectInput; newEpoch: bigint | TransactionArgument; nextProtocolVersion: bigint | TransactionArgument; storageRebate: bigint | TransactionArgument; nonRefundableStorageFee: bigint | TransactionArgument; storageFundReinvestRate: bigint | TransactionArgument; rewardSlashingRate: bigint | TransactionArgument; epochStartTimestampMs: bigint | TransactionArgument }

export function advanceEpoch( tx: Transaction, args: AdvanceEpochArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::advance_epoch`, arguments: [ obj(tx, args.storageReward), obj(tx, args.computationReward), obj(tx, args.wrapper), pure(tx, args.newEpoch, `u64`), pure(tx, args.nextProtocolVersion, `u64`), pure(tx, args.storageRebate, `u64`), pure(tx, args.nonRefundableStorageFee, `u64`), pure(tx, args.storageFundReinvestRate, `u64`), pure(tx, args.rewardSlashingRate, `u64`), pure(tx, args.epochStartTimestampMs, `u64`) ], }) }

export interface PoolExchangeRatesArgs { wrapper: TransactionObjectInput; poolId: string | TransactionArgument }

export function poolExchangeRates( tx: Transaction, args: PoolExchangeRatesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::pool_exchange_rates`, arguments: [ obj(tx, args.wrapper), pure(tx, args.poolId, `${ID.$typeName}`) ], }) }

export function requestAddValidator( tx: Transaction, wrapper: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::request_add_validator`, arguments: [ obj(tx, wrapper) ], }) }

export interface RequestAddValidatorCandidateArgs { wrapper: TransactionObjectInput; pubkeyBytes: Array<number | TransactionArgument> | TransactionArgument; networkPubkeyBytes: Array<number | TransactionArgument> | TransactionArgument; workerPubkeyBytes: Array<number | TransactionArgument> | TransactionArgument; proofOfPossession: Array<number | TransactionArgument> | TransactionArgument; name: Array<number | TransactionArgument> | TransactionArgument; description: Array<number | TransactionArgument> | TransactionArgument; imageUrl: Array<number | TransactionArgument> | TransactionArgument; projectUrl: Array<number | TransactionArgument> | TransactionArgument; netAddress: Array<number | TransactionArgument> | TransactionArgument; p2PAddress: Array<number | TransactionArgument> | TransactionArgument; primaryAddress: Array<number | TransactionArgument> | TransactionArgument; workerAddress: Array<number | TransactionArgument> | TransactionArgument; gasPrice: bigint | TransactionArgument; commissionRate: bigint | TransactionArgument }

export function requestAddValidatorCandidate( tx: Transaction, args: RequestAddValidatorCandidateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::request_add_validator_candidate`, arguments: [ obj(tx, args.wrapper), pure(tx, args.pubkeyBytes, `vector<u8>`), pure(tx, args.networkPubkeyBytes, `vector<u8>`), pure(tx, args.workerPubkeyBytes, `vector<u8>`), pure(tx, args.proofOfPossession, `vector<u8>`), pure(tx, args.name, `vector<u8>`), pure(tx, args.description, `vector<u8>`), pure(tx, args.imageUrl, `vector<u8>`), pure(tx, args.projectUrl, `vector<u8>`), pure(tx, args.netAddress, `vector<u8>`), pure(tx, args.p2PAddress, `vector<u8>`), pure(tx, args.primaryAddress, `vector<u8>`), pure(tx, args.workerAddress, `vector<u8>`), pure(tx, args.gasPrice, `u64`), pure(tx, args.commissionRate, `u64`) ], }) }

export function requestRemoveValidator( tx: Transaction, wrapper: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::request_remove_validator`, arguments: [ obj(tx, wrapper) ], }) }

export function requestRemoveValidatorCandidate( tx: Transaction, wrapper: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::request_remove_validator_candidate`, arguments: [ obj(tx, wrapper) ], }) }

export interface ValidatorAddressByPoolIdArgs { wrapper: TransactionObjectInput; poolId: string | TransactionArgument }

export function validatorAddressByPoolId( tx: Transaction, args: ValidatorAddressByPoolIdArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::validator_address_by_pool_id`, arguments: [ obj(tx, args.wrapper), pure(tx, args.poolId, `${ID.$typeName}`) ], }) }

export interface ReportValidatorArgs { wrapper: TransactionObjectInput; cap: TransactionObjectInput; reporteeAddr: string | TransactionArgument }

export function reportValidator( tx: Transaction, args: ReportValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::report_validator`, arguments: [ obj(tx, args.wrapper), obj(tx, args.cap), pure(tx, args.reporteeAddr, `address`) ], }) }

export interface RequestAddStakeMulCoinArgs { wrapper: TransactionObjectInput; stakes: Array<TransactionObjectInput> | TransactionArgument; stakeAmount: (bigint | TransactionArgument | TransactionArgument | null); validatorAddress: string | TransactionArgument }

export function requestAddStakeMulCoin( tx: Transaction, args: RequestAddStakeMulCoinArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::request_add_stake_mul_coin`, arguments: [ obj(tx, args.wrapper), vector(tx, `${Coin.$typeName}<${SUI.$typeName}>`, args.stakes), pure(tx, args.stakeAmount, `${Option.$typeName}<u64>`), pure(tx, args.validatorAddress, `address`) ], }) }

export function rotateOperationCap( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::rotate_operation_cap`, arguments: [ obj(tx, self) ], }) }

export interface SetCandidateValidatorCommissionRateArgs { wrapper: TransactionObjectInput; newCommissionRate: bigint | TransactionArgument }

export function setCandidateValidatorCommissionRate( tx: Transaction, args: SetCandidateValidatorCommissionRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::set_candidate_validator_commission_rate`, arguments: [ obj(tx, args.wrapper), pure(tx, args.newCommissionRate, `u64`) ], }) }

export interface SetCandidateValidatorGasPriceArgs { wrapper: TransactionObjectInput; cap: TransactionObjectInput; newGasPrice: bigint | TransactionArgument }

export function setCandidateValidatorGasPrice( tx: Transaction, args: SetCandidateValidatorGasPriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::set_candidate_validator_gas_price`, arguments: [ obj(tx, args.wrapper), obj(tx, args.cap), pure(tx, args.newGasPrice, `u64`) ], }) }

export interface StoreExecutionTimeEstimatesArgs { wrapper: TransactionObjectInput; estimatesBytes: Array<number | TransactionArgument> | TransactionArgument }

export function storeExecutionTimeEstimates( tx: Transaction, args: StoreExecutionTimeEstimatesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::store_execution_time_estimates`, arguments: [ obj(tx, args.wrapper), pure(tx, args.estimatesBytes, `vector<u8>`) ], }) }

export interface UndoReportValidatorArgs { wrapper: TransactionObjectInput; cap: TransactionObjectInput; reporteeAddr: string | TransactionArgument }

export function undoReportValidator( tx: Transaction, args: UndoReportValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::undo_report_validator`, arguments: [ obj(tx, args.wrapper), obj(tx, args.cap), pure(tx, args.reporteeAddr, `address`) ], }) }

export interface UpdateCandidateValidatorNetworkAddressArgs { self: TransactionObjectInput; networkAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateValidatorNetworkAddress( tx: Transaction, args: UpdateCandidateValidatorNetworkAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_candidate_validator_network_address`, arguments: [ obj(tx, args.self), pure(tx, args.networkAddress, `vector<u8>`) ], }) }

export interface UpdateCandidateValidatorNetworkPubkeyArgs { self: TransactionObjectInput; networkPubkey: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateValidatorNetworkPubkey( tx: Transaction, args: UpdateCandidateValidatorNetworkPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_candidate_validator_network_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.networkPubkey, `vector<u8>`) ], }) }

export interface UpdateCandidateValidatorP2pAddressArgs { self: TransactionObjectInput; p2PAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateValidatorP2pAddress( tx: Transaction, args: UpdateCandidateValidatorP2pAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_candidate_validator_p2p_address`, arguments: [ obj(tx, args.self), pure(tx, args.p2PAddress, `vector<u8>`) ], }) }

export interface UpdateCandidateValidatorPrimaryAddressArgs { self: TransactionObjectInput; primaryAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateValidatorPrimaryAddress( tx: Transaction, args: UpdateCandidateValidatorPrimaryAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_candidate_validator_primary_address`, arguments: [ obj(tx, args.self), pure(tx, args.primaryAddress, `vector<u8>`) ], }) }

export interface UpdateCandidateValidatorProtocolPubkeyArgs { self: TransactionObjectInput; protocolPubkey: Array<number | TransactionArgument> | TransactionArgument; proofOfPossession: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateValidatorProtocolPubkey( tx: Transaction, args: UpdateCandidateValidatorProtocolPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_candidate_validator_protocol_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.protocolPubkey, `vector<u8>`), pure(tx, args.proofOfPossession, `vector<u8>`) ], }) }

export interface UpdateCandidateValidatorWorkerAddressArgs { self: TransactionObjectInput; workerAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateValidatorWorkerAddress( tx: Transaction, args: UpdateCandidateValidatorWorkerAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_candidate_validator_worker_address`, arguments: [ obj(tx, args.self), pure(tx, args.workerAddress, `vector<u8>`) ], }) }

export interface UpdateCandidateValidatorWorkerPubkeyArgs { self: TransactionObjectInput; workerPubkey: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateValidatorWorkerPubkey( tx: Transaction, args: UpdateCandidateValidatorWorkerPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_candidate_validator_worker_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.workerPubkey, `vector<u8>`) ], }) }

export interface UpdateValidatorDescriptionArgs { self: TransactionObjectInput; description: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorDescription( tx: Transaction, args: UpdateValidatorDescriptionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_validator_description`, arguments: [ obj(tx, args.self), pure(tx, args.description, `vector<u8>`) ], }) }

export interface UpdateValidatorImageUrlArgs { self: TransactionObjectInput; imageUrl: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorImageUrl( tx: Transaction, args: UpdateValidatorImageUrlArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_validator_image_url`, arguments: [ obj(tx, args.self), pure(tx, args.imageUrl, `vector<u8>`) ], }) }

export interface UpdateValidatorNameArgs { self: TransactionObjectInput; name: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorName( tx: Transaction, args: UpdateValidatorNameArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_validator_name`, arguments: [ obj(tx, args.self), pure(tx, args.name, `vector<u8>`) ], }) }

export interface UpdateValidatorNextEpochNetworkAddressArgs { self: TransactionObjectInput; networkAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorNextEpochNetworkAddress( tx: Transaction, args: UpdateValidatorNextEpochNetworkAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_validator_next_epoch_network_address`, arguments: [ obj(tx, args.self), pure(tx, args.networkAddress, `vector<u8>`) ], }) }

export interface UpdateValidatorNextEpochNetworkPubkeyArgs { self: TransactionObjectInput; networkPubkey: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorNextEpochNetworkPubkey( tx: Transaction, args: UpdateValidatorNextEpochNetworkPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_validator_next_epoch_network_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.networkPubkey, `vector<u8>`) ], }) }

export interface UpdateValidatorNextEpochP2pAddressArgs { self: TransactionObjectInput; p2PAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorNextEpochP2pAddress( tx: Transaction, args: UpdateValidatorNextEpochP2pAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_validator_next_epoch_p2p_address`, arguments: [ obj(tx, args.self), pure(tx, args.p2PAddress, `vector<u8>`) ], }) }

export interface UpdateValidatorNextEpochPrimaryAddressArgs { self: TransactionObjectInput; primaryAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorNextEpochPrimaryAddress( tx: Transaction, args: UpdateValidatorNextEpochPrimaryAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_validator_next_epoch_primary_address`, arguments: [ obj(tx, args.self), pure(tx, args.primaryAddress, `vector<u8>`) ], }) }

export interface UpdateValidatorNextEpochProtocolPubkeyArgs { self: TransactionObjectInput; protocolPubkey: Array<number | TransactionArgument> | TransactionArgument; proofOfPossession: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorNextEpochProtocolPubkey( tx: Transaction, args: UpdateValidatorNextEpochProtocolPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_validator_next_epoch_protocol_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.protocolPubkey, `vector<u8>`), pure(tx, args.proofOfPossession, `vector<u8>`) ], }) }

export interface UpdateValidatorNextEpochWorkerAddressArgs { self: TransactionObjectInput; workerAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorNextEpochWorkerAddress( tx: Transaction, args: UpdateValidatorNextEpochWorkerAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_validator_next_epoch_worker_address`, arguments: [ obj(tx, args.self), pure(tx, args.workerAddress, `vector<u8>`) ], }) }

export interface UpdateValidatorNextEpochWorkerPubkeyArgs { self: TransactionObjectInput; workerPubkey: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorNextEpochWorkerPubkey( tx: Transaction, args: UpdateValidatorNextEpochWorkerPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_validator_next_epoch_worker_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.workerPubkey, `vector<u8>`) ], }) }

export interface UpdateValidatorProjectUrlArgs { self: TransactionObjectInput; projectUrl: Array<number | TransactionArgument> | TransactionArgument }

export function updateValidatorProjectUrl( tx: Transaction, args: UpdateValidatorProjectUrlArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::update_validator_project_url`, arguments: [ obj(tx, args.self), pure(tx, args.projectUrl, `vector<u8>`) ], }) }

export function loadInnerMaybeUpgrade( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::load_inner_maybe_upgrade`, arguments: [ obj(tx, self) ], }) }

export function loadSystemState( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::load_system_state`, arguments: [ obj(tx, self) ], }) }

export function loadSystemStateMut( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::load_system_state_mut`, arguments: [ obj(tx, self) ], }) }

export interface RequestAddStakeNonEntryArgs { wrapper: TransactionObjectInput; stake: TransactionObjectInput; validatorAddress: string | TransactionArgument }

export function requestAddStakeNonEntry( tx: Transaction, args: RequestAddStakeNonEntryArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::request_add_stake_non_entry`, arguments: [ obj(tx, args.wrapper), obj(tx, args.stake), pure(tx, args.validatorAddress, `address`) ], }) }

export interface RequestWithdrawStakeNonEntryArgs { wrapper: TransactionObjectInput; stakedSui: TransactionObjectInput }

export function requestWithdrawStakeNonEntry( tx: Transaction, args: RequestWithdrawStakeNonEntryArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::request_withdraw_stake_non_entry`, arguments: [ obj(tx, args.wrapper), obj(tx, args.stakedSui) ], }) }

export function validatorVotingPowers( tx: Transaction, wrapper: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::sui_system::validator_voting_powers`, arguments: [ obj(tx, wrapper) ], }) }
