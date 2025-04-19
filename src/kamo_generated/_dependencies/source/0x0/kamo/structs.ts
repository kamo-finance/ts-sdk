import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {TreasuryCap} from "../../0x2/coin/structs";
import {UID} from "../../0x2/object/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== KAMO =============================== */

export function isKAMO(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::kamo::KAMO`; }

export interface KAMOFields { dummyField: ToField<"bool"> }

export type KAMOReified = Reified< KAMO, KAMOFields >;

export class KAMO implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::kamo::KAMO`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = KAMO.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::kamo::KAMO`; readonly $typeArgs: []; readonly $isPhantom = KAMO.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: KAMOFields, ) { this.$fullTypeName = composeSuiType( KAMO.$typeName, ...typeArgs ) as `${typeof PKG_V1}::kamo::KAMO`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): KAMOReified { return { typeName: KAMO.$typeName, fullTypeName: composeSuiType( KAMO.$typeName, ...[] ) as `${typeof PKG_V1}::kamo::KAMO`, typeArgs: [ ] as [], isPhantom: KAMO.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => KAMO.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => KAMO.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => KAMO.fromBcs( data, ), bcs: KAMO.bcs, fromJSONField: (field: any) => KAMO.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => KAMO.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => KAMO.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => KAMO.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => KAMO.fetch( client, id, ), new: ( fields: KAMOFields, ) => { return new KAMO( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return KAMO.reified() }

 static phantom( ): PhantomReified<ToTypeStr<KAMO>> { return phantom(KAMO.reified( )); } static get p() { return KAMO.phantom() }

 static get bcs() { return bcs.struct("KAMO", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): KAMO { return KAMO.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): KAMO { if (!isKAMO(item.type)) { throw new Error("not a KAMO type");

 }

 return KAMO.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): KAMO { return KAMO.fromFields( KAMO.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): KAMO { return KAMO.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): KAMO { if (json.$typeName !== KAMO.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return KAMO.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): KAMO { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isKAMO(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a KAMO object`); } return KAMO.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): KAMO { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isKAMO(data.bcs.type)) { throw new Error(`object at is not a KAMO object`); }

 return KAMO.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return KAMO.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<KAMO> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching KAMO object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isKAMO(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a KAMO object`); }

 return KAMO.fromSuiObjectData( res.data ); }

 }

/* ============================== KamoTreasuryCap =============================== */

export function isKamoTreasuryCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::kamo::KamoTreasuryCap`; }

export interface KamoTreasuryCapFields { id: ToField<UID>; cap: ToField<TreasuryCap<ToPhantom<KAMO>>> }

export type KamoTreasuryCapReified = Reified< KamoTreasuryCap, KamoTreasuryCapFields >;

