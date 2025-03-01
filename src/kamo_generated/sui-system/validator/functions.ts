import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {GenericArg, generic, obj, option, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewArgs { suiAddress: string | TransactionArgument; protocolPubkeyBytes: Array<number | TransactionArgument> | TransactionArgument; networkPubkeyBytes: Array<number | TransactionArgument> | TransactionArgument; workerPubkeyBytes: Array<number | TransactionArgument> | TransactionArgument; proofOfPossession: Array<number | TransactionArgument> | TransactionArgument; name: Array<number | TransactionArgument> | TransactionArgument; description: Array<number | TransactionArgument> | TransactionArgument; imageUrl: Array<number | TransactionArgument> | TransactionArgument; projectUrl: Array<number | TransactionArgument> | TransactionArgument; netAddress: Array<number | TransactionArgument> | TransactionArgument; p2PAddress: Array<number | TransactionArgument> | TransactionArgument; primaryAddress: Array<number | TransactionArgument> | TransactionArgument; workerAddress: Array<number | TransactionArgument> | TransactionArgument; gasPrice: bigint | TransactionArgument; commissionRate: bigint | TransactionArgument }

export function new_( tx: Transaction, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::new`, arguments: [ pure(tx, args.suiAddress, `address`), pure(tx, args.protocolPubkeyBytes, `vector<u8>`), pure(tx, args.networkPubkeyBytes, `vector<u8>`), pure(tx, args.workerPubkeyBytes, `vector<u8>`), pure(tx, args.proofOfPossession, `vector<u8>`), pure(tx, args.name, `vector<u8>`), pure(tx, args.description, `vector<u8>`), pure(tx, args.imageUrl, `vector<u8>`), pure(tx, args.projectUrl, `vector<u8>`), pure(tx, args.netAddress, `vector<u8>`), pure(tx, args.p2PAddress, `vector<u8>`), pure(tx, args.primaryAddress, `vector<u8>`), pure(tx, args.workerAddress, `vector<u8>`), pure(tx, args.gasPrice, `u64`), pure(tx, args.commissionRate, `u64`) ], }) }

export function name( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::name`, arguments: [ obj(tx, self) ], }) }

export function description( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::description`, arguments: [ obj(tx, self) ], }) }

export function metadata( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::metadata`, arguments: [ obj(tx, self) ], }) }

export interface UpdateDescriptionArgs { self: TransactionObjectInput; description: Array<number | TransactionArgument> | TransactionArgument }

export function updateDescription( tx: Transaction, args: UpdateDescriptionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_description`, arguments: [ obj(tx, args.self), pure(tx, args.description, `vector<u8>`) ], }) }

export interface UpdateNameArgs { self: TransactionObjectInput; name: Array<number | TransactionArgument> | TransactionArgument }

export function updateName( tx: Transaction, args: UpdateNameArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_name`, arguments: [ obj(tx, args.self), pure(tx, args.name, `vector<u8>`) ], }) }

export function newUnverifiedValidatorOperationCapAndTransfer( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::new_unverified_validator_operation_cap_and_transfer`, arguments: [ obj(tx, self) ], }) }

export interface ConvertToFungibleStakedSuiArgs { self: TransactionObjectInput; stakedSui: TransactionObjectInput }

export function convertToFungibleStakedSui( tx: Transaction, args: ConvertToFungibleStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::convert_to_fungible_staked_sui`, arguments: [ obj(tx, args.self), obj(tx, args.stakedSui) ], }) }

export function isPreactive( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::is_preactive`, arguments: [ obj(tx, self) ], }) }

export function pendingStakeAmount( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::pending_stake_amount`, arguments: [ obj(tx, self) ], }) }

export function pendingStakeWithdrawAmount( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::pending_stake_withdraw_amount`, arguments: [ obj(tx, self) ], }) }

export interface PoolTokenExchangeRateAtEpochArgs { self: TransactionObjectInput; epoch: bigint | TransactionArgument }

export function poolTokenExchangeRateAtEpoch( tx: Transaction, args: PoolTokenExchangeRateAtEpochArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::pool_token_exchange_rate_at_epoch`, arguments: [ obj(tx, args.self), pure(tx, args.epoch, `u64`) ], }) }

