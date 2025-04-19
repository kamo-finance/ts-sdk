import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../../../_framework/util";
import {FixedPoint64} from "../../../../legato-math/fixed-point64/structs";
import {ID, UID} from "../../0x2/object/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== ClaimInterestEvent =============================== */

export function isClaimInterestEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::yield_object::ClaimInterestEvent` + '<'); }

export interface ClaimInterestEventFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { yieldObjectId: ToField<ID>; amount: ToField<"u64"> }

export type ClaimInterestEventReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< ClaimInterestEvent<PT, SY>, ClaimInterestEventFields<PT, SY> >;

export class ClaimInterestEvent<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::yield_object::ClaimInterestEvent`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = ClaimInterestEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_object::ClaimInterestEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = ClaimInterestEvent.$isPhantom;

 readonly yieldObjectId: ToField<ID>; readonly amount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: ClaimInterestEventFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( ClaimInterestEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::yield_object::ClaimInterestEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.yieldObjectId = fields.yieldObjectId;; this.amount = fields.amount; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): ClaimInterestEventReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: ClaimInterestEvent.$typeName, fullTypeName: composeSuiType( ClaimInterestEvent.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::yield_object::ClaimInterestEvent<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: ClaimInterestEvent.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => ClaimInterestEvent.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ClaimInterestEvent.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => ClaimInterestEvent.fromBcs( [PT, SY], data, ), bcs: ClaimInterestEvent.bcs, fromJSONField: (field: any) => ClaimInterestEvent.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => ClaimInterestEvent.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => ClaimInterestEvent.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => ClaimInterestEvent.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => ClaimInterestEvent.fetch( client, [PT, SY], id, ), new: ( fields: ClaimInterestEventFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new ClaimInterestEvent( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return ClaimInterestEvent.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<ClaimInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(ClaimInterestEvent.reified( PT, SY )); } static get p() { return ClaimInterestEvent.phantom }

 static get bcs() { return bcs.struct("ClaimInterestEvent", {

 yield_object_id: ID.bcs, amount: bcs.u64()

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): ClaimInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return ClaimInterestEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromFields(ID.reified(), fields.yield_object_id), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): ClaimInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isClaimInterestEvent(item.type)) { throw new Error("not a ClaimInterestEvent type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return ClaimInterestEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromFieldsWithTypes(ID.reified(), item.fields.yield_object_id), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): ClaimInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return ClaimInterestEvent.fromFields( typeArgs, ClaimInterestEvent.bcs.parse(data) ) }

 toJSONField() { return {

 yieldObjectId: this.yieldObjectId,amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): ClaimInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return ClaimInterestEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromJSONField(ID.reified(), field.yieldObjectId), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): ClaimInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== ClaimInterestEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(ClaimInterestEvent.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return ClaimInterestEvent.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): ClaimInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isClaimInterestEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ClaimInterestEvent object`); } return ClaimInterestEvent.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): ClaimInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isClaimInterestEvent(data.bcs.type)) { throw new Error(`object at is not a ClaimInterestEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return ClaimInterestEvent.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ClaimInterestEvent.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<ClaimInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ClaimInterestEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isClaimInterestEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ClaimInterestEvent object`); }

 return ClaimInterestEvent.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== DeleteYieldObjectEvent =============================== */

export function isDeleteYieldObjectEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::yield_object::DeleteYieldObjectEvent` + '<'); }

export interface DeleteYieldObjectEventFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { yieldObjectId: ToField<ID> }

export type DeleteYieldObjectEventReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< DeleteYieldObjectEvent<PT, SY>, DeleteYieldObjectEventFields<PT, SY> >;

export class DeleteYieldObjectEvent<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::yield_object::DeleteYieldObjectEvent`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = DeleteYieldObjectEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_object::DeleteYieldObjectEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = DeleteYieldObjectEvent.$isPhantom;

 readonly yieldObjectId: ToField<ID>

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: DeleteYieldObjectEventFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( DeleteYieldObjectEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::yield_object::DeleteYieldObjectEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.yieldObjectId = fields.yieldObjectId; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): DeleteYieldObjectEventReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: DeleteYieldObjectEvent.$typeName, fullTypeName: composeSuiType( DeleteYieldObjectEvent.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::yield_object::DeleteYieldObjectEvent<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: DeleteYieldObjectEvent.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => DeleteYieldObjectEvent.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DeleteYieldObjectEvent.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => DeleteYieldObjectEvent.fromBcs( [PT, SY], data, ), bcs: DeleteYieldObjectEvent.bcs, fromJSONField: (field: any) => DeleteYieldObjectEvent.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => DeleteYieldObjectEvent.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => DeleteYieldObjectEvent.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => DeleteYieldObjectEvent.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => DeleteYieldObjectEvent.fetch( client, [PT, SY], id, ), new: ( fields: DeleteYieldObjectEventFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new DeleteYieldObjectEvent( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return DeleteYieldObjectEvent.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<DeleteYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(DeleteYieldObjectEvent.reified( PT, SY )); } static get p() { return DeleteYieldObjectEvent.phantom }

 static get bcs() { return bcs.struct("DeleteYieldObjectEvent", {

 yield_object_id: ID.bcs

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): DeleteYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return DeleteYieldObjectEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromFields(ID.reified(), fields.yield_object_id) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): DeleteYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isDeleteYieldObjectEvent(item.type)) { throw new Error("not a DeleteYieldObjectEvent type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return DeleteYieldObjectEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromFieldsWithTypes(ID.reified(), item.fields.yield_object_id) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): DeleteYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return DeleteYieldObjectEvent.fromFields( typeArgs, DeleteYieldObjectEvent.bcs.parse(data) ) }

 toJSONField() { return {

 yieldObjectId: this.yieldObjectId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): DeleteYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return DeleteYieldObjectEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromJSONField(ID.reified(), field.yieldObjectId) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): DeleteYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== DeleteYieldObjectEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(DeleteYieldObjectEvent.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return DeleteYieldObjectEvent.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): DeleteYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDeleteYieldObjectEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DeleteYieldObjectEvent object`); } return DeleteYieldObjectEvent.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): DeleteYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDeleteYieldObjectEvent(data.bcs.type)) { throw new Error(`object at is not a DeleteYieldObjectEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return DeleteYieldObjectEvent.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DeleteYieldObjectEvent.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<DeleteYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DeleteYieldObjectEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDeleteYieldObjectEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DeleteYieldObjectEvent object`); }

 return DeleteYieldObjectEvent.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== EarnInterestEvent =============================== */

