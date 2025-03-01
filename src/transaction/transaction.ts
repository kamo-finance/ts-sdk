import { Transaction } from '@mysten/sui/transactions';
import { Market } from '../market/market';

export interface AddLiquidityParams {
    amountPT: string;
    amountSY: string;
    market: Market;
}

export interface IKamoTransaction {
    AddLiquidity: (params: AddLiquidityParams) => Transaction;
}