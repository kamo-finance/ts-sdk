import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function new_( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::new`, arguments: [ ], }) }

export interface SplitArgs { self: TransactionObjectInput; splitAmount: bigint | TransactionArgument }

export function split( tx: Transaction, args: SplitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::split`, arguments: [ obj(tx, args.self), pure(tx, args.splitAmount, `u64`) ], }) }

export interface ActivateStakingPoolArgs { pool: TransactionObjectInput; activationEpoch: bigint | TransactionArgument }

export function activateStakingPool( tx: Transaction, args: ActivateStakingPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::activate_staking_pool`, arguments: [ obj(tx, args.pool), pure(tx, args.activationEpoch, `u64`) ], }) }

export interface CalculateFungibleStakedSuiWithdrawAmountArgs { latestExchangeRate: TransactionObjectInput; fungibleStakedSuiValue: bigint | TransactionArgument; fungibleStakedSuiDataPrincipalAmount: bigint | TransactionArgument; fungibleStakedSuiDataTotalSupply: bigint | TransactionArgument }

export function calculateFungibleStakedSuiWithdrawAmount( tx: Transaction, args: CalculateFungibleStakedSuiWithdrawAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::calculate_fungible_staked_sui_withdraw_amount`, arguments: [ obj(tx, args.latestExchangeRate), pure(tx, args.fungibleStakedSuiValue, `u64`), pure(tx, args.fungibleStakedSuiDataPrincipalAmount, `u64`), pure(tx, args.fungibleStakedSuiDataTotalSupply, `u64`) ], }) }

export function fungibleStakedSuiValue( tx: Transaction, fungibleStakedSui: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::fungible_staked_sui_value`, arguments: [ obj(tx, fungibleStakedSui) ], }) }

export interface CheckBalanceInvariantsArgs { pool: TransactionObjectInput; epoch: bigint | TransactionArgument }

export function checkBalanceInvariants( tx: Transaction, args: CheckBalanceInvariantsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::check_balance_invariants`, arguments: [ obj(tx, args.pool), pure(tx, args.epoch, `u64`) ], }) }

export interface ConvertToFungibleStakedSuiArgs { pool: TransactionObjectInput; stakedSui: TransactionObjectInput }

export function convertToFungibleStakedSui( tx: Transaction, args: ConvertToFungibleStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::convert_to_fungible_staked_sui`, arguments: [ obj(tx, args.pool), obj(tx, args.stakedSui) ], }) }

export interface DeactivateStakingPoolArgs { pool: TransactionObjectInput; deactivationEpoch: bigint | TransactionArgument }

export function deactivateStakingPool( tx: Transaction, args: DeactivateStakingPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::deactivate_staking_pool`, arguments: [ obj(tx, args.pool), pure(tx, args.deactivationEpoch, `u64`) ], }) }

export interface DepositRewardsArgs { pool: TransactionObjectInput; rewards: TransactionObjectInput }

export function depositRewards( tx: Transaction, args: DepositRewardsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::deposit_rewards`, arguments: [ obj(tx, args.pool), obj(tx, args.rewards) ], }) }

export function exchangeRates( tx: Transaction, pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::exchange_rates`, arguments: [ obj(tx, pool) ], }) }

export function fungibleStakedSuiPoolId( tx: Transaction, fungibleStakedSui: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::fungible_staked_sui_pool_id`, arguments: [ obj(tx, fungibleStakedSui) ], }) }

export interface GetSuiAmountArgs { exchangeRate: TransactionObjectInput; tokenAmount: bigint | TransactionArgument }

export function getSuiAmount( tx: Transaction, args: GetSuiAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::get_sui_amount`, arguments: [ obj(tx, args.exchangeRate), pure(tx, args.tokenAmount, `u64`) ], }) }

export interface GetTokenAmountArgs { exchangeRate: TransactionObjectInput; suiAmount: bigint | TransactionArgument }

export function getTokenAmount( tx: Transaction, args: GetTokenAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::get_token_amount`, arguments: [ obj(tx, args.exchangeRate), pure(tx, args.suiAmount, `u64`) ], }) }

export function suiAmount( tx: Transaction, exchangeRate: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::sui_amount`, arguments: [ obj(tx, exchangeRate) ], }) }

export function initialExchangeRate( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::initial_exchange_rate`, arguments: [ ], }) }

export interface IsEqualStakingMetadataArgs { self: TransactionObjectInput; other: TransactionObjectInput }

export function isEqualStakingMetadata( tx: Transaction, args: IsEqualStakingMetadataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::is_equal_staking_metadata`, arguments: [ obj(tx, args.self), obj(tx, args.other) ], }) }

export function isInactive( tx: Transaction, pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::is_inactive`, arguments: [ obj(tx, pool) ], }) }

export function isPreactive( tx: Transaction, pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::is_preactive`, arguments: [ obj(tx, pool) ], }) }

export interface IsPreactiveAtEpochArgs { pool: TransactionObjectInput; epoch: bigint | TransactionArgument }

export function isPreactiveAtEpoch( tx: Transaction, args: IsPreactiveAtEpochArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::is_preactive_at_epoch`, arguments: [ obj(tx, args.pool), pure(tx, args.epoch, `u64`) ], }) }

export interface JoinFungibleStakedSuiArgs { self: TransactionObjectInput; other: TransactionObjectInput }

export function joinFungibleStakedSui( tx: Transaction, args: JoinFungibleStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::join_fungible_staked_sui`, arguments: [ obj(tx, args.self), obj(tx, args.other) ], }) }