export function isEarnInterestEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::yield_object::EarnInterestEvent` + '<'); }

export interface EarnInterestEventFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { yieldObjectId: ToField<ID>; amount: ToField<"u64"> }

export type EarnInterestEventReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< EarnInterestEvent<PT, SY>, EarnInterestEventFields<PT, SY> >;

export class EarnInterestEvent<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::yield_object::EarnInterestEvent`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = EarnInterestEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_object::EarnInterestEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = EarnInterestEvent.$isPhantom;

 readonly yieldObjectId: ToField<ID>; readonly amount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: EarnInterestEventFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( EarnInterestEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::yield_object::EarnInterestEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.yieldObjectId = fields.yieldObjectId;; this.amount = fields.amount; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): EarnInterestEventReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: EarnInterestEvent.$typeName, fullTypeName: composeSuiType( EarnInterestEvent.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::yield_object::EarnInterestEvent<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: EarnInterestEvent.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => EarnInterestEvent.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => EarnInterestEvent.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => EarnInterestEvent.fromBcs( [PT, SY], data, ), bcs: EarnInterestEvent.bcs, fromJSONField: (field: any) => EarnInterestEvent.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => EarnInterestEvent.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => EarnInterestEvent.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => EarnInterestEvent.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => EarnInterestEvent.fetch( client, [PT, SY], id, ), new: ( fields: EarnInterestEventFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new EarnInterestEvent( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return EarnInterestEvent.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<EarnInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(EarnInterestEvent.reified( PT, SY )); } static get p() { return EarnInterestEvent.phantom }

 static get bcs() { return bcs.struct("EarnInterestEvent", {

 yield_object_id: ID.bcs, amount: bcs.u64()

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): EarnInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return EarnInterestEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromFields(ID.reified(), fields.yield_object_id), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): EarnInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isEarnInterestEvent(item.type)) { throw new Error("not a EarnInterestEvent type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return EarnInterestEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromFieldsWithTypes(ID.reified(), item.fields.yield_object_id), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): EarnInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return EarnInterestEvent.fromFields( typeArgs, EarnInterestEvent.bcs.parse(data) ) }

 toJSONField() { return {

 yieldObjectId: this.yieldObjectId,amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): EarnInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return EarnInterestEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromJSONField(ID.reified(), field.yieldObjectId), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): EarnInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== EarnInterestEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(EarnInterestEvent.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return EarnInterestEvent.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): EarnInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isEarnInterestEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a EarnInterestEvent object`); } return EarnInterestEvent.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): EarnInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isEarnInterestEvent(data.bcs.type)) { throw new Error(`object at is not a EarnInterestEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return EarnInterestEvent.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return EarnInterestEvent.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<EarnInterestEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching EarnInterestEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isEarnInterestEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a EarnInterestEvent object`); }

 return EarnInterestEvent.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== MergeYieldObjectEvent =============================== */

export function isMergeYieldObjectEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::yield_object::MergeYieldObjectEvent` + '<'); }

export interface MergeYieldObjectEventFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { yieldObjectId: ToField<ID>; mergedYieldObjectId: ToField<ID> }

export type MergeYieldObjectEventReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< MergeYieldObjectEvent<PT, SY>, MergeYieldObjectEventFields<PT, SY> >;

export class MergeYieldObjectEvent<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::yield_object::MergeYieldObjectEvent`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = MergeYieldObjectEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_object::MergeYieldObjectEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = MergeYieldObjectEvent.$isPhantom;

 readonly yieldObjectId: ToField<ID>; readonly mergedYieldObjectId: ToField<ID>

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: MergeYieldObjectEventFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( MergeYieldObjectEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::yield_object::MergeYieldObjectEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.yieldObjectId = fields.yieldObjectId;; this.mergedYieldObjectId = fields.mergedYieldObjectId; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): MergeYieldObjectEventReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: MergeYieldObjectEvent.$typeName, fullTypeName: composeSuiType( MergeYieldObjectEvent.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::yield_object::MergeYieldObjectEvent<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: MergeYieldObjectEvent.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => MergeYieldObjectEvent.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MergeYieldObjectEvent.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => MergeYieldObjectEvent.fromBcs( [PT, SY], data, ), bcs: MergeYieldObjectEvent.bcs, fromJSONField: (field: any) => MergeYieldObjectEvent.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => MergeYieldObjectEvent.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => MergeYieldObjectEvent.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => MergeYieldObjectEvent.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => MergeYieldObjectEvent.fetch( client, [PT, SY], id, ), new: ( fields: MergeYieldObjectEventFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new MergeYieldObjectEvent( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return MergeYieldObjectEvent.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<MergeYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(MergeYieldObjectEvent.reified( PT, SY )); } static get p() { return MergeYieldObjectEvent.phantom }

 static get bcs() { return bcs.struct("MergeYieldObjectEvent", {

 yield_object_id: ID.bcs, merged_yield_object_id: ID.bcs

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): MergeYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return MergeYieldObjectEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromFields(ID.reified(), fields.yield_object_id), mergedYieldObjectId: decodeFromFields(ID.reified(), fields.merged_yield_object_id) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): MergeYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isMergeYieldObjectEvent(item.type)) { throw new Error("not a MergeYieldObjectEvent type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return MergeYieldObjectEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromFieldsWithTypes(ID.reified(), item.fields.yield_object_id), mergedYieldObjectId: decodeFromFieldsWithTypes(ID.reified(), item.fields.merged_yield_object_id) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): MergeYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return MergeYieldObjectEvent.fromFields( typeArgs, MergeYieldObjectEvent.bcs.parse(data) ) }

 toJSONField() { return {

 yieldObjectId: this.yieldObjectId,mergedYieldObjectId: this.mergedYieldObjectId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): MergeYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return MergeYieldObjectEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromJSONField(ID.reified(), field.yieldObjectId), mergedYieldObjectId: decodeFromJSONField(ID.reified(), field.mergedYieldObjectId) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): MergeYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== MergeYieldObjectEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(MergeYieldObjectEvent.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return MergeYieldObjectEvent.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): MergeYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMergeYieldObjectEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MergeYieldObjectEvent object`); } return MergeYieldObjectEvent.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): MergeYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMergeYieldObjectEvent(data.bcs.type)) { throw new Error(`object at is not a MergeYieldObjectEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return MergeYieldObjectEvent.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MergeYieldObjectEvent.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<MergeYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MergeYieldObjectEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMergeYieldObjectEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MergeYieldObjectEvent object`); }

 return MergeYieldObjectEvent.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== SplitYieldObjectEvent =============================== */

