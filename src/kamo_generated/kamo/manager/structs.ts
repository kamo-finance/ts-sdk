import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {Balance} from "../../sui/balance/structs";
import {TreasuryCap} from "../../sui/coin/structs";
import {UID} from "../../sui/object/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== State =============================== */

export function isState(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::manager::State` + '<'); }

export interface StateFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { id: ToField<UID>; treasury: ToField<TreasuryCap<PT>>; balance: ToField<Balance<SY>> }

export type StateReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< State<PT, SY>, StateFields<PT, SY> >;

export class State<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::manager::State`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = State.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::manager::State<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = State.$isPhantom;

 readonly id: ToField<UID>; readonly treasury: ToField<TreasuryCap<PT>>; readonly balance: ToField<Balance<SY>>

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: StateFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( State.$typeName, ...typeArgs ) as `${typeof PKG_V1}::manager::State<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.treasury = fields.treasury;; this.balance = fields.balance; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): StateReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: State.$typeName, fullTypeName: composeSuiType( State.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::manager::State<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: State.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => State.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => State.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => State.fromBcs( [PT, SY], data, ), bcs: State.bcs, fromJSONField: (field: any) => State.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => State.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => State.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => State.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => State.fetch( client, [PT, SY], id, ), new: ( fields: StateFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new State( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return State.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<State<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(State.reified( PT, SY )); } static get p() { return State.phantom }

 static get bcs() { return bcs.struct("State", {

 id: UID.bcs, treasury: TreasuryCap.bcs, balance: Balance.bcs

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): State<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return State.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFields(UID.reified(), fields.id), treasury: decodeFromFields(TreasuryCap.reified(typeArgs[0]), fields.treasury), balance: decodeFromFields(Balance.reified(typeArgs[1]), fields.balance) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): State<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isState(item.type)) { throw new Error("not a State type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return State.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), treasury: decodeFromFieldsWithTypes(TreasuryCap.reified(typeArgs[0]), item.fields.treasury), balance: decodeFromFieldsWithTypes(Balance.reified(typeArgs[1]), item.fields.balance) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): State<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return State.fromFields( typeArgs, State.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,treasury: this.treasury.toJSONField(),balance: this.balance.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): State<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return State.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromJSONField(UID.reified(), field.id), treasury: decodeFromJSONField(TreasuryCap.reified(typeArgs[0]), field.treasury), balance: decodeFromJSONField(Balance.reified(typeArgs[1]), field.balance) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): State<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== State.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(State.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return State.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): State<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isState(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a State object`); } return State.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): State<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isState(data.bcs.type)) { throw new Error(`object at is not a State object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return State.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return State.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<State<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching State object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isState(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a State object`); }

 return State.fromSuiObjectData( typeArgs, res.data ); }

 }
