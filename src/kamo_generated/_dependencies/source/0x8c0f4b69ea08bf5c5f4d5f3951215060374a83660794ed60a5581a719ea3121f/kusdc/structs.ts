import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== KUSDC =============================== */

export function isKUSDC(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::kusdc::KUSDC`; }

export interface KUSDCFields { dummyField: ToField<"bool"> }

export type KUSDCReified = Reified< KUSDC, KUSDCFields >;

export class KUSDC implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::kusdc::KUSDC`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = KUSDC.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::kusdc::KUSDC`; readonly $typeArgs: []; readonly $isPhantom = KUSDC.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: KUSDCFields, ) { this.$fullTypeName = composeSuiType( KUSDC.$typeName, ...typeArgs ) as `${typeof PKG_V1}::kusdc::KUSDC`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): KUSDCReified { return { typeName: KUSDC.$typeName, fullTypeName: composeSuiType( KUSDC.$typeName, ...[] ) as `${typeof PKG_V1}::kusdc::KUSDC`, typeArgs: [ ] as [], isPhantom: KUSDC.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => KUSDC.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => KUSDC.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => KUSDC.fromBcs( data, ), bcs: KUSDC.bcs, fromJSONField: (field: any) => KUSDC.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => KUSDC.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => KUSDC.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => KUSDC.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => KUSDC.fetch( client, id, ), new: ( fields: KUSDCFields, ) => { return new KUSDC( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return KUSDC.reified() }

 static phantom( ): PhantomReified<ToTypeStr<KUSDC>> { return phantom(KUSDC.reified( )); } static get p() { return KUSDC.phantom() }

 static get bcs() { return bcs.struct("KUSDC", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): KUSDC { return KUSDC.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): KUSDC { if (!isKUSDC(item.type)) { throw new Error("not a KUSDC type");

 }

 return KUSDC.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): KUSDC { return KUSDC.fromFields( KUSDC.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): KUSDC { return KUSDC.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): KUSDC { if (json.$typeName !== KUSDC.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return KUSDC.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): KUSDC { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isKUSDC(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a KUSDC object`); } return KUSDC.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): KUSDC { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isKUSDC(data.bcs.type)) { throw new Error(`object at is not a KUSDC object`); }

 return KUSDC.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return KUSDC.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<KUSDC> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching KUSDC object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isKUSDC(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a KUSDC object`); }

 return KUSDC.fromSuiObjectData( res.data ); }

 }
