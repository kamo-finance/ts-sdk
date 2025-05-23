import {PUBLISHED_AT} from "..";
import {obj} from "../../_framework/util";
import {Transaction, TransactionObjectInput} from "@mysten/sui/transactions";

export function init( tx: Transaction, otw: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::PT::init`, arguments: [ obj(tx, otw) ], }) }
