import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface CreateArgs { balance: TransactionObjectInput; initialDistributionAmount: bigint | TransactionArgument; stakeSubsidyPeriodLength: bigint | TransactionArgument; stakeSubsidyDecreaseRate: number | TransactionArgument }

export function create( tx: Transaction, args: CreateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stake_subsidy::create`, arguments: [ obj(tx, args.balance), pure(tx, args.initialDistributionAmount, `u64`), pure(tx, args.stakeSubsidyPeriodLength, `u64`), pure(tx, args.stakeSubsidyDecreaseRate, `u16`) ], }) }

export function advanceEpoch( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stake_subsidy::advance_epoch`, arguments: [ obj(tx, self) ], }) }

export function currentEpochSubsidyAmount( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stake_subsidy::current_epoch_subsidy_amount`, arguments: [ obj(tx, self) ], }) }

export function getDistributionCounter( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stake_subsidy::get_distribution_counter`, arguments: [ obj(tx, self) ], }) }
