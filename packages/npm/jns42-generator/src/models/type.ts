import * as core from "@jns42/core";
import assert from "node:assert";

export interface UnknownTypeModel {
  readonly type: "unknown";
}

export interface NeverTypeModel {
  readonly type: "never";
}

export interface AnyTypeModel {
  readonly type: "any";
}

export interface NullTypeModel {
  readonly type: "null";
}

export interface BooleanTypeModel {
  readonly type: "boolean";
  readonly options: boolean[];
}

export interface IntegerTypeModel {
  readonly type: "integer";
  readonly options: number[];

  readonly minimumInclusive: number | undefined;
  readonly minimumExclusive: number | undefined;
  readonly maximumInclusive: number | undefined;
  readonly maximumExclusive: number | undefined;
  readonly multipleOf: number | undefined;
}

export interface NumberTypeModel {
  readonly type: "number";
  readonly options: number[];

  readonly minimumInclusive: number | undefined;
  readonly minimumExclusive: number | undefined;
  readonly maximumInclusive: number | undefined;
  readonly maximumExclusive: number | undefined;
  readonly multipleOf: number | undefined;
}

export interface StringTypeModel {
  readonly type: "string";
  readonly options: string[];

  readonly minimumLength: number | undefined;
  readonly maximumLength: number | undefined;
  readonly valuePattern: string | undefined;
  readonly valueFormat: string | undefined;
}

export interface ArrayTypeModel {
  readonly type: "array";
  readonly arrayItems: number | undefined;
  readonly contains: number | undefined;
  readonly tupleItems: number[] | undefined;

  readonly minimumItems: number | undefined;
  readonly maximumItems: number | undefined;
  readonly uniqueItems: boolean | undefined;
}

export interface ObjectTypeModel {
  readonly type: "object";
  readonly propertyNames: number | undefined;
  readonly mapProperties: number | undefined;
  readonly objectProperties: Record<string, number>;
  readonly patternProperties: Record<string, number>;
  readonly required: string[] | undefined;

  readonly minimumProperties: number | undefined;
  readonly maximumProperties: number | undefined;
}

export interface UnionTypeModel {
  readonly type: "union";
  readonly members: [number, ...number[]];
}

export interface ReferenceTypeModel {
  readonly type: "reference";
  readonly reference: number;
}

export interface MetadataTypeModel {
  readonly location: string | undefined;
  readonly title: string | undefined;
  readonly description: string | undefined;
  readonly examples: any[] | undefined;
  readonly deprecated: boolean | undefined;

  readonly exact: boolean;
}

export type TypeModel = MetadataTypeModel &
  (
    | UnknownTypeModel
    | NeverTypeModel
    | AnyTypeModel
    | NullTypeModel
    | BooleanTypeModel
    | IntegerTypeModel
    | NumberTypeModel
    | StringTypeModel
    | ArrayTypeModel
    | ObjectTypeModel
    | UnionTypeModel
    | ReferenceTypeModel
  );

