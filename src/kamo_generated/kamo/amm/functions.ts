import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface AddLiquidityArgs { market: TransactionObjectInput; ptCoin: TransactionObjectInput; syCoin: TransactionObjectInput; exchangeRate: TransactionObjectInput; clock: TransactionObjectInput }

export function addLiquidity( tx: Transaction, typeArgs: [string, string], args: AddLiquidityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::add_liquidity`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.ptCoin), obj(tx, args.syCoin), obj(tx, args.exchangeRate), obj(tx, args.clock) ], }) }

export interface CalcTradeArgs { market: TransactionObjectInput; preCompute: TransactionObjectInput; exchangeRate: TransactionObjectInput; ptAmount: bigint | TransactionArgument; sell: boolean | TransactionArgument }

export function calcTrade( tx: Transaction, typeArgs: [string, string], args: CalcTradeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::calc_trade`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.preCompute), obj(tx, args.exchangeRate), pure(tx, args.ptAmount, `u64`), pure(tx, args.sell, `bool`) ], }) }

export function claimFee( tx: Transaction, typeArgs: [string, string], market: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::claim_fee`, typeArguments: typeArgs, arguments: [ obj(tx, market) ], }) }

export interface CreateNewMarketArgs { expiry: bigint | TransactionArgument; scalarRoot: TransactionObjectInput; initialAnchor: TransactionObjectInput; lnFeeRateRoot: TransactionObjectInput; clock: TransactionObjectInput }

export function createNewMarket( tx: Transaction, typeArgs: [string, string], args: CreateNewMarketArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::create_new_market`, typeArguments: typeArgs, arguments: [ pure(tx, args.expiry, `u64`), obj(tx, args.scalarRoot), obj(tx, args.initialAnchor), obj(tx, args.lnFeeRateRoot), obj(tx, args.clock) ], }) }

export interface DivFixed64Args { a: TransactionObjectInput; b: TransactionObjectInput }

export function divFixed64( tx: Transaction, args: DivFixed64Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::div_fixed64`, arguments: [ obj(tx, args.a), obj(tx, args.b) ], }) }

export interface ExecuteTradeCoreSellPtArgs { market: TransactionObjectInput; exchangeRate: TransactionObjectInput; exactPtInCoin: TransactionObjectInput; clock: TransactionObjectInput }

export function executeTradeCoreSellPt( tx: Transaction, typeArgs: [string, string], args: ExecuteTradeCoreSellPtArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::execute_trade_core_sell_pt`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.exchangeRate), obj(tx, args.exactPtInCoin), obj(tx, args.clock) ], }) }

export interface ExecuteTradeCoreSellSyArgs { market: TransactionObjectInput; exchangeRate: TransactionObjectInput; syInCoin: TransactionObjectInput; ptAmount: bigint | TransactionArgument; clock: TransactionObjectInput }

export function executeTradeCoreSellSy( tx: Transaction, typeArgs: [string, string], args: ExecuteTradeCoreSellSyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::execute_trade_core_sell_sy`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.exchangeRate), obj(tx, args.syInCoin), pure(tx, args.ptAmount, `u64`), obj(tx, args.clock) ], }) }

export interface GetExchangeRateFromImpliedRateArgs { lnImpliedRate: TransactionObjectInput; timeToExpiry: bigint | TransactionArgument }

export function getExchangeRateFromImpliedRate( tx: Transaction, args: GetExchangeRateFromImpliedRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::get_exchange_rate_from_implied_rate`, arguments: [ obj(tx, args.lnImpliedRate), pure(tx, args.timeToExpiry, `u64`) ], }) }

export interface GetExchangeRatePtToAssetArgs { totalPt: bigint | TransactionArgument; totalAsset: bigint | TransactionArgument; rateScalar: TransactionObjectInput; rateAnchor: TransactionObjectInput; ptAmount: bigint | TransactionArgument; sell: boolean | TransactionArgument }

export function getExchangeRatePtToAsset( tx: Transaction, args: GetExchangeRatePtToAssetArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::get_exchange_rate_pt_to_asset`, arguments: [ pure(tx, args.totalPt, `u64`), pure(tx, args.totalAsset, `u64`), obj(tx, args.rateScalar), obj(tx, args.rateAnchor), pure(tx, args.ptAmount, `u64`), pure(tx, args.sell, `bool`) ], }) }

export interface GetLnImpliedRateArgs { totalPt: bigint | TransactionArgument; totalAsset: bigint | TransactionArgument; rateScalar: TransactionObjectInput; rateAnchor: TransactionObjectInput; timeToExpiry: bigint | TransactionArgument }

export function getLnImpliedRate( tx: Transaction, args: GetLnImpliedRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::get_ln_implied_rate`, arguments: [ pure(tx, args.totalPt, `u64`), pure(tx, args.totalAsset, `u64`), obj(tx, args.rateScalar), obj(tx, args.rateAnchor), pure(tx, args.timeToExpiry, `u64`) ], }) }

