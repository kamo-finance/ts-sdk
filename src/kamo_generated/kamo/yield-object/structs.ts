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

export interface YieldObjectFields<T extends PhantomTypeArgument> { id: ToField<UID>; amount: ToField<"u64">; exchangeRate: ToField<FixedPoint64>; syUnclaimedAmount: ToField<"u64"> }

export type YieldObjectReified<T extends PhantomTypeArgument> = Reified< YieldObject<T>, YieldObjectFields<T> >;

export class YieldObject<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::yield_object::YieldObject`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = YieldObject.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_object::YieldObject<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = YieldObject.$isPhantom;

 readonly id: ToField<UID>; readonly amount: ToField<"u64">; readonly exchangeRate: ToField<FixedPoint64>; readonly syUnclaimedAmount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: YieldObjectFields<T>, ) { this.$fullTypeName = composeSuiType( YieldObject.$typeName, ...typeArgs ) as `${typeof PKG_V1}::yield_object::YieldObject<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.amount = fields.amount;; this.exchangeRate = fields.exchangeRate;; this.syUnclaimedAmount = fields.syUnclaimedAmount; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): YieldObjectReified<ToPhantomTypeArgument<T>> { return { typeName: YieldObject.$typeName, fullTypeName: composeSuiType( YieldObject.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::yield_object::YieldObject<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: YieldObject.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => YieldObject.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => YieldObject.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => YieldObject.fromBcs( T, data, ), bcs: YieldObject.bcs, fromJSONField: (field: any) => YieldObject.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => YieldObject.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => YieldObject.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => YieldObject.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => YieldObject.fetch( client, T, id, ), new: ( fields: YieldObjectFields<ToPhantomTypeArgument<T>>, ) => { return new YieldObject( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return YieldObject.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<YieldObject<ToPhantomTypeArgument<T>>>> { return phantom(YieldObject.reified( T )); } static get p() { return YieldObject.phantom }

 static get bcs() { return bcs.struct("YieldObject", {

 id: UID.bcs, amount: bcs.u64(), exchange_rate: FixedPoint64.bcs, sy_unclaimed_amount: bcs.u64()

}) };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): YieldObject<ToPhantomTypeArgument<T>> { return YieldObject.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), amount: decodeFromFields("u64", fields.amount), exchangeRate: decodeFromFields(FixedPoint64.reified(), fields.exchange_rate), syUnclaimedAmount: decodeFromFields("u64", fields.sy_unclaimed_amount) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): YieldObject<ToPhantomTypeArgument<T>> { if (!isYieldObject(item.type)) { throw new Error("not a YieldObject type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return YieldObject.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), amount: decodeFromFieldsWithTypes("u64", item.fields.amount), exchangeRate: decodeFromFieldsWithTypes(FixedPoint64.reified(), item.fields.exchange_rate), syUnclaimedAmount: decodeFromFieldsWithTypes("u64", item.fields.sy_unclaimed_amount) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): YieldObject<ToPhantomTypeArgument<T>> { return YieldObject.fromFields( typeArg, YieldObject.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,amount: this.amount.toString(),exchangeRate: this.exchangeRate.toJSONField(),syUnclaimedAmount: this.syUnclaimedAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): YieldObject<ToPhantomTypeArgument<T>> { return YieldObject.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), amount: decodeFromJSONField("u64", field.amount), exchangeRate: decodeFromJSONField(FixedPoint64.reified(), field.exchangeRate), syUnclaimedAmount: decodeFromJSONField("u64", field.syUnclaimedAmount) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): YieldObject<ToPhantomTypeArgument<T>> { if (json.$typeName !== YieldObject.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(YieldObject.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return YieldObject.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): YieldObject<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isYieldObject(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a YieldObject object`); } return YieldObject.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): YieldObject<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isYieldObject(data.bcs.type)) { throw new Error(`object at is not a YieldObject object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return YieldObject.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return YieldObject.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<YieldObject<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching YieldObject object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isYieldObject(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a YieldObject object`); }

 return YieldObject.fromSuiObjectData( typeArg, res.data ); }

 }