export function processPendingStakesAndWithdraws( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::process_pending_stakes_and_withdraws`, arguments: [ obj(tx, self) ], }) }

export interface RedeemFungibleStakedSuiArgs { self: TransactionObjectInput; fungibleStakedSui: TransactionObjectInput }

export function redeemFungibleStakedSui( tx: Transaction, args: RedeemFungibleStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::redeem_fungible_staked_sui`, arguments: [ obj(tx, args.self), obj(tx, args.fungibleStakedSui) ], }) }

export interface RequestAddStakeArgs { self: TransactionObjectInput; stake: TransactionObjectInput; stakerAddress: string | TransactionArgument }

export function requestAddStake( tx: Transaction, args: RequestAddStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::request_add_stake`, arguments: [ obj(tx, args.self), obj(tx, args.stake), pure(tx, args.stakerAddress, `address`) ], }) }

export interface RequestWithdrawStakeArgs { self: TransactionObjectInput; stakedSui: TransactionObjectInput }

export function requestWithdrawStake( tx: Transaction, args: RequestWithdrawStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::request_withdraw_stake`, arguments: [ obj(tx, args.self), obj(tx, args.stakedSui) ], }) }

export interface ActivateArgs { self: TransactionObjectInput; activationEpoch: bigint | TransactionArgument }

export function activate( tx: Transaction, args: ActivateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::activate`, arguments: [ obj(tx, args.self), pure(tx, args.activationEpoch, `u64`) ], }) }

export function adjustStakeAndGasPrice( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::adjust_stake_and_gas_price`, arguments: [ obj(tx, self) ], }) }

export function commissionRate( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::commission_rate`, arguments: [ obj(tx, self) ], }) }

export interface DeactivateArgs { self: TransactionObjectInput; deactivationEpoch: bigint | TransactionArgument }

export function deactivate( tx: Transaction, args: DeactivateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::deactivate`, arguments: [ obj(tx, args.self), pure(tx, args.deactivationEpoch, `u64`) ], }) }

export interface DepositStakeRewardsArgs { self: TransactionObjectInput; reward: TransactionObjectInput }

export function depositStakeRewards( tx: Transaction, args: DepositStakeRewardsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::deposit_stake_rewards`, arguments: [ obj(tx, args.self), obj(tx, args.reward) ], }) }

export function effectuateStagedMetadata( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::effectuate_staged_metadata`, arguments: [ obj(tx, self) ], }) }

export function gasPrice( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::gas_price`, arguments: [ obj(tx, self) ], }) }

export function getStakingPoolRef( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::get_staking_pool_ref`, arguments: [ obj(tx, self) ], }) }

export function imageUrl( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::image_url`, arguments: [ obj(tx, self) ], }) }

export interface IsDuplicateArgs { self: TransactionObjectInput; other: TransactionObjectInput }

export function isDuplicate( tx: Transaction, args: IsDuplicateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::is_duplicate`, arguments: [ obj(tx, args.self), obj(tx, args.other) ], }) }

export interface IsEqualSomeArgs { a: (GenericArg | TransactionArgument | null); b: (GenericArg | TransactionArgument | null) }

export function isEqualSome( tx: Transaction, typeArg: string, args: IsEqualSomeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::is_equal_some`, typeArguments: [typeArg], arguments: [ option(tx, `${typeArg}`, args.a), option(tx, `${typeArg}`, args.b) ], }) }

export interface IsEqualSomeAndValueArgs { a: (GenericArg | TransactionArgument | null); b: GenericArg }

export function isEqualSomeAndValue( tx: Transaction, typeArg: string, args: IsEqualSomeAndValueArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::is_equal_some_and_value`, typeArguments: [typeArg], arguments: [ option(tx, `${typeArg}`, args.a), generic(tx, `${typeArg}`, args.b) ], }) }

export function networkAddress( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::network_address`, arguments: [ obj(tx, self) ], }) }

export function networkPubkeyBytes( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::network_pubkey_bytes`, arguments: [ obj(tx, self) ], }) }

export function suiAddress( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::sui_address`, arguments: [ obj(tx, self) ], }) }

export function protocolPubkeyBytes( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::protocol_pubkey_bytes`, arguments: [ obj(tx, self) ], }) }

