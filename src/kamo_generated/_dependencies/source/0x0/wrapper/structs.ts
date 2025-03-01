import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {HASUI} from "../../../../haedal/hasui/structs";
import {UID} from "../../../../sui/object/structs";
import {Market} from "../amm/structs";
import {PKG_V1} from "../index";
import {State as State1} from "../manager/structs";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== PT =============================== */

export function isPT(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::wrapper::PT`; }

export interface PTFields { dummyField: ToField<"bool"> }

export type PTReified = Reified< PT, PTFields >;

export class PT implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::wrapper::PT`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PT.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::wrapper::PT`; readonly $typeArgs: []; readonly $isPhantom = PT.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: PTFields, ) { this.$fullTypeName = composeSuiType( PT.$typeName, ...typeArgs ) as `${typeof PKG_V1}::wrapper::PT`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): PTReified { return { typeName: PT.$typeName, fullTypeName: composeSuiType( PT.$typeName, ...[] ) as `${typeof PKG_V1}::wrapper::PT`, typeArgs: [ ] as [], isPhantom: PT.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PT.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PT.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PT.fromBcs( data, ), bcs: PT.bcs, fromJSONField: (field: any) => PT.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PT.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PT.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PT.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PT.fetch( client, id, ), new: ( fields: PTFields, ) => { return new PT( [], fields ) }, kind: "StructClassReified", } }

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

/* ============================== State =============================== */

export function isState(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::wrapper::State`; }

export interface StateFields { id: ToField<UID>; market: ToField<Market<ToPhantom<PT>, ToPhantom<HASUI>>>; state: ToField<State1<ToPhantom<PT>, ToPhantom<HASUI>>> }

export type StateReified = Reified< State, StateFields >;

export class State implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::wrapper::State`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = State.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::wrapper::State`; readonly $typeArgs: []; readonly $isPhantom = State.$isPhantom;

 readonly id: ToField<UID>; readonly market: ToField<Market<ToPhantom<PT>, ToPhantom<HASUI>>>; readonly state: ToField<State1<ToPhantom<PT>, ToPhantom<HASUI>>>

 private constructor(typeArgs: [], fields: StateFields, ) { this.$fullTypeName = composeSuiType( State.$typeName, ...typeArgs ) as `${typeof PKG_V1}::wrapper::State`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.market = fields.market;; this.state = fields.state; }

 static reified( ): StateReified { return { typeName: State.$typeName, fullTypeName: composeSuiType( State.$typeName, ...[] ) as `${typeof PKG_V1}::wrapper::State`, typeArgs: [ ] as [], isPhantom: State.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => State.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => State.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => State.fromBcs( data, ), bcs: State.bcs, fromJSONField: (field: any) => State.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => State.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => State.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => State.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => State.fetch( client, id, ), new: ( fields: StateFields, ) => { return new State( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return State.reified() }

 static phantom( ): PhantomReified<ToTypeStr<State>> { return phantom(State.reified( )); } static get p() { return State.phantom() }

 static get bcs() { return bcs.struct("State", {

 id: UID.bcs, market: Market.bcs, state: State1.bcs

}) };

 static fromFields( fields: Record<string, any> ): State { return State.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), market: decodeFromFields(Market.reified(reified.phantom(PT.reified()), reified.phantom(HASUI.reified())), fields.market), state: decodeFromFields(State1.reified(reified.phantom(PT.reified()), reified.phantom(HASUI.reified())), fields.state) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): State { if (!isState(item.type)) { throw new Error("not a State type");

 }

 return State.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), market: decodeFromFieldsWithTypes(Market.reified(reified.phantom(PT.reified()), reified.phantom(HASUI.reified())), item.fields.market), state: decodeFromFieldsWithTypes(State1.reified(reified.phantom(PT.reified()), reified.phantom(HASUI.reified())), item.fields.state) } ) }

 static fromBcs( data: Uint8Array ): State { return State.fromFields( State.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,market: this.market.toJSONField(),state: this.state.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): State { return State.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), market: decodeFromJSONField(Market.reified(reified.phantom(PT.reified()), reified.phantom(HASUI.reified())), field.market), state: decodeFromJSONField(State1.reified(reified.phantom(PT.reified()), reified.phantom(HASUI.reified())), field.state) } ) }

 static fromJSON( json: Record<string, any> ): State { if (json.$typeName !== State.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return State.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): State { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isState(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a State object`); } return State.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): State { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isState(data.bcs.type)) { throw new Error(`object at is not a State object`); }

 return State.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return State.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<State> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching State object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isState(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a State object`); }

 return State.fromSuiObjectData( res.data ); }

 }
