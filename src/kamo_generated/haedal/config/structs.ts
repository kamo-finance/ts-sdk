import * as reified from "../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== StakingConfig =============================== */

export function isStakingConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::config::StakingConfig`; }

export interface StakingConfigFields { depositFee: ToField<"u64">; rewardFee: ToField<"u64">; validatorRewardFee: ToField<"u64">; serviceFee: ToField<"u64">; withdrawTimeLimit: ToField<"u64">; validatorCount: ToField<"u64"> }

export type StakingConfigReified = Reified< StakingConfig, StakingConfigFields >;

export class StakingConfig implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::config::StakingConfig`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StakingConfig.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::config::StakingConfig`; readonly $typeArgs: []; readonly $isPhantom = StakingConfig.$isPhantom;

 readonly depositFee: ToField<"u64">; readonly rewardFee: ToField<"u64">; readonly validatorRewardFee: ToField<"u64">; readonly serviceFee: ToField<"u64">; readonly withdrawTimeLimit: ToField<"u64">; readonly validatorCount: ToField<"u64">

 private constructor(typeArgs: [], fields: StakingConfigFields, ) { this.$fullTypeName = composeSuiType( StakingConfig.$typeName, ...typeArgs ) as `${typeof PKG_V1}::config::StakingConfig`; this.$typeArgs = typeArgs;

 this.depositFee = fields.depositFee;; this.rewardFee = fields.rewardFee;; this.validatorRewardFee = fields.validatorRewardFee;; this.serviceFee = fields.serviceFee;; this.withdrawTimeLimit = fields.withdrawTimeLimit;; this.validatorCount = fields.validatorCount; }

 static reified( ): StakingConfigReified { return { typeName: StakingConfig.$typeName, fullTypeName: composeSuiType( StakingConfig.$typeName, ...[] ) as `${typeof PKG_V1}::config::StakingConfig`, typeArgs: [ ] as [], isPhantom: StakingConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StakingConfig.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakingConfig.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StakingConfig.fromBcs( data, ), bcs: StakingConfig.bcs, fromJSONField: (field: any) => StakingConfig.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StakingConfig.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StakingConfig.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => StakingConfig.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => StakingConfig.fetch( client, id, ), new: ( fields: StakingConfigFields, ) => { return new StakingConfig( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakingConfig.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StakingConfig>> { return phantom(StakingConfig.reified( )); } static get p() { return StakingConfig.phantom() }

 static get bcs() { return bcs.struct("StakingConfig", {

 deposit_fee: bcs.u64(), reward_fee: bcs.u64(), validator_reward_fee: bcs.u64(), service_fee: bcs.u64(), withdraw_time_limit: bcs.u64(), validator_count: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): StakingConfig { return StakingConfig.reified( ).new( { depositFee: decodeFromFields("u64", fields.deposit_fee), rewardFee: decodeFromFields("u64", fields.reward_fee), validatorRewardFee: decodeFromFields("u64", fields.validator_reward_fee), serviceFee: decodeFromFields("u64", fields.service_fee), withdrawTimeLimit: decodeFromFields("u64", fields.withdraw_time_limit), validatorCount: decodeFromFields("u64", fields.validator_count) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StakingConfig { if (!isStakingConfig(item.type)) { throw new Error("not a StakingConfig type");

 }

 return StakingConfig.reified( ).new( { depositFee: decodeFromFieldsWithTypes("u64", item.fields.deposit_fee), rewardFee: decodeFromFieldsWithTypes("u64", item.fields.reward_fee), validatorRewardFee: decodeFromFieldsWithTypes("u64", item.fields.validator_reward_fee), serviceFee: decodeFromFieldsWithTypes("u64", item.fields.service_fee), withdrawTimeLimit: decodeFromFieldsWithTypes("u64", item.fields.withdraw_time_limit), validatorCount: decodeFromFieldsWithTypes("u64", item.fields.validator_count) } ) }

 static fromBcs( data: Uint8Array ): StakingConfig { return StakingConfig.fromFields( StakingConfig.bcs.parse(data) ) }

 toJSONField() { return {

 depositFee: this.depositFee.toString(),rewardFee: this.rewardFee.toString(),validatorRewardFee: this.validatorRewardFee.toString(),serviceFee: this.serviceFee.toString(),withdrawTimeLimit: this.withdrawTimeLimit.toString(),validatorCount: this.validatorCount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StakingConfig { return StakingConfig.reified( ).new( { depositFee: decodeFromJSONField("u64", field.depositFee), rewardFee: decodeFromJSONField("u64", field.rewardFee), validatorRewardFee: decodeFromJSONField("u64", field.validatorRewardFee), serviceFee: decodeFromJSONField("u64", field.serviceFee), withdrawTimeLimit: decodeFromJSONField("u64", field.withdrawTimeLimit), validatorCount: decodeFromJSONField("u64", field.validatorCount) } ) }

 static fromJSON( json: Record<string, any> ): StakingConfig { if (json.$typeName !== StakingConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StakingConfig.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StakingConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakingConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakingConfig object`); } return StakingConfig.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): StakingConfig { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStakingConfig(data.bcs.type)) { throw new Error(`object at is not a StakingConfig object`); }

 return StakingConfig.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return StakingConfig.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<StakingConfig> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakingConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakingConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakingConfig object`); }

 return StakingConfig.fromSuiObjectData( res.data ); }

 }

/* ============================== StakingConfigCreated =============================== */

export function isStakingConfigCreated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::config::StakingConfigCreated`; }

