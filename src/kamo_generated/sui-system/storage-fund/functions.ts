import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function new_( tx: Transaction, initialFund: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::storage_fund::new`, arguments: [ obj(tx, initialFund) ], }) }

export interface AdvanceEpochArgs { self: TransactionObjectInput; storageCharges: TransactionObjectInput; storageFundReinvestment: TransactionObjectInput; leftoverStakingRewards: TransactionObjectInput; storageRebateAmount: bigint | TransactionArgument; nonRefundableStorageFeeAmount: bigint | TransactionArgument }

export function advanceEpoch( tx: Transaction, args: AdvanceEpochArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::storage_fund::advance_epoch`, arguments: [ obj(tx, args.self), obj(tx, args.storageCharges), obj(tx, args.storageFundReinvestment), obj(tx, args.leftoverStakingRewards), pure(tx, args.storageRebateAmount, `u64`), pure(tx, args.nonRefundableStorageFeeAmount, `u64`) ], }) }

export function totalBalance( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::storage_fund::total_balance`, arguments: [ obj(tx, self) ], }) }

export function totalObjectStorageRebates( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::storage_fund::total_object_storage_rebates`, arguments: [ obj(tx, self) ], }) }
