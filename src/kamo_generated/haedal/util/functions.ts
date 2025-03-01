import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {ID} from "../../sui/object/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface GetSuiAmountArgs { exchangeRate: TransactionObjectInput; tokenAmount: bigint | TransactionArgument }

export function getSuiAmount( tx: Transaction, args: GetSuiAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::util::get_sui_amount`, arguments: [ obj(tx, args.exchangeRate), pure(tx, args.tokenAmount, `u64`) ], }) }

export interface GetTokenAmountArgs { exchangeRate: TransactionObjectInput; inputSuiAmount: bigint | TransactionArgument }

export function getTokenAmount( tx: Transaction, args: GetTokenAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::util::get_token_amount`, arguments: [ obj(tx, args.exchangeRate), pure(tx, args.inputSuiAmount, `u64`) ], }) }

export interface PoolTokenExchangeRateAtEpochArgs { exchangeRates: TransactionObjectInput; epoch: bigint | TransactionArgument }

export function poolTokenExchangeRateAtEpoch( tx: Transaction, args: PoolTokenExchangeRateAtEpochArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::util::pool_token_exchange_rate_at_epoch`, arguments: [ obj(tx, args.exchangeRates), pure(tx, args.epoch, `u64`) ], }) }

export interface MulDivArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument; z: bigint | TransactionArgument }

export function mulDiv( tx: Transaction, args: MulDivArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::util::mul_div`, arguments: [ pure(tx, args.x, `u64`), pure(tx, args.y, `u64`), pure(tx, args.z, `u64`) ], }) }

export interface CalculateRewardsArgs { wrapper: TransactionObjectInput; poolId: string | TransactionArgument; stakedAmount: bigint | TransactionArgument; stakeActivationEpoch: bigint | TransactionArgument; currentEpoch: bigint | TransactionArgument }

export function calculateRewards( tx: Transaction, args: CalculateRewardsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::util::calculate_rewards`, arguments: [ obj(tx, args.wrapper), pure(tx, args.poolId, `${ID.$typeName}`), pure(tx, args.stakedAmount, `u64`), pure(tx, args.stakeActivationEpoch, `u64`), pure(tx, args.currentEpoch, `u64`) ], }) }
