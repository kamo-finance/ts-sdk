import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {FixedPoint64} from "../../legato-math/fixed-point64/structs";
import {UID} from "../../sui/object/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

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