export class KamoTreasuryCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::kamo::KamoTreasuryCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = KamoTreasuryCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::kamo::KamoTreasuryCap`; readonly $typeArgs: []; readonly $isPhantom = KamoTreasuryCap.$isPhantom;

 readonly id: ToField<UID>; readonly cap: ToField<TreasuryCap<ToPhantom<KAMO>>>

 private constructor(typeArgs: [], fields: KamoTreasuryCapFields, ) { this.$fullTypeName = composeSuiType( KamoTreasuryCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::kamo::KamoTreasuryCap`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.cap = fields.cap; }

 static reified( ): KamoTreasuryCapReified { return { typeName: KamoTreasuryCap.$typeName, fullTypeName: composeSuiType( KamoTreasuryCap.$typeName, ...[] ) as `${typeof PKG_V1}::kamo::KamoTreasuryCap`, typeArgs: [ ] as [], isPhantom: KamoTreasuryCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => KamoTreasuryCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => KamoTreasuryCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => KamoTreasuryCap.fromBcs( data, ), bcs: KamoTreasuryCap.bcs, fromJSONField: (field: any) => KamoTreasuryCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => KamoTreasuryCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => KamoTreasuryCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => KamoTreasuryCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => KamoTreasuryCap.fetch( client, id, ), new: ( fields: KamoTreasuryCapFields, ) => { return new KamoTreasuryCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return KamoTreasuryCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<KamoTreasuryCap>> { return phantom(KamoTreasuryCap.reified( )); } static get p() { return KamoTreasuryCap.phantom() }

 static get bcs() { return bcs.struct("KamoTreasuryCap", {

 id: UID.bcs, cap: TreasuryCap.bcs

}) };

 static fromFields( fields: Record<string, any> ): KamoTreasuryCap { return KamoTreasuryCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), cap: decodeFromFields(TreasuryCap.reified(reified.phantom(KAMO.reified())), fields.cap) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): KamoTreasuryCap { if (!isKamoTreasuryCap(item.type)) { throw new Error("not a KamoTreasuryCap type");

 }

 return KamoTreasuryCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), cap: decodeFromFieldsWithTypes(TreasuryCap.reified(reified.phantom(KAMO.reified())), item.fields.cap) } ) }

 static fromBcs( data: Uint8Array ): KamoTreasuryCap { return KamoTreasuryCap.fromFields( KamoTreasuryCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,cap: this.cap.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): KamoTreasuryCap { return KamoTreasuryCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), cap: decodeFromJSONField(TreasuryCap.reified(reified.phantom(KAMO.reified())), field.cap) } ) }

 static fromJSON( json: Record<string, any> ): KamoTreasuryCap { if (json.$typeName !== KamoTreasuryCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return KamoTreasuryCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): KamoTreasuryCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isKamoTreasuryCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a KamoTreasuryCap object`); } return KamoTreasuryCap.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): KamoTreasuryCap { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isKamoTreasuryCap(data.bcs.type)) { throw new Error(`object at is not a KamoTreasuryCap object`); }

 return KamoTreasuryCap.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return KamoTreasuryCap.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<KamoTreasuryCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching KamoTreasuryCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isKamoTreasuryCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a KamoTreasuryCap object`); }

 return KamoTreasuryCap.fromSuiObjectData( res.data ); }

 }

/* ============================== TokensBurned =============================== */

export function isTokensBurned(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::kamo::TokensBurned`; }

export interface TokensBurnedFields { amount: ToField<"u64">; burner: ToField<"address"> }

export type TokensBurnedReified = Reified< TokensBurned, TokensBurnedFields >;

export class TokensBurned implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::kamo::TokensBurned`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TokensBurned.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::kamo::TokensBurned`; readonly $typeArgs: []; readonly $isPhantom = TokensBurned.$isPhantom;

 readonly amount: ToField<"u64">; readonly burner: ToField<"address">

 private constructor(typeArgs: [], fields: TokensBurnedFields, ) { this.$fullTypeName = composeSuiType( TokensBurned.$typeName, ...typeArgs ) as `${typeof PKG_V1}::kamo::TokensBurned`; this.$typeArgs = typeArgs;

 this.amount = fields.amount;; this.burner = fields.burner; }

 static reified( ): TokensBurnedReified { return { typeName: TokensBurned.$typeName, fullTypeName: composeSuiType( TokensBurned.$typeName, ...[] ) as `${typeof PKG_V1}::kamo::TokensBurned`, typeArgs: [ ] as [], isPhantom: TokensBurned.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TokensBurned.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TokensBurned.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TokensBurned.fromBcs( data, ), bcs: TokensBurned.bcs, fromJSONField: (field: any) => TokensBurned.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TokensBurned.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TokensBurned.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TokensBurned.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TokensBurned.fetch( client, id, ), new: ( fields: TokensBurnedFields, ) => { return new TokensBurned( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TokensBurned.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TokensBurned>> { return phantom(TokensBurned.reified( )); } static get p() { return TokensBurned.phantom() }

 static get bcs() { return bcs.struct("TokensBurned", {

 amount: bcs.u64(), burner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): TokensBurned { return TokensBurned.reified( ).new( { amount: decodeFromFields("u64", fields.amount), burner: decodeFromFields("address", fields.burner) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TokensBurned { if (!isTokensBurned(item.type)) { throw new Error("not a TokensBurned type");

 }

 return TokensBurned.reified( ).new( { amount: decodeFromFieldsWithTypes("u64", item.fields.amount), burner: decodeFromFieldsWithTypes("address", item.fields.burner) } ) }

 static fromBcs( data: Uint8Array ): TokensBurned { return TokensBurned.fromFields( TokensBurned.bcs.parse(data) ) }

 toJSONField() { return {

 amount: this.amount.toString(),burner: this.burner,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TokensBurned { return TokensBurned.reified( ).new( { amount: decodeFromJSONField("u64", field.amount), burner: decodeFromJSONField("address", field.burner) } ) }

 static fromJSON( json: Record<string, any> ): TokensBurned { if (json.$typeName !== TokensBurned.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TokensBurned.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TokensBurned { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTokensBurned(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TokensBurned object`); } return TokensBurned.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TokensBurned { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTokensBurned(data.bcs.type)) { throw new Error(`object at is not a TokensBurned object`); }

 return TokensBurned.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TokensBurned.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TokensBurned> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TokensBurned object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTokensBurned(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TokensBurned object`); }

 return TokensBurned.fromSuiObjectData( res.data ); }

 }

/* ============================== TokensMinted =============================== */

export function isTokensMinted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::kamo::TokensMinted`; }

