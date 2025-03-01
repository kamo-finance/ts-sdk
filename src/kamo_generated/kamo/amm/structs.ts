import * as reified from "../../_framework/reified";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {FixedPoint64} from "../../legato-math/fixed-point64/structs";
import {Balance, Supply} from "../../sui/balance/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

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
