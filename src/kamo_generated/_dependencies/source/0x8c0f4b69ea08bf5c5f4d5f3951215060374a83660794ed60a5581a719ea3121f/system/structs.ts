import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {Balance} from "../../0x2/balance/structs";
import {UID} from "../../0x2/object/structs";
import {USDC} from "../../0xa1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29/usdc/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== System =============================== */

export function isSystem(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::system::System`; }

export interface SystemFields { id: ToField<UID>; balanceUsdc: ToField<Balance<ToPhantom<USDC>>>; totalKusdcMinted: ToField<"u64"> }

export type SystemReified = Reified< System, SystemFields >;

export class System implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::system::System`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = System.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::system::System`; readonly $typeArgs: []; readonly $isPhantom = System.$isPhantom;

 readonly id: ToField<UID>; readonly balanceUsdc: ToField<Balance<ToPhantom<USDC>>>; readonly totalKusdcMinted: ToField<"u64">

 private constructor(typeArgs: [], fields: SystemFields, ) { this.$fullTypeName = composeSuiType( System.$typeName, ...typeArgs ) as `${typeof PKG_V1}::system::System`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.balanceUsdc = fields.balanceUsdc;; this.totalKusdcMinted = fields.totalKusdcMinted; }

 static reified( ): SystemReified { return { typeName: System.$typeName, fullTypeName: composeSuiType( System.$typeName, ...[] ) as `${typeof PKG_V1}::system::System`, typeArgs: [ ] as [], isPhantom: System.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => System.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => System.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => System.fromBcs( data, ), bcs: System.bcs, fromJSONField: (field: any) => System.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => System.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => System.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => System.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => System.fetch( client, id, ), new: ( fields: SystemFields, ) => { return new System( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return System.reified() }

 static phantom( ): PhantomReified<ToTypeStr<System>> { return phantom(System.reified( )); } static get p() { return System.phantom() }

 static get bcs() { return bcs.struct("System", {

 id: UID.bcs, balance_usdc: Balance.bcs, total_kusdc_minted: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): System { return System.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), balanceUsdc: decodeFromFields(Balance.reified(reified.phantom(USDC.reified())), fields.balance_usdc), totalKusdcMinted: decodeFromFields("u64", fields.total_kusdc_minted) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): System { if (!isSystem(item.type)) { throw new Error("not a System type");

 }

 return System.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), balanceUsdc: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(USDC.reified())), item.fields.balance_usdc), totalKusdcMinted: decodeFromFieldsWithTypes("u64", item.fields.total_kusdc_minted) } ) }

 static fromBcs( data: Uint8Array ): System { return System.fromFields( System.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,balanceUsdc: this.balanceUsdc.toJSONField(),totalKusdcMinted: this.totalKusdcMinted.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): System { return System.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), balanceUsdc: decodeFromJSONField(Balance.reified(reified.phantom(USDC.reified())), field.balanceUsdc), totalKusdcMinted: decodeFromJSONField("u64", field.totalKusdcMinted) } ) }

 static fromJSON( json: Record<string, any> ): System { if (json.$typeName !== System.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return System.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): System { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSystem(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a System object`); } return System.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): System { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSystem(data.bcs.type)) { throw new Error(`object at is not a System object`); }

 return System.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return System.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<System> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching System object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSystem(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a System object`); }

 return System.fromSuiObjectData( res.data ); }

 }