export interface StakingConfigCreatedFields { depositFee: ToField<"u64">; rewardFee: ToField<"u64">; validatorRewardFee: ToField<"u64">; serviceFee: ToField<"u64">; withdrawTimeLimit: ToField<"u64">; validatorCount: ToField<"u64"> }

export type StakingConfigCreatedReified = Reified< StakingConfigCreated, StakingConfigCreatedFields >;

export class StakingConfigCreated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::config::StakingConfigCreated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StakingConfigCreated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::config::StakingConfigCreated`; readonly $typeArgs: []; readonly $isPhantom = StakingConfigCreated.$isPhantom;

 readonly depositFee: ToField<"u64">; readonly rewardFee: ToField<"u64">; readonly validatorRewardFee: ToField<"u64">; readonly serviceFee: ToField<"u64">; readonly withdrawTimeLimit: ToField<"u64">; readonly validatorCount: ToField<"u64">

 private constructor(typeArgs: [], fields: StakingConfigCreatedFields, ) { this.$fullTypeName = composeSuiType( StakingConfigCreated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::config::StakingConfigCreated`; this.$typeArgs = typeArgs;

 this.depositFee = fields.depositFee;; this.rewardFee = fields.rewardFee;; this.validatorRewardFee = fields.validatorRewardFee;; this.serviceFee = fields.serviceFee;; this.withdrawTimeLimit = fields.withdrawTimeLimit;; this.validatorCount = fields.validatorCount; }

 static reified( ): StakingConfigCreatedReified { return { typeName: StakingConfigCreated.$typeName, fullTypeName: composeSuiType( StakingConfigCreated.$typeName, ...[] ) as `${typeof PKG_V1}::config::StakingConfigCreated`, typeArgs: [ ] as [], isPhantom: StakingConfigCreated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StakingConfigCreated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakingConfigCreated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StakingConfigCreated.fromBcs( data, ), bcs: StakingConfigCreated.bcs, fromJSONField: (field: any) => StakingConfigCreated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StakingConfigCreated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StakingConfigCreated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => StakingConfigCreated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => StakingConfigCreated.fetch( client, id, ), new: ( fields: StakingConfigCreatedFields, ) => { return new StakingConfigCreated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakingConfigCreated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StakingConfigCreated>> { return phantom(StakingConfigCreated.reified( )); } static get p() { return StakingConfigCreated.phantom() }

 static get bcs() { return bcs.struct("StakingConfigCreated", {

 deposit_fee: bcs.u64(), reward_fee: bcs.u64(), validator_reward_fee: bcs.u64(), service_fee: bcs.u64(), withdraw_time_limit: bcs.u64(), validator_count: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): StakingConfigCreated { return StakingConfigCreated.reified( ).new( { depositFee: decodeFromFields("u64", fields.deposit_fee), rewardFee: decodeFromFields("u64", fields.reward_fee), validatorRewardFee: decodeFromFields("u64", fields.validator_reward_fee), serviceFee: decodeFromFields("u64", fields.service_fee), withdrawTimeLimit: decodeFromFields("u64", fields.withdraw_time_limit), validatorCount: decodeFromFields("u64", fields.validator_count) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StakingConfigCreated { if (!isStakingConfigCreated(item.type)) { throw new Error("not a StakingConfigCreated type");

 }

 return StakingConfigCreated.reified( ).new( { depositFee: decodeFromFieldsWithTypes("u64", item.fields.deposit_fee), rewardFee: decodeFromFieldsWithTypes("u64", item.fields.reward_fee), validatorRewardFee: decodeFromFieldsWithTypes("u64", item.fields.validator_reward_fee), serviceFee: decodeFromFieldsWithTypes("u64", item.fields.service_fee), withdrawTimeLimit: decodeFromFieldsWithTypes("u64", item.fields.withdraw_time_limit), validatorCount: decodeFromFieldsWithTypes("u64", item.fields.validator_count) } ) }

 static fromBcs( data: Uint8Array ): StakingConfigCreated { return StakingConfigCreated.fromFields( StakingConfigCreated.bcs.parse(data) ) }

 toJSONField() { return {

 depositFee: this.depositFee.toString(),rewardFee: this.rewardFee.toString(),validatorRewardFee: this.validatorRewardFee.toString(),serviceFee: this.serviceFee.toString(),withdrawTimeLimit: this.withdrawTimeLimit.toString(),validatorCount: this.validatorCount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StakingConfigCreated { return StakingConfigCreated.reified( ).new( { depositFee: decodeFromJSONField("u64", field.depositFee), rewardFee: decodeFromJSONField("u64", field.rewardFee), validatorRewardFee: decodeFromJSONField("u64", field.validatorRewardFee), serviceFee: decodeFromJSONField("u64", field.serviceFee), withdrawTimeLimit: decodeFromJSONField("u64", field.withdrawTimeLimit), validatorCount: decodeFromJSONField("u64", field.validatorCount) } ) }

 static fromJSON( json: Record<string, any> ): StakingConfigCreated { if (json.$typeName !== StakingConfigCreated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StakingConfigCreated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StakingConfigCreated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakingConfigCreated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakingConfigCreated object`); } return StakingConfigCreated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): StakingConfigCreated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStakingConfigCreated(data.bcs.type)) { throw new Error(`object at is not a StakingConfigCreated object`); }

 return StakingConfigCreated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return StakingConfigCreated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<StakingConfigCreated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakingConfigCreated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakingConfigCreated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakingConfigCreated object`); }

 return StakingConfigCreated.fromSuiObjectData( res.data ); }

 }

/* ============================== StakingFeeConfigUpdated =============================== */

export function isStakingFeeConfigUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::config::StakingFeeConfigUpdated`; }

export interface StakingFeeConfigUpdatedFields { name: ToField<Vector<"u8">>; old: ToField<"u64">; new: ToField<"u64"> }

export type StakingFeeConfigUpdatedReified = Reified< StakingFeeConfigUpdated, StakingFeeConfigUpdatedFields >;

export class StakingFeeConfigUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::config::StakingFeeConfigUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StakingFeeConfigUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::config::StakingFeeConfigUpdated`; readonly $typeArgs: []; readonly $isPhantom = StakingFeeConfigUpdated.$isPhantom;

 readonly name: ToField<Vector<"u8">>; readonly old: ToField<"u64">; readonly new: ToField<"u64">

 private constructor(typeArgs: [], fields: StakingFeeConfigUpdatedFields, ) { this.$fullTypeName = composeSuiType( StakingFeeConfigUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::config::StakingFeeConfigUpdated`; this.$typeArgs = typeArgs;

 this.name = fields.name;; this.old = fields.old;; this.new = fields.new; }

 static reified( ): StakingFeeConfigUpdatedReified { return { typeName: StakingFeeConfigUpdated.$typeName, fullTypeName: composeSuiType( StakingFeeConfigUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::config::StakingFeeConfigUpdated`, typeArgs: [ ] as [], isPhantom: StakingFeeConfigUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StakingFeeConfigUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakingFeeConfigUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StakingFeeConfigUpdated.fromBcs( data, ), bcs: StakingFeeConfigUpdated.bcs, fromJSONField: (field: any) => StakingFeeConfigUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StakingFeeConfigUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StakingFeeConfigUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => StakingFeeConfigUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => StakingFeeConfigUpdated.fetch( client, id, ), new: ( fields: StakingFeeConfigUpdatedFields, ) => { return new StakingFeeConfigUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakingFeeConfigUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StakingFeeConfigUpdated>> { return phantom(StakingFeeConfigUpdated.reified( )); } static get p() { return StakingFeeConfigUpdated.phantom() }

 static get bcs() { return bcs.struct("StakingFeeConfigUpdated", {

 name: bcs.vector(bcs.u8()), old: bcs.u64(), new: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): StakingFeeConfigUpdated { return StakingFeeConfigUpdated.reified( ).new( { name: decodeFromFields(reified.vector("u8"), fields.name), old: decodeFromFields("u64", fields.old), new: decodeFromFields("u64", fields.new) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StakingFeeConfigUpdated { if (!isStakingFeeConfigUpdated(item.type)) { throw new Error("not a StakingFeeConfigUpdated type");

 }

 return StakingFeeConfigUpdated.reified( ).new( { name: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.name), old: decodeFromFieldsWithTypes("u64", item.fields.old), new: decodeFromFieldsWithTypes("u64", item.fields.new) } ) }

 static fromBcs( data: Uint8Array ): StakingFeeConfigUpdated { return StakingFeeConfigUpdated.fromFields( StakingFeeConfigUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 name: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.name),old: this.old.toString(),new: this.new.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StakingFeeConfigUpdated { return StakingFeeConfigUpdated.reified( ).new( { name: decodeFromJSONField(reified.vector("u8"), field.name), old: decodeFromJSONField("u64", field.old), new: decodeFromJSONField("u64", field.new) } ) }

 static fromJSON( json: Record<string, any> ): StakingFeeConfigUpdated { if (json.$typeName !== StakingFeeConfigUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StakingFeeConfigUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StakingFeeConfigUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakingFeeConfigUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakingFeeConfigUpdated object`); } return StakingFeeConfigUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): StakingFeeConfigUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStakingFeeConfigUpdated(data.bcs.type)) { throw new Error(`object at is not a StakingFeeConfigUpdated object`); }

 return StakingFeeConfigUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return StakingFeeConfigUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<StakingFeeConfigUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakingFeeConfigUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakingFeeConfigUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakingFeeConfigUpdated object`); }

 return StakingFeeConfigUpdated.fromSuiObjectData( res.data ); }

 }
