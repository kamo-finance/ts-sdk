import {PUBLISHED_AT} from "..";
import {obj, vector} from "../../_framework/util";
import {Validator} from "../validator/structs";
import {GenesisValidatorMetadata, TokenAllocation} from "./structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface CreateArgs { suiSystemStateId: TransactionObjectInput; suiSupply: TransactionObjectInput; genesisChainParameters: TransactionObjectInput; genesisValidators: Array<TransactionObjectInput> | TransactionArgument; tokenDistributionSchedule: TransactionObjectInput }

export function create( tx: Transaction, args: CreateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::genesis::create`, arguments: [ obj(tx, args.suiSystemStateId), obj(tx, args.suiSupply), obj(tx, args.genesisChainParameters), vector(tx, `${GenesisValidatorMetadata.$typeName}`, args.genesisValidators), obj(tx, args.tokenDistributionSchedule) ], }) }

export function activateValidators( tx: Transaction, validators: Array<TransactionObjectInput> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::genesis::activate_validators`, arguments: [ vector(tx, `${Validator.$typeName}`, validators) ], }) }

export interface AllocateTokensArgs { suiSupply: TransactionObjectInput; allocations: Array<TransactionObjectInput> | TransactionArgument; validators: Array<TransactionObjectInput> | TransactionArgument }

export function allocateTokens( tx: Transaction, args: AllocateTokensArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::genesis::allocate_tokens`, arguments: [ obj(tx, args.suiSupply), vector(tx, `${TokenAllocation.$typeName}`, args.allocations), vector(tx, `${Validator.$typeName}`, args.validators) ], }) }
