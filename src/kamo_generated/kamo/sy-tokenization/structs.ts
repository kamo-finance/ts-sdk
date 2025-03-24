import * as reified from "../../_framework/reified";
import {TypeName} from "../../_dependencies/source/0x1/type-name/structs";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {TreasuryCap} from "../../_dependencies/source/0x2/coin/structs";
import {ID, UID} from "../../_dependencies/source/0x2/object/structs";
import {Table} from "../../_dependencies/source/0x2/table/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Factory =============================== */

export function isFactory(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::sy_tokenization::Factory`; }

export interface FactoryFields { id: ToField<UID>; table: ToField<Table<ToPhantom<TypenameItem>, "bool">> }

export type FactoryReified = Reified< Factory, FactoryFields >;

export class Factory implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::sy_tokenization::Factory`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Factory.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::sy_tokenization::Factory`; readonly $typeArgs: []; readonly $isPhantom = Factory.$isPhantom;

 readonly id: ToField<UID>; readonly table: ToField<Table<ToPhantom<TypenameItem>, "bool">>

 private constructor(typeArgs: [], fields: FactoryFields, ) { this.$fullTypeName = composeSuiType( Factory.$typeName, ...typeArgs ) as `${typeof PKG_V1}::sy_tokenization::Factory`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.table = fields.table; }

 static reified( ): FactoryReified { return { typeName: Factory.$typeName, fullTypeName: composeSuiType( Factory.$typeName, ...[] ) as `${typeof PKG_V1}::sy_tokenization::Factory`, typeArgs: [ ] as [], isPhantom: Factory.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Factory.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Factory.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Factory.fromBcs( data, ), bcs: Factory.bcs, fromJSONField: (field: any) => Factory.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Factory.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Factory.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Factory.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Factory.fetch( client, id, ), new: ( fields: FactoryFields, ) => { return new Factory( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Factory.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Factory>> { return phantom(Factory.reified( )); } static get p() { return Factory.phantom() }

 static get bcs() { return bcs.struct("Factory", {

 id: UID.bcs, table: Table.bcs

}) };

 static fromFields( fields: Record<string, any> ): Factory { return Factory.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), table: decodeFromFields(Table.reified(reified.phantom(TypenameItem.reified()), reified.phantom("bool")), fields.table) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Factory { if (!isFactory(item.type)) { throw new Error("not a Factory type");

 }

 return Factory.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), table: decodeFromFieldsWithTypes(Table.reified(reified.phantom(TypenameItem.reified()), reified.phantom("bool")), item.fields.table) } ) }

 static fromBcs( data: Uint8Array ): Factory { return Factory.fromFields( Factory.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,table: this.table.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Factory { return Factory.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), table: decodeFromJSONField(Table.reified(reified.phantom(TypenameItem.reified()), reified.phantom("bool")), field.table) } ) }

 static fromJSON( json: Record<string, any> ): Factory { if (json.$typeName !== Factory.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Factory.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Factory { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFactory(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Factory object`); } return Factory.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Factory { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFactory(data.bcs.type)) { throw new Error(`object at is not a Factory object`); }

 return Factory.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Factory.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Factory> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Factory object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFactory(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Factory object`); }

 return Factory.fromSuiObjectData( res.data ); }

 }

/* ============================== NewRegistryEvent =============================== */

export function isNewRegistryEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::sy_tokenization::NewRegistryEvent` + '<'); }

export interface NewRegistryEventFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { registryId: ToField<ID> }

export type NewRegistryEventReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< NewRegistryEvent<PT, SY>, NewRegistryEventFields<PT, SY> >;

