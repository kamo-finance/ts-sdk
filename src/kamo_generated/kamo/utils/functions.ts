import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface AssetToSyArgs { totalAsset: bigint | TransactionArgument; exchangeRate: TransactionObjectInput }

export function assetToSy( tx: Transaction, args: AssetToSyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::asset_to_sy`, arguments: [ pure(tx, args.totalAsset, `u64`), obj(tx, args.exchangeRate) ], }) }

export interface CmpTypeNamesArgs { a: TransactionObjectInput; b: TransactionObjectInput }

export function cmpTypeNames( tx: Transaction, args: CmpTypeNamesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::cmp_type_names`, arguments: [ obj(tx, args.a), obj(tx, args.b) ], }) }

export interface SyToAssetArgs { totalSy: bigint | TransactionArgument; exchangeRate: TransactionObjectInput }

export function syToAsset( tx: Transaction, args: SyToAssetArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::sy_to_asset`, arguments: [ pure(tx, args.totalSy, `u64`), obj(tx, args.exchangeRate) ], }) }