export function workerPubkeyBytes( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::worker_pubkey_bytes`, arguments: [ obj(tx, self) ], }) }

export function proofOfPossession( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::proof_of_possession`, arguments: [ obj(tx, self) ], }) }

export function projectUrl( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::project_url`, arguments: [ obj(tx, self) ], }) }

export function p2pAddress( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::p2p_address`, arguments: [ obj(tx, self) ], }) }

export function primaryAddress( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::primary_address`, arguments: [ obj(tx, self) ], }) }

export function workerAddress( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::worker_address`, arguments: [ obj(tx, self) ], }) }

export interface NewFromMetadataArgs { metadata: TransactionObjectInput; gasPrice: bigint | TransactionArgument; commissionRate: bigint | TransactionArgument }

export function newFromMetadata( tx: Transaction, args: NewFromMetadataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::new_from_metadata`, arguments: [ obj(tx, args.metadata), pure(tx, args.gasPrice, `u64`), pure(tx, args.commissionRate, `u64`) ], }) }

export interface NewMetadataArgs { suiAddress: string | TransactionArgument; protocolPubkeyBytes: Array<number | TransactionArgument> | TransactionArgument; networkPubkeyBytes: Array<number | TransactionArgument> | TransactionArgument; workerPubkeyBytes: Array<number | TransactionArgument> | TransactionArgument; proofOfPossession: Array<number | TransactionArgument> | TransactionArgument; name: string | TransactionArgument; description: string | TransactionArgument; imageUrl: TransactionObjectInput; projectUrl: TransactionObjectInput; netAddress: string | TransactionArgument; p2PAddress: string | TransactionArgument; primaryAddress: string | TransactionArgument; workerAddress: string | TransactionArgument; extraFields: TransactionObjectInput }

export function newMetadata( tx: Transaction, args: NewMetadataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::new_metadata`, arguments: [ pure(tx, args.suiAddress, `address`), pure(tx, args.protocolPubkeyBytes, `vector<u8>`), pure(tx, args.networkPubkeyBytes, `vector<u8>`), pure(tx, args.workerPubkeyBytes, `vector<u8>`), pure(tx, args.proofOfPossession, `vector<u8>`), pure(tx, args.name, `${String.$typeName}`), pure(tx, args.description, `${String.$typeName}`), obj(tx, args.imageUrl), obj(tx, args.projectUrl), pure(tx, args.netAddress, `${String.$typeName}`), pure(tx, args.p2PAddress, `${String.$typeName}`), pure(tx, args.primaryAddress, `${String.$typeName}`), pure(tx, args.workerAddress, `${String.$typeName}`), obj(tx, args.extraFields) ], }) }

export function nextEpochGasPrice( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::next_epoch_gas_price`, arguments: [ obj(tx, self) ], }) }

export function nextEpochNetworkAddress( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::next_epoch_network_address`, arguments: [ obj(tx, self) ], }) }

export function nextEpochNetworkPubkeyBytes( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::next_epoch_network_pubkey_bytes`, arguments: [ obj(tx, self) ], }) }

export function nextEpochP2pAddress( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::next_epoch_p2p_address`, arguments: [ obj(tx, self) ], }) }

export function nextEpochPrimaryAddress( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::next_epoch_primary_address`, arguments: [ obj(tx, self) ], }) }

export function nextEpochProofOfPossession( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::next_epoch_proof_of_possession`, arguments: [ obj(tx, self) ], }) }

export function nextEpochProtocolPubkeyBytes( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::next_epoch_protocol_pubkey_bytes`, arguments: [ obj(tx, self) ], }) }

export function nextEpochWorkerAddress( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::next_epoch_worker_address`, arguments: [ obj(tx, self) ], }) }

export function nextEpochWorkerPubkeyBytes( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::next_epoch_worker_pubkey_bytes`, arguments: [ obj(tx, self) ], }) }

export function operationCapId( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::operation_cap_id`, arguments: [ obj(tx, self) ], }) }

export interface RequestAddStakeAtGenesisArgs { self: TransactionObjectInput; stake: TransactionObjectInput; stakerAddress: string | TransactionArgument }