export function isSplitYieldObjectEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::yield_object::SplitYieldObjectEvent` + '<'); }

export interface SplitYieldObjectEventFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { yieldObjectId: ToField<ID>; splittedYieldObjectId: ToField<ID> }

export type SplitYieldObjectEventReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< SplitYieldObjectEvent<PT, SY>, SplitYieldObjectEventFields<PT, SY> >;

export class SplitYieldObjectEvent<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::yield_object::SplitYieldObjectEvent`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = SplitYieldObjectEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_object::SplitYieldObjectEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = SplitYieldObjectEvent.$isPhantom;

 readonly yieldObjectId: ToField<ID>; readonly splittedYieldObjectId: ToField<ID>

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: SplitYieldObjectEventFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( SplitYieldObjectEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::yield_object::SplitYieldObjectEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.yieldObjectId = fields.yieldObjectId;; this.splittedYieldObjectId = fields.splittedYieldObjectId; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): SplitYieldObjectEventReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: SplitYieldObjectEvent.$typeName, fullTypeName: composeSuiType( SplitYieldObjectEvent.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::yield_object::SplitYieldObjectEvent<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: SplitYieldObjectEvent.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => SplitYieldObjectEvent.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SplitYieldObjectEvent.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => SplitYieldObjectEvent.fromBcs( [PT, SY], data, ), bcs: SplitYieldObjectEvent.bcs, fromJSONField: (field: any) => SplitYieldObjectEvent.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => SplitYieldObjectEvent.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => SplitYieldObjectEvent.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => SplitYieldObjectEvent.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => SplitYieldObjectEvent.fetch( client, [PT, SY], id, ), new: ( fields: SplitYieldObjectEventFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new SplitYieldObjectEvent( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return SplitYieldObjectEvent.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<SplitYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(SplitYieldObjectEvent.reified( PT, SY )); } static get p() { return SplitYieldObjectEvent.phantom }

 static get bcs() { return bcs.struct("SplitYieldObjectEvent", {

 yield_object_id: ID.bcs, splitted_yield_object_id: ID.bcs

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): SplitYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return SplitYieldObjectEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromFields(ID.reified(), fields.yield_object_id), splittedYieldObjectId: decodeFromFields(ID.reified(), fields.splitted_yield_object_id) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): SplitYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isSplitYieldObjectEvent(item.type)) { throw new Error("not a SplitYieldObjectEvent type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return SplitYieldObjectEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromFieldsWithTypes(ID.reified(), item.fields.yield_object_id), splittedYieldObjectId: decodeFromFieldsWithTypes(ID.reified(), item.fields.splitted_yield_object_id) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): SplitYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return SplitYieldObjectEvent.fromFields( typeArgs, SplitYieldObjectEvent.bcs.parse(data) ) }

 toJSONField() { return {

 yieldObjectId: this.yieldObjectId,splittedYieldObjectId: this.splittedYieldObjectId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): SplitYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return SplitYieldObjectEvent.reified( typeArgs[0], typeArgs[1], ).new( { yieldObjectId: decodeFromJSONField(ID.reified(), field.yieldObjectId), splittedYieldObjectId: decodeFromJSONField(ID.reified(), field.splittedYieldObjectId) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): SplitYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== SplitYieldObjectEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(SplitYieldObjectEvent.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return SplitYieldObjectEvent.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): SplitYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSplitYieldObjectEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SplitYieldObjectEvent object`); } return SplitYieldObjectEvent.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): SplitYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSplitYieldObjectEvent(data.bcs.type)) { throw new Error(`object at is not a SplitYieldObjectEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return SplitYieldObjectEvent.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SplitYieldObjectEvent.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<SplitYieldObjectEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SplitYieldObjectEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSplitYieldObjectEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SplitYieldObjectEvent object`); }

 return SplitYieldObjectEvent.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== YieldObject =============================== */

export function isYieldObject(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::yield_object::YieldObject` + '<'); }

export interface YieldObjectFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { id: ToField<UID>; amount: ToField<"u64">; exchangeRate: ToField<FixedPoint64>; syUnclaimedAmount: ToField<"u64"> }

export type YieldObjectReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< YieldObject<PT, SY>, YieldObjectFields<PT, SY> >;

export class YieldObject<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::yield_object::YieldObject`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = YieldObject.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_object::YieldObject<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = YieldObject.$isPhantom;

 readonly id: ToField<UID>; readonly amount: ToField<"u64">; readonly exchangeRate: ToField<FixedPoint64>; readonly syUnclaimedAmount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: YieldObjectFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( YieldObject.$typeName, ...typeArgs ) as `${typeof PKG_V1}::yield_object::YieldObject<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.amount = fields.amount;; this.exchangeRate = fields.exchangeRate;; this.syUnclaimedAmount = fields.syUnclaimedAmount; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): YieldObjectReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: YieldObject.$typeName, fullTypeName: composeSuiType( YieldObject.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::yield_object::YieldObject<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: YieldObject.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => YieldObject.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => YieldObject.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => YieldObject.fromBcs( [PT, SY], data, ), bcs: YieldObject.bcs, fromJSONField: (field: any) => YieldObject.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => YieldObject.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => YieldObject.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => YieldObject.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => YieldObject.fetch( client, [PT, SY], id, ), new: ( fields: YieldObjectFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new YieldObject( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return YieldObject.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<YieldObject<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(YieldObject.reified( PT, SY )); } static get p() { return YieldObject.phantom }

 static get bcs() { return bcs.struct("YieldObject", {

 id: UID.bcs, amount: bcs.u64(), exchange_rate: FixedPoint64.bcs, sy_unclaimed_amount: bcs.u64()

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): YieldObject<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return YieldObject.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFields(UID.reified(), fields.id), amount: decodeFromFields("u64", fields.amount), exchangeRate: decodeFromFields(FixedPoint64.reified(), fields.exchange_rate), syUnclaimedAmount: decodeFromFields("u64", fields.sy_unclaimed_amount) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): YieldObject<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isYieldObject(item.type)) { throw new Error("not a YieldObject type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return YieldObject.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), amount: decodeFromFieldsWithTypes("u64", item.fields.amount), exchangeRate: decodeFromFieldsWithTypes(FixedPoint64.reified(), item.fields.exchange_rate), syUnclaimedAmount: decodeFromFieldsWithTypes("u64", item.fields.sy_unclaimed_amount) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): YieldObject<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return YieldObject.fromFields( typeArgs, YieldObject.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,amount: this.amount.toString(),exchangeRate: this.exchangeRate.toJSONField(),syUnclaimedAmount: this.syUnclaimedAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): YieldObject<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return YieldObject.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromJSONField(UID.reified(), field.id), amount: decodeFromJSONField("u64", field.amount), exchangeRate: decodeFromJSONField(FixedPoint64.reified(), field.exchangeRate), syUnclaimedAmount: decodeFromJSONField("u64", field.syUnclaimedAmount) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): YieldObject<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== YieldObject.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(YieldObject.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return YieldObject.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): YieldObject<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isYieldObject(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a YieldObject object`); } return YieldObject.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): YieldObject<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isYieldObject(data.bcs.type)) { throw new Error(`object at is not a YieldObject object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return YieldObject.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return YieldObject.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<YieldObject<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching YieldObject object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isYieldObject(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a YieldObject object`); }

 return YieldObject.fromSuiObjectData( typeArgs, res.data ); }

 }
