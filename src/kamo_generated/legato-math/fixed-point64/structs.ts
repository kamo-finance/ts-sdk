import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== FixedPoint64 =============================== */

export function isFixedPoint64(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::fixed_point64::FixedPoint64`; }

export interface FixedPoint64Fields { value: ToField<"u128"> }

export type FixedPoint64Reified = Reified< FixedPoint64, FixedPoint64Fields >;

export class FixedPoint64 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fixed_point64::FixedPoint64`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = FixedPoint64.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fixed_point64::FixedPoint64`; readonly $typeArgs: []; readonly $isPhantom = FixedPoint64.$isPhantom;

 readonly value: ToField<"u128">

 private constructor(typeArgs: [], fields: FixedPoint64Fields, ) { this.$fullTypeName = composeSuiType( FixedPoint64.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fixed_point64::FixedPoint64`; this.$typeArgs = typeArgs;

 this.value = fields.value; }

 static reified( ): FixedPoint64Reified { return { typeName: FixedPoint64.$typeName, fullTypeName: composeSuiType( FixedPoint64.$typeName, ...[] ) as `${typeof PKG_V1}::fixed_point64::FixedPoint64`, typeArgs: [ ] as [], isPhantom: FixedPoint64.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FixedPoint64.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FixedPoint64.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FixedPoint64.fromBcs( data, ), bcs: FixedPoint64.bcs, fromJSONField: (field: any) => FixedPoint64.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FixedPoint64.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FixedPoint64.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => FixedPoint64.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => FixedPoint64.fetch( client, id, ), new: ( fields: FixedPoint64Fields, ) => { return new FixedPoint64( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FixedPoint64.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FixedPoint64>> { return phantom(FixedPoint64.reified( )); } static get p() { return FixedPoint64.phantom() }

 static get bcs() { return bcs.struct("FixedPoint64", {

 value: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): FixedPoint64 { return FixedPoint64.reified( ).new( { value: decodeFromFields("u128", fields.value) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FixedPoint64 { if (!isFixedPoint64(item.type)) { throw new Error("not a FixedPoint64 type");

 }

 return FixedPoint64.reified( ).new( { value: decodeFromFieldsWithTypes("u128", item.fields.value) } ) }

 static fromBcs( data: Uint8Array ): FixedPoint64 { return FixedPoint64.fromFields( FixedPoint64.bcs.parse(data) ) }

 toJSONField() { return {

 value: this.value.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FixedPoint64 { return FixedPoint64.reified( ).new( { value: decodeFromJSONField("u128", field.value) } ) }

 static fromJSON( json: Record<string, any> ): FixedPoint64 { if (json.$typeName !== FixedPoint64.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FixedPoint64.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FixedPoint64 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFixedPoint64(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FixedPoint64 object`); } return FixedPoint64.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): FixedPoint64 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFixedPoint64(data.bcs.type)) { throw new Error(`object at is not a FixedPoint64 object`); }

 return FixedPoint64.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FixedPoint64.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<FixedPoint64> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FixedPoint64 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFixedPoint64(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FixedPoint64 object`); }

 return FixedPoint64.fromSuiObjectData( res.data ); }

 }