export function requestAddStakeAtGenesis( tx: Transaction, args: RequestAddStakeAtGenesisArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::request_add_stake_at_genesis`, arguments: [ obj(tx, args.self), obj(tx, args.stake), pure(tx, args.stakerAddress, `address`) ], }) }

export interface RequestSetCommissionRateArgs { self: TransactionObjectInput; newCommissionRate: bigint | TransactionArgument }

export function requestSetCommissionRate( tx: Transaction, args: RequestSetCommissionRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::request_set_commission_rate`, arguments: [ obj(tx, args.self), pure(tx, args.newCommissionRate, `u64`) ], }) }

export interface RequestSetGasPriceArgs { self: TransactionObjectInput; verifiedCap: TransactionObjectInput; newPrice: bigint | TransactionArgument }

export function requestSetGasPrice( tx: Transaction, args: RequestSetGasPriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::request_set_gas_price`, arguments: [ obj(tx, args.self), obj(tx, args.verifiedCap), pure(tx, args.newPrice, `u64`) ], }) }

export interface SetCandidateCommissionRateArgs { self: TransactionObjectInput; newCommissionRate: bigint | TransactionArgument }

export function setCandidateCommissionRate( tx: Transaction, args: SetCandidateCommissionRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::set_candidate_commission_rate`, arguments: [ obj(tx, args.self), pure(tx, args.newCommissionRate, `u64`) ], }) }

export interface SetCandidateGasPriceArgs { self: TransactionObjectInput; verifiedCap: TransactionObjectInput; newPrice: bigint | TransactionArgument }

export function setCandidateGasPrice( tx: Transaction, args: SetCandidateGasPriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::set_candidate_gas_price`, arguments: [ obj(tx, args.self), obj(tx, args.verifiedCap), pure(tx, args.newPrice, `u64`) ], }) }

export interface SetVotingPowerArgs { self: TransactionObjectInput; newVotingPower: bigint | TransactionArgument }

export function setVotingPower( tx: Transaction, args: SetVotingPowerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::set_voting_power`, arguments: [ obj(tx, args.self), pure(tx, args.newVotingPower, `u64`) ], }) }

export function stakeAmount( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::stake_amount`, arguments: [ obj(tx, self) ], }) }

export function stakingPoolId( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::staking_pool_id`, arguments: [ obj(tx, self) ], }) }

export function totalStake( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::total_stake`, arguments: [ obj(tx, self) ], }) }

export function totalStakeAmount( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::total_stake_amount`, arguments: [ obj(tx, self) ], }) }

export interface UpdateCandidateNetworkAddressArgs { self: TransactionObjectInput; netAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateNetworkAddress( tx: Transaction, args: UpdateCandidateNetworkAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_candidate_network_address`, arguments: [ obj(tx, args.self), pure(tx, args.netAddress, `vector<u8>`) ], }) }

export interface UpdateCandidateNetworkPubkeyArgs { self: TransactionObjectInput; networkPubkey: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateNetworkPubkey( tx: Transaction, args: UpdateCandidateNetworkPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_candidate_network_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.networkPubkey, `vector<u8>`) ], }) }

export interface UpdateCandidateP2pAddressArgs { self: TransactionObjectInput; p2PAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateP2pAddress( tx: Transaction, args: UpdateCandidateP2pAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_candidate_p2p_address`, arguments: [ obj(tx, args.self), pure(tx, args.p2PAddress, `vector<u8>`) ], }) }

export interface UpdateCandidatePrimaryAddressArgs { self: TransactionObjectInput; primaryAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidatePrimaryAddress( tx: Transaction, args: UpdateCandidatePrimaryAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_candidate_primary_address`, arguments: [ obj(tx, args.self), pure(tx, args.primaryAddress, `vector<u8>`) ], }) }

export interface UpdateCandidateProtocolPubkeyArgs { self: TransactionObjectInput; protocolPubkey: Array<number | TransactionArgument> | TransactionArgument; proofOfPossession: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateProtocolPubkey( tx: Transaction, args: UpdateCandidateProtocolPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_candidate_protocol_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.protocolPubkey, `vector<u8>`), pure(tx, args.proofOfPossession, `vector<u8>`) ], }) }

export interface UpdateCandidateWorkerAddressArgs { self: TransactionObjectInput; workerAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateWorkerAddress( tx: Transaction, args: UpdateCandidateWorkerAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_candidate_worker_address`, arguments: [ obj(tx, args.self), pure(tx, args.workerAddress, `vector<u8>`) ], }) }