export class NewRegistryEvent<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::sy_tokenization::NewRegistryEvent`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = NewRegistryEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::sy_tokenization::NewRegistryEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = NewRegistryEvent.$isPhantom;

 readonly registryId: ToField<ID>

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: NewRegistryEventFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( NewRegistryEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::sy_tokenization::NewRegistryEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.registryId = fields.registryId; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): NewRegistryEventReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: NewRegistryEvent.$typeName, fullTypeName: composeSuiType( NewRegistryEvent.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::sy_tokenization::NewRegistryEvent<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: NewRegistryEvent.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => NewRegistryEvent.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewRegistryEvent.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => NewRegistryEvent.fromBcs( [PT, SY], data, ), bcs: NewRegistryEvent.bcs, fromJSONField: (field: any) => NewRegistryEvent.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => NewRegistryEvent.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => NewRegistryEvent.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => NewRegistryEvent.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => NewRegistryEvent.fetch( client, [PT, SY], id, ), new: ( fields: NewRegistryEventFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new NewRegistryEvent( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewRegistryEvent.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<NewRegistryEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(NewRegistryEvent.reified( PT, SY )); } static get p() { return NewRegistryEvent.phantom }

 static get bcs() { return bcs.struct("NewRegistryEvent", {

 registry_id: ID.bcs

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): NewRegistryEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return NewRegistryEvent.reified( typeArgs[0], typeArgs[1], ).new( { registryId: decodeFromFields(ID.reified(), fields.registry_id) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): NewRegistryEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isNewRegistryEvent(item.type)) { throw new Error("not a NewRegistryEvent type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return NewRegistryEvent.reified( typeArgs[0], typeArgs[1], ).new( { registryId: decodeFromFieldsWithTypes(ID.reified(), item.fields.registry_id) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): NewRegistryEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return NewRegistryEvent.fromFields( typeArgs, NewRegistryEvent.bcs.parse(data) ) }

 toJSONField() { return {

 registryId: this.registryId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): NewRegistryEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return NewRegistryEvent.reified( typeArgs[0], typeArgs[1], ).new( { registryId: decodeFromJSONField(ID.reified(), field.registryId) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): NewRegistryEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== NewRegistryEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(NewRegistryEvent.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return NewRegistryEvent.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): NewRegistryEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewRegistryEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewRegistryEvent object`); } return NewRegistryEvent.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): NewRegistryEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isNewRegistryEvent(data.bcs.type)) { throw new Error(`object at is not a NewRegistryEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return NewRegistryEvent.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return NewRegistryEvent.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<NewRegistryEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewRegistryEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewRegistryEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewRegistryEvent object`); }

 return NewRegistryEvent.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== Registry =============================== */

export function isRegistry(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::sy_tokenization::Registry` + '<'); }

export interface RegistryFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { id: ToField<UID>; treasury: ToField<TreasuryCap<PT>>; balance: ToField<Balance<SY>> }

export type RegistryReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< Registry<PT, SY>, RegistryFields<PT, SY> >;

export class Registry<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::sy_tokenization::Registry`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = Registry.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::sy_tokenization::Registry<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = Registry.$isPhantom;

 readonly id: ToField<UID>; readonly treasury: ToField<TreasuryCap<PT>>; readonly balance: ToField<Balance<SY>>

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: RegistryFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( Registry.$typeName, ...typeArgs ) as `${typeof PKG_V1}::sy_tokenization::Registry<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.treasury = fields.treasury;; this.balance = fields.balance; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): RegistryReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: Registry.$typeName, fullTypeName: composeSuiType( Registry.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::sy_tokenization::Registry<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: Registry.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => Registry.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Registry.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => Registry.fromBcs( [PT, SY], data, ), bcs: Registry.bcs, fromJSONField: (field: any) => Registry.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => Registry.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => Registry.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => Registry.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => Registry.fetch( client, [PT, SY], id, ), new: ( fields: RegistryFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new Registry( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Registry.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<Registry<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(Registry.reified( PT, SY )); } static get p() { return Registry.phantom }

 static get bcs() { return bcs.struct("Registry", {

 id: UID.bcs, treasury: TreasuryCap.bcs, balance: Balance.bcs

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): Registry<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return Registry.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFields(UID.reified(), fields.id), treasury: decodeFromFields(TreasuryCap.reified(typeArgs[0]), fields.treasury), balance: decodeFromFields(Balance.reified(typeArgs[1]), fields.balance) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): Registry<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isRegistry(item.type)) { throw new Error("not a Registry type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return Registry.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), treasury: decodeFromFieldsWithTypes(TreasuryCap.reified(typeArgs[0]), item.fields.treasury), balance: decodeFromFieldsWithTypes(Balance.reified(typeArgs[1]), item.fields.balance) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): Registry<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return Registry.fromFields( typeArgs, Registry.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,treasury: this.treasury.toJSONField(),balance: this.balance.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): Registry<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return Registry.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromJSONField(UID.reified(), field.id), treasury: decodeFromJSONField(TreasuryCap.reified(typeArgs[0]), field.treasury), balance: decodeFromJSONField(Balance.reified(typeArgs[1]), field.balance) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): Registry<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== Registry.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Registry.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return Registry.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): Registry<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRegistry(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Registry object`); } return Registry.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): Registry<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRegistry(data.bcs.type)) { throw new Error(`object at is not a Registry object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return Registry.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Registry.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<Registry<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Registry object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRegistry(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Registry object`); }

 return Registry.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== TypenameItem =============================== */

