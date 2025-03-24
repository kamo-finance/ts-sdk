import * as reified from "../../_framework/reified";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {UID} from "../../_dependencies/source/0x2/object/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {KAMO} from "../kamo/structs";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== VeKAMOUpdated =============================== */

export function isVeKAMOUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::vekamo::VeKAMOUpdated`; }

export interface VeKAMOUpdatedFields { owner: ToField<"address">; lockedAmount: ToField<"u64">; lockEnd: ToField<"u64">; votingPower: ToField<"u128"> }

export type VeKAMOUpdatedReified = Reified< VeKAMOUpdated, VeKAMOUpdatedFields >;

export class VeKAMOUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vekamo::VeKAMOUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = VeKAMOUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vekamo::VeKAMOUpdated`; readonly $typeArgs: []; readonly $isPhantom = VeKAMOUpdated.$isPhantom;

 readonly owner: ToField<"address">; readonly lockedAmount: ToField<"u64">; readonly lockEnd: ToField<"u64">; readonly votingPower: ToField<"u128">

 private constructor(typeArgs: [], fields: VeKAMOUpdatedFields, ) { this.$fullTypeName = composeSuiType( VeKAMOUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vekamo::VeKAMOUpdated`; this.$typeArgs = typeArgs;

 this.owner = fields.owner;; this.lockedAmount = fields.lockedAmount;; this.lockEnd = fields.lockEnd;; this.votingPower = fields.votingPower; }

 static reified( ): VeKAMOUpdatedReified { return { typeName: VeKAMOUpdated.$typeName, fullTypeName: composeSuiType( VeKAMOUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::vekamo::VeKAMOUpdated`, typeArgs: [ ] as [], isPhantom: VeKAMOUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => VeKAMOUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VeKAMOUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => VeKAMOUpdated.fromBcs( data, ), bcs: VeKAMOUpdated.bcs, fromJSONField: (field: any) => VeKAMOUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => VeKAMOUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => VeKAMOUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => VeKAMOUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => VeKAMOUpdated.fetch( client, id, ), new: ( fields: VeKAMOUpdatedFields, ) => { return new VeKAMOUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return VeKAMOUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<VeKAMOUpdated>> { return phantom(VeKAMOUpdated.reified( )); } static get p() { return VeKAMOUpdated.phantom() }

 static get bcs() { return bcs.struct("VeKAMOUpdated", {

 owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), locked_amount: bcs.u64(), lock_end: bcs.u64(), voting_power: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): VeKAMOUpdated { return VeKAMOUpdated.reified( ).new( { owner: decodeFromFields("address", fields.owner), lockedAmount: decodeFromFields("u64", fields.locked_amount), lockEnd: decodeFromFields("u64", fields.lock_end), votingPower: decodeFromFields("u128", fields.voting_power) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): VeKAMOUpdated { if (!isVeKAMOUpdated(item.type)) { throw new Error("not a VeKAMOUpdated type");

 }

 return VeKAMOUpdated.reified( ).new( { owner: decodeFromFieldsWithTypes("address", item.fields.owner), lockedAmount: decodeFromFieldsWithTypes("u64", item.fields.locked_amount), lockEnd: decodeFromFieldsWithTypes("u64", item.fields.lock_end), votingPower: decodeFromFieldsWithTypes("u128", item.fields.voting_power) } ) }

 static fromBcs( data: Uint8Array ): VeKAMOUpdated { return VeKAMOUpdated.fromFields( VeKAMOUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 owner: this.owner,lockedAmount: this.lockedAmount.toString(),lockEnd: this.lockEnd.toString(),votingPower: this.votingPower.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): VeKAMOUpdated { return VeKAMOUpdated.reified( ).new( { owner: decodeFromJSONField("address", field.owner), lockedAmount: decodeFromJSONField("u64", field.lockedAmount), lockEnd: decodeFromJSONField("u64", field.lockEnd), votingPower: decodeFromJSONField("u128", field.votingPower) } ) }

 static fromJSON( json: Record<string, any> ): VeKAMOUpdated { if (json.$typeName !== VeKAMOUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return VeKAMOUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): VeKAMOUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVeKAMOUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VeKAMOUpdated object`); } return VeKAMOUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): VeKAMOUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVeKAMOUpdated(data.bcs.type)) { throw new Error(`object at is not a VeKAMOUpdated object`); }

 return VeKAMOUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return VeKAMOUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<VeKAMOUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VeKAMOUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVeKAMOUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VeKAMOUpdated object`); }

 return VeKAMOUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== VotingEscrow =============================== */

export function isVotingEscrow(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::vekamo::VotingEscrow`; }

export interface VotingEscrowFields { id: ToField<UID>; lockedBalance: ToField<Balance<ToPhantom<KAMO>>>; end: ToField<"u64">; votingPower: ToField<"u128"> }

export type VotingEscrowReified = Reified< VotingEscrow, VotingEscrowFields >;

export class VotingEscrow implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vekamo::VotingEscrow`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = VotingEscrow.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vekamo::VotingEscrow`; readonly $typeArgs: []; readonly $isPhantom = VotingEscrow.$isPhantom;

 readonly id: ToField<UID>; readonly lockedBalance: ToField<Balance<ToPhantom<KAMO>>>; readonly end: ToField<"u64">; readonly votingPower: ToField<"u128">

 private constructor(typeArgs: [], fields: VotingEscrowFields, ) { this.$fullTypeName = composeSuiType( VotingEscrow.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vekamo::VotingEscrow`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.lockedBalance = fields.lockedBalance;; this.end = fields.end;; this.votingPower = fields.votingPower; }

 static reified( ): VotingEscrowReified { return { typeName: VotingEscrow.$typeName, fullTypeName: composeSuiType( VotingEscrow.$typeName, ...[] ) as `${typeof PKG_V1}::vekamo::VotingEscrow`, typeArgs: [ ] as [], isPhantom: VotingEscrow.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => VotingEscrow.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VotingEscrow.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => VotingEscrow.fromBcs( data, ), bcs: VotingEscrow.bcs, fromJSONField: (field: any) => VotingEscrow.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => VotingEscrow.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => VotingEscrow.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => VotingEscrow.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => VotingEscrow.fetch( client, id, ), new: ( fields: VotingEscrowFields, ) => { return new VotingEscrow( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return VotingEscrow.reified() }

 static phantom( ): PhantomReified<ToTypeStr<VotingEscrow>> { return phantom(VotingEscrow.reified( )); } static get p() { return VotingEscrow.phantom() }

 static get bcs() { return bcs.struct("VotingEscrow", {

 id: UID.bcs, locked_balance: Balance.bcs, end: bcs.u64(), voting_power: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): VotingEscrow { return VotingEscrow.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), lockedBalance: decodeFromFields(Balance.reified(reified.phantom(KAMO.reified())), fields.locked_balance), end: decodeFromFields("u64", fields.end), votingPower: decodeFromFields("u128", fields.voting_power) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): VotingEscrow { if (!isVotingEscrow(item.type)) { throw new Error("not a VotingEscrow type");

 }

 return VotingEscrow.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), lockedBalance: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(KAMO.reified())), item.fields.locked_balance), end: decodeFromFieldsWithTypes("u64", item.fields.end), votingPower: decodeFromFieldsWithTypes("u128", item.fields.voting_power) } ) }

 static fromBcs( data: Uint8Array ): VotingEscrow { return VotingEscrow.fromFields( VotingEscrow.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,lockedBalance: this.lockedBalance.toJSONField(),end: this.end.toString(),votingPower: this.votingPower.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): VotingEscrow { return VotingEscrow.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), lockedBalance: decodeFromJSONField(Balance.reified(reified.phantom(KAMO.reified())), field.lockedBalance), end: decodeFromJSONField("u64", field.end), votingPower: decodeFromJSONField("u128", field.votingPower) } ) }

 static fromJSON( json: Record<string, any> ): VotingEscrow { if (json.$typeName !== VotingEscrow.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return VotingEscrow.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): VotingEscrow { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVotingEscrow(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VotingEscrow object`); } return VotingEscrow.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): VotingEscrow { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVotingEscrow(data.bcs.type)) { throw new Error(`object at is not a VotingEscrow object`); }

 return VotingEscrow.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return VotingEscrow.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<VotingEscrow> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VotingEscrow object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVotingEscrow(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VotingEscrow object`); }

 return VotingEscrow.fromSuiObjectData( res.data ); }

 }
