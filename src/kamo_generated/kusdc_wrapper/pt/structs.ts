import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== PT =============================== */

export function isPT(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::PT::PT`; }

export interface PTFields { dummyField: ToField<"bool"> }

export type PTReified = Reified< PT, PTFields >;

export class PT implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::PT::PT`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PT.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::PT::PT`; readonly $typeArgs: []; readonly $isPhantom = PT.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: PTFields, ) { this.$fullTypeName = composeSuiType( PT.$typeName, ...typeArgs ) as `${typeof PKG_V1}::PT::PT`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): PTReified { return { typeName: PT.$typeName, fullTypeName: composeSuiType( PT.$typeName, ...[] ) as `${typeof PKG_V1}::PT::PT`, typeArgs: [ ] as [], isPhantom: PT.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PT.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PT.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PT.fromBcs( data, ), bcs: PT.bcs, fromJSONField: (field: any) => PT.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PT.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PT.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PT.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PT.fetch( client, id, ), new: ( fields: PTFields, ) => { return new PT( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PT.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PT>> { return phantom(PT.reified( )); } static get p() { return PT.phantom() }

 static get bcs() { return bcs.struct("PT", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): PT { return PT.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PT { if (!isPT(item.type)) { throw new Error("not a PT type");

 }

 return PT.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): PT { return PT.fromFields( PT.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PT { return PT.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): PT { if (json.$typeName !== PT.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PT.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PT { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPT(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PT object`); } return PT.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): PT { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPT(data.bcs.type)) { throw new Error(`object at is not a PT object`); }

 return PT.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PT.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<PT> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PT object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPT(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PT object`); }

 return PT.fromSuiObjectData( res.data ); }

 }
