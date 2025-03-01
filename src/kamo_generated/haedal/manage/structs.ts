import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {UID} from "../../sui/object/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== AdminCap =============================== */

export function isAdminCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::manage::AdminCap`; }

export interface AdminCapFields { id: ToField<UID>; init: ToField<"bool"> }

export type AdminCapReified = Reified< AdminCap, AdminCapFields >;

export class AdminCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::manage::AdminCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = AdminCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::manage::AdminCap`; readonly $typeArgs: []; readonly $isPhantom = AdminCap.$isPhantom;

 readonly id: ToField<UID>; readonly init: ToField<"bool">

 private constructor(typeArgs: [], fields: AdminCapFields, ) { this.$fullTypeName = composeSuiType( AdminCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::manage::AdminCap`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.init = fields.init; }

 static reified( ): AdminCapReified { return { typeName: AdminCap.$typeName, fullTypeName: composeSuiType( AdminCap.$typeName, ...[] ) as `${typeof PKG_V1}::manage::AdminCap`, typeArgs: [ ] as [], isPhantom: AdminCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AdminCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AdminCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AdminCap.fromBcs( data, ), bcs: AdminCap.bcs, fromJSONField: (field: any) => AdminCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AdminCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AdminCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => AdminCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => AdminCap.fetch( client, id, ), new: ( fields: AdminCapFields, ) => { return new AdminCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AdminCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AdminCap>> { return phantom(AdminCap.reified( )); } static get p() { return AdminCap.phantom() }

 static get bcs() { return bcs.struct("AdminCap", {

 id: UID.bcs, init: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), init: decodeFromFields("bool", fields.init) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AdminCap { if (!isAdminCap(item.type)) { throw new Error("not a AdminCap type");

 }

 return AdminCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), init: decodeFromFieldsWithTypes("bool", item.fields.init) } ) }

 static fromBcs( data: Uint8Array ): AdminCap { return AdminCap.fromFields( AdminCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,init: this.init,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), init: decodeFromJSONField("bool", field.init) } ) }

 static fromJSON( json: Record<string, any> ): AdminCap { if (json.$typeName !== AdminCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AdminCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AdminCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAdminCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AdminCap object`); } return AdminCap.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): AdminCap { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAdminCap(data.bcs.type)) { throw new Error(`object at is not a AdminCap object`); }

 return AdminCap.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return AdminCap.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<AdminCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AdminCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAdminCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AdminCap object`); }

 return AdminCap.fromSuiObjectData( res.data ); }

 }

/* ============================== OperatorCap =============================== */

export function isOperatorCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::manage::OperatorCap`; }

export interface OperatorCapFields { id: ToField<UID> }

export type OperatorCapReified = Reified< OperatorCap, OperatorCapFields >;

export class OperatorCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::manage::OperatorCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = OperatorCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::manage::OperatorCap`; readonly $typeArgs: []; readonly $isPhantom = OperatorCap.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: OperatorCapFields, ) { this.$fullTypeName = composeSuiType( OperatorCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::manage::OperatorCap`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): OperatorCapReified { return { typeName: OperatorCap.$typeName, fullTypeName: composeSuiType( OperatorCap.$typeName, ...[] ) as `${typeof PKG_V1}::manage::OperatorCap`, typeArgs: [ ] as [], isPhantom: OperatorCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OperatorCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OperatorCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OperatorCap.fromBcs( data, ), bcs: OperatorCap.bcs, fromJSONField: (field: any) => OperatorCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OperatorCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OperatorCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => OperatorCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => OperatorCap.fetch( client, id, ), new: ( fields: OperatorCapFields, ) => { return new OperatorCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OperatorCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OperatorCap>> { return phantom(OperatorCap.reified( )); } static get p() { return OperatorCap.phantom() }

 static get bcs() { return bcs.struct("OperatorCap", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): OperatorCap { return OperatorCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OperatorCap { if (!isOperatorCap(item.type)) { throw new Error("not a OperatorCap type");

 }

 return OperatorCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): OperatorCap { return OperatorCap.fromFields( OperatorCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OperatorCap { return OperatorCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): OperatorCap { if (json.$typeName !== OperatorCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OperatorCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OperatorCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOperatorCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OperatorCap object`); } return OperatorCap.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): OperatorCap { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOperatorCap(data.bcs.type)) { throw new Error(`object at is not a OperatorCap object`); }

 return OperatorCap.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OperatorCap.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<OperatorCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OperatorCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOperatorCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OperatorCap object`); }

 return OperatorCap.fromSuiObjectData( res.data ); }

 }
