import {PUBLISHED_AT} from "..";
import {obj} from "../../_framework/util";
import {Transaction, TransactionObjectInput} from "@mysten/sui/transactions";

export interface MintArgs { system: TransactionObjectInput; cap: TransactionObjectInput; coin: TransactionObjectInput }

export function mint( tx: Transaction, args: MintArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::system::mint`, arguments: [ obj(tx, args.system), obj(tx, args.cap), obj(tx, args.coin) ], }) }

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::system::init`, arguments: [ ], }) }

export interface FirstPutUsdcArgs { system: TransactionObjectInput; coin: TransactionObjectInput }

export function firstPutUsdc( tx: Transaction, args: FirstPutUsdcArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::system::first_put_usdc`, arguments: [ obj(tx, args.system), obj(tx, args.coin) ], }) }

export function getExchangeRate( tx: Transaction, system: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::system::get_exchange_rate`, arguments: [ obj(tx, system) ], }) }

export interface PutUsdcArgs { system: TransactionObjectInput; coin: TransactionObjectInput }

export function putUsdc( tx: Transaction, args: PutUsdcArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::system::put_usdc`, arguments: [ obj(tx, args.system), obj(tx, args.coin) ], }) }
