import * as reified from "../../_framework/reified";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {Table} from "../../sui/table/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== TableQueue =============================== */

export function isTableQueue(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::table_queue::TableQueue` + '<'); }

export interface TableQueueFields<Element extends PhantomTypeArgument> { head: ToField<"u64">; tail: ToField<"u64">; contents: ToField<Table<"u64", Element>> }

export type TableQueueReified<Element extends PhantomTypeArgument> = Reified< TableQueue<Element>, TableQueueFields<Element> >;

export class TableQueue<Element extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::table_queue::TableQueue`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = TableQueue.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::table_queue::TableQueue<${PhantomToTypeStr<Element>}>`; readonly $typeArgs: [PhantomToTypeStr<Element>]; readonly $isPhantom = TableQueue.$isPhantom;

 readonly head: ToField<"u64">; readonly tail: ToField<"u64">; readonly contents: ToField<Table<"u64", Element>>

 private constructor(typeArgs: [PhantomToTypeStr<Element>], fields: TableQueueFields<Element>, ) { this.$fullTypeName = composeSuiType( TableQueue.$typeName, ...typeArgs ) as `${typeof PKG_V1}::table_queue::TableQueue<${PhantomToTypeStr<Element>}>`; this.$typeArgs = typeArgs;

 this.head = fields.head;; this.tail = fields.tail;; this.contents = fields.contents; }

 static reified<Element extends PhantomReified<PhantomTypeArgument>>( Element: Element ): TableQueueReified<ToPhantomTypeArgument<Element>> { return { typeName: TableQueue.$typeName, fullTypeName: composeSuiType( TableQueue.$typeName, ...[extractType(Element)] ) as `${typeof PKG_V1}::table_queue::TableQueue<${PhantomToTypeStr<ToPhantomTypeArgument<Element>>}>`, typeArgs: [ extractType(Element) ] as [PhantomToTypeStr<ToPhantomTypeArgument<Element>>], isPhantom: TableQueue.$isPhantom, reifiedTypeArgs: [Element], fromFields: (fields: Record<string, any>) => TableQueue.fromFields( Element, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TableQueue.fromFieldsWithTypes( Element, item, ), fromBcs: (data: Uint8Array) => TableQueue.fromBcs( Element, data, ), bcs: TableQueue.bcs, fromJSONField: (field: any) => TableQueue.fromJSONField( Element, field, ), fromJSON: (json: Record<string, any>) => TableQueue.fromJSON( Element, json, ), fromSuiParsedData: (content: SuiParsedData) => TableQueue.fromSuiParsedData( Element, content, ), fromSuiObjectData: (content: SuiObjectData) => TableQueue.fromSuiObjectData( Element, content, ), fetch: async (client: SuiClient, id: string) => TableQueue.fetch( client, Element, id, ), new: ( fields: TableQueueFields<ToPhantomTypeArgument<Element>>, ) => { return new TableQueue( [extractType(Element)], fields ) }, kind: "StructClassReified", } }

 static get r() { return TableQueue.reified }

 static phantom<Element extends PhantomReified<PhantomTypeArgument>>( Element: Element ): PhantomReified<ToTypeStr<TableQueue<ToPhantomTypeArgument<Element>>>> { return phantom(TableQueue.reified( Element )); } static get p() { return TableQueue.phantom }

 static get bcs() { return bcs.struct("TableQueue", {

 head: bcs.u64(), tail: bcs.u64(), contents: Table.bcs

}) };

 static fromFields<Element extends PhantomReified<PhantomTypeArgument>>( typeArg: Element, fields: Record<string, any> ): TableQueue<ToPhantomTypeArgument<Element>> { return TableQueue.reified( typeArg, ).new( { head: decodeFromFields("u64", fields.head), tail: decodeFromFields("u64", fields.tail), contents: decodeFromFields(Table.reified(reified.phantom("u64"), typeArg), fields.contents) } ) }

 static fromFieldsWithTypes<Element extends PhantomReified<PhantomTypeArgument>>( typeArg: Element, item: FieldsWithTypes ): TableQueue<ToPhantomTypeArgument<Element>> { if (!isTableQueue(item.type)) { throw new Error("not a TableQueue type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return TableQueue.reified( typeArg, ).new( { head: decodeFromFieldsWithTypes("u64", item.fields.head), tail: decodeFromFieldsWithTypes("u64", item.fields.tail), contents: decodeFromFieldsWithTypes(Table.reified(reified.phantom("u64"), typeArg), item.fields.contents) } ) }

 static fromBcs<Element extends PhantomReified<PhantomTypeArgument>>( typeArg: Element, data: Uint8Array ): TableQueue<ToPhantomTypeArgument<Element>> { return TableQueue.fromFields( typeArg, TableQueue.bcs.parse(data) ) }

 toJSONField() { return {

 head: this.head.toString(),tail: this.tail.toString(),contents: this.contents.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<Element extends PhantomReified<PhantomTypeArgument>>( typeArg: Element, field: any ): TableQueue<ToPhantomTypeArgument<Element>> { return TableQueue.reified( typeArg, ).new( { head: decodeFromJSONField("u64", field.head), tail: decodeFromJSONField("u64", field.tail), contents: decodeFromJSONField(Table.reified(reified.phantom("u64"), typeArg), field.contents) } ) }

 static fromJSON<Element extends PhantomReified<PhantomTypeArgument>>( typeArg: Element, json: Record<string, any> ): TableQueue<ToPhantomTypeArgument<Element>> { if (json.$typeName !== TableQueue.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(TableQueue.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return TableQueue.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<Element extends PhantomReified<PhantomTypeArgument>>( typeArg: Element, content: SuiParsedData ): TableQueue<ToPhantomTypeArgument<Element>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTableQueue(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TableQueue object`); } return TableQueue.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<Element extends PhantomReified<PhantomTypeArgument>>( typeArg: Element, data: SuiObjectData ): TableQueue<ToPhantomTypeArgument<Element>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTableQueue(data.bcs.type)) { throw new Error(`object at is not a TableQueue object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return TableQueue.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TableQueue.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<Element extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: Element, id: string ): Promise<TableQueue<ToPhantomTypeArgument<Element>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TableQueue object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTableQueue(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TableQueue object`); }

 return TableQueue.fromSuiObjectData( typeArg, res.data ); }

 }