export interface UpdateCandidateWorkerPubkeyArgs { self: TransactionObjectInput; workerPubkey: Array<number | TransactionArgument> | TransactionArgument }

export function updateCandidateWorkerPubkey( tx: Transaction, args: UpdateCandidateWorkerPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_candidate_worker_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.workerPubkey, `vector<u8>`) ], }) }

export interface UpdateImageUrlArgs { self: TransactionObjectInput; imageUrl: Array<number | TransactionArgument> | TransactionArgument }

export function updateImageUrl( tx: Transaction, args: UpdateImageUrlArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_image_url`, arguments: [ obj(tx, args.self), pure(tx, args.imageUrl, `vector<u8>`) ], }) }

export interface UpdateNextEpochNetworkAddressArgs { self: TransactionObjectInput; netAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateNextEpochNetworkAddress( tx: Transaction, args: UpdateNextEpochNetworkAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_next_epoch_network_address`, arguments: [ obj(tx, args.self), pure(tx, args.netAddress, `vector<u8>`) ], }) }

export interface UpdateNextEpochNetworkPubkeyArgs { self: TransactionObjectInput; networkPubkey: Array<number | TransactionArgument> | TransactionArgument }

export function updateNextEpochNetworkPubkey( tx: Transaction, args: UpdateNextEpochNetworkPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_next_epoch_network_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.networkPubkey, `vector<u8>`) ], }) }

export interface UpdateNextEpochP2pAddressArgs { self: TransactionObjectInput; p2PAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateNextEpochP2pAddress( tx: Transaction, args: UpdateNextEpochP2pAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_next_epoch_p2p_address`, arguments: [ obj(tx, args.self), pure(tx, args.p2PAddress, `vector<u8>`) ], }) }

export interface UpdateNextEpochPrimaryAddressArgs { self: TransactionObjectInput; primaryAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateNextEpochPrimaryAddress( tx: Transaction, args: UpdateNextEpochPrimaryAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_next_epoch_primary_address`, arguments: [ obj(tx, args.self), pure(tx, args.primaryAddress, `vector<u8>`) ], }) }

export interface UpdateNextEpochProtocolPubkeyArgs { self: TransactionObjectInput; protocolPubkey: Array<number | TransactionArgument> | TransactionArgument; proofOfPossession: Array<number | TransactionArgument> | TransactionArgument }

export function updateNextEpochProtocolPubkey( tx: Transaction, args: UpdateNextEpochProtocolPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_next_epoch_protocol_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.protocolPubkey, `vector<u8>`), pure(tx, args.proofOfPossession, `vector<u8>`) ], }) }

export interface UpdateNextEpochWorkerAddressArgs { self: TransactionObjectInput; workerAddress: Array<number | TransactionArgument> | TransactionArgument }

export function updateNextEpochWorkerAddress( tx: Transaction, args: UpdateNextEpochWorkerAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_next_epoch_worker_address`, arguments: [ obj(tx, args.self), pure(tx, args.workerAddress, `vector<u8>`) ], }) }

export interface UpdateNextEpochWorkerPubkeyArgs { self: TransactionObjectInput; workerPubkey: Array<number | TransactionArgument> | TransactionArgument }

export function updateNextEpochWorkerPubkey( tx: Transaction, args: UpdateNextEpochWorkerPubkeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_next_epoch_worker_pubkey`, arguments: [ obj(tx, args.self), pure(tx, args.workerPubkey, `vector<u8>`) ], }) }

export interface UpdateProjectUrlArgs { self: TransactionObjectInput; projectUrl: Array<number | TransactionArgument> | TransactionArgument }

export function updateProjectUrl( tx: Transaction, args: UpdateProjectUrlArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::update_project_url`, arguments: [ obj(tx, args.self), pure(tx, args.projectUrl, `vector<u8>`) ], }) }

export function validateMetadata( tx: Transaction, metadata: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::validate_metadata`, arguments: [ obj(tx, metadata) ], }) }

export function validateMetadataBcs( tx: Transaction, metadata: Array<number | TransactionArgument> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::validate_metadata_bcs`, arguments: [ pure(tx, metadata, `vector<u8>`) ], }) }

export function votingPower( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::validator::voting_power`, arguments: [ obj(tx, self) ], }) }
