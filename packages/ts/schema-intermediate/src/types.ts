// @generated by
//     __             _____     _                 ___ ___
//  _ |  |___ ___ ___|   __|___| |_ ___ _____  __| | |_  |
// | |_| |_ -| . |   |__   |  _|   | -_|     ||. |_  |  _|
// |_____|___|___|_|_|_____|___|_|_|___|_|_|_|___| |_|___|
// v0.12.5                         -- www.JsonSchema42.org
//
/**
* @summary JsonSchema42 intermediate schema
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json}
*/
export type SchemaDocument = (
{
["$schema"]: Schema,
["schemas"]: Schemas,
[
name: string
]: any
}
);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node}
*/
export type Node = (
{
["title"]?: Title,
["description"]?: Description,
["examples"]?: Examples,
["deprecated"]?: Deprecated,
["types"]?: Types,
["reference"]?: Reference,
["oneOf"]?: OneOf,
["anyOf"]?: AnyOf,
["allOf"]?: AllOf,
["if"]?: If,
["then"]?: Then,
["else"]?: Else,
["not"]?: Not,
["dependentSchemas"]?: DependentSchemas,
["objectProperties"]?: ObjectProperties,
["mapProperties"]?: MapProperties,
["patternProperties"]?: PatternProperties,
["propertyNames"]?: PropertyNames,
["tupleItems"]?: TupleItems,
["arrayItems"]?: ArrayItems,
["contains"]?: Contains,
["options"]?: Options,
["minimumInclusive"]?: MinimumInclusive,
["minimumExclusive"]?: MinimumExclusive,
["maximumInclusive"]?: MaximumInclusive,
["maximumExclusive"]?: MaximumExclusive,
["multipleOf"]?: MultipleOf,
["minimumLength"]?: MinimumLength,
["maximumLength"]?: MaximumLength,
["valuePattern"]?: ValuePattern,
["valueFormat"]?: ValueFormat,
["minimumItems"]?: MinimumItems,
["maximumItems"]?: MaximumItems,
["uniqueItems"]?: UniqueItems,
["required"]?: Required,
["minimumProperties"]?: MinimumProperties,
["maximumProperties"]?: MaximumProperties,
[
name: string
]: any
}
);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node-reference}
*/
export type NodeReference = (string);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/integer-value}
*/
export type IntegerValue = (number);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/number-value}
*/
export type NumberValue = (number);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/boolean-value}
*/
export type BooleanValue = (boolean);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/string-value}
*/
export type StringValue = (string);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/non-empty-string-value}
*/
export type NonEmptyStringValue = (string);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/amount}
*/
export type Amount = (number);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/properties/$schema}
*/
export type Schema = ("https://schema.JsonSchema42.org/jns42-intermediate/schema.json");
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/properties/schemas}
*/
export type Schemas = (
{
[
name: string
]: SchemasAdditionalProperties
}
);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/title}
*/
export type Title = (NonEmptyStringValue);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/description}
*/
export type Description = (NonEmptyStringValue);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/examples}
*/
export type Examples = (
[
...(ExamplesItems)[]
]
);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/deprecated}
*/
export type Deprecated = (BooleanValue);
/**
* @description What types does this schema describe<br />
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/types}
*/
export type Types = (
[
...(TypesItems)[]
]
);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/reference}
*/
export type Reference = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/oneOf}
*/
export type OneOf = (
[
...(OneOfItems)[]
]
);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/anyOf}
*/
export type AnyOf = (
[
...(AnyOfItems)[]
]
);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/allOf}
*/
export type AllOf = (
[
...(AllOfItems)[]
]
);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/if}
*/
export type If = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/then}
*/
export type Then = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/else}
*/
export type Else = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/not}
*/
export type Not = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/dependentSchemas}
*/
export type DependentSchemas = (
{
[
name: string
]: DependentSchemasAdditionalProperties
}
);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/objectProperties}
*/
export type ObjectProperties = (
{
[
name: string
]: ObjectPropertiesAdditionalProperties
}
);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/mapProperties}
*/
export type MapProperties = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/patternProperties}
*/
export type PatternProperties = (
{
[
name: string
]: PatternPropertiesAdditionalProperties
}
);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/propertyNames}
*/
export type PropertyNames = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/tupleItems}
*/
export type TupleItems = (
[
...(TupleItemsItems)[]
]
);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/arrayItems}
*/
export type ArrayItems = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/contains}
*/
export type Contains = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/options}
*/
export type Options = (
[
...(OptionsItems)[]
]
);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/minimumInclusive}
*/
export type MinimumInclusive = (NumberValue);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/minimumExclusive}
*/
export type MinimumExclusive = (NumberValue);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/maximumInclusive}
*/
export type MaximumInclusive = (NumberValue);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/maximumExclusive}
*/
export type MaximumExclusive = (NumberValue);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/multipleOf}
*/
export type MultipleOf = (NumberValue);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/minimumLength}
*/
export type MinimumLength = (Amount);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/maximumLength}
*/
export type MaximumLength = (Amount);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/valuePattern}
*/
export type ValuePattern = (NonEmptyStringValue);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/valueFormat}
*/
export type ValueFormat = (NonEmptyStringValue);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/minimumItems}
*/
export type MinimumItems = (Amount);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/maximumItems}
*/
export type MaximumItems = (Amount);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/uniqueItems}
*/
export type UniqueItems = (boolean);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/required}
*/
export type Required = (
[
...(RequiredItems)[]
]
);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/minimumProperties}
*/
export type MinimumProperties = (Amount);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/maximumProperties}
*/
export type MaximumProperties = (Amount);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/properties/schemas/additionalProperties}
*/
export type SchemasAdditionalProperties = (Node);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/examples/items}
*/
export type ExamplesItems = (any);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/types/items}
*/
export type TypesItems = ("never" |
"any" |
"null" |
"boolean" |
"integer" |
"number" |
"string" |
"array" |
"map");
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/oneOf/items}
*/
export type OneOfItems = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/anyOf/items}
*/
export type AnyOfItems = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/allOf/items}
*/
export type AllOfItems = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/dependentSchemas/additionalProperties}
*/
export type DependentSchemasAdditionalProperties = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/objectProperties/additionalProperties}
*/
export type ObjectPropertiesAdditionalProperties = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/patternProperties/additionalProperties}
*/
export type PatternPropertiesAdditionalProperties = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/tupleItems/items}
*/
export type TupleItemsItems = (NodeReference);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/options/items}
*/
export type OptionsItems = (any);
/**
* @see {@link https://schema.jsonschema42.org/jns42-intermediate/schema.json#/$defs/node/properties/required/items}
*/
export type RequiredItems = (StringValue);
