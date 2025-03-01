import * as reified from "../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {HASUI} from "../../haedal/hasui/structs";
import {Market} from "../../kamo/amm/structs";
import {Registry} from "../../kamo/sy-tokenization/structs";
import {UID} from "../../sui/object/structs";
import {PKG_V1} from "../index";
import {PT} from "../pt/structs";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== State =============================== */

export function isState(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::wrapper::State`; }

export interface StateFields { id: ToField<UID>; market: ToField<Market<ToPhantom<PT>, ToPhantom<HASUI>>>; registry: ToField<Registry<ToPhantom<PT>, ToPhantom<HASUI>>> }

export type StateReified = Reified< State, StateFields >;

export class State implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::wrapper::State`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = State.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::wrapper::State`; readonly $typeArgs: []; readonly $isPhantom = State.$isPhantom;

 readonly id: ToField<UID>; readonly market: ToField<Market<ToPhantom<PT>, ToPhantom<HASUI>>>; readonly registry: ToField<Registry<ToPhantom<PT>, ToPhantom<HASUI>>>

 private constructor(typeArgs: [], fields: StateFields, ) { this.$fullTypeName = composeSuiType( State.$typeName, ...typeArgs ) as `${typeof PKG_V1}::wrapper::State`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.market = fields.market;; this.registry = fields.registry; }

 static reified( ): StateReified { return { typeName: State.$typeName, fullTypeName: composeSuiType( State.$typeName, ...[] ) as `${typeof PKG_V1}::wrapper::State`, typeArgs: [ ] as [], isPhantom: State.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => State.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => State.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => State.fromBcs( data, ), bcs: State.bcs, fromJSONField: (field: any) => State.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => State.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => State.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => State.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => State.fetch( client, id, ), new: ( fields: StateFields, ) => { return new State( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return State.reified() }

 static phantom( ): PhantomReified<ToTypeStr<State>> { return phantom(State.reified( )); } static get p() { return State.phantom() }

 static get bcs() { return bcs.struct("State", {

 id: UID.bcs, market: Market.bcs, registry: Registry.bcs

}) };

 static fromFields( fields: Record<string, any> ): State { return State.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), market: decodeFromFields(Market.reified(reified.phantom(PT.reified()), reified.phantom(HASUI.reified())), fields.market), registry: decodeFromFields(Registry.reified(reified.phantom(PT.reified()), reified.phantom(HASUI.reified())), fields.registry) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): State { if (!isState(item.type)) { throw new Error("not a State type");

 }

 return State.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), market: decodeFromFieldsWithTypes(Market.reified(reified.phantom(PT.reified()), reified.phantom(HASUI.reified())), item.fields.market), registry: decodeFromFieldsWithTypes(Registry.reified(reified.phantom(PT.reified()), reified.phantom(HASUI.reified())), item.fields.registry) } ) }

 static fromBcs( data: Uint8Array ): State { return State.fromFields( State.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,market: this.market.toJSONField(),registry: this.registry.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): State { return State.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), market: decodeFromJSONField(Market.reified(reified.phantom(PT.reified()), reified.phantom(HASUI.reified())), field.market), registry: decodeFromJSONField(Registry.reified(reified.phantom(PT.reified()), reified.phantom(HASUI.reified())), field.registry) } ) }

 static fromJSON( json: Record<string, any> ): State { if (json.$typeName !== State.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return State.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): State { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isState(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a State object`); } return State.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): State { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isState(data.bcs.type)) { throw new Error(`object at is not a State object`); }

 return State.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return State.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<State> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching State object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isState(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a State object`); }

 return State.fromSuiObjectData( res.data ); }

 }