export function getMaxMarketProportion( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::get_max_market_proportion`, arguments: [ ], }) }

export interface GetRateAnchorArgs { totalPt: bigint | TransactionArgument; lastLnImpliedRate: TransactionObjectInput; totalAsset: bigint | TransactionArgument; rateScalar: TransactionObjectInput; timeToExpiry: bigint | TransactionArgument }

export function getRateAnchor( tx: Transaction, args: GetRateAnchorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::get_rate_anchor`, arguments: [ pure(tx, args.totalPt, `u64`), obj(tx, args.lastLnImpliedRate), pure(tx, args.totalAsset, `u64`), obj(tx, args.rateScalar), pure(tx, args.timeToExpiry, `u64`) ], }) }

export interface GetRateScalarArgs { market: TransactionObjectInput; timeToExpiry: bigint | TransactionArgument }

export function getRateScalar( tx: Transaction, typeArgs: [string, string], args: GetRateScalarArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::get_rate_scalar`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), pure(tx, args.timeToExpiry, `u64`) ], }) }

export interface IsExpiredArgs { market: TransactionObjectInput; clock: TransactionObjectInput }

export function isExpired( tx: Transaction, typeArgs: [string, string], args: IsExpiredArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::is_expired`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.clock) ], }) }

export interface MuldivFixed64Args { a: TransactionObjectInput; b: TransactionObjectInput; c: bigint | TransactionArgument }

export function muldivFixed64( tx: Transaction, args: MuldivFixed64Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::muldiv_fixed64`, arguments: [ obj(tx, args.a), obj(tx, args.b), pure(tx, args.c, `u128`) ], }) }

export interface MuldivFixed64U128U128Args { a: TransactionObjectInput; b: bigint | TransactionArgument; c: bigint | TransactionArgument }

export function muldivFixed64U128U128( tx: Transaction, args: MuldivFixed64U128U128Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::muldiv_fixed64_u128_u128`, arguments: [ obj(tx, args.a), pure(tx, args.b, `u128`), pure(tx, args.c, `u128`) ], }) }

export interface PreComputeValueArgs { market: TransactionObjectInput; exchangeRate: TransactionObjectInput; clock: TransactionObjectInput }

export function preComputeValue( tx: Transaction, typeArgs: [string, string], args: PreComputeValueArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::pre_compute_value`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.exchangeRate), obj(tx, args.clock) ], }) }

export interface RemoveLiquidityArgs { market: TransactionObjectInput; lpCoin: TransactionObjectInput }

export function removeLiquidity( tx: Transaction, typeArgs: [string, string], args: RemoveLiquidityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::remove_liquidity`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.lpCoin) ], }) }

export interface SetInitialLnImpliedRateArgs { market: TransactionObjectInput; exchangeRate: TransactionObjectInput; clock: TransactionObjectInput }

export function setInitialLnImpliedRate( tx: Transaction, typeArgs: [string, string], args: SetInitialLnImpliedRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::set_initial_ln_implied_rate`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.exchangeRate), obj(tx, args.clock) ], }) }

export interface SetNewMarketMarketTradeArgs { market: TransactionObjectInput; preCompute: TransactionObjectInput; exchangeRate: TransactionObjectInput; clock: TransactionObjectInput }

export function setNewMarketMarketTrade( tx: Transaction, typeArgs: [string, string], args: SetNewMarketMarketTradeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::set_new_market_market_trade`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.preCompute), obj(tx, args.exchangeRate), obj(tx, args.clock) ], }) }

export interface SubDivFixed64Args { a: TransactionObjectInput; b: TransactionObjectInput; c: TransactionObjectInput }

export function subDivFixed64( tx: Transaction, args: SubDivFixed64Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::sub_div_fixed64`, arguments: [ obj(tx, args.a), obj(tx, args.b), obj(tx, args.c) ], }) }

export interface SwapExactPtForSyArgs { market: TransactionObjectInput; exchangeRate: TransactionObjectInput; exactPtInCoin: TransactionObjectInput; clock: TransactionObjectInput }

export function swapExactPtForSy( tx: Transaction, typeArgs: [string, string], args: SwapExactPtForSyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::swap_exact_pt_for_sy`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.exchangeRate), obj(tx, args.exactPtInCoin), obj(tx, args.clock) ], }) }

export interface SwapSyForExactPtArgs { market: TransactionObjectInput; exchangeRate: TransactionObjectInput; exactSyInCoin: TransactionObjectInput; ptAmount: bigint | TransactionArgument; clock: TransactionObjectInput }

export function swapSyForExactPt( tx: Transaction, typeArgs: [string, string], args: SwapSyForExactPtArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::amm::swap_sy_for_exact_pt`, typeArguments: typeArgs, arguments: [ obj(tx, args.market), obj(tx, args.exchangeRate), obj(tx, args.exactSyInCoin), pure(tx, args.ptAmount, `u64`), obj(tx, args.clock) ], }) }
