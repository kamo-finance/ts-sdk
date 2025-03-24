import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface BurnArgs { treasuryCap: TransactionObjectInput; coin: TransactionObjectInput }

export function burn( tx: Transaction, args: BurnArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kamo::burn`, arguments: [ obj(tx, args.treasuryCap), obj(tx, args.coin) ], }) }

export function decimals( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kamo::decimals`, arguments: [ ], }) }

export interface MintArgs { treasuryCap: TransactionObjectInput; amount: bigint | TransactionArgument; recipient: string | TransactionArgument }

export function mint( tx: Transaction, args: MintArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kamo::mint`, arguments: [ obj(tx, args.treasuryCap), pure(tx, args.amount, `u64`), pure(tx, args.recipient, `address`) ], }) }

export function init( tx: Transaction, witness: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kamo::init`, arguments: [ obj(tx, witness) ], }) }

export function initialSupply( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kamo::initial_supply`, arguments: [ ], }) }