export interface JoinStakedSuiArgs { self: TransactionObjectInput; other: TransactionObjectInput }

export function joinStakedSui( tx: Transaction, args: JoinStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::join_staked_sui`, arguments: [ obj(tx, args.self), obj(tx, args.other) ], }) }

export function pendingStakeAmount( tx: Transaction, stakingPool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::pending_stake_amount`, arguments: [ obj(tx, stakingPool) ], }) }

export function pendingStakeWithdrawAmount( tx: Transaction, stakingPool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::pending_stake_withdraw_amount`, arguments: [ obj(tx, stakingPool) ], }) }

export function poolId( tx: Transaction, stakedSui: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::pool_id`, arguments: [ obj(tx, stakedSui) ], }) }

export function poolTokenAmount( tx: Transaction, exchangeRate: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::pool_token_amount`, arguments: [ obj(tx, exchangeRate) ], }) }

export interface PoolTokenExchangeRateAtEpochArgs { pool: TransactionObjectInput; epoch: bigint | TransactionArgument }

export function poolTokenExchangeRateAtEpoch( tx: Transaction, args: PoolTokenExchangeRateAtEpochArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::pool_token_exchange_rate_at_epoch`, arguments: [ obj(tx, args.pool), pure(tx, args.epoch, `u64`) ], }) }

export function processPendingStake( tx: Transaction, pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::process_pending_stake`, arguments: [ obj(tx, pool) ], }) }

export function processPendingStakeWithdraw( tx: Transaction, pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::process_pending_stake_withdraw`, arguments: [ obj(tx, pool) ], }) }

export function processPendingStakesAndWithdraws( tx: Transaction, pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::process_pending_stakes_and_withdraws`, arguments: [ obj(tx, pool) ], }) }

export interface RedeemFungibleStakedSuiArgs { pool: TransactionObjectInput; fungibleStakedSui: TransactionObjectInput }

export function redeemFungibleStakedSui( tx: Transaction, args: RedeemFungibleStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::redeem_fungible_staked_sui`, arguments: [ obj(tx, args.pool), obj(tx, args.fungibleStakedSui) ], }) }

export interface RequestAddStakeArgs { pool: TransactionObjectInput; stake: TransactionObjectInput; stakeActivationEpoch: bigint | TransactionArgument }

export function requestAddStake( tx: Transaction, args: RequestAddStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::request_add_stake`, arguments: [ obj(tx, args.pool), obj(tx, args.stake), pure(tx, args.stakeActivationEpoch, `u64`) ], }) }

export function stakeActivationEpoch( tx: Transaction, stakedSui: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::stake_activation_epoch`, arguments: [ obj(tx, stakedSui) ], }) }

export interface RequestWithdrawStakeArgs { pool: TransactionObjectInput; stakedSui: TransactionObjectInput }

export function requestWithdrawStake( tx: Transaction, args: RequestWithdrawStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::request_withdraw_stake`, arguments: [ obj(tx, args.pool), obj(tx, args.stakedSui) ], }) }

export interface SplitFungibleStakedSuiArgs { fungibleStakedSui: TransactionObjectInput; splitAmount: bigint | TransactionArgument }

export function splitFungibleStakedSui( tx: Transaction, args: SplitFungibleStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::split_fungible_staked_sui`, arguments: [ obj(tx, args.fungibleStakedSui), pure(tx, args.splitAmount, `u64`) ], }) }

export interface SplitStakedSuiArgs { stake: TransactionObjectInput; splitAmount: bigint | TransactionArgument }

export function splitStakedSui( tx: Transaction, args: SplitStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::split_staked_sui`, arguments: [ obj(tx, args.stake), pure(tx, args.splitAmount, `u64`) ], }) }

export function stakedSuiAmount( tx: Transaction, stakedSui: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::staked_sui_amount`, arguments: [ obj(tx, stakedSui) ], }) }

export function suiBalance( tx: Transaction, pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::sui_balance`, arguments: [ obj(tx, pool) ], }) }

export function unwrapStakedSui( tx: Transaction, stakedSui: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::unwrap_staked_sui`, arguments: [ obj(tx, stakedSui) ], }) }

export interface WithdrawFromPrincipalArgs { pool: TransactionObjectInput; stakedSui: TransactionObjectInput }

export function withdrawFromPrincipal( tx: Transaction, args: WithdrawFromPrincipalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::withdraw_from_principal`, arguments: [ obj(tx, args.pool), obj(tx, args.stakedSui) ], }) }

export interface WithdrawRewardsArgs { pool: TransactionObjectInput; principalWithdrawAmount: bigint | TransactionArgument; poolTokenWithdrawAmount: bigint | TransactionArgument; epoch: bigint | TransactionArgument }

export function withdrawRewards( tx: Transaction, args: WithdrawRewardsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::staking_pool::withdraw_rewards`, arguments: [ obj(tx, args.pool), pure(tx, args.principalWithdrawAmount, `u64`), pure(tx, args.poolTokenWithdrawAmount, `u64`), pure(tx, args.epoch, `u64`) ], }) }
