import * as reified from "../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {StakedSui} from "../../sui-system/staking-pool/structs";
import {Balance} from "../../sui/balance/structs";
import {TreasuryCap} from "../../sui/coin/structs";
import {ID, UID} from "../../sui/object/structs";
import {SUI} from "../../sui/sui/structs";
import {Table} from "../../sui/table/structs";
import {VecMap} from "../../sui/vec-map/structs";
import {StakingConfig} from "../config/structs";
import {HASUI} from "../hasui/structs";
import {PKG_V1} from "../index";
import {TableQueue} from "../table-queue/structs";
import {Vault} from "../vault/structs";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== VersionUpdated =============================== */

export function isVersionUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::VersionUpdated`; }

export interface VersionUpdatedFields { old: ToField<"u64">; new: ToField<"u64"> }

export type VersionUpdatedReified = Reified< VersionUpdated, VersionUpdatedFields >;

export class VersionUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::VersionUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = VersionUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::VersionUpdated`; readonly $typeArgs: []; readonly $isPhantom = VersionUpdated.$isPhantom;

 readonly old: ToField<"u64">; readonly new: ToField<"u64">

 private constructor(typeArgs: [], fields: VersionUpdatedFields, ) { this.$fullTypeName = composeSuiType( VersionUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::VersionUpdated`; this.$typeArgs = typeArgs;

 this.old = fields.old;; this.new = fields.new; }

 static reified( ): VersionUpdatedReified { return { typeName: VersionUpdated.$typeName, fullTypeName: composeSuiType( VersionUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::staking::VersionUpdated`, typeArgs: [ ] as [], isPhantom: VersionUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => VersionUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VersionUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => VersionUpdated.fromBcs( data, ), bcs: VersionUpdated.bcs, fromJSONField: (field: any) => VersionUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => VersionUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => VersionUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => VersionUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => VersionUpdated.fetch( client, id, ), new: ( fields: VersionUpdatedFields, ) => { return new VersionUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return VersionUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<VersionUpdated>> { return phantom(VersionUpdated.reified( )); } static get p() { return VersionUpdated.phantom() }

 static get bcs() { return bcs.struct("VersionUpdated", {

 old: bcs.u64(), new: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): VersionUpdated { return VersionUpdated.reified( ).new( { old: decodeFromFields("u64", fields.old), new: decodeFromFields("u64", fields.new) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): VersionUpdated { if (!isVersionUpdated(item.type)) { throw new Error("not a VersionUpdated type");

 }

 return VersionUpdated.reified( ).new( { old: decodeFromFieldsWithTypes("u64", item.fields.old), new: decodeFromFieldsWithTypes("u64", item.fields.new) } ) }

 static fromBcs( data: Uint8Array ): VersionUpdated { return VersionUpdated.fromFields( VersionUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 old: this.old.toString(),new: this.new.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): VersionUpdated { return VersionUpdated.reified( ).new( { old: decodeFromJSONField("u64", field.old), new: decodeFromJSONField("u64", field.new) } ) }

 static fromJSON( json: Record<string, any> ): VersionUpdated { if (json.$typeName !== VersionUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return VersionUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): VersionUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVersionUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VersionUpdated object`); } return VersionUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): VersionUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVersionUpdated(data.bcs.type)) { throw new Error(`object at is not a VersionUpdated object`); }

 return VersionUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return VersionUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<VersionUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VersionUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVersionUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VersionUpdated object`); }

 return VersionUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== EpochClaim =============================== */

export function isEpochClaim(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::EpochClaim`; }

export interface EpochClaimFields { epoch: ToField<"u64">; amount: ToField<"u64">; approved: ToField<"bool"> }

export type EpochClaimReified = Reified< EpochClaim, EpochClaimFields >;

export class EpochClaim implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::EpochClaim`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = EpochClaim.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::EpochClaim`; readonly $typeArgs: []; readonly $isPhantom = EpochClaim.$isPhantom;

 readonly epoch: ToField<"u64">; readonly amount: ToField<"u64">; readonly approved: ToField<"bool">

 private constructor(typeArgs: [], fields: EpochClaimFields, ) { this.$fullTypeName = composeSuiType( EpochClaim.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::EpochClaim`; this.$typeArgs = typeArgs;

 this.epoch = fields.epoch;; this.amount = fields.amount;; this.approved = fields.approved; }

 static reified( ): EpochClaimReified { return { typeName: EpochClaim.$typeName, fullTypeName: composeSuiType( EpochClaim.$typeName, ...[] ) as `${typeof PKG_V1}::staking::EpochClaim`, typeArgs: [ ] as [], isPhantom: EpochClaim.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => EpochClaim.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => EpochClaim.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => EpochClaim.fromBcs( data, ), bcs: EpochClaim.bcs, fromJSONField: (field: any) => EpochClaim.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => EpochClaim.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => EpochClaim.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => EpochClaim.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => EpochClaim.fetch( client, id, ), new: ( fields: EpochClaimFields, ) => { return new EpochClaim( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return EpochClaim.reified() }

 static phantom( ): PhantomReified<ToTypeStr<EpochClaim>> { return phantom(EpochClaim.reified( )); } static get p() { return EpochClaim.phantom() }

 static get bcs() { return bcs.struct("EpochClaim", {

 epoch: bcs.u64(), amount: bcs.u64(), approved: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): EpochClaim { return EpochClaim.reified( ).new( { epoch: decodeFromFields("u64", fields.epoch), amount: decodeFromFields("u64", fields.amount), approved: decodeFromFields("bool", fields.approved) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): EpochClaim { if (!isEpochClaim(item.type)) { throw new Error("not a EpochClaim type");

 }

 return EpochClaim.reified( ).new( { epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), amount: decodeFromFieldsWithTypes("u64", item.fields.amount), approved: decodeFromFieldsWithTypes("bool", item.fields.approved) } ) }

 static fromBcs( data: Uint8Array ): EpochClaim { return EpochClaim.fromFields( EpochClaim.bcs.parse(data) ) }

 toJSONField() { return {

 epoch: this.epoch.toString(),amount: this.amount.toString(),approved: this.approved,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): EpochClaim { return EpochClaim.reified( ).new( { epoch: decodeFromJSONField("u64", field.epoch), amount: decodeFromJSONField("u64", field.amount), approved: decodeFromJSONField("bool", field.approved) } ) }

 static fromJSON( json: Record<string, any> ): EpochClaim { if (json.$typeName !== EpochClaim.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return EpochClaim.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): EpochClaim { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isEpochClaim(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a EpochClaim object`); } return EpochClaim.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): EpochClaim { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isEpochClaim(data.bcs.type)) { throw new Error(`object at is not a EpochClaim object`); }

 return EpochClaim.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return EpochClaim.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<EpochClaim> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching EpochClaim object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isEpochClaim(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a EpochClaim object`); }

 return EpochClaim.fromSuiObjectData( res.data ); }

 }

/* ============================== ExchangeRateUpdated =============================== */

export function isExchangeRateUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::ExchangeRateUpdated`; }

export interface ExchangeRateUpdatedFields { old: ToField<"u64">; new: ToField<"u64"> }

export type ExchangeRateUpdatedReified = Reified< ExchangeRateUpdated, ExchangeRateUpdatedFields >;

export class ExchangeRateUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::ExchangeRateUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ExchangeRateUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::ExchangeRateUpdated`; readonly $typeArgs: []; readonly $isPhantom = ExchangeRateUpdated.$isPhantom;

 readonly old: ToField<"u64">; readonly new: ToField<"u64">

 private constructor(typeArgs: [], fields: ExchangeRateUpdatedFields, ) { this.$fullTypeName = composeSuiType( ExchangeRateUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::ExchangeRateUpdated`; this.$typeArgs = typeArgs;

 this.old = fields.old;; this.new = fields.new; }

 static reified( ): ExchangeRateUpdatedReified { return { typeName: ExchangeRateUpdated.$typeName, fullTypeName: composeSuiType( ExchangeRateUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::staking::ExchangeRateUpdated`, typeArgs: [ ] as [], isPhantom: ExchangeRateUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ExchangeRateUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ExchangeRateUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ExchangeRateUpdated.fromBcs( data, ), bcs: ExchangeRateUpdated.bcs, fromJSONField: (field: any) => ExchangeRateUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ExchangeRateUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ExchangeRateUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ExchangeRateUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ExchangeRateUpdated.fetch( client, id, ), new: ( fields: ExchangeRateUpdatedFields, ) => { return new ExchangeRateUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ExchangeRateUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ExchangeRateUpdated>> { return phantom(ExchangeRateUpdated.reified( )); } static get p() { return ExchangeRateUpdated.phantom() }

 static get bcs() { return bcs.struct("ExchangeRateUpdated", {

 old: bcs.u64(), new: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ExchangeRateUpdated { return ExchangeRateUpdated.reified( ).new( { old: decodeFromFields("u64", fields.old), new: decodeFromFields("u64", fields.new) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ExchangeRateUpdated { if (!isExchangeRateUpdated(item.type)) { throw new Error("not a ExchangeRateUpdated type");

 }

 return ExchangeRateUpdated.reified( ).new( { old: decodeFromFieldsWithTypes("u64", item.fields.old), new: decodeFromFieldsWithTypes("u64", item.fields.new) } ) }

 static fromBcs( data: Uint8Array ): ExchangeRateUpdated { return ExchangeRateUpdated.fromFields( ExchangeRateUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 old: this.old.toString(),new: this.new.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ExchangeRateUpdated { return ExchangeRateUpdated.reified( ).new( { old: decodeFromJSONField("u64", field.old), new: decodeFromJSONField("u64", field.new) } ) }

 static fromJSON( json: Record<string, any> ): ExchangeRateUpdated { if (json.$typeName !== ExchangeRateUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ExchangeRateUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ExchangeRateUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isExchangeRateUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ExchangeRateUpdated object`); } return ExchangeRateUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ExchangeRateUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isExchangeRateUpdated(data.bcs.type)) { throw new Error(`object at is not a ExchangeRateUpdated object`); }

 return ExchangeRateUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ExchangeRateUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ExchangeRateUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ExchangeRateUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isExchangeRateUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ExchangeRateUpdated object`); }

 return ExchangeRateUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== PoolInfo =============================== */

export function isPoolInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::PoolInfo`; }

export interface PoolInfoFields { stakedSuis: ToField<TableQueue<ToPhantom<StakedSui>>>; totalStaked: ToField<"u64">; rewards: ToField<"u64"> }

export type PoolInfoReified = Reified< PoolInfo, PoolInfoFields >;

export class PoolInfo implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::PoolInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PoolInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::PoolInfo`; readonly $typeArgs: []; readonly $isPhantom = PoolInfo.$isPhantom;

 readonly stakedSuis: ToField<TableQueue<ToPhantom<StakedSui>>>; readonly totalStaked: ToField<"u64">; readonly rewards: ToField<"u64">

 private constructor(typeArgs: [], fields: PoolInfoFields, ) { this.$fullTypeName = composeSuiType( PoolInfo.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::PoolInfo`; this.$typeArgs = typeArgs;

 this.stakedSuis = fields.stakedSuis;; this.totalStaked = fields.totalStaked;; this.rewards = fields.rewards; }

 static reified( ): PoolInfoReified { return { typeName: PoolInfo.$typeName, fullTypeName: composeSuiType( PoolInfo.$typeName, ...[] ) as `${typeof PKG_V1}::staking::PoolInfo`, typeArgs: [ ] as [], isPhantom: PoolInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PoolInfo.fromBcs( data, ), bcs: PoolInfo.bcs, fromJSONField: (field: any) => PoolInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PoolInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PoolInfo.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PoolInfo.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PoolInfo.fetch( client, id, ), new: ( fields: PoolInfoFields, ) => { return new PoolInfo( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolInfo.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PoolInfo>> { return phantom(PoolInfo.reified( )); } static get p() { return PoolInfo.phantom() }

 static get bcs() { return bcs.struct("PoolInfo", {

 staked_suis: TableQueue.bcs, total_staked: bcs.u64(), rewards: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): PoolInfo { return PoolInfo.reified( ).new( { stakedSuis: decodeFromFields(TableQueue.reified(reified.phantom(StakedSui.reified())), fields.staked_suis), totalStaked: decodeFromFields("u64", fields.total_staked), rewards: decodeFromFields("u64", fields.rewards) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PoolInfo { if (!isPoolInfo(item.type)) { throw new Error("not a PoolInfo type");

 }

 return PoolInfo.reified( ).new( { stakedSuis: decodeFromFieldsWithTypes(TableQueue.reified(reified.phantom(StakedSui.reified())), item.fields.staked_suis), totalStaked: decodeFromFieldsWithTypes("u64", item.fields.total_staked), rewards: decodeFromFieldsWithTypes("u64", item.fields.rewards) } ) }

 static fromBcs( data: Uint8Array ): PoolInfo { return PoolInfo.fromFields( PoolInfo.bcs.parse(data) ) }

 toJSONField() { return {

 stakedSuis: this.stakedSuis.toJSONField(),totalStaked: this.totalStaked.toString(),rewards: this.rewards.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PoolInfo { return PoolInfo.reified( ).new( { stakedSuis: decodeFromJSONField(TableQueue.reified(reified.phantom(StakedSui.reified())), field.stakedSuis), totalStaked: decodeFromJSONField("u64", field.totalStaked), rewards: decodeFromJSONField("u64", field.rewards) } ) }

 static fromJSON( json: Record<string, any> ): PoolInfo { if (json.$typeName !== PoolInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PoolInfo.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PoolInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolInfo object`); } return PoolInfo.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): PoolInfo { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPoolInfo(data.bcs.type)) { throw new Error(`object at is not a PoolInfo object`); }

 return PoolInfo.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PoolInfo.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<PoolInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolInfo object`); }

 return PoolInfo.fromSuiObjectData( res.data ); }

 }

/* ============================== PoolSystemUnstaked =============================== */

export function isPoolSystemUnstaked(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::PoolSystemUnstaked`; }

export interface PoolSystemUnstakedFields { validator: ToField<"address">; epoch: ToField<"u64">; suiAmount: ToField<"u64">; unstakedAll: ToField<"bool"> }

export type PoolSystemUnstakedReified = Reified< PoolSystemUnstaked, PoolSystemUnstakedFields >;

export class PoolSystemUnstaked implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::PoolSystemUnstaked`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PoolSystemUnstaked.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::PoolSystemUnstaked`; readonly $typeArgs: []; readonly $isPhantom = PoolSystemUnstaked.$isPhantom;

 readonly validator: ToField<"address">; readonly epoch: ToField<"u64">; readonly suiAmount: ToField<"u64">; readonly unstakedAll: ToField<"bool">

 private constructor(typeArgs: [], fields: PoolSystemUnstakedFields, ) { this.$fullTypeName = composeSuiType( PoolSystemUnstaked.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::PoolSystemUnstaked`; this.$typeArgs = typeArgs;

 this.validator = fields.validator;; this.epoch = fields.epoch;; this.suiAmount = fields.suiAmount;; this.unstakedAll = fields.unstakedAll; }

 static reified( ): PoolSystemUnstakedReified { return { typeName: PoolSystemUnstaked.$typeName, fullTypeName: composeSuiType( PoolSystemUnstaked.$typeName, ...[] ) as `${typeof PKG_V1}::staking::PoolSystemUnstaked`, typeArgs: [ ] as [], isPhantom: PoolSystemUnstaked.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolSystemUnstaked.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolSystemUnstaked.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PoolSystemUnstaked.fromBcs( data, ), bcs: PoolSystemUnstaked.bcs, fromJSONField: (field: any) => PoolSystemUnstaked.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PoolSystemUnstaked.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PoolSystemUnstaked.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PoolSystemUnstaked.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PoolSystemUnstaked.fetch( client, id, ), new: ( fields: PoolSystemUnstakedFields, ) => { return new PoolSystemUnstaked( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolSystemUnstaked.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PoolSystemUnstaked>> { return phantom(PoolSystemUnstaked.reified( )); } static get p() { return PoolSystemUnstaked.phantom() }

 static get bcs() { return bcs.struct("PoolSystemUnstaked", {

 validator: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), epoch: bcs.u64(), sui_amount: bcs.u64(), unstaked_all: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): PoolSystemUnstaked { return PoolSystemUnstaked.reified( ).new( { validator: decodeFromFields("address", fields.validator), epoch: decodeFromFields("u64", fields.epoch), suiAmount: decodeFromFields("u64", fields.sui_amount), unstakedAll: decodeFromFields("bool", fields.unstaked_all) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PoolSystemUnstaked { if (!isPoolSystemUnstaked(item.type)) { throw new Error("not a PoolSystemUnstaked type");

 }

 return PoolSystemUnstaked.reified( ).new( { validator: decodeFromFieldsWithTypes("address", item.fields.validator), epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), suiAmount: decodeFromFieldsWithTypes("u64", item.fields.sui_amount), unstakedAll: decodeFromFieldsWithTypes("bool", item.fields.unstaked_all) } ) }

 static fromBcs( data: Uint8Array ): PoolSystemUnstaked { return PoolSystemUnstaked.fromFields( PoolSystemUnstaked.bcs.parse(data) ) }

 toJSONField() { return {

 validator: this.validator,epoch: this.epoch.toString(),suiAmount: this.suiAmount.toString(),unstakedAll: this.unstakedAll,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PoolSystemUnstaked { return PoolSystemUnstaked.reified( ).new( { validator: decodeFromJSONField("address", field.validator), epoch: decodeFromJSONField("u64", field.epoch), suiAmount: decodeFromJSONField("u64", field.suiAmount), unstakedAll: decodeFromJSONField("bool", field.unstakedAll) } ) }

 static fromJSON( json: Record<string, any> ): PoolSystemUnstaked { if (json.$typeName !== PoolSystemUnstaked.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PoolSystemUnstaked.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PoolSystemUnstaked { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolSystemUnstaked(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolSystemUnstaked object`); } return PoolSystemUnstaked.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): PoolSystemUnstaked { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPoolSystemUnstaked(data.bcs.type)) { throw new Error(`object at is not a PoolSystemUnstaked object`); }

 return PoolSystemUnstaked.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PoolSystemUnstaked.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<PoolSystemUnstaked> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolSystemUnstaked object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolSystemUnstaked(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolSystemUnstaked object`); }

 return PoolSystemUnstaked.fromSuiObjectData( res.data ); }

 }

/* ============================== RewardsFeeCollected =============================== */

export function isRewardsFeeCollected(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::RewardsFeeCollected`; }

export interface RewardsFeeCollectedFields { owner: ToField<"address">; suiAmount: ToField<"u64"> }

export type RewardsFeeCollectedReified = Reified< RewardsFeeCollected, RewardsFeeCollectedFields >;

export class RewardsFeeCollected implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::RewardsFeeCollected`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = RewardsFeeCollected.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::RewardsFeeCollected`; readonly $typeArgs: []; readonly $isPhantom = RewardsFeeCollected.$isPhantom;

 readonly owner: ToField<"address">; readonly suiAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: RewardsFeeCollectedFields, ) { this.$fullTypeName = composeSuiType( RewardsFeeCollected.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::RewardsFeeCollected`; this.$typeArgs = typeArgs;

 this.owner = fields.owner;; this.suiAmount = fields.suiAmount; }

 static reified( ): RewardsFeeCollectedReified { return { typeName: RewardsFeeCollected.$typeName, fullTypeName: composeSuiType( RewardsFeeCollected.$typeName, ...[] ) as `${typeof PKG_V1}::staking::RewardsFeeCollected`, typeArgs: [ ] as [], isPhantom: RewardsFeeCollected.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RewardsFeeCollected.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RewardsFeeCollected.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RewardsFeeCollected.fromBcs( data, ), bcs: RewardsFeeCollected.bcs, fromJSONField: (field: any) => RewardsFeeCollected.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RewardsFeeCollected.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RewardsFeeCollected.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => RewardsFeeCollected.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => RewardsFeeCollected.fetch( client, id, ), new: ( fields: RewardsFeeCollectedFields, ) => { return new RewardsFeeCollected( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RewardsFeeCollected.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RewardsFeeCollected>> { return phantom(RewardsFeeCollected.reified( )); } static get p() { return RewardsFeeCollected.phantom() }

 static get bcs() { return bcs.struct("RewardsFeeCollected", {

 owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), sui_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): RewardsFeeCollected { return RewardsFeeCollected.reified( ).new( { owner: decodeFromFields("address", fields.owner), suiAmount: decodeFromFields("u64", fields.sui_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RewardsFeeCollected { if (!isRewardsFeeCollected(item.type)) { throw new Error("not a RewardsFeeCollected type");

 }

 return RewardsFeeCollected.reified( ).new( { owner: decodeFromFieldsWithTypes("address", item.fields.owner), suiAmount: decodeFromFieldsWithTypes("u64", item.fields.sui_amount) } ) }

 static fromBcs( data: Uint8Array ): RewardsFeeCollected { return RewardsFeeCollected.fromFields( RewardsFeeCollected.bcs.parse(data) ) }

 toJSONField() { return {

 owner: this.owner,suiAmount: this.suiAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RewardsFeeCollected { return RewardsFeeCollected.reified( ).new( { owner: decodeFromJSONField("address", field.owner), suiAmount: decodeFromJSONField("u64", field.suiAmount) } ) }

 static fromJSON( json: Record<string, any> ): RewardsFeeCollected { if (json.$typeName !== RewardsFeeCollected.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RewardsFeeCollected.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RewardsFeeCollected { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRewardsFeeCollected(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RewardsFeeCollected object`); } return RewardsFeeCollected.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): RewardsFeeCollected { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRewardsFeeCollected(data.bcs.type)) { throw new Error(`object at is not a RewardsFeeCollected object`); }

 return RewardsFeeCollected.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RewardsFeeCollected.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<RewardsFeeCollected> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RewardsFeeCollected object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRewardsFeeCollected(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RewardsFeeCollected object`); }

 return RewardsFeeCollected.fromSuiObjectData( res.data ); }

 }

/* ============================== ServiceFeeCollected =============================== */

export function isServiceFeeCollected(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::ServiceFeeCollected`; }

export interface ServiceFeeCollectedFields { owner: ToField<"address">; suiAmount: ToField<"u64"> }

export type ServiceFeeCollectedReified = Reified< ServiceFeeCollected, ServiceFeeCollectedFields >;

export class ServiceFeeCollected implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::ServiceFeeCollected`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ServiceFeeCollected.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::ServiceFeeCollected`; readonly $typeArgs: []; readonly $isPhantom = ServiceFeeCollected.$isPhantom;

 readonly owner: ToField<"address">; readonly suiAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: ServiceFeeCollectedFields, ) { this.$fullTypeName = composeSuiType( ServiceFeeCollected.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::ServiceFeeCollected`; this.$typeArgs = typeArgs;

 this.owner = fields.owner;; this.suiAmount = fields.suiAmount; }

 static reified( ): ServiceFeeCollectedReified { return { typeName: ServiceFeeCollected.$typeName, fullTypeName: composeSuiType( ServiceFeeCollected.$typeName, ...[] ) as `${typeof PKG_V1}::staking::ServiceFeeCollected`, typeArgs: [ ] as [], isPhantom: ServiceFeeCollected.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ServiceFeeCollected.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ServiceFeeCollected.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ServiceFeeCollected.fromBcs( data, ), bcs: ServiceFeeCollected.bcs, fromJSONField: (field: any) => ServiceFeeCollected.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ServiceFeeCollected.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ServiceFeeCollected.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ServiceFeeCollected.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ServiceFeeCollected.fetch( client, id, ), new: ( fields: ServiceFeeCollectedFields, ) => { return new ServiceFeeCollected( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ServiceFeeCollected.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ServiceFeeCollected>> { return phantom(ServiceFeeCollected.reified( )); } static get p() { return ServiceFeeCollected.phantom() }

 static get bcs() { return bcs.struct("ServiceFeeCollected", {

 owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), sui_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ServiceFeeCollected { return ServiceFeeCollected.reified( ).new( { owner: decodeFromFields("address", fields.owner), suiAmount: decodeFromFields("u64", fields.sui_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ServiceFeeCollected { if (!isServiceFeeCollected(item.type)) { throw new Error("not a ServiceFeeCollected type");

 }

 return ServiceFeeCollected.reified( ).new( { owner: decodeFromFieldsWithTypes("address", item.fields.owner), suiAmount: decodeFromFieldsWithTypes("u64", item.fields.sui_amount) } ) }

 static fromBcs( data: Uint8Array ): ServiceFeeCollected { return ServiceFeeCollected.fromFields( ServiceFeeCollected.bcs.parse(data) ) }

 toJSONField() { return {

 owner: this.owner,suiAmount: this.suiAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ServiceFeeCollected { return ServiceFeeCollected.reified( ).new( { owner: decodeFromJSONField("address", field.owner), suiAmount: decodeFromJSONField("u64", field.suiAmount) } ) }

 static fromJSON( json: Record<string, any> ): ServiceFeeCollected { if (json.$typeName !== ServiceFeeCollected.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ServiceFeeCollected.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ServiceFeeCollected { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isServiceFeeCollected(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ServiceFeeCollected object`); } return ServiceFeeCollected.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ServiceFeeCollected { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isServiceFeeCollected(data.bcs.type)) { throw new Error(`object at is not a ServiceFeeCollected object`); }

 return ServiceFeeCollected.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ServiceFeeCollected.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ServiceFeeCollected> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ServiceFeeCollected object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isServiceFeeCollected(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ServiceFeeCollected object`); }

 return ServiceFeeCollected.fromSuiObjectData( res.data ); }

 }

/* ============================== Staking =============================== */

export function isStaking(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::Staking`; }

export interface StakingFields { id: ToField<UID>; version: ToField<"u64">; config: ToField<StakingConfig>; suiVault: ToField<Vault<ToPhantom<SUI>>>; claimSuiVault: ToField<Vault<ToPhantom<SUI>>>; protocolSuiVault: ToField<Vault<ToPhantom<SUI>>>; serviceSuiVault: ToField<Vault<ToPhantom<SUI>>>; stsuiTreasuryCap: ToField<TreasuryCap<ToPhantom<HASUI>>>; unstakeEpochs: ToField<Vector<EpochClaim>>; totalStaked: ToField<"u64">; totalUnstaked: ToField<"u64">; totalRewards: ToField<"u64">; totalProtocolFees: ToField<"u64">; uncollectedProtocolFees: ToField<"u64">; stsuiSupply: ToField<"u64">; unclaimedSuiAmount: ToField<"u64">; pauseStake: ToField<"bool">; pauseUnstake: ToField<"bool">; validators: ToField<Vector<"address">>; pools: ToField<Table<"address", ToPhantom<PoolInfo>>>; userSelectedValidatorBals: ToField<VecMap<"address", Balance<ToPhantom<SUI>>>>; rewardsLastUpdatedEpoch: ToField<"u64"> }

export type StakingReified = Reified< Staking, StakingFields >;

export class Staking implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::Staking`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Staking.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::Staking`; readonly $typeArgs: []; readonly $isPhantom = Staking.$isPhantom;

 readonly id: ToField<UID>; readonly version: ToField<"u64">; readonly config: ToField<StakingConfig>; readonly suiVault: ToField<Vault<ToPhantom<SUI>>>; readonly claimSuiVault: ToField<Vault<ToPhantom<SUI>>>; readonly protocolSuiVault: ToField<Vault<ToPhantom<SUI>>>; readonly serviceSuiVault: ToField<Vault<ToPhantom<SUI>>>; readonly stsuiTreasuryCap: ToField<TreasuryCap<ToPhantom<HASUI>>>; readonly unstakeEpochs: ToField<Vector<EpochClaim>>; readonly totalStaked: ToField<"u64">; readonly totalUnstaked: ToField<"u64">; readonly totalRewards: ToField<"u64">; readonly totalProtocolFees: ToField<"u64">; readonly uncollectedProtocolFees: ToField<"u64">; readonly stsuiSupply: ToField<"u64">; readonly unclaimedSuiAmount: ToField<"u64">; readonly pauseStake: ToField<"bool">; readonly pauseUnstake: ToField<"bool">; readonly validators: ToField<Vector<"address">>; readonly pools: ToField<Table<"address", ToPhantom<PoolInfo>>>; readonly userSelectedValidatorBals: ToField<VecMap<"address", Balance<ToPhantom<SUI>>>>; readonly rewardsLastUpdatedEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: StakingFields, ) { this.$fullTypeName = composeSuiType( Staking.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::Staking`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.version = fields.version;; this.config = fields.config;; this.suiVault = fields.suiVault;; this.claimSuiVault = fields.claimSuiVault;; this.protocolSuiVault = fields.protocolSuiVault;; this.serviceSuiVault = fields.serviceSuiVault;; this.stsuiTreasuryCap = fields.stsuiTreasuryCap;; this.unstakeEpochs = fields.unstakeEpochs;; this.totalStaked = fields.totalStaked;; this.totalUnstaked = fields.totalUnstaked;; this.totalRewards = fields.totalRewards;; this.totalProtocolFees = fields.totalProtocolFees;; this.uncollectedProtocolFees = fields.uncollectedProtocolFees;; this.stsuiSupply = fields.stsuiSupply;; this.unclaimedSuiAmount = fields.unclaimedSuiAmount;; this.pauseStake = fields.pauseStake;; this.pauseUnstake = fields.pauseUnstake;; this.validators = fields.validators;; this.pools = fields.pools;; this.userSelectedValidatorBals = fields.userSelectedValidatorBals;; this.rewardsLastUpdatedEpoch = fields.rewardsLastUpdatedEpoch; }

 static reified( ): StakingReified { return { typeName: Staking.$typeName, fullTypeName: composeSuiType( Staking.$typeName, ...[] ) as `${typeof PKG_V1}::staking::Staking`, typeArgs: [ ] as [], isPhantom: Staking.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Staking.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Staking.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Staking.fromBcs( data, ), bcs: Staking.bcs, fromJSONField: (field: any) => Staking.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Staking.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Staking.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Staking.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Staking.fetch( client, id, ), new: ( fields: StakingFields, ) => { return new Staking( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Staking.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Staking>> { return phantom(Staking.reified( )); } static get p() { return Staking.phantom() }

 static get bcs() { return bcs.struct("Staking", {

 id: UID.bcs, version: bcs.u64(), config: StakingConfig.bcs, sui_vault: Vault.bcs, claim_sui_vault: Vault.bcs, protocol_sui_vault: Vault.bcs, service_sui_vault: Vault.bcs, stsui_treasury_cap: TreasuryCap.bcs, unstake_epochs: bcs.vector(EpochClaim.bcs), total_staked: bcs.u64(), total_unstaked: bcs.u64(), total_rewards: bcs.u64(), total_protocol_fees: bcs.u64(), uncollected_protocol_fees: bcs.u64(), stsui_supply: bcs.u64(), unclaimed_sui_amount: bcs.u64(), pause_stake: bcs.bool(), pause_unstake: bcs.bool(), validators: bcs.vector(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), pools: Table.bcs, user_selected_validator_bals: VecMap.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), Balance.bcs), rewards_last_updated_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Staking { return Staking.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), version: decodeFromFields("u64", fields.version), config: decodeFromFields(StakingConfig.reified(), fields.config), suiVault: decodeFromFields(Vault.reified(reified.phantom(SUI.reified())), fields.sui_vault), claimSuiVault: decodeFromFields(Vault.reified(reified.phantom(SUI.reified())), fields.claim_sui_vault), protocolSuiVault: decodeFromFields(Vault.reified(reified.phantom(SUI.reified())), fields.protocol_sui_vault), serviceSuiVault: decodeFromFields(Vault.reified(reified.phantom(SUI.reified())), fields.service_sui_vault), stsuiTreasuryCap: decodeFromFields(TreasuryCap.reified(reified.phantom(HASUI.reified())), fields.stsui_treasury_cap), unstakeEpochs: decodeFromFields(reified.vector(EpochClaim.reified()), fields.unstake_epochs), totalStaked: decodeFromFields("u64", fields.total_staked), totalUnstaked: decodeFromFields("u64", fields.total_unstaked), totalRewards: decodeFromFields("u64", fields.total_rewards), totalProtocolFees: decodeFromFields("u64", fields.total_protocol_fees), uncollectedProtocolFees: decodeFromFields("u64", fields.uncollected_protocol_fees), stsuiSupply: decodeFromFields("u64", fields.stsui_supply), unclaimedSuiAmount: decodeFromFields("u64", fields.unclaimed_sui_amount), pauseStake: decodeFromFields("bool", fields.pause_stake), pauseUnstake: decodeFromFields("bool", fields.pause_unstake), validators: decodeFromFields(reified.vector("address"), fields.validators), pools: decodeFromFields(Table.reified(reified.phantom("address"), reified.phantom(PoolInfo.reified())), fields.pools), userSelectedValidatorBals: decodeFromFields(VecMap.reified("address", Balance.reified(reified.phantom(SUI.reified()))), fields.user_selected_validator_bals), rewardsLastUpdatedEpoch: decodeFromFields("u64", fields.rewards_last_updated_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Staking { if (!isStaking(item.type)) { throw new Error("not a Staking type");

 }

 return Staking.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), version: decodeFromFieldsWithTypes("u64", item.fields.version), config: decodeFromFieldsWithTypes(StakingConfig.reified(), item.fields.config), suiVault: decodeFromFieldsWithTypes(Vault.reified(reified.phantom(SUI.reified())), item.fields.sui_vault), claimSuiVault: decodeFromFieldsWithTypes(Vault.reified(reified.phantom(SUI.reified())), item.fields.claim_sui_vault), protocolSuiVault: decodeFromFieldsWithTypes(Vault.reified(reified.phantom(SUI.reified())), item.fields.protocol_sui_vault), serviceSuiVault: decodeFromFieldsWithTypes(Vault.reified(reified.phantom(SUI.reified())), item.fields.service_sui_vault), stsuiTreasuryCap: decodeFromFieldsWithTypes(TreasuryCap.reified(reified.phantom(HASUI.reified())), item.fields.stsui_treasury_cap), unstakeEpochs: decodeFromFieldsWithTypes(reified.vector(EpochClaim.reified()), item.fields.unstake_epochs), totalStaked: decodeFromFieldsWithTypes("u64", item.fields.total_staked), totalUnstaked: decodeFromFieldsWithTypes("u64", item.fields.total_unstaked), totalRewards: decodeFromFieldsWithTypes("u64", item.fields.total_rewards), totalProtocolFees: decodeFromFieldsWithTypes("u64", item.fields.total_protocol_fees), uncollectedProtocolFees: decodeFromFieldsWithTypes("u64", item.fields.uncollected_protocol_fees), stsuiSupply: decodeFromFieldsWithTypes("u64", item.fields.stsui_supply), unclaimedSuiAmount: decodeFromFieldsWithTypes("u64", item.fields.unclaimed_sui_amount), pauseStake: decodeFromFieldsWithTypes("bool", item.fields.pause_stake), pauseUnstake: decodeFromFieldsWithTypes("bool", item.fields.pause_unstake), validators: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.validators), pools: decodeFromFieldsWithTypes(Table.reified(reified.phantom("address"), reified.phantom(PoolInfo.reified())), item.fields.pools), userSelectedValidatorBals: decodeFromFieldsWithTypes(VecMap.reified("address", Balance.reified(reified.phantom(SUI.reified()))), item.fields.user_selected_validator_bals), rewardsLastUpdatedEpoch: decodeFromFieldsWithTypes("u64", item.fields.rewards_last_updated_epoch) } ) }

 static fromBcs( data: Uint8Array ): Staking { return Staking.fromFields( Staking.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,version: this.version.toString(),config: this.config.toJSONField(),suiVault: this.suiVault.toJSONField(),claimSuiVault: this.claimSuiVault.toJSONField(),protocolSuiVault: this.protocolSuiVault.toJSONField(),serviceSuiVault: this.serviceSuiVault.toJSONField(),stsuiTreasuryCap: this.stsuiTreasuryCap.toJSONField(),unstakeEpochs: fieldToJSON<Vector<EpochClaim>>(`vector<${EpochClaim.$typeName}>`, this.unstakeEpochs),totalStaked: this.totalStaked.toString(),totalUnstaked: this.totalUnstaked.toString(),totalRewards: this.totalRewards.toString(),totalProtocolFees: this.totalProtocolFees.toString(),uncollectedProtocolFees: this.uncollectedProtocolFees.toString(),stsuiSupply: this.stsuiSupply.toString(),unclaimedSuiAmount: this.unclaimedSuiAmount.toString(),pauseStake: this.pauseStake,pauseUnstake: this.pauseUnstake,validators: fieldToJSON<Vector<"address">>(`vector<address>`, this.validators),pools: this.pools.toJSONField(),userSelectedValidatorBals: this.userSelectedValidatorBals.toJSONField(),rewardsLastUpdatedEpoch: this.rewardsLastUpdatedEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Staking { return Staking.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), version: decodeFromJSONField("u64", field.version), config: decodeFromJSONField(StakingConfig.reified(), field.config), suiVault: decodeFromJSONField(Vault.reified(reified.phantom(SUI.reified())), field.suiVault), claimSuiVault: decodeFromJSONField(Vault.reified(reified.phantom(SUI.reified())), field.claimSuiVault), protocolSuiVault: decodeFromJSONField(Vault.reified(reified.phantom(SUI.reified())), field.protocolSuiVault), serviceSuiVault: decodeFromJSONField(Vault.reified(reified.phantom(SUI.reified())), field.serviceSuiVault), stsuiTreasuryCap: decodeFromJSONField(TreasuryCap.reified(reified.phantom(HASUI.reified())), field.stsuiTreasuryCap), unstakeEpochs: decodeFromJSONField(reified.vector(EpochClaim.reified()), field.unstakeEpochs), totalStaked: decodeFromJSONField("u64", field.totalStaked), totalUnstaked: decodeFromJSONField("u64", field.totalUnstaked), totalRewards: decodeFromJSONField("u64", field.totalRewards), totalProtocolFees: decodeFromJSONField("u64", field.totalProtocolFees), uncollectedProtocolFees: decodeFromJSONField("u64", field.uncollectedProtocolFees), stsuiSupply: decodeFromJSONField("u64", field.stsuiSupply), unclaimedSuiAmount: decodeFromJSONField("u64", field.unclaimedSuiAmount), pauseStake: decodeFromJSONField("bool", field.pauseStake), pauseUnstake: decodeFromJSONField("bool", field.pauseUnstake), validators: decodeFromJSONField(reified.vector("address"), field.validators), pools: decodeFromJSONField(Table.reified(reified.phantom("address"), reified.phantom(PoolInfo.reified())), field.pools), userSelectedValidatorBals: decodeFromJSONField(VecMap.reified("address", Balance.reified(reified.phantom(SUI.reified()))), field.userSelectedValidatorBals), rewardsLastUpdatedEpoch: decodeFromJSONField("u64", field.rewardsLastUpdatedEpoch) } ) }

 static fromJSON( json: Record<string, any> ): Staking { if (json.$typeName !== Staking.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Staking.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Staking { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStaking(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Staking object`); } return Staking.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Staking { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStaking(data.bcs.type)) { throw new Error(`object at is not a Staking object`); }

 return Staking.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Staking.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Staking> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Staking object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStaking(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Staking object`); }

 return Staking.fromSuiObjectData( res.data ); }

 }

/* ============================== SuiRewardsUpdated =============================== */

export function isSuiRewardsUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::SuiRewardsUpdated`; }

export interface SuiRewardsUpdatedFields { old: ToField<"u64">; new: ToField<"u64">; fee: ToField<"u64"> }

export type SuiRewardsUpdatedReified = Reified< SuiRewardsUpdated, SuiRewardsUpdatedFields >;

export class SuiRewardsUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::SuiRewardsUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SuiRewardsUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::SuiRewardsUpdated`; readonly $typeArgs: []; readonly $isPhantom = SuiRewardsUpdated.$isPhantom;

 readonly old: ToField<"u64">; readonly new: ToField<"u64">; readonly fee: ToField<"u64">

 private constructor(typeArgs: [], fields: SuiRewardsUpdatedFields, ) { this.$fullTypeName = composeSuiType( SuiRewardsUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::SuiRewardsUpdated`; this.$typeArgs = typeArgs;

 this.old = fields.old;; this.new = fields.new;; this.fee = fields.fee; }

 static reified( ): SuiRewardsUpdatedReified { return { typeName: SuiRewardsUpdated.$typeName, fullTypeName: composeSuiType( SuiRewardsUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::staking::SuiRewardsUpdated`, typeArgs: [ ] as [], isPhantom: SuiRewardsUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SuiRewardsUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SuiRewardsUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SuiRewardsUpdated.fromBcs( data, ), bcs: SuiRewardsUpdated.bcs, fromJSONField: (field: any) => SuiRewardsUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SuiRewardsUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SuiRewardsUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SuiRewardsUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SuiRewardsUpdated.fetch( client, id, ), new: ( fields: SuiRewardsUpdatedFields, ) => { return new SuiRewardsUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SuiRewardsUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SuiRewardsUpdated>> { return phantom(SuiRewardsUpdated.reified( )); } static get p() { return SuiRewardsUpdated.phantom() }

 static get bcs() { return bcs.struct("SuiRewardsUpdated", {

 old: bcs.u64(), new: bcs.u64(), fee: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): SuiRewardsUpdated { return SuiRewardsUpdated.reified( ).new( { old: decodeFromFields("u64", fields.old), new: decodeFromFields("u64", fields.new), fee: decodeFromFields("u64", fields.fee) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SuiRewardsUpdated { if (!isSuiRewardsUpdated(item.type)) { throw new Error("not a SuiRewardsUpdated type");

 }

 return SuiRewardsUpdated.reified( ).new( { old: decodeFromFieldsWithTypes("u64", item.fields.old), new: decodeFromFieldsWithTypes("u64", item.fields.new), fee: decodeFromFieldsWithTypes("u64", item.fields.fee) } ) }

 static fromBcs( data: Uint8Array ): SuiRewardsUpdated { return SuiRewardsUpdated.fromFields( SuiRewardsUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 old: this.old.toString(),new: this.new.toString(),fee: this.fee.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SuiRewardsUpdated { return SuiRewardsUpdated.reified( ).new( { old: decodeFromJSONField("u64", field.old), new: decodeFromJSONField("u64", field.new), fee: decodeFromJSONField("u64", field.fee) } ) }

 static fromJSON( json: Record<string, any> ): SuiRewardsUpdated { if (json.$typeName !== SuiRewardsUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SuiRewardsUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SuiRewardsUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSuiRewardsUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SuiRewardsUpdated object`); } return SuiRewardsUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SuiRewardsUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSuiRewardsUpdated(data.bcs.type)) { throw new Error(`object at is not a SuiRewardsUpdated object`); }

 return SuiRewardsUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SuiRewardsUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SuiRewardsUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SuiRewardsUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSuiRewardsUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SuiRewardsUpdated object`); }

 return SuiRewardsUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== SystemStaked =============================== */

export function isSystemStaked(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::SystemStaked`; }

export interface SystemStakedFields { stakedSuiId: ToField<ID>; epoch: ToField<"u64">; suiAmount: ToField<"u64">; validator: ToField<"address"> }

export type SystemStakedReified = Reified< SystemStaked, SystemStakedFields >;

export class SystemStaked implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::SystemStaked`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SystemStaked.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::SystemStaked`; readonly $typeArgs: []; readonly $isPhantom = SystemStaked.$isPhantom;

 readonly stakedSuiId: ToField<ID>; readonly epoch: ToField<"u64">; readonly suiAmount: ToField<"u64">; readonly validator: ToField<"address">

 private constructor(typeArgs: [], fields: SystemStakedFields, ) { this.$fullTypeName = composeSuiType( SystemStaked.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::SystemStaked`; this.$typeArgs = typeArgs;

 this.stakedSuiId = fields.stakedSuiId;; this.epoch = fields.epoch;; this.suiAmount = fields.suiAmount;; this.validator = fields.validator; }

 static reified( ): SystemStakedReified { return { typeName: SystemStaked.$typeName, fullTypeName: composeSuiType( SystemStaked.$typeName, ...[] ) as `${typeof PKG_V1}::staking::SystemStaked`, typeArgs: [ ] as [], isPhantom: SystemStaked.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SystemStaked.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SystemStaked.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SystemStaked.fromBcs( data, ), bcs: SystemStaked.bcs, fromJSONField: (field: any) => SystemStaked.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SystemStaked.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SystemStaked.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SystemStaked.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SystemStaked.fetch( client, id, ), new: ( fields: SystemStakedFields, ) => { return new SystemStaked( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SystemStaked.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SystemStaked>> { return phantom(SystemStaked.reified( )); } static get p() { return SystemStaked.phantom() }

 static get bcs() { return bcs.struct("SystemStaked", {

 staked_sui_id: ID.bcs, epoch: bcs.u64(), sui_amount: bcs.u64(), validator: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): SystemStaked { return SystemStaked.reified( ).new( { stakedSuiId: decodeFromFields(ID.reified(), fields.staked_sui_id), epoch: decodeFromFields("u64", fields.epoch), suiAmount: decodeFromFields("u64", fields.sui_amount), validator: decodeFromFields("address", fields.validator) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SystemStaked { if (!isSystemStaked(item.type)) { throw new Error("not a SystemStaked type");

 }

 return SystemStaked.reified( ).new( { stakedSuiId: decodeFromFieldsWithTypes(ID.reified(), item.fields.staked_sui_id), epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), suiAmount: decodeFromFieldsWithTypes("u64", item.fields.sui_amount), validator: decodeFromFieldsWithTypes("address", item.fields.validator) } ) }

 static fromBcs( data: Uint8Array ): SystemStaked { return SystemStaked.fromFields( SystemStaked.bcs.parse(data) ) }

 toJSONField() { return {

 stakedSuiId: this.stakedSuiId,epoch: this.epoch.toString(),suiAmount: this.suiAmount.toString(),validator: this.validator,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SystemStaked { return SystemStaked.reified( ).new( { stakedSuiId: decodeFromJSONField(ID.reified(), field.stakedSuiId), epoch: decodeFromJSONField("u64", field.epoch), suiAmount: decodeFromJSONField("u64", field.suiAmount), validator: decodeFromJSONField("address", field.validator) } ) }

 static fromJSON( json: Record<string, any> ): SystemStaked { if (json.$typeName !== SystemStaked.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SystemStaked.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SystemStaked { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSystemStaked(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SystemStaked object`); } return SystemStaked.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SystemStaked { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSystemStaked(data.bcs.type)) { throw new Error(`object at is not a SystemStaked object`); }

 return SystemStaked.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SystemStaked.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SystemStaked> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SystemStaked object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSystemStaked(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SystemStaked object`); }

 return SystemStaked.fromSuiObjectData( res.data ); }

 }

/* ============================== SystemUnstaked =============================== */

export function isSystemUnstaked(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::SystemUnstaked`; }

export interface SystemUnstakedFields { epoch: ToField<"u64">; suiAmount: ToField<"u64">; approvedAmount: ToField<"u64"> }

export type SystemUnstakedReified = Reified< SystemUnstaked, SystemUnstakedFields >;

export class SystemUnstaked implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::SystemUnstaked`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SystemUnstaked.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::SystemUnstaked`; readonly $typeArgs: []; readonly $isPhantom = SystemUnstaked.$isPhantom;

 readonly epoch: ToField<"u64">; readonly suiAmount: ToField<"u64">; readonly approvedAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: SystemUnstakedFields, ) { this.$fullTypeName = composeSuiType( SystemUnstaked.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::SystemUnstaked`; this.$typeArgs = typeArgs;

 this.epoch = fields.epoch;; this.suiAmount = fields.suiAmount;; this.approvedAmount = fields.approvedAmount; }

 static reified( ): SystemUnstakedReified { return { typeName: SystemUnstaked.$typeName, fullTypeName: composeSuiType( SystemUnstaked.$typeName, ...[] ) as `${typeof PKG_V1}::staking::SystemUnstaked`, typeArgs: [ ] as [], isPhantom: SystemUnstaked.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SystemUnstaked.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SystemUnstaked.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SystemUnstaked.fromBcs( data, ), bcs: SystemUnstaked.bcs, fromJSONField: (field: any) => SystemUnstaked.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SystemUnstaked.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SystemUnstaked.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SystemUnstaked.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SystemUnstaked.fetch( client, id, ), new: ( fields: SystemUnstakedFields, ) => { return new SystemUnstaked( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SystemUnstaked.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SystemUnstaked>> { return phantom(SystemUnstaked.reified( )); } static get p() { return SystemUnstaked.phantom() }

 static get bcs() { return bcs.struct("SystemUnstaked", {

 epoch: bcs.u64(), sui_amount: bcs.u64(), approved_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): SystemUnstaked { return SystemUnstaked.reified( ).new( { epoch: decodeFromFields("u64", fields.epoch), suiAmount: decodeFromFields("u64", fields.sui_amount), approvedAmount: decodeFromFields("u64", fields.approved_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SystemUnstaked { if (!isSystemUnstaked(item.type)) { throw new Error("not a SystemUnstaked type");

 }

 return SystemUnstaked.reified( ).new( { epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), suiAmount: decodeFromFieldsWithTypes("u64", item.fields.sui_amount), approvedAmount: decodeFromFieldsWithTypes("u64", item.fields.approved_amount) } ) }

 static fromBcs( data: Uint8Array ): SystemUnstaked { return SystemUnstaked.fromFields( SystemUnstaked.bcs.parse(data) ) }

 toJSONField() { return {

 epoch: this.epoch.toString(),suiAmount: this.suiAmount.toString(),approvedAmount: this.approvedAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SystemUnstaked { return SystemUnstaked.reified( ).new( { epoch: decodeFromJSONField("u64", field.epoch), suiAmount: decodeFromJSONField("u64", field.suiAmount), approvedAmount: decodeFromJSONField("u64", field.approvedAmount) } ) }

 static fromJSON( json: Record<string, any> ): SystemUnstaked { if (json.$typeName !== SystemUnstaked.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SystemUnstaked.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SystemUnstaked { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSystemUnstaked(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SystemUnstaked object`); } return SystemUnstaked.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SystemUnstaked { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSystemUnstaked(data.bcs.type)) { throw new Error(`object at is not a SystemUnstaked object`); }

 return SystemUnstaked.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SystemUnstaked.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SystemUnstaked> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SystemUnstaked object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSystemUnstaked(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SystemUnstaked object`); }

 return SystemUnstaked.fromSuiObjectData( res.data ); }

 }

/* ============================== UnstakeTicket =============================== */

export function isUnstakeTicket(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::UnstakeTicket`; }

export interface UnstakeTicketFields { id: ToField<UID>; unstakeTimestampMs: ToField<"u64">; stAmount: ToField<"u64">; suiAmount: ToField<"u64">; claimEpoch: ToField<"u64">; claimTimestampMs: ToField<"u64"> }

export type UnstakeTicketReified = Reified< UnstakeTicket, UnstakeTicketFields >;

export class UnstakeTicket implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::UnstakeTicket`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UnstakeTicket.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::UnstakeTicket`; readonly $typeArgs: []; readonly $isPhantom = UnstakeTicket.$isPhantom;

 readonly id: ToField<UID>; readonly unstakeTimestampMs: ToField<"u64">; readonly stAmount: ToField<"u64">; readonly suiAmount: ToField<"u64">; readonly claimEpoch: ToField<"u64">; readonly claimTimestampMs: ToField<"u64">

 private constructor(typeArgs: [], fields: UnstakeTicketFields, ) { this.$fullTypeName = composeSuiType( UnstakeTicket.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::UnstakeTicket`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.unstakeTimestampMs = fields.unstakeTimestampMs;; this.stAmount = fields.stAmount;; this.suiAmount = fields.suiAmount;; this.claimEpoch = fields.claimEpoch;; this.claimTimestampMs = fields.claimTimestampMs; }

 static reified( ): UnstakeTicketReified { return { typeName: UnstakeTicket.$typeName, fullTypeName: composeSuiType( UnstakeTicket.$typeName, ...[] ) as `${typeof PKG_V1}::staking::UnstakeTicket`, typeArgs: [ ] as [], isPhantom: UnstakeTicket.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UnstakeTicket.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UnstakeTicket.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UnstakeTicket.fromBcs( data, ), bcs: UnstakeTicket.bcs, fromJSONField: (field: any) => UnstakeTicket.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UnstakeTicket.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UnstakeTicket.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UnstakeTicket.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UnstakeTicket.fetch( client, id, ), new: ( fields: UnstakeTicketFields, ) => { return new UnstakeTicket( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UnstakeTicket.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UnstakeTicket>> { return phantom(UnstakeTicket.reified( )); } static get p() { return UnstakeTicket.phantom() }

 static get bcs() { return bcs.struct("UnstakeTicket", {

 id: UID.bcs, unstake_timestamp_ms: bcs.u64(), st_amount: bcs.u64(), sui_amount: bcs.u64(), claim_epoch: bcs.u64(), claim_timestamp_ms: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UnstakeTicket { return UnstakeTicket.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), unstakeTimestampMs: decodeFromFields("u64", fields.unstake_timestamp_ms), stAmount: decodeFromFields("u64", fields.st_amount), suiAmount: decodeFromFields("u64", fields.sui_amount), claimEpoch: decodeFromFields("u64", fields.claim_epoch), claimTimestampMs: decodeFromFields("u64", fields.claim_timestamp_ms) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UnstakeTicket { if (!isUnstakeTicket(item.type)) { throw new Error("not a UnstakeTicket type");

 }

 return UnstakeTicket.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), unstakeTimestampMs: decodeFromFieldsWithTypes("u64", item.fields.unstake_timestamp_ms), stAmount: decodeFromFieldsWithTypes("u64", item.fields.st_amount), suiAmount: decodeFromFieldsWithTypes("u64", item.fields.sui_amount), claimEpoch: decodeFromFieldsWithTypes("u64", item.fields.claim_epoch), claimTimestampMs: decodeFromFieldsWithTypes("u64", item.fields.claim_timestamp_ms) } ) }

 static fromBcs( data: Uint8Array ): UnstakeTicket { return UnstakeTicket.fromFields( UnstakeTicket.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,unstakeTimestampMs: this.unstakeTimestampMs.toString(),stAmount: this.stAmount.toString(),suiAmount: this.suiAmount.toString(),claimEpoch: this.claimEpoch.toString(),claimTimestampMs: this.claimTimestampMs.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UnstakeTicket { return UnstakeTicket.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), unstakeTimestampMs: decodeFromJSONField("u64", field.unstakeTimestampMs), stAmount: decodeFromJSONField("u64", field.stAmount), suiAmount: decodeFromJSONField("u64", field.suiAmount), claimEpoch: decodeFromJSONField("u64", field.claimEpoch), claimTimestampMs: decodeFromJSONField("u64", field.claimTimestampMs) } ) }

 static fromJSON( json: Record<string, any> ): UnstakeTicket { if (json.$typeName !== UnstakeTicket.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UnstakeTicket.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UnstakeTicket { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUnstakeTicket(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UnstakeTicket object`); } return UnstakeTicket.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UnstakeTicket { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUnstakeTicket(data.bcs.type)) { throw new Error(`object at is not a UnstakeTicket object`); }

 return UnstakeTicket.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UnstakeTicket.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UnstakeTicket> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UnstakeTicket object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUnstakeTicket(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UnstakeTicket object`); }

 return UnstakeTicket.fromSuiObjectData( res.data ); }

 }

/* ============================== UserClaimed =============================== */

export function isUserClaimed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::UserClaimed`; }

export interface UserClaimedFields { id: ToField<ID>; owner: ToField<"address">; suiAmount: ToField<"u64"> }

export type UserClaimedReified = Reified< UserClaimed, UserClaimedFields >;

export class UserClaimed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::UserClaimed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UserClaimed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::UserClaimed`; readonly $typeArgs: []; readonly $isPhantom = UserClaimed.$isPhantom;

 readonly id: ToField<ID>; readonly owner: ToField<"address">; readonly suiAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: UserClaimedFields, ) { this.$fullTypeName = composeSuiType( UserClaimed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::UserClaimed`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.owner = fields.owner;; this.suiAmount = fields.suiAmount; }

 static reified( ): UserClaimedReified { return { typeName: UserClaimed.$typeName, fullTypeName: composeSuiType( UserClaimed.$typeName, ...[] ) as `${typeof PKG_V1}::staking::UserClaimed`, typeArgs: [ ] as [], isPhantom: UserClaimed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserClaimed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserClaimed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserClaimed.fromBcs( data, ), bcs: UserClaimed.bcs, fromJSONField: (field: any) => UserClaimed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserClaimed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserClaimed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UserClaimed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UserClaimed.fetch( client, id, ), new: ( fields: UserClaimedFields, ) => { return new UserClaimed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserClaimed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserClaimed>> { return phantom(UserClaimed.reified( )); } static get p() { return UserClaimed.phantom() }

 static get bcs() { return bcs.struct("UserClaimed", {

 id: ID.bcs, owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), sui_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UserClaimed { return UserClaimed.reified( ).new( { id: decodeFromFields(ID.reified(), fields.id), owner: decodeFromFields("address", fields.owner), suiAmount: decodeFromFields("u64", fields.sui_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserClaimed { if (!isUserClaimed(item.type)) { throw new Error("not a UserClaimed type");

 }

 return UserClaimed.reified( ).new( { id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), owner: decodeFromFieldsWithTypes("address", item.fields.owner), suiAmount: decodeFromFieldsWithTypes("u64", item.fields.sui_amount) } ) }

 static fromBcs( data: Uint8Array ): UserClaimed { return UserClaimed.fromFields( UserClaimed.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,owner: this.owner,suiAmount: this.suiAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserClaimed { return UserClaimed.reified( ).new( { id: decodeFromJSONField(ID.reified(), field.id), owner: decodeFromJSONField("address", field.owner), suiAmount: decodeFromJSONField("u64", field.suiAmount) } ) }

 static fromJSON( json: Record<string, any> ): UserClaimed { if (json.$typeName !== UserClaimed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserClaimed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserClaimed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserClaimed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserClaimed object`); } return UserClaimed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UserClaimed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUserClaimed(data.bcs.type)) { throw new Error(`object at is not a UserClaimed object`); }

 return UserClaimed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UserClaimed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserClaimed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserClaimed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserClaimed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserClaimed object`); }

 return UserClaimed.fromSuiObjectData( res.data ); }

 }

/* ============================== UserInstantUnstaked =============================== */

export function isUserInstantUnstaked(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::UserInstantUnstaked`; }

export interface UserInstantUnstakedFields { owner: ToField<"address">; suiAmount: ToField<"u64">; stAmount: ToField<"u64"> }

export type UserInstantUnstakedReified = Reified< UserInstantUnstaked, UserInstantUnstakedFields >;

export class UserInstantUnstaked implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::UserInstantUnstaked`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UserInstantUnstaked.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::UserInstantUnstaked`; readonly $typeArgs: []; readonly $isPhantom = UserInstantUnstaked.$isPhantom;

 readonly owner: ToField<"address">; readonly suiAmount: ToField<"u64">; readonly stAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: UserInstantUnstakedFields, ) { this.$fullTypeName = composeSuiType( UserInstantUnstaked.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::UserInstantUnstaked`; this.$typeArgs = typeArgs;

 this.owner = fields.owner;; this.suiAmount = fields.suiAmount;; this.stAmount = fields.stAmount; }

 static reified( ): UserInstantUnstakedReified { return { typeName: UserInstantUnstaked.$typeName, fullTypeName: composeSuiType( UserInstantUnstaked.$typeName, ...[] ) as `${typeof PKG_V1}::staking::UserInstantUnstaked`, typeArgs: [ ] as [], isPhantom: UserInstantUnstaked.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserInstantUnstaked.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserInstantUnstaked.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserInstantUnstaked.fromBcs( data, ), bcs: UserInstantUnstaked.bcs, fromJSONField: (field: any) => UserInstantUnstaked.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserInstantUnstaked.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserInstantUnstaked.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UserInstantUnstaked.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UserInstantUnstaked.fetch( client, id, ), new: ( fields: UserInstantUnstakedFields, ) => { return new UserInstantUnstaked( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserInstantUnstaked.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserInstantUnstaked>> { return phantom(UserInstantUnstaked.reified( )); } static get p() { return UserInstantUnstaked.phantom() }

 static get bcs() { return bcs.struct("UserInstantUnstaked", {

 owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), sui_amount: bcs.u64(), st_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UserInstantUnstaked { return UserInstantUnstaked.reified( ).new( { owner: decodeFromFields("address", fields.owner), suiAmount: decodeFromFields("u64", fields.sui_amount), stAmount: decodeFromFields("u64", fields.st_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserInstantUnstaked { if (!isUserInstantUnstaked(item.type)) { throw new Error("not a UserInstantUnstaked type");

 }

 return UserInstantUnstaked.reified( ).new( { owner: decodeFromFieldsWithTypes("address", item.fields.owner), suiAmount: decodeFromFieldsWithTypes("u64", item.fields.sui_amount), stAmount: decodeFromFieldsWithTypes("u64", item.fields.st_amount) } ) }

 static fromBcs( data: Uint8Array ): UserInstantUnstaked { return UserInstantUnstaked.fromFields( UserInstantUnstaked.bcs.parse(data) ) }

 toJSONField() { return {

 owner: this.owner,suiAmount: this.suiAmount.toString(),stAmount: this.stAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserInstantUnstaked { return UserInstantUnstaked.reified( ).new( { owner: decodeFromJSONField("address", field.owner), suiAmount: decodeFromJSONField("u64", field.suiAmount), stAmount: decodeFromJSONField("u64", field.stAmount) } ) }

 static fromJSON( json: Record<string, any> ): UserInstantUnstaked { if (json.$typeName !== UserInstantUnstaked.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserInstantUnstaked.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserInstantUnstaked { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserInstantUnstaked(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserInstantUnstaked object`); } return UserInstantUnstaked.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UserInstantUnstaked { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUserInstantUnstaked(data.bcs.type)) { throw new Error(`object at is not a UserInstantUnstaked object`); }

 return UserInstantUnstaked.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UserInstantUnstaked.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserInstantUnstaked> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserInstantUnstaked object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserInstantUnstaked(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserInstantUnstaked object`); }

 return UserInstantUnstaked.fromSuiObjectData( res.data ); }

 }

/* ============================== UserNormalUnstaked =============================== */

export function isUserNormalUnstaked(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::UserNormalUnstaked`; }

export interface UserNormalUnstakedFields { owner: ToField<"address">; epoch: ToField<"u64">; epochTimestampMs: ToField<"u64">; unstakeTimestampMs: ToField<"u64">; suiAmount: ToField<"u64">; stAmount: ToField<"u64"> }

export type UserNormalUnstakedReified = Reified< UserNormalUnstaked, UserNormalUnstakedFields >;

export class UserNormalUnstaked implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::UserNormalUnstaked`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UserNormalUnstaked.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::UserNormalUnstaked`; readonly $typeArgs: []; readonly $isPhantom = UserNormalUnstaked.$isPhantom;

 readonly owner: ToField<"address">; readonly epoch: ToField<"u64">; readonly epochTimestampMs: ToField<"u64">; readonly unstakeTimestampMs: ToField<"u64">; readonly suiAmount: ToField<"u64">; readonly stAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: UserNormalUnstakedFields, ) { this.$fullTypeName = composeSuiType( UserNormalUnstaked.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::UserNormalUnstaked`; this.$typeArgs = typeArgs;

 this.owner = fields.owner;; this.epoch = fields.epoch;; this.epochTimestampMs = fields.epochTimestampMs;; this.unstakeTimestampMs = fields.unstakeTimestampMs;; this.suiAmount = fields.suiAmount;; this.stAmount = fields.stAmount; }

 static reified( ): UserNormalUnstakedReified { return { typeName: UserNormalUnstaked.$typeName, fullTypeName: composeSuiType( UserNormalUnstaked.$typeName, ...[] ) as `${typeof PKG_V1}::staking::UserNormalUnstaked`, typeArgs: [ ] as [], isPhantom: UserNormalUnstaked.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserNormalUnstaked.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserNormalUnstaked.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserNormalUnstaked.fromBcs( data, ), bcs: UserNormalUnstaked.bcs, fromJSONField: (field: any) => UserNormalUnstaked.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserNormalUnstaked.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserNormalUnstaked.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UserNormalUnstaked.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UserNormalUnstaked.fetch( client, id, ), new: ( fields: UserNormalUnstakedFields, ) => { return new UserNormalUnstaked( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserNormalUnstaked.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserNormalUnstaked>> { return phantom(UserNormalUnstaked.reified( )); } static get p() { return UserNormalUnstaked.phantom() }

 static get bcs() { return bcs.struct("UserNormalUnstaked", {

 owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), epoch: bcs.u64(), epoch_timestamp_ms: bcs.u64(), unstake_timestamp_ms: bcs.u64(), sui_amount: bcs.u64(), st_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UserNormalUnstaked { return UserNormalUnstaked.reified( ).new( { owner: decodeFromFields("address", fields.owner), epoch: decodeFromFields("u64", fields.epoch), epochTimestampMs: decodeFromFields("u64", fields.epoch_timestamp_ms), unstakeTimestampMs: decodeFromFields("u64", fields.unstake_timestamp_ms), suiAmount: decodeFromFields("u64", fields.sui_amount), stAmount: decodeFromFields("u64", fields.st_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserNormalUnstaked { if (!isUserNormalUnstaked(item.type)) { throw new Error("not a UserNormalUnstaked type");

 }

 return UserNormalUnstaked.reified( ).new( { owner: decodeFromFieldsWithTypes("address", item.fields.owner), epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), epochTimestampMs: decodeFromFieldsWithTypes("u64", item.fields.epoch_timestamp_ms), unstakeTimestampMs: decodeFromFieldsWithTypes("u64", item.fields.unstake_timestamp_ms), suiAmount: decodeFromFieldsWithTypes("u64", item.fields.sui_amount), stAmount: decodeFromFieldsWithTypes("u64", item.fields.st_amount) } ) }

 static fromBcs( data: Uint8Array ): UserNormalUnstaked { return UserNormalUnstaked.fromFields( UserNormalUnstaked.bcs.parse(data) ) }

 toJSONField() { return {

 owner: this.owner,epoch: this.epoch.toString(),epochTimestampMs: this.epochTimestampMs.toString(),unstakeTimestampMs: this.unstakeTimestampMs.toString(),suiAmount: this.suiAmount.toString(),stAmount: this.stAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserNormalUnstaked { return UserNormalUnstaked.reified( ).new( { owner: decodeFromJSONField("address", field.owner), epoch: decodeFromJSONField("u64", field.epoch), epochTimestampMs: decodeFromJSONField("u64", field.epochTimestampMs), unstakeTimestampMs: decodeFromJSONField("u64", field.unstakeTimestampMs), suiAmount: decodeFromJSONField("u64", field.suiAmount), stAmount: decodeFromJSONField("u64", field.stAmount) } ) }

 static fromJSON( json: Record<string, any> ): UserNormalUnstaked { if (json.$typeName !== UserNormalUnstaked.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserNormalUnstaked.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserNormalUnstaked { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserNormalUnstaked(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserNormalUnstaked object`); } return UserNormalUnstaked.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UserNormalUnstaked { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUserNormalUnstaked(data.bcs.type)) { throw new Error(`object at is not a UserNormalUnstaked object`); }

 return UserNormalUnstaked.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UserNormalUnstaked.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserNormalUnstaked> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserNormalUnstaked object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserNormalUnstaked(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserNormalUnstaked object`); }

 return UserNormalUnstaked.fromSuiObjectData( res.data ); }

 }

/* ============================== UserSelectedStaking =============================== */

export function isUserSelectedStaking(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::UserSelectedStaking`; }

export interface UserSelectedStakingFields { validator: ToField<"address">; amount: ToField<"u64"> }

export type UserSelectedStakingReified = Reified< UserSelectedStaking, UserSelectedStakingFields >;

export class UserSelectedStaking implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::UserSelectedStaking`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UserSelectedStaking.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::UserSelectedStaking`; readonly $typeArgs: []; readonly $isPhantom = UserSelectedStaking.$isPhantom;

 readonly validator: ToField<"address">; readonly amount: ToField<"u64">

 private constructor(typeArgs: [], fields: UserSelectedStakingFields, ) { this.$fullTypeName = composeSuiType( UserSelectedStaking.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::UserSelectedStaking`; this.$typeArgs = typeArgs;

 this.validator = fields.validator;; this.amount = fields.amount; }

 static reified( ): UserSelectedStakingReified { return { typeName: UserSelectedStaking.$typeName, fullTypeName: composeSuiType( UserSelectedStaking.$typeName, ...[] ) as `${typeof PKG_V1}::staking::UserSelectedStaking`, typeArgs: [ ] as [], isPhantom: UserSelectedStaking.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserSelectedStaking.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserSelectedStaking.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserSelectedStaking.fromBcs( data, ), bcs: UserSelectedStaking.bcs, fromJSONField: (field: any) => UserSelectedStaking.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserSelectedStaking.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserSelectedStaking.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UserSelectedStaking.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UserSelectedStaking.fetch( client, id, ), new: ( fields: UserSelectedStakingFields, ) => { return new UserSelectedStaking( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserSelectedStaking.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserSelectedStaking>> { return phantom(UserSelectedStaking.reified( )); } static get p() { return UserSelectedStaking.phantom() }

 static get bcs() { return bcs.struct("UserSelectedStaking", {

 validator: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UserSelectedStaking { return UserSelectedStaking.reified( ).new( { validator: decodeFromFields("address", fields.validator), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserSelectedStaking { if (!isUserSelectedStaking(item.type)) { throw new Error("not a UserSelectedStaking type");

 }

 return UserSelectedStaking.reified( ).new( { validator: decodeFromFieldsWithTypes("address", item.fields.validator), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs( data: Uint8Array ): UserSelectedStaking { return UserSelectedStaking.fromFields( UserSelectedStaking.bcs.parse(data) ) }

 toJSONField() { return {

 validator: this.validator,amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserSelectedStaking { return UserSelectedStaking.reified( ).new( { validator: decodeFromJSONField("address", field.validator), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON( json: Record<string, any> ): UserSelectedStaking { if (json.$typeName !== UserSelectedStaking.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserSelectedStaking.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserSelectedStaking { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserSelectedStaking(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserSelectedStaking object`); } return UserSelectedStaking.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UserSelectedStaking { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUserSelectedStaking(data.bcs.type)) { throw new Error(`object at is not a UserSelectedStaking object`); }

 return UserSelectedStaking.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UserSelectedStaking.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserSelectedStaking> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserSelectedStaking object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserSelectedStaking(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserSelectedStaking object`); }

 return UserSelectedStaking.fromSuiObjectData( res.data ); }

 }

/* ============================== UserStaked =============================== */

export function isUserStaked(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::UserStaked`; }

export interface UserStakedFields { owner: ToField<"address">; suiAmount: ToField<"u64">; stAmount: ToField<"u64">; validator: ToField<"address"> }

export type UserStakedReified = Reified< UserStaked, UserStakedFields >;

export class UserStaked implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::UserStaked`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UserStaked.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::UserStaked`; readonly $typeArgs: []; readonly $isPhantom = UserStaked.$isPhantom;

 readonly owner: ToField<"address">; readonly suiAmount: ToField<"u64">; readonly stAmount: ToField<"u64">; readonly validator: ToField<"address">

 private constructor(typeArgs: [], fields: UserStakedFields, ) { this.$fullTypeName = composeSuiType( UserStaked.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::UserStaked`; this.$typeArgs = typeArgs;

 this.owner = fields.owner;; this.suiAmount = fields.suiAmount;; this.stAmount = fields.stAmount;; this.validator = fields.validator; }

 static reified( ): UserStakedReified { return { typeName: UserStaked.$typeName, fullTypeName: composeSuiType( UserStaked.$typeName, ...[] ) as `${typeof PKG_V1}::staking::UserStaked`, typeArgs: [ ] as [], isPhantom: UserStaked.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserStaked.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserStaked.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserStaked.fromBcs( data, ), bcs: UserStaked.bcs, fromJSONField: (field: any) => UserStaked.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserStaked.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserStaked.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UserStaked.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UserStaked.fetch( client, id, ), new: ( fields: UserStakedFields, ) => { return new UserStaked( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserStaked.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserStaked>> { return phantom(UserStaked.reified( )); } static get p() { return UserStaked.phantom() }

 static get bcs() { return bcs.struct("UserStaked", {

 owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), sui_amount: bcs.u64(), st_amount: bcs.u64(), validator: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): UserStaked { return UserStaked.reified( ).new( { owner: decodeFromFields("address", fields.owner), suiAmount: decodeFromFields("u64", fields.sui_amount), stAmount: decodeFromFields("u64", fields.st_amount), validator: decodeFromFields("address", fields.validator) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserStaked { if (!isUserStaked(item.type)) { throw new Error("not a UserStaked type");

 }

 return UserStaked.reified( ).new( { owner: decodeFromFieldsWithTypes("address", item.fields.owner), suiAmount: decodeFromFieldsWithTypes("u64", item.fields.sui_amount), stAmount: decodeFromFieldsWithTypes("u64", item.fields.st_amount), validator: decodeFromFieldsWithTypes("address", item.fields.validator) } ) }

 static fromBcs( data: Uint8Array ): UserStaked { return UserStaked.fromFields( UserStaked.bcs.parse(data) ) }

 toJSONField() { return {

 owner: this.owner,suiAmount: this.suiAmount.toString(),stAmount: this.stAmount.toString(),validator: this.validator,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserStaked { return UserStaked.reified( ).new( { owner: decodeFromJSONField("address", field.owner), suiAmount: decodeFromJSONField("u64", field.suiAmount), stAmount: decodeFromJSONField("u64", field.stAmount), validator: decodeFromJSONField("address", field.validator) } ) }

 static fromJSON( json: Record<string, any> ): UserStaked { if (json.$typeName !== UserStaked.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserStaked.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserStaked { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserStaked(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserStaked object`); } return UserStaked.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UserStaked { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUserStaked(data.bcs.type)) { throw new Error(`object at is not a UserStaked object`); }

 return UserStaked.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UserStaked.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserStaked> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserStaked object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserStaked(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserStaked object`); }

 return UserStaked.fromSuiObjectData( res.data ); }

 }

/* ============================== ValidatorStakedInfo =============================== */

export function isValidatorStakedInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::staking::ValidatorStakedInfo`; }

export interface ValidatorStakedInfoFields { validator: ToField<"address">; totalStaked: ToField<"u64">; rewards: ToField<"u64">; stakedSuiCount: ToField<"u64"> }

export type ValidatorStakedInfoReified = Reified< ValidatorStakedInfo, ValidatorStakedInfoFields >;

export class ValidatorStakedInfo implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::staking::ValidatorStakedInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ValidatorStakedInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::staking::ValidatorStakedInfo`; readonly $typeArgs: []; readonly $isPhantom = ValidatorStakedInfo.$isPhantom;

 readonly validator: ToField<"address">; readonly totalStaked: ToField<"u64">; readonly rewards: ToField<"u64">; readonly stakedSuiCount: ToField<"u64">

 private constructor(typeArgs: [], fields: ValidatorStakedInfoFields, ) { this.$fullTypeName = composeSuiType( ValidatorStakedInfo.$typeName, ...typeArgs ) as `${typeof PKG_V1}::staking::ValidatorStakedInfo`; this.$typeArgs = typeArgs;

 this.validator = fields.validator;; this.totalStaked = fields.totalStaked;; this.rewards = fields.rewards;; this.stakedSuiCount = fields.stakedSuiCount; }

 static reified( ): ValidatorStakedInfoReified { return { typeName: ValidatorStakedInfo.$typeName, fullTypeName: composeSuiType( ValidatorStakedInfo.$typeName, ...[] ) as `${typeof PKG_V1}::staking::ValidatorStakedInfo`, typeArgs: [ ] as [], isPhantom: ValidatorStakedInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ValidatorStakedInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ValidatorStakedInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ValidatorStakedInfo.fromBcs( data, ), bcs: ValidatorStakedInfo.bcs, fromJSONField: (field: any) => ValidatorStakedInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ValidatorStakedInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ValidatorStakedInfo.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ValidatorStakedInfo.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ValidatorStakedInfo.fetch( client, id, ), new: ( fields: ValidatorStakedInfoFields, ) => { return new ValidatorStakedInfo( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ValidatorStakedInfo.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ValidatorStakedInfo>> { return phantom(ValidatorStakedInfo.reified( )); } static get p() { return ValidatorStakedInfo.phantom() }

 static get bcs() { return bcs.struct("ValidatorStakedInfo", {

 validator: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), total_staked: bcs.u64(), rewards: bcs.u64(), staked_sui_count: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ValidatorStakedInfo { return ValidatorStakedInfo.reified( ).new( { validator: decodeFromFields("address", fields.validator), totalStaked: decodeFromFields("u64", fields.total_staked), rewards: decodeFromFields("u64", fields.rewards), stakedSuiCount: decodeFromFields("u64", fields.staked_sui_count) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ValidatorStakedInfo { if (!isValidatorStakedInfo(item.type)) { throw new Error("not a ValidatorStakedInfo type");

 }

 return ValidatorStakedInfo.reified( ).new( { validator: decodeFromFieldsWithTypes("address", item.fields.validator), totalStaked: decodeFromFieldsWithTypes("u64", item.fields.total_staked), rewards: decodeFromFieldsWithTypes("u64", item.fields.rewards), stakedSuiCount: decodeFromFieldsWithTypes("u64", item.fields.staked_sui_count) } ) }

 static fromBcs( data: Uint8Array ): ValidatorStakedInfo { return ValidatorStakedInfo.fromFields( ValidatorStakedInfo.bcs.parse(data) ) }

 toJSONField() { return {

 validator: this.validator,totalStaked: this.totalStaked.toString(),rewards: this.rewards.toString(),stakedSuiCount: this.stakedSuiCount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ValidatorStakedInfo { return ValidatorStakedInfo.reified( ).new( { validator: decodeFromJSONField("address", field.validator), totalStaked: decodeFromJSONField("u64", field.totalStaked), rewards: decodeFromJSONField("u64", field.rewards), stakedSuiCount: decodeFromJSONField("u64", field.stakedSuiCount) } ) }

 static fromJSON( json: Record<string, any> ): ValidatorStakedInfo { if (json.$typeName !== ValidatorStakedInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ValidatorStakedInfo.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ValidatorStakedInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isValidatorStakedInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ValidatorStakedInfo object`); } return ValidatorStakedInfo.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ValidatorStakedInfo { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isValidatorStakedInfo(data.bcs.type)) { throw new Error(`object at is not a ValidatorStakedInfo object`); }

 return ValidatorStakedInfo.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ValidatorStakedInfo.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ValidatorStakedInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ValidatorStakedInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isValidatorStakedInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ValidatorStakedInfo object`); }

 return ValidatorStakedInfo.fromSuiObjectData( res.data ); }

 }
