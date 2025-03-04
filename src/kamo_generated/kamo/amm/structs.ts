import * as reified from "../../_framework/reified";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {FixedPoint64} from "../../legato-math/fixed-point64/structs";
import {Balance, Supply} from "../../sui/balance/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== AddLiquidityEvent =============================== */

export function isAddLiquidityEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::amm::AddLiquidityEvent` + '<'); }

export interface AddLiquidityEventFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { ptAmount: ToField<"u64">; syAmount: ToField<"u64">; lpAmount: ToField<"u64">; exchangeRate: ToField<FixedPoint64>; sender: ToField<"address">; isBootstrap: ToField<"bool"> }

export type AddLiquidityEventReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< AddLiquidityEvent<PT, SY>, AddLiquidityEventFields<PT, SY> >;

export class AddLiquidityEvent<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::amm::AddLiquidityEvent`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = AddLiquidityEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::amm::AddLiquidityEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = AddLiquidityEvent.$isPhantom;

 readonly ptAmount: ToField<"u64">; readonly syAmount: ToField<"u64">; readonly lpAmount: ToField<"u64">; readonly exchangeRate: ToField<FixedPoint64>; readonly sender: ToField<"address">; readonly isBootstrap: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: AddLiquidityEventFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( AddLiquidityEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::amm::AddLiquidityEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.ptAmount = fields.ptAmount;; this.syAmount = fields.syAmount;; this.lpAmount = fields.lpAmount;; this.exchangeRate = fields.exchangeRate;; this.sender = fields.sender;; this.isBootstrap = fields.isBootstrap; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): AddLiquidityEventReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: AddLiquidityEvent.$typeName, fullTypeName: composeSuiType( AddLiquidityEvent.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::amm::AddLiquidityEvent<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: AddLiquidityEvent.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => AddLiquidityEvent.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AddLiquidityEvent.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => AddLiquidityEvent.fromBcs( [PT, SY], data, ), bcs: AddLiquidityEvent.bcs, fromJSONField: (field: any) => AddLiquidityEvent.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => AddLiquidityEvent.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => AddLiquidityEvent.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => AddLiquidityEvent.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => AddLiquidityEvent.fetch( client, [PT, SY], id, ), new: ( fields: AddLiquidityEventFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new AddLiquidityEvent( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return AddLiquidityEvent.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<AddLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(AddLiquidityEvent.reified( PT, SY )); } static get p() { return AddLiquidityEvent.phantom }

 static get bcs() { return bcs.struct("AddLiquidityEvent", {

 pt_amount: bcs.u64(), sy_amount: bcs.u64(), lp_amount: bcs.u64(), exchange_rate: FixedPoint64.bcs, sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), is_bootstrap: bcs.bool()

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): AddLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return AddLiquidityEvent.reified( typeArgs[0], typeArgs[1], ).new( { ptAmount: decodeFromFields("u64", fields.pt_amount), syAmount: decodeFromFields("u64", fields.sy_amount), lpAmount: decodeFromFields("u64", fields.lp_amount), exchangeRate: decodeFromFields(FixedPoint64.reified(), fields.exchange_rate), sender: decodeFromFields("address", fields.sender), isBootstrap: decodeFromFields("bool", fields.is_bootstrap) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): AddLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isAddLiquidityEvent(item.type)) { throw new Error("not a AddLiquidityEvent type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return AddLiquidityEvent.reified( typeArgs[0], typeArgs[1], ).new( { ptAmount: decodeFromFieldsWithTypes("u64", item.fields.pt_amount), syAmount: decodeFromFieldsWithTypes("u64", item.fields.sy_amount), lpAmount: decodeFromFieldsWithTypes("u64", item.fields.lp_amount), exchangeRate: decodeFromFieldsWithTypes(FixedPoint64.reified(), item.fields.exchange_rate), sender: decodeFromFieldsWithTypes("address", item.fields.sender), isBootstrap: decodeFromFieldsWithTypes("bool", item.fields.is_bootstrap) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): AddLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return AddLiquidityEvent.fromFields( typeArgs, AddLiquidityEvent.bcs.parse(data) ) }

 toJSONField() { return {

 ptAmount: this.ptAmount.toString(),syAmount: this.syAmount.toString(),lpAmount: this.lpAmount.toString(),exchangeRate: this.exchangeRate.toJSONField(),sender: this.sender,isBootstrap: this.isBootstrap,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): AddLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return AddLiquidityEvent.reified( typeArgs[0], typeArgs[1], ).new( { ptAmount: decodeFromJSONField("u64", field.ptAmount), syAmount: decodeFromJSONField("u64", field.syAmount), lpAmount: decodeFromJSONField("u64", field.lpAmount), exchangeRate: decodeFromJSONField(FixedPoint64.reified(), field.exchangeRate), sender: decodeFromJSONField("address", field.sender), isBootstrap: decodeFromJSONField("bool", field.isBootstrap) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): AddLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== AddLiquidityEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(AddLiquidityEvent.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return AddLiquidityEvent.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): AddLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAddLiquidityEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AddLiquidityEvent object`); } return AddLiquidityEvent.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): AddLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAddLiquidityEvent(data.bcs.type)) { throw new Error(`object at is not a AddLiquidityEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return AddLiquidityEvent.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return AddLiquidityEvent.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<AddLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AddLiquidityEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAddLiquidityEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AddLiquidityEvent object`); }

 return AddLiquidityEvent.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== LP =============================== */

export function isLP(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::amm::LP` + '<'); }

export interface LPFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type LPReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< LP<PT, SY>, LPFields<PT, SY> >;

export class LP<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::amm::LP`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = LP.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::amm::LP<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = LP.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: LPFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( LP.$typeName, ...typeArgs ) as `${typeof PKG_V1}::amm::LP<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): LPReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: LP.$typeName, fullTypeName: composeSuiType( LP.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::amm::LP<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: LP.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => LP.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LP.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => LP.fromBcs( [PT, SY], data, ), bcs: LP.bcs, fromJSONField: (field: any) => LP.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => LP.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => LP.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => LP.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => LP.fetch( client, [PT, SY], id, ), new: ( fields: LPFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new LP( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return LP.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<LP<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(LP.reified( PT, SY )); } static get p() { return LP.phantom }

 static get bcs() { return bcs.struct("LP", {

 dummy_field: bcs.bool()

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): LP<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return LP.reified( typeArgs[0], typeArgs[1], ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): LP<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isLP(item.type)) { throw new Error("not a LP type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return LP.reified( typeArgs[0], typeArgs[1], ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): LP<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return LP.fromFields( typeArgs, LP.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): LP<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return LP.reified( typeArgs[0], typeArgs[1], ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): LP<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== LP.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(LP.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return LP.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): LP<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLP(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LP object`); } return LP.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): LP<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isLP(data.bcs.type)) { throw new Error(`object at is not a LP object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return LP.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return LP.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<LP<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LP object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLP(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LP object`); }

 return LP.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== Market =============================== */

export function isMarket(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::amm::Market` + '<'); }

export interface MarketFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { totalPt: ToField<Balance<PT>>; totalSy: ToField<Balance<SY>>; totalLp: ToField<Supply<ToPhantom<LP<PT, SY>>>>; scalarRoot: ToField<FixedPoint64>; initialAnchor: ToField<FixedPoint64>; expiry: ToField<"u64">; lnFeeRateRoot: ToField<FixedPoint64>; reserveFeePercent: ToField<"u64">; lastLnImpliedRate: ToField<FixedPoint64>; feeBalance: ToField<Balance<SY>>; withdrawFeeAddress: ToField<"address"> }

export type MarketReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< Market<PT, SY>, MarketFields<PT, SY> >;

export class Market<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::amm::Market`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = Market.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::amm::Market<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = Market.$isPhantom;

 readonly totalPt: ToField<Balance<PT>>; readonly totalSy: ToField<Balance<SY>>; readonly totalLp: ToField<Supply<ToPhantom<LP<PT, SY>>>>; readonly scalarRoot: ToField<FixedPoint64>; readonly initialAnchor: ToField<FixedPoint64>; readonly expiry: ToField<"u64">; readonly lnFeeRateRoot: ToField<FixedPoint64>; readonly reserveFeePercent: ToField<"u64">; readonly lastLnImpliedRate: ToField<FixedPoint64>; readonly feeBalance: ToField<Balance<SY>>; readonly withdrawFeeAddress: ToField<"address">

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: MarketFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( Market.$typeName, ...typeArgs ) as `${typeof PKG_V1}::amm::Market<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.totalPt = fields.totalPt;; this.totalSy = fields.totalSy;; this.totalLp = fields.totalLp;; this.scalarRoot = fields.scalarRoot;; this.initialAnchor = fields.initialAnchor;; this.expiry = fields.expiry;; this.lnFeeRateRoot = fields.lnFeeRateRoot;; this.reserveFeePercent = fields.reserveFeePercent;; this.lastLnImpliedRate = fields.lastLnImpliedRate;; this.feeBalance = fields.feeBalance;; this.withdrawFeeAddress = fields.withdrawFeeAddress; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): MarketReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: Market.$typeName, fullTypeName: composeSuiType( Market.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::amm::Market<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: Market.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => Market.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Market.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => Market.fromBcs( [PT, SY], data, ), bcs: Market.bcs, fromJSONField: (field: any) => Market.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => Market.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => Market.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => Market.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => Market.fetch( client, [PT, SY], id, ), new: ( fields: MarketFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new Market( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Market.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<Market<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(Market.reified( PT, SY )); } static get p() { return Market.phantom }

 static get bcs() { return bcs.struct("Market", {

 total_pt: Balance.bcs, total_sy: Balance.bcs, total_lp: Supply.bcs, scalar_root: FixedPoint64.bcs, initial_anchor: FixedPoint64.bcs, expiry: bcs.u64(), ln_fee_rate_root: FixedPoint64.bcs, reserve_fee_percent: bcs.u64(), last_ln_implied_rate: FixedPoint64.bcs, fee_balance: Balance.bcs, withdraw_fee_address: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): Market<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return Market.reified( typeArgs[0], typeArgs[1], ).new( { totalPt: decodeFromFields(Balance.reified(typeArgs[0]), fields.total_pt), totalSy: decodeFromFields(Balance.reified(typeArgs[1]), fields.total_sy), totalLp: decodeFromFields(Supply.reified(reified.phantom(LP.reified(typeArgs[0], typeArgs[1]))), fields.total_lp), scalarRoot: decodeFromFields(FixedPoint64.reified(), fields.scalar_root), initialAnchor: decodeFromFields(FixedPoint64.reified(), fields.initial_anchor), expiry: decodeFromFields("u64", fields.expiry), lnFeeRateRoot: decodeFromFields(FixedPoint64.reified(), fields.ln_fee_rate_root), reserveFeePercent: decodeFromFields("u64", fields.reserve_fee_percent), lastLnImpliedRate: decodeFromFields(FixedPoint64.reified(), fields.last_ln_implied_rate), feeBalance: decodeFromFields(Balance.reified(typeArgs[1]), fields.fee_balance), withdrawFeeAddress: decodeFromFields("address", fields.withdraw_fee_address) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): Market<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isMarket(item.type)) { throw new Error("not a Market type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return Market.reified( typeArgs[0], typeArgs[1], ).new( { totalPt: decodeFromFieldsWithTypes(Balance.reified(typeArgs[0]), item.fields.total_pt), totalSy: decodeFromFieldsWithTypes(Balance.reified(typeArgs[1]), item.fields.total_sy), totalLp: decodeFromFieldsWithTypes(Supply.reified(reified.phantom(LP.reified(typeArgs[0], typeArgs[1]))), item.fields.total_lp), scalarRoot: decodeFromFieldsWithTypes(FixedPoint64.reified(), item.fields.scalar_root), initialAnchor: decodeFromFieldsWithTypes(FixedPoint64.reified(), item.fields.initial_anchor), expiry: decodeFromFieldsWithTypes("u64", item.fields.expiry), lnFeeRateRoot: decodeFromFieldsWithTypes(FixedPoint64.reified(), item.fields.ln_fee_rate_root), reserveFeePercent: decodeFromFieldsWithTypes("u64", item.fields.reserve_fee_percent), lastLnImpliedRate: decodeFromFieldsWithTypes(FixedPoint64.reified(), item.fields.last_ln_implied_rate), feeBalance: decodeFromFieldsWithTypes(Balance.reified(typeArgs[1]), item.fields.fee_balance), withdrawFeeAddress: decodeFromFieldsWithTypes("address", item.fields.withdraw_fee_address) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): Market<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return Market.fromFields( typeArgs, Market.bcs.parse(data) ) }

 toJSONField() { return {

 totalPt: this.totalPt.toJSONField(),totalSy: this.totalSy.toJSONField(),totalLp: this.totalLp.toJSONField(),scalarRoot: this.scalarRoot.toJSONField(),initialAnchor: this.initialAnchor.toJSONField(),expiry: this.expiry.toString(),lnFeeRateRoot: this.lnFeeRateRoot.toJSONField(),reserveFeePercent: this.reserveFeePercent.toString(),lastLnImpliedRate: this.lastLnImpliedRate.toJSONField(),feeBalance: this.feeBalance.toJSONField(),withdrawFeeAddress: this.withdrawFeeAddress,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): Market<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return Market.reified( typeArgs[0], typeArgs[1], ).new( { totalPt: decodeFromJSONField(Balance.reified(typeArgs[0]), field.totalPt), totalSy: decodeFromJSONField(Balance.reified(typeArgs[1]), field.totalSy), totalLp: decodeFromJSONField(Supply.reified(reified.phantom(LP.reified(typeArgs[0], typeArgs[1]))), field.totalLp), scalarRoot: decodeFromJSONField(FixedPoint64.reified(), field.scalarRoot), initialAnchor: decodeFromJSONField(FixedPoint64.reified(), field.initialAnchor), expiry: decodeFromJSONField("u64", field.expiry), lnFeeRateRoot: decodeFromJSONField(FixedPoint64.reified(), field.lnFeeRateRoot), reserveFeePercent: decodeFromJSONField("u64", field.reserveFeePercent), lastLnImpliedRate: decodeFromJSONField(FixedPoint64.reified(), field.lastLnImpliedRate), feeBalance: decodeFromJSONField(Balance.reified(typeArgs[1]), field.feeBalance), withdrawFeeAddress: decodeFromJSONField("address", field.withdrawFeeAddress) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): Market<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== Market.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Market.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return Market.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): Market<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMarket(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Market object`); } return Market.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): Market<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMarket(data.bcs.type)) { throw new Error(`object at is not a Market object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return Market.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Market.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<Market<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Market object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMarket(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Market object`); }

 return Market.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== PreComputeMarket =============================== */

export function isPreComputeMarket(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::amm::PreComputeMarket`; }

export interface PreComputeMarketFields { rateScalar: ToField<FixedPoint64>; totalAsset: ToField<"u64">; rateAnchor: ToField<FixedPoint64>; feeRate: ToField<FixedPoint64> }

export type PreComputeMarketReified = Reified< PreComputeMarket, PreComputeMarketFields >;

export class PreComputeMarket implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::amm::PreComputeMarket`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PreComputeMarket.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::amm::PreComputeMarket`; readonly $typeArgs: []; readonly $isPhantom = PreComputeMarket.$isPhantom;

 readonly rateScalar: ToField<FixedPoint64>; readonly totalAsset: ToField<"u64">; readonly rateAnchor: ToField<FixedPoint64>; readonly feeRate: ToField<FixedPoint64>

 private constructor(typeArgs: [], fields: PreComputeMarketFields, ) { this.$fullTypeName = composeSuiType( PreComputeMarket.$typeName, ...typeArgs ) as `${typeof PKG_V1}::amm::PreComputeMarket`; this.$typeArgs = typeArgs;

 this.rateScalar = fields.rateScalar;; this.totalAsset = fields.totalAsset;; this.rateAnchor = fields.rateAnchor;; this.feeRate = fields.feeRate; }

 static reified( ): PreComputeMarketReified { return { typeName: PreComputeMarket.$typeName, fullTypeName: composeSuiType( PreComputeMarket.$typeName, ...[] ) as `${typeof PKG_V1}::amm::PreComputeMarket`, typeArgs: [ ] as [], isPhantom: PreComputeMarket.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PreComputeMarket.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PreComputeMarket.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PreComputeMarket.fromBcs( data, ), bcs: PreComputeMarket.bcs, fromJSONField: (field: any) => PreComputeMarket.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PreComputeMarket.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PreComputeMarket.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PreComputeMarket.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PreComputeMarket.fetch( client, id, ), new: ( fields: PreComputeMarketFields, ) => { return new PreComputeMarket( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PreComputeMarket.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PreComputeMarket>> { return phantom(PreComputeMarket.reified( )); } static get p() { return PreComputeMarket.phantom() }

 static get bcs() { return bcs.struct("PreComputeMarket", {

 rate_scalar: FixedPoint64.bcs, total_asset: bcs.u64(), rate_anchor: FixedPoint64.bcs, fee_rate: FixedPoint64.bcs

}) };

 static fromFields( fields: Record<string, any> ): PreComputeMarket { return PreComputeMarket.reified( ).new( { rateScalar: decodeFromFields(FixedPoint64.reified(), fields.rate_scalar), totalAsset: decodeFromFields("u64", fields.total_asset), rateAnchor: decodeFromFields(FixedPoint64.reified(), fields.rate_anchor), feeRate: decodeFromFields(FixedPoint64.reified(), fields.fee_rate) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PreComputeMarket { if (!isPreComputeMarket(item.type)) { throw new Error("not a PreComputeMarket type");

 }

 return PreComputeMarket.reified( ).new( { rateScalar: decodeFromFieldsWithTypes(FixedPoint64.reified(), item.fields.rate_scalar), totalAsset: decodeFromFieldsWithTypes("u64", item.fields.total_asset), rateAnchor: decodeFromFieldsWithTypes(FixedPoint64.reified(), item.fields.rate_anchor), feeRate: decodeFromFieldsWithTypes(FixedPoint64.reified(), item.fields.fee_rate) } ) }

 static fromBcs( data: Uint8Array ): PreComputeMarket { return PreComputeMarket.fromFields( PreComputeMarket.bcs.parse(data) ) }

 toJSONField() { return {

 rateScalar: this.rateScalar.toJSONField(),totalAsset: this.totalAsset.toString(),rateAnchor: this.rateAnchor.toJSONField(),feeRate: this.feeRate.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PreComputeMarket { return PreComputeMarket.reified( ).new( { rateScalar: decodeFromJSONField(FixedPoint64.reified(), field.rateScalar), totalAsset: decodeFromJSONField("u64", field.totalAsset), rateAnchor: decodeFromJSONField(FixedPoint64.reified(), field.rateAnchor), feeRate: decodeFromJSONField(FixedPoint64.reified(), field.feeRate) } ) }

 static fromJSON( json: Record<string, any> ): PreComputeMarket { if (json.$typeName !== PreComputeMarket.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PreComputeMarket.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PreComputeMarket { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPreComputeMarket(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PreComputeMarket object`); } return PreComputeMarket.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): PreComputeMarket { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPreComputeMarket(data.bcs.type)) { throw new Error(`object at is not a PreComputeMarket object`); }

 return PreComputeMarket.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PreComputeMarket.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<PreComputeMarket> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PreComputeMarket object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPreComputeMarket(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PreComputeMarket object`); }

 return PreComputeMarket.fromSuiObjectData( res.data ); }

 }

/* ============================== RemoveLiquidityEvent =============================== */

export function isRemoveLiquidityEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::amm::RemoveLiquidityEvent` + '<'); }

export interface RemoveLiquidityEventFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { ptAmount: ToField<"u64">; syAmount: ToField<"u64">; lpAmount: ToField<"u64">; sender: ToField<"address"> }

export type RemoveLiquidityEventReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< RemoveLiquidityEvent<PT, SY>, RemoveLiquidityEventFields<PT, SY> >;

export class RemoveLiquidityEvent<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::amm::RemoveLiquidityEvent`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = RemoveLiquidityEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::amm::RemoveLiquidityEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = RemoveLiquidityEvent.$isPhantom;

 readonly ptAmount: ToField<"u64">; readonly syAmount: ToField<"u64">; readonly lpAmount: ToField<"u64">; readonly sender: ToField<"address">

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: RemoveLiquidityEventFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( RemoveLiquidityEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::amm::RemoveLiquidityEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.ptAmount = fields.ptAmount;; this.syAmount = fields.syAmount;; this.lpAmount = fields.lpAmount;; this.sender = fields.sender; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): RemoveLiquidityEventReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: RemoveLiquidityEvent.$typeName, fullTypeName: composeSuiType( RemoveLiquidityEvent.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::amm::RemoveLiquidityEvent<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: RemoveLiquidityEvent.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => RemoveLiquidityEvent.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RemoveLiquidityEvent.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => RemoveLiquidityEvent.fromBcs( [PT, SY], data, ), bcs: RemoveLiquidityEvent.bcs, fromJSONField: (field: any) => RemoveLiquidityEvent.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => RemoveLiquidityEvent.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => RemoveLiquidityEvent.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => RemoveLiquidityEvent.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => RemoveLiquidityEvent.fetch( client, [PT, SY], id, ), new: ( fields: RemoveLiquidityEventFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new RemoveLiquidityEvent( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return RemoveLiquidityEvent.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<RemoveLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(RemoveLiquidityEvent.reified( PT, SY )); } static get p() { return RemoveLiquidityEvent.phantom }

 static get bcs() { return bcs.struct("RemoveLiquidityEvent", {

 pt_amount: bcs.u64(), sy_amount: bcs.u64(), lp_amount: bcs.u64(), sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): RemoveLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return RemoveLiquidityEvent.reified( typeArgs[0], typeArgs[1], ).new( { ptAmount: decodeFromFields("u64", fields.pt_amount), syAmount: decodeFromFields("u64", fields.sy_amount), lpAmount: decodeFromFields("u64", fields.lp_amount), sender: decodeFromFields("address", fields.sender) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): RemoveLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isRemoveLiquidityEvent(item.type)) { throw new Error("not a RemoveLiquidityEvent type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return RemoveLiquidityEvent.reified( typeArgs[0], typeArgs[1], ).new( { ptAmount: decodeFromFieldsWithTypes("u64", item.fields.pt_amount), syAmount: decodeFromFieldsWithTypes("u64", item.fields.sy_amount), lpAmount: decodeFromFieldsWithTypes("u64", item.fields.lp_amount), sender: decodeFromFieldsWithTypes("address", item.fields.sender) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): RemoveLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return RemoveLiquidityEvent.fromFields( typeArgs, RemoveLiquidityEvent.bcs.parse(data) ) }

 toJSONField() { return {

 ptAmount: this.ptAmount.toString(),syAmount: this.syAmount.toString(),lpAmount: this.lpAmount.toString(),sender: this.sender,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): RemoveLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return RemoveLiquidityEvent.reified( typeArgs[0], typeArgs[1], ).new( { ptAmount: decodeFromJSONField("u64", field.ptAmount), syAmount: decodeFromJSONField("u64", field.syAmount), lpAmount: decodeFromJSONField("u64", field.lpAmount), sender: decodeFromJSONField("address", field.sender) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): RemoveLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== RemoveLiquidityEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(RemoveLiquidityEvent.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return RemoveLiquidityEvent.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): RemoveLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRemoveLiquidityEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RemoveLiquidityEvent object`); } return RemoveLiquidityEvent.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): RemoveLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRemoveLiquidityEvent(data.bcs.type)) { throw new Error(`object at is not a RemoveLiquidityEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return RemoveLiquidityEvent.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RemoveLiquidityEvent.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<RemoveLiquidityEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RemoveLiquidityEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveLiquidityEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RemoveLiquidityEvent object`); }

 return RemoveLiquidityEvent.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== SwapExactPtForSyEvent =============================== */

