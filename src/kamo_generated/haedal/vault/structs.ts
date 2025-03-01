import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {Balance} from "../../sui/balance/structs";
import {UID} from "../../sui/object/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Vault =============================== */

export function isVault(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::vault::Vault` + '<'); }

export interface VaultFields<T extends PhantomTypeArgument> { id: ToField<UID>; cachePool: ToField<Balance<T>> }

export type VaultReified<T extends PhantomTypeArgument> = Reified< Vault<T>, VaultFields<T> >;

export class Vault<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vault::Vault`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = Vault.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vault::Vault<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = Vault.$isPhantom;

 readonly id: ToField<UID>; readonly cachePool: ToField<Balance<T>>

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: VaultFields<T>, ) { this.$fullTypeName = composeSuiType( Vault.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vault::Vault<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.cachePool = fields.cachePool; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): VaultReified<ToPhantomTypeArgument<T>> { return { typeName: Vault.$typeName, fullTypeName: composeSuiType( Vault.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::vault::Vault<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: Vault.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => Vault.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Vault.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => Vault.fromBcs( T, data, ), bcs: Vault.bcs, fromJSONField: (field: any) => Vault.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => Vault.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => Vault.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => Vault.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => Vault.fetch( client, T, id, ), new: ( fields: VaultFields<ToPhantomTypeArgument<T>>, ) => { return new Vault( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Vault.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<Vault<ToPhantomTypeArgument<T>>>> { return phantom(Vault.reified( T )); } static get p() { return Vault.phantom }

 static get bcs() { return bcs.struct("Vault", {

 id: UID.bcs, cache_pool: Balance.bcs

}) };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): Vault<ToPhantomTypeArgument<T>> { return Vault.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), cachePool: decodeFromFields(Balance.reified(typeArg), fields.cache_pool) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): Vault<ToPhantomTypeArgument<T>> { if (!isVault(item.type)) { throw new Error("not a Vault type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Vault.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), cachePool: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.cache_pool) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): Vault<ToPhantomTypeArgument<T>> { return Vault.fromFields( typeArg, Vault.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,cachePool: this.cachePool.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): Vault<ToPhantomTypeArgument<T>> { return Vault.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), cachePool: decodeFromJSONField(Balance.reified(typeArg), field.cachePool) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): Vault<ToPhantomTypeArgument<T>> { if (json.$typeName !== Vault.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Vault.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Vault.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): Vault<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVault(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Vault object`); } return Vault.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): Vault<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVault(data.bcs.type)) { throw new Error(`object at is not a Vault object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Vault.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Vault.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<Vault<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Vault object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVault(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Vault object`); }

 return Vault.fromSuiObjectData( typeArg, res.data ); }

 }