export function toTypeModel(arena: core.models.SchemaArena, key: number): TypeModel {
  const item = arena.getItem(key);

  if (item.types != null) {
    assert(item.types.length <= 1, "unexpected multiple type");
  }

  if (item.if != null) {
    assert(item.if == null, "unexpected if");
  }
  if (item.then != null) {
    assert(item.then == null, "unexpected then");
  }
  if (item.else != null) {
    assert(item.else == null, "unexpected else");
  }
  if (item.not != null) {
    assert(item.not == null, "unexpected not");
  }

  if (item.allOf != null) {
    assert(item.allOf.length === 0, "unexpected allOf");
  }
  if (item.anyOf != null) {
    assert(item.anyOf.length === 0, "unexpected anyOf");
  }
  if (item.oneOf != null) {
    assert(item.oneOf.length > 1, "unexpected single oneOf");
  }

  const { location, title, description, examples, deprecated } = item;

  const type = item.types?.[0];

  const { reference, propertyNames, mapProperties, arrayItems, contains } = item;

  const oneOf = item.oneOf != null ? ([...item.oneOf] as [number, ...number[]]) : undefined;
  const tupleItems = item.tupleItems != null ? [...item.tupleItems] : undefined;

  const objectProperties = Object.fromEntries(item.objectProperties ?? []);
  const patternProperties = Object.fromEntries(item.patternProperties ?? []);
  const dependentSchemas = Object.fromEntries(item.dependentSchemas ?? []);

  const { options, required } = item;

  const exact = item.exact ?? false;

  const {
    minimumInclusive,
    minimumExclusive,
    maximumInclusive,
    maximumExclusive,
    multipleOf,
    minimumLength,
    maximumLength,
    valuePattern,
    valueFormat,
    minimumItems,
    maximumItems,
    uniqueItems,
    minimumProperties,
    maximumProperties,
  } = item;

  if (type != null) {
    assert(reference == null, "unexpected reference");
    assert(oneOf == null, "unexpected oneOf");

    switch (type) {
      case "never":
        return {
          location,
          title,
          description,
          examples,
          deprecated,

          exact,

          type: "never",
        } as MetadataTypeModel & NeverTypeModel;

      case "any":
        return {
          location,
          title,
          description,
          examples,
          deprecated,

          exact,

          type: "any",
        } as MetadataTypeModel & AnyTypeModel;

      case "null":
        return {
          location,
          title,
          description,
          examples,
          deprecated,

          exact,

          type: "null",
        } as MetadataTypeModel & NullTypeModel;

      case "boolean":
        return {
          location,
          title,
          description,
          examples,
          deprecated,

          exact,

          type: "boolean",
          options:
            options?.map((option) => option.asBoolean()).filter((option) => option != null) ?? [],
        } as MetadataTypeModel & BooleanTypeModel;

      case "integer":
        return {
          location,
          title,
          description,
          examples,
          deprecated,

          exact,

          type: "integer",
          options:
            options?.map((option) => option.asNumber()).filter((option) => option != null) ?? [],

          minimumInclusive,
          minimumExclusive,
          maximumInclusive,
          maximumExclusive,
          multipleOf,
        } as MetadataTypeModel & IntegerTypeModel;

      case "number":
        return {
          location,
          title,
          description,
          examples,
          deprecated,

          exact,

          type: "number",
          options:
            options?.map((option) => option.asNumber()).filter((option) => option != null) ?? [],

          minimumInclusive,
          minimumExclusive,
          maximumInclusive,
          maximumExclusive,
          multipleOf,
        } as MetadataTypeModel & NumberTypeModel;

      case "str":
        return {
          location,
          title,
          description,
          examples,
          deprecated,

          exact,

          type: "string",
          options:
            options?.map((option) => option.asString()).filter((option) => option != null) ?? [],

          minimumLength,
          maximumLength,
          valuePattern,
          valueFormat,
        } as MetadataTypeModel & StringTypeModel;

      case "array":
        return {
          location,
          title,
          description,
          examples,
          deprecated,

          exact,

          type: "array",

          arrayItems,
          contains,
          tupleItems,

          minimumItems,
          maximumItems,
          uniqueItems,
        } as MetadataTypeModel & ArrayTypeModel;

      case "object":
        return {
          location,
          title,
          description,
          examples,
          deprecated,

          exact,

          type: "object",

          propertyNames,
          mapProperties,
          objectProperties,
          patternProperties,

          required,
          minimumProperties,
          maximumProperties,
        } as MetadataTypeModel & ObjectTypeModel;
    }
  }

  if (reference != null) {
    assert(type == null, "unexpected type");
    assert(oneOf == null, "unexpected oneOf");

    return {
      location,
      title,
      description,
      examples,
      deprecated,

      exact,

      type: "reference",
      reference,
    } as MetadataTypeModel & ReferenceTypeModel;
  }

  if (oneOf != null) {
    assert(type == null, "unexpected type");
    assert(reference == null, "unexpected reference");

    return {
      location,
      title,
      description,
      examples,
      deprecated,

      exact,

      type: "union",
      members: oneOf,
    } as MetadataTypeModel & UnionTypeModel;
  }

  return {
    location,
    title,
    description,
    examples,
    deprecated,

    exact,

    type: "unknown",
  };
}