export function isSwapExactPtForSyEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::amm::SwapExactPtForSyEvent` + '<'); }

export interface SwapExactPtForSyEventFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { ptAmount: ToField<"u64">; syAmount: ToField<"u64">; syFeeAmount: ToField<"u64">; exchangeRate: ToField<FixedPoint64>; sender: ToField<"address"> }

export type SwapExactPtForSyEventReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< SwapExactPtForSyEvent<PT, SY>, SwapExactPtForSyEventFields<PT, SY> >;

export class SwapExactPtForSyEvent<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::amm::SwapExactPtForSyEvent`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = SwapExactPtForSyEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::amm::SwapExactPtForSyEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = SwapExactPtForSyEvent.$isPhantom;

 readonly ptAmount: ToField<"u64">; readonly syAmount: ToField<"u64">; readonly syFeeAmount: ToField<"u64">; readonly exchangeRate: ToField<FixedPoint64>; readonly sender: ToField<"address">

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: SwapExactPtForSyEventFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( SwapExactPtForSyEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::amm::SwapExactPtForSyEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.ptAmount = fields.ptAmount;; this.syAmount = fields.syAmount;; this.syFeeAmount = fields.syFeeAmount;; this.exchangeRate = fields.exchangeRate;; this.sender = fields.sender; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): SwapExactPtForSyEventReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: SwapExactPtForSyEvent.$typeName, fullTypeName: composeSuiType( SwapExactPtForSyEvent.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::amm::SwapExactPtForSyEvent<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: SwapExactPtForSyEvent.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => SwapExactPtForSyEvent.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SwapExactPtForSyEvent.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => SwapExactPtForSyEvent.fromBcs( [PT, SY], data, ), bcs: SwapExactPtForSyEvent.bcs, fromJSONField: (field: any) => SwapExactPtForSyEvent.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => SwapExactPtForSyEvent.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => SwapExactPtForSyEvent.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => SwapExactPtForSyEvent.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => SwapExactPtForSyEvent.fetch( client, [PT, SY], id, ), new: ( fields: SwapExactPtForSyEventFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new SwapExactPtForSyEvent( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return SwapExactPtForSyEvent.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<SwapExactPtForSyEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(SwapExactPtForSyEvent.reified( PT, SY )); } static get p() { return SwapExactPtForSyEvent.phantom }

 static get bcs() { return bcs.struct("SwapExactPtForSyEvent", {

 pt_amount: bcs.u64(), sy_amount: bcs.u64(), sy_fee_amount: bcs.u64(), exchange_rate: FixedPoint64.bcs, sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): SwapExactPtForSyEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return SwapExactPtForSyEvent.reified( typeArgs[0], typeArgs[1], ).new( { ptAmount: decodeFromFields("u64", fields.pt_amount), syAmount: decodeFromFields("u64", fields.sy_amount), syFeeAmount: decodeFromFields("u64", fields.sy_fee_amount), exchangeRate: decodeFromFields(FixedPoint64.reified(), fields.exchange_rate), sender: decodeFromFields("address", fields.sender) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): SwapExactPtForSyEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isSwapExactPtForSyEvent(item.type)) { throw new Error("not a SwapExactPtForSyEvent type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return SwapExactPtForSyEvent.reified( typeArgs[0], typeArgs[1], ).new( { ptAmount: decodeFromFieldsWithTypes("u64", item.fields.pt_amount), syAmount: decodeFromFieldsWithTypes("u64", item.fields.sy_amount), syFeeAmount: decodeFromFieldsWithTypes("u64", item.fields.sy_fee_amount), exchangeRate: decodeFromFieldsWithTypes(FixedPoint64.reified(), item.fields.exchange_rate), sender: decodeFromFieldsWithTypes("address", item.fields.sender) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): SwapExactPtForSyEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return SwapExactPtForSyEvent.fromFields( typeArgs, SwapExactPtForSyEvent.bcs.parse(data) ) }

 toJSONField() { return {

 ptAmount: this.ptAmount.toString(),syAmount: this.syAmount.toString(),syFeeAmount: this.syFeeAmount.toString(),exchangeRate: this.exchangeRate.toJSONField(),sender: this.sender,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): SwapExactPtForSyEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return SwapExactPtForSyEvent.reified( typeArgs[0], typeArgs[1], ).new( { ptAmount: decodeFromJSONField("u64", field.ptAmount), syAmount: decodeFromJSONField("u64", field.syAmount), syFeeAmount: decodeFromJSONField("u64", field.syFeeAmount), exchangeRate: decodeFromJSONField(FixedPoint64.reified(), field.exchangeRate), sender: decodeFromJSONField("address", field.sender) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): SwapExactPtForSyEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== SwapExactPtForSyEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(SwapExactPtForSyEvent.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return SwapExactPtForSyEvent.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): SwapExactPtForSyEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSwapExactPtForSyEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SwapExactPtForSyEvent object`); } return SwapExactPtForSyEvent.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): SwapExactPtForSyEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSwapExactPtForSyEvent(data.bcs.type)) { throw new Error(`object at is not a SwapExactPtForSyEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return SwapExactPtForSyEvent.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SwapExactPtForSyEvent.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<SwapExactPtForSyEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SwapExactPtForSyEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSwapExactPtForSyEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SwapExactPtForSyEvent object`); }

 return SwapExactPtForSyEvent.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== SwapSyForExactPtEvent =============================== */

export function isSwapSyForExactPtEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::amm::SwapSyForExactPtEvent` + '<'); }

export interface SwapSyForExactPtEventFields<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> { ptAmount: ToField<"u64">; syAmount: ToField<"u64">; syFeeAmount: ToField<"u64">; exchangeRate: ToField<FixedPoint64>; sender: ToField<"address"> }

export type SwapSyForExactPtEventReified<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> = Reified< SwapSyForExactPtEvent<PT, SY>, SwapSyForExactPtEventFields<PT, SY> >;

export class SwapSyForExactPtEvent<PT extends PhantomTypeArgument, SY extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::amm::SwapSyForExactPtEvent`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = SwapSyForExactPtEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::amm::SwapSyForExactPtEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; readonly $typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>]; readonly $isPhantom = SwapSyForExactPtEvent.$isPhantom;

 readonly ptAmount: ToField<"u64">; readonly syAmount: ToField<"u64">; readonly syFeeAmount: ToField<"u64">; readonly exchangeRate: ToField<FixedPoint64>; readonly sender: ToField<"address">

 private constructor(typeArgs: [PhantomToTypeStr<PT>, PhantomToTypeStr<SY>], fields: SwapSyForExactPtEventFields<PT, SY>, ) { this.$fullTypeName = composeSuiType( SwapSyForExactPtEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::amm::SwapSyForExactPtEvent<${PhantomToTypeStr<PT>}, ${PhantomToTypeStr<SY>}>`; this.$typeArgs = typeArgs;

 this.ptAmount = fields.ptAmount;; this.syAmount = fields.syAmount;; this.syFeeAmount = fields.syFeeAmount;; this.exchangeRate = fields.exchangeRate;; this.sender = fields.sender; }

 static reified<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): SwapSyForExactPtEventReified<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return { typeName: SwapSyForExactPtEvent.$typeName, fullTypeName: composeSuiType( SwapSyForExactPtEvent.$typeName, ...[extractType(PT), extractType(SY)] ) as `${typeof PKG_V1}::amm::SwapSyForExactPtEvent<${PhantomToTypeStr<ToPhantomTypeArgument<PT>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<SY>>}>`, typeArgs: [ extractType(PT), extractType(SY) ] as [PhantomToTypeStr<ToPhantomTypeArgument<PT>>, PhantomToTypeStr<ToPhantomTypeArgument<SY>>], isPhantom: SwapSyForExactPtEvent.$isPhantom, reifiedTypeArgs: [PT, SY], fromFields: (fields: Record<string, any>) => SwapSyForExactPtEvent.fromFields( [PT, SY], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SwapSyForExactPtEvent.fromFieldsWithTypes( [PT, SY], item, ), fromBcs: (data: Uint8Array) => SwapSyForExactPtEvent.fromBcs( [PT, SY], data, ), bcs: SwapSyForExactPtEvent.bcs, fromJSONField: (field: any) => SwapSyForExactPtEvent.fromJSONField( [PT, SY], field, ), fromJSON: (json: Record<string, any>) => SwapSyForExactPtEvent.fromJSON( [PT, SY], json, ), fromSuiParsedData: (content: SuiParsedData) => SwapSyForExactPtEvent.fromSuiParsedData( [PT, SY], content, ), fromSuiObjectData: (content: SuiObjectData) => SwapSyForExactPtEvent.fromSuiObjectData( [PT, SY], content, ), fetch: async (client: SuiClient, id: string) => SwapSyForExactPtEvent.fetch( client, [PT, SY], id, ), new: ( fields: SwapSyForExactPtEventFields<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>, ) => { return new SwapSyForExactPtEvent( [extractType(PT), extractType(SY)], fields ) }, kind: "StructClassReified", } }

 static get r() { return SwapSyForExactPtEvent.reified }

 static phantom<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( PT: PT, SY: SY ): PhantomReified<ToTypeStr<SwapSyForExactPtEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>>> { return phantom(SwapSyForExactPtEvent.reified( PT, SY )); } static get p() { return SwapSyForExactPtEvent.phantom }

 static get bcs() { return bcs.struct("SwapSyForExactPtEvent", {

 pt_amount: bcs.u64(), sy_amount: bcs.u64(), sy_fee_amount: bcs.u64(), exchange_rate: FixedPoint64.bcs, sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], fields: Record<string, any> ): SwapSyForExactPtEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return SwapSyForExactPtEvent.reified( typeArgs[0], typeArgs[1], ).new( { ptAmount: decodeFromFields("u64", fields.pt_amount), syAmount: decodeFromFields("u64", fields.sy_amount), syFeeAmount: decodeFromFields("u64", fields.sy_fee_amount), exchangeRate: decodeFromFields(FixedPoint64.reified(), fields.exchange_rate), sender: decodeFromFields("address", fields.sender) } ) }

 static fromFieldsWithTypes<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], item: FieldsWithTypes ): SwapSyForExactPtEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (!isSwapSyForExactPtEvent(item.type)) { throw new Error("not a SwapSyForExactPtEvent type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return SwapSyForExactPtEvent.reified( typeArgs[0], typeArgs[1], ).new( { ptAmount: decodeFromFieldsWithTypes("u64", item.fields.pt_amount), syAmount: decodeFromFieldsWithTypes("u64", item.fields.sy_amount), syFeeAmount: decodeFromFieldsWithTypes("u64", item.fields.sy_fee_amount), exchangeRate: decodeFromFieldsWithTypes(FixedPoint64.reified(), item.fields.exchange_rate), sender: decodeFromFieldsWithTypes("address", item.fields.sender) } ) }

 static fromBcs<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: Uint8Array ): SwapSyForExactPtEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return SwapSyForExactPtEvent.fromFields( typeArgs, SwapSyForExactPtEvent.bcs.parse(data) ) }

 toJSONField() { return {

 ptAmount: this.ptAmount.toString(),syAmount: this.syAmount.toString(),syFeeAmount: this.syFeeAmount.toString(),exchangeRate: this.exchangeRate.toJSONField(),sender: this.sender,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], field: any ): SwapSyForExactPtEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { return SwapSyForExactPtEvent.reified( typeArgs[0], typeArgs[1], ).new( { ptAmount: decodeFromJSONField("u64", field.ptAmount), syAmount: decodeFromJSONField("u64", field.syAmount), syFeeAmount: decodeFromJSONField("u64", field.syFeeAmount), exchangeRate: decodeFromJSONField(FixedPoint64.reified(), field.exchangeRate), sender: decodeFromJSONField("address", field.sender) } ) }

 static fromJSON<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], json: Record<string, any> ): SwapSyForExactPtEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (json.$typeName !== SwapSyForExactPtEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(SwapSyForExactPtEvent.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return SwapSyForExactPtEvent.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], content: SuiParsedData ): SwapSyForExactPtEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSwapSyForExactPtEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SwapSyForExactPtEvent object`); } return SwapSyForExactPtEvent.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( typeArgs: [PT, SY], data: SuiObjectData ): SwapSyForExactPtEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSwapSyForExactPtEvent(data.bcs.type)) { throw new Error(`object at is not a SwapSyForExactPtEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return SwapSyForExactPtEvent.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SwapSyForExactPtEvent.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<PT extends PhantomReified<PhantomTypeArgument>, SY extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [PT, SY], id: string ): Promise<SwapSyForExactPtEvent<ToPhantomTypeArgument<PT>, ToPhantomTypeArgument<SY>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SwapSyForExactPtEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSwapSyForExactPtEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SwapSyForExactPtEvent object`); }

 return SwapSyForExactPtEvent.fromSuiObjectData( typeArgs, res.data ); }

 }
