import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface CreateFromRationalArgs { numerator: bigint | TransactionArgument; denominator: bigint | TransactionArgument }

export function createFromRational( tx: Transaction, args: CreateFromRationalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::create_from_rational`, arguments: [ pure(tx, args.numerator, `u128`), pure(tx, args.denominator, `u128`) ], }) }

export function createFromRawValue( tx: Transaction, value: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::create_from_raw_value`, arguments: [ pure(tx, value, `u128`) ], }) }

export function getRawValue( tx: Transaction, num: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::get_raw_value`, arguments: [ obj(tx, num) ], }) }

export function isZero( tx: Transaction, num: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::is_zero`, arguments: [ obj(tx, num) ], }) }

export interface AddArgs { x: TransactionObjectInput; y: TransactionObjectInput }

export function add( tx: Transaction, args: AddArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::add`, arguments: [ obj(tx, args.x), obj(tx, args.y) ], }) }

export interface SubArgs { x: TransactionObjectInput; y: TransactionObjectInput }

export function sub( tx: Transaction, args: SubArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::sub`, arguments: [ obj(tx, args.x), obj(tx, args.y) ], }) }

export interface MaxArgs { num1: TransactionObjectInput; num2: TransactionObjectInput }

export function max( tx: Transaction, args: MaxArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::max`, arguments: [ obj(tx, args.num1), obj(tx, args.num2) ], }) }

export interface MinArgs { num1: TransactionObjectInput; num2: TransactionObjectInput }

export function min( tx: Transaction, args: MinArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::min`, arguments: [ obj(tx, args.num1), obj(tx, args.num2) ], }) }

export interface EqualArgs { num1: TransactionObjectInput; num2: TransactionObjectInput }

export function equal( tx: Transaction, args: EqualArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::equal`, arguments: [ obj(tx, args.num1), obj(tx, args.num2) ], }) }

export interface AlmostEqualArgs { num1: TransactionObjectInput; num2: TransactionObjectInput; precision: TransactionObjectInput }

export function almostEqual( tx: Transaction, args: AlmostEqualArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::almost_equal`, arguments: [ obj(tx, args.num1), obj(tx, args.num2), obj(tx, args.precision) ], }) }

export function ceil( tx: Transaction, num: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::ceil`, arguments: [ obj(tx, num) ], }) }

export function createFromU128( tx: Transaction, val: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::create_from_u128`, arguments: [ pure(tx, val, `u128`) ], }) }

export interface DivideU128Args { val: bigint | TransactionArgument; divisor: TransactionObjectInput }

export function divideU128( tx: Transaction, args: DivideU128Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::divide_u128`, arguments: [ pure(tx, args.val, `u128`), obj(tx, args.divisor) ], }) }

export function floor( tx: Transaction, num: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::floor`, arguments: [ obj(tx, num) ], }) }

export interface GreaterArgs { num1: TransactionObjectInput; num2: TransactionObjectInput }

export function greater( tx: Transaction, args: GreaterArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::greater`, arguments: [ obj(tx, args.num1), obj(tx, args.num2) ], }) }

export interface GreaterOrEqualArgs { num1: TransactionObjectInput; num2: TransactionObjectInput }

export function greaterOrEqual( tx: Transaction, args: GreaterOrEqualArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::greater_or_equal`, arguments: [ obj(tx, args.num1), obj(tx, args.num2) ], }) }

export interface LessArgs { num1: TransactionObjectInput; num2: TransactionObjectInput }

export function less( tx: Transaction, args: LessArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::less`, arguments: [ obj(tx, args.num1), obj(tx, args.num2) ], }) }

export interface LessOrEqualArgs { num1: TransactionObjectInput; num2: TransactionObjectInput }

export function lessOrEqual( tx: Transaction, args: LessOrEqualArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::less_or_equal`, arguments: [ obj(tx, args.num1), obj(tx, args.num2) ], }) }

export interface MultiplyU128Args { val: bigint | TransactionArgument; multiplier: TransactionObjectInput }

export function multiplyU128( tx: Transaction, args: MultiplyU128Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::multiply_u128`, arguments: [ pure(tx, args.val, `u128`), obj(tx, args.multiplier) ], }) }

export function round( tx: Transaction, num: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fixed_point64::round`, arguments: [ obj(tx, num) ], }) }