export interface TokensMintedFields { amount: ToField<"u64">; recipient: ToField<"address"> }

export type TokensMintedReified = Reified< TokensMinted, TokensMintedFields >;

export class TokensMinted implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::kamo::TokensMinted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TokensMinted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::kamo::TokensMinted`; readonly $typeArgs: []; readonly $isPhantom = TokensMinted.$isPhantom;

 readonly amount: ToField<"u64">; readonly recipient: ToField<"address">

 private constructor(typeArgs: [], fields: TokensMintedFields, ) { this.$fullTypeName = composeSuiType( TokensMinted.$typeName, ...typeArgs ) as `${typeof PKG_V1}::kamo::TokensMinted`; this.$typeArgs = typeArgs;

 this.amount = fields.amount;; this.recipient = fields.recipient; }

 static reified( ): TokensMintedReified { return { typeName: TokensMinted.$typeName, fullTypeName: composeSuiType( TokensMinted.$typeName, ...[] ) as `${typeof PKG_V1}::kamo::TokensMinted`, typeArgs: [ ] as [], isPhantom: TokensMinted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TokensMinted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TokensMinted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TokensMinted.fromBcs( data, ), bcs: TokensMinted.bcs, fromJSONField: (field: any) => TokensMinted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TokensMinted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TokensMinted.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TokensMinted.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TokensMinted.fetch( client, id, ), new: ( fields: TokensMintedFields, ) => { return new TokensMinted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TokensMinted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TokensMinted>> { return phantom(TokensMinted.reified( )); } static get p() { return TokensMinted.phantom() }

 static get bcs() { return bcs.struct("TokensMinted", {

 amount: bcs.u64(), recipient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): TokensMinted { return TokensMinted.reified( ).new( { amount: decodeFromFields("u64", fields.amount), recipient: decodeFromFields("address", fields.recipient) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TokensMinted { if (!isTokensMinted(item.type)) { throw new Error("not a TokensMinted type");

 }

 return TokensMinted.reified( ).new( { amount: decodeFromFieldsWithTypes("u64", item.fields.amount), recipient: decodeFromFieldsWithTypes("address", item.fields.recipient) } ) }

 static fromBcs( data: Uint8Array ): TokensMinted { return TokensMinted.fromFields( TokensMinted.bcs.parse(data) ) }

 toJSONField() { return {

 amount: this.amount.toString(),recipient: this.recipient,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TokensMinted { return TokensMinted.reified( ).new( { amount: decodeFromJSONField("u64", field.amount), recipient: decodeFromJSONField("address", field.recipient) } ) }

 static fromJSON( json: Record<string, any> ): TokensMinted { if (json.$typeName !== TokensMinted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TokensMinted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TokensMinted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTokensMinted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TokensMinted object`); } return TokensMinted.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TokensMinted { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTokensMinted(data.bcs.type)) { throw new Error(`object at is not a TokensMinted object`); }

 return TokensMinted.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TokensMinted.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TokensMinted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TokensMinted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTokensMinted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TokensMinted object`); }

 return TokensMinted.fromSuiObjectData( res.data ); }

 }
