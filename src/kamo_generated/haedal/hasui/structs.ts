import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== HASUI =============================== */

export function isHASUI(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hasui::HASUI`; }

export interface HASUIFields { dummyField: ToField<"bool"> }

export type HASUIReified = Reified< HASUI, HASUIFields >;

export class HASUI implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hasui::HASUI`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HASUI.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hasui::HASUI`; readonly $typeArgs: []; readonly $isPhantom = HASUI.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: HASUIFields, ) { this.$fullTypeName = composeSuiType( HASUI.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hasui::HASUI`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): HASUIReified { return { typeName: HASUI.$typeName, fullTypeName: composeSuiType( HASUI.$typeName, ...[] ) as `${typeof PKG_V1}::hasui::HASUI`, typeArgs: [ ] as [], isPhantom: HASUI.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HASUI.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HASUI.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HASUI.fromBcs( data, ), bcs: HASUI.bcs, fromJSONField: (field: any) => HASUI.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HASUI.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HASUI.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HASUI.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HASUI.fetch( client, id, ), new: ( fields: HASUIFields, ) => { return new HASUI( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HASUI.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HASUI>> { return phantom(HASUI.reified( )); } static get p() { return HASUI.phantom() }

 static get bcs() { return bcs.struct("HASUI", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): HASUI { return HASUI.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HASUI { if (!isHASUI(item.type)) { throw new Error("not a HASUI type");

 }

 return HASUI.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): HASUI { return HASUI.fromFields( HASUI.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HASUI { return HASUI.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): HASUI { if (json.$typeName !== HASUI.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HASUI.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HASUI { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHASUI(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HASUI object`); } return HASUI.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HASUI { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHASUI(data.bcs.type)) { throw new Error(`object at is not a HASUI object`); }

 return HASUI.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HASUI.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HASUI> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HASUI object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHASUI(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HASUI object`); }

 return HASUI.fromSuiObjectData( res.data ); }

 }