export function isTypenameItem(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::sy_tokenization::TypenameItem`; }

export interface TypenameItemFields { a: ToField<TypeName>; b: ToField<TypeName> }

export type TypenameItemReified = Reified< TypenameItem, TypenameItemFields >;

export class TypenameItem implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::sy_tokenization::TypenameItem`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TypenameItem.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::sy_tokenization::TypenameItem`; readonly $typeArgs: []; readonly $isPhantom = TypenameItem.$isPhantom;

 readonly a: ToField<TypeName>; readonly b: ToField<TypeName>

 private constructor(typeArgs: [], fields: TypenameItemFields, ) { this.$fullTypeName = composeSuiType( TypenameItem.$typeName, ...typeArgs ) as `${typeof PKG_V1}::sy_tokenization::TypenameItem`; this.$typeArgs = typeArgs;

 this.a = fields.a;; this.b = fields.b; }

 static reified( ): TypenameItemReified { return { typeName: TypenameItem.$typeName, fullTypeName: composeSuiType( TypenameItem.$typeName, ...[] ) as `${typeof PKG_V1}::sy_tokenization::TypenameItem`, typeArgs: [ ] as [], isPhantom: TypenameItem.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TypenameItem.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TypenameItem.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TypenameItem.fromBcs( data, ), bcs: TypenameItem.bcs, fromJSONField: (field: any) => TypenameItem.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TypenameItem.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TypenameItem.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TypenameItem.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TypenameItem.fetch( client, id, ), new: ( fields: TypenameItemFields, ) => { return new TypenameItem( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TypenameItem.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TypenameItem>> { return phantom(TypenameItem.reified( )); } static get p() { return TypenameItem.phantom() }

 static get bcs() { return bcs.struct("TypenameItem", {

 a: TypeName.bcs, b: TypeName.bcs

}) };

 static fromFields( fields: Record<string, any> ): TypenameItem { return TypenameItem.reified( ).new( { a: decodeFromFields(TypeName.reified(), fields.a), b: decodeFromFields(TypeName.reified(), fields.b) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TypenameItem { if (!isTypenameItem(item.type)) { throw new Error("not a TypenameItem type");

 }

 return TypenameItem.reified( ).new( { a: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.a), b: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.b) } ) }

 static fromBcs( data: Uint8Array ): TypenameItem { return TypenameItem.fromFields( TypenameItem.bcs.parse(data) ) }

 toJSONField() { return {

 a: this.a.toJSONField(),b: this.b.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TypenameItem { return TypenameItem.reified( ).new( { a: decodeFromJSONField(TypeName.reified(), field.a), b: decodeFromJSONField(TypeName.reified(), field.b) } ) }

 static fromJSON( json: Record<string, any> ): TypenameItem { if (json.$typeName !== TypenameItem.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TypenameItem.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TypenameItem { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTypenameItem(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TypenameItem object`); } return TypenameItem.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TypenameItem { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTypenameItem(data.bcs.type)) { throw new Error(`object at is not a TypenameItem object`); }

 return TypenameItem.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TypenameItem.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TypenameItem> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TypenameItem object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTypenameItem(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TypenameItem object`); }

 return TypenameItem.fromSuiObjectData( res.data ); }

 }
