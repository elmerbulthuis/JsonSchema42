// @generated by
//     __             _____     _                 ___ ___
//  _ |  |___ ___ ___|   __|___| |_ ___ _____  __| | |_  |
// | |_| |_ -| . |   |__   |  _|   | -_|     ||. |_  |  _|
// |_____|___|___|_|_|_____|___|_|_|___|_|_|_|___| |_|___|
// v0.12.8                         -- www.JsonSchema42.org
//
/**
* @summary Core and Validation specifications meta-schema
* @see {@link https://json-schema.org/draft/2020-12/schema}
*/
export type Schema = (
(
{
"$id"?: Id,
"$schema"?: CoreSchema,
"$ref"?: Ref,
"$anchor"?: Anchor,
"$dynamicRef"?: DynamicRef,
"$dynamicAnchor"?: DynamicAnchor,
"$vocabulary"?: Vocabulary,
"$comment"?: Comment,
"$defs"?: Defs,
"prefixItems"?: PrefixItems,
"items"?: ApplicatorItems,
"contains"?: Contains,
"additionalProperties"?: ApplicatorAdditionalProperties,
"properties"?: Properties,
"patternProperties"?: PatternProperties,
"dependentSchemas"?: DependentSchemas,
"propertyNames"?: ApplicatorPropertyNames,
"if"?: If,
"then"?: Then,
"else"?: Else,
"allOf"?: AllOf,
"anyOf"?: AnyOf,
"oneOf"?: OneOf,
"not"?: Not,
"unevaluatedItems"?: UnevaluatedItems,
"unevaluatedProperties"?: UnevaluatedProperties,
"type"?: Type,
"const"?: Const,
"enum"?: Enum,
"multipleOf"?: MultipleOf,
"maximum"?: Maximum,
"exclusiveMaximum"?: ExclusiveMaximum,
"minimum"?: Minimum,
"exclusiveMinimum"?: ExclusiveMinimum,
"maxLength"?: MaxLength,
"minLength"?: MinLength,
"pattern"?: Pattern,
"maxItems"?: MaxItems,
"minItems"?: MinItems,
"uniqueItems"?: UniqueItems,
"maxContains"?: MaxContains,
"minContains"?: MinContains,
"maxProperties"?: MaxProperties,
"minProperties"?: MinProperties,
"required"?: Required,
"dependentRequired"?: DependentRequired,
"title"?: Title,
"description"?: Description,
"default"?: Default,
"deprecated"?: Deprecated,
"readOnly"?: ReadOnly,
"writeOnly"?: WriteOnly,
"examples"?: Examples,
"format"?: Format,
"contentEncoding"?: ContentEncoding,
"contentMediaType"?: ContentMediaType,
"contentSchema"?: ContentSchema,
"definitions"?: Definitions,
"dependencies"?: Dependencies,
"$recursiveAnchor"?: RecursiveAnchor,
"$recursiveRef"?: RecursiveRef,
}
)
|
(boolean)
);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/properties/definitions}
* @deprecated
*/
export type Definitions = (
{
[
name: string
]: DefinitionsAdditionalProperties
}
);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/properties/dependencies}
* @deprecated
*/
export type Dependencies = (
{
[
name: string
]: DependenciesAdditionalProperties
}
);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/properties/$recursiveAnchor}
* @deprecated
*/
export type RecursiveAnchor = (AnchorString);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/properties/$recursiveRef}
* @deprecated
*/
export type RecursiveRef = (UriReferenceString);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/allOf/0}
*/
export type AllOf0 = (Core);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/allOf/1}
*/
export type AllOf1 = (Applicator);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/allOf/2}
*/
export type AllOf2 = (Unevaluated);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/allOf/3}
*/
export type AllOf3 = (Validation);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/allOf/4}
*/
export type AllOf4 = (MetaData);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/allOf/5}
*/
export type AllOf5 = (FormatAnnotation);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/allOf/6}
*/
export type AllOf6 = (Content);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/properties/definitions/additionalProperties}
*/
export type DefinitionsAdditionalProperties = (Schema);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/properties/dependencies/additionalProperties}
*/
export type DependenciesAdditionalProperties = (
StringArray
|
(
{
"$id"?: Id,
"$schema"?: CoreSchema,
"$ref"?: Ref,
"$anchor"?: Anchor,
"$dynamicRef"?: DynamicRef,
"$dynamicAnchor"?: DynamicAnchor,
"$vocabulary"?: Vocabulary,
"$comment"?: Comment,
"$defs"?: Defs,
"prefixItems"?: PrefixItems,
"items"?: ApplicatorItems,
"contains"?: Contains,
"additionalProperties"?: ApplicatorAdditionalProperties,
"properties"?: Properties,
"patternProperties"?: PatternProperties,
"dependentSchemas"?: DependentSchemas,
"propertyNames"?: ApplicatorPropertyNames,
"if"?: If,
"then"?: Then,
"else"?: Else,
"allOf"?: AllOf,
"anyOf"?: AnyOf,
"oneOf"?: OneOf,
"not"?: Not,
"unevaluatedItems"?: UnevaluatedItems,
"unevaluatedProperties"?: UnevaluatedProperties,
"type"?: Type,
"const"?: Const,
"enum"?: Enum,
"multipleOf"?: MultipleOf,
"maximum"?: Maximum,
"exclusiveMaximum"?: ExclusiveMaximum,
"minimum"?: Minimum,
"exclusiveMinimum"?: ExclusiveMinimum,
"maxLength"?: MaxLength,
"minLength"?: MinLength,
"pattern"?: Pattern,
"maxItems"?: MaxItems,
"minItems"?: MinItems,
"uniqueItems"?: UniqueItems,
"maxContains"?: MaxContains,
"minContains"?: MinContains,
"maxProperties"?: MaxProperties,
"minProperties"?: MinProperties,
"required"?: Required,
"dependentRequired"?: DependentRequired,
"title"?: Title,
"description"?: Description,
"default"?: Default,
"deprecated"?: Deprecated,
"readOnly"?: ReadOnly,
"writeOnly"?: WriteOnly,
"examples"?: Examples,
"format"?: Format,
"contentEncoding"?: ContentEncoding,
"contentMediaType"?: ContentMediaType,
"contentSchema"?: ContentSchema,
"definitions"?: Definitions,
"dependencies"?: Dependencies,
"$recursiveAnchor"?: RecursiveAnchor,
"$recursiveRef"?: RecursiveRef,
}
)
|
(boolean)
);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/properties/dependencies/additionalProperties/anyOf/0}
*/
export type Dependencies0 = (Schema);
/**
* @see {@link https://json-schema.org/draft/2020-12/schema#/properties/dependencies/additionalProperties/anyOf/1}
*/
export type Dependencies1 = (StringArray);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/$defs/anchorString}
*/
export type AnchorString = (string);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/$defs/uriReferenceString}
*/
export type UriReferenceString = (string);
/**
* @summary Core vocabulary meta-schema
* @see {@link https://json-schema.org/draft/2020-12/meta/core}
*/
export type Core = (
(
{
"$id"?: Id,
"$schema"?: CoreSchema,
"$ref"?: Ref,
"$anchor"?: Anchor,
"$dynamicRef"?: DynamicRef,
"$dynamicAnchor"?: DynamicAnchor,
"$vocabulary"?: Vocabulary,
"$comment"?: Comment,
"$defs"?: Defs,
}
)
|
(boolean)
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/$defs/uriString}
*/
export type UriString = (string);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/properties/$id}
*/
export type Id = (string);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/properties/$schema}
*/
export type CoreSchema = (UriString);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/properties/$ref}
*/
export type Ref = (UriReferenceString);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/properties/$anchor}
*/
export type Anchor = (AnchorString);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/properties/$dynamicRef}
*/
export type DynamicRef = (UriReferenceString);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/properties/$dynamicAnchor}
*/
export type DynamicAnchor = (AnchorString);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/properties/$vocabulary}
*/
export type Vocabulary = (
{
[
name: VocabularyPropertyNames
]: VocabularyAdditionalProperties
}
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/properties/$comment}
*/
export type Comment = (string);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/properties/$defs}
*/
export type Defs = (
{
[
name: string
]: DefsAdditionalProperties
}
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/properties/$vocabulary/additionalProperties}
*/
export type VocabularyAdditionalProperties = (boolean);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/properties/$vocabulary/propertyNames}
*/
export type VocabularyPropertyNames = (string);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/core#/properties/$defs/additionalProperties}
*/
export type DefsAdditionalProperties = (Schema);
/**
* @summary Applicator vocabulary meta-schema
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator}
*/
export type Applicator = (
(
{
"prefixItems"?: PrefixItems,
"items"?: ApplicatorItems,
"contains"?: Contains,
"additionalProperties"?: ApplicatorAdditionalProperties,
"properties"?: Properties,
"patternProperties"?: PatternProperties,
"dependentSchemas"?: DependentSchemas,
"propertyNames"?: ApplicatorPropertyNames,
"if"?: If,
"then"?: Then,
"else"?: Else,
"allOf"?: AllOf,
"anyOf"?: AnyOf,
"oneOf"?: OneOf,
"not"?: Not,
}
)
|
(boolean)
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/$defs/schemaArray}
*/
export type SchemaArray = (
[
...(SchemaArrayItems)[]
]
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/prefixItems}
*/
export type PrefixItems = (SchemaArray);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/items}
*/
export type ApplicatorItems = (Schema);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/contains}
*/
export type Contains = (Schema);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/additionalProperties}
*/
export type ApplicatorAdditionalProperties = (Schema);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/properties}
*/
export type Properties = (
{
[
name: string
]: PropertiesAdditionalProperties
}
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/patternProperties}
*/
export type PatternProperties = (
{
[
name: PatternPropertiesPropertyNames
]: PatternPropertiesAdditionalProperties
}
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/dependentSchemas}
*/
export type DependentSchemas = (
{
[
name: string
]: DependentSchemasAdditionalProperties
}
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/propertyNames}
*/
export type ApplicatorPropertyNames = (Schema);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/if}
*/
export type If = (Schema);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/then}
*/
export type Then = (Schema);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/else}
*/
export type Else = (Schema);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/allOf}
*/
export type AllOf = (SchemaArray);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/anyOf}
*/
export type AnyOf = (SchemaArray);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/oneOf}
*/
export type OneOf = (SchemaArray);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/not}
*/
export type Not = (Schema);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/$defs/schemaArray/items}
*/
export type SchemaArrayItems = (Schema);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/properties/additionalProperties}
*/
export type PropertiesAdditionalProperties = (Schema);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/patternProperties/additionalProperties}
*/
export type PatternPropertiesAdditionalProperties = (Schema);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/patternProperties/propertyNames}
*/
export type PatternPropertiesPropertyNames = (string);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/applicator#/properties/dependentSchemas/additionalProperties}
*/
export type DependentSchemasAdditionalProperties = (Schema);
/**
* @summary Unevaluated applicator vocabulary meta-schema
* @see {@link https://json-schema.org/draft/2020-12/meta/unevaluated}
*/
export type Unevaluated = (
(
{
"unevaluatedItems"?: UnevaluatedItems,
"unevaluatedProperties"?: UnevaluatedProperties,
}
)
|
(boolean)
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/unevaluated#/properties/unevaluatedItems}
*/
export type UnevaluatedItems = (Schema);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/unevaluated#/properties/unevaluatedProperties}
*/
export type UnevaluatedProperties = (Schema);
/**
* @summary Validation vocabulary meta-schema
* @see {@link https://json-schema.org/draft/2020-12/meta/validation}
*/
export type Validation = (
(
{
"type"?: Type,
"const"?: Const,
"enum"?: Enum,
"multipleOf"?: MultipleOf,
"maximum"?: Maximum,
"exclusiveMaximum"?: ExclusiveMaximum,
"minimum"?: Minimum,
"exclusiveMinimum"?: ExclusiveMinimum,
"maxLength"?: MaxLength,
"minLength"?: MinLength,
"pattern"?: Pattern,
"maxItems"?: MaxItems,
"minItems"?: MinItems,
"uniqueItems"?: UniqueItems,
"maxContains"?: MaxContains,
"minContains"?: MinContains,
"maxProperties"?: MaxProperties,
"minProperties"?: MinProperties,
"required"?: Required,
"dependentRequired"?: DependentRequired,
}
)
|
(boolean)
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/$defs/nonNegativeInteger}
*/
export type NonNegativeInteger = (number);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/$defs/nonNegativeIntegerDefault0}
*/
export type NonNegativeIntegerDefault0 = (NonNegativeInteger);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/$defs/simpleTypes}
*/
export type SimpleTypes = ("array" |
"boolean" |
"integer" |
"null" |
"number" |
"object" |
"string");
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/$defs/stringArray}
*/
export type StringArray = (
[
...(StringArrayItems)[]
]
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/type}
*/
export type Type = (unknown);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/const}
*/
export type Const = (any);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/enum}
*/
export type Enum = (
[
...(EnumItems)[]
]
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/multipleOf}
*/
export type MultipleOf = (number);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/maximum}
*/
export type Maximum = (number);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/exclusiveMaximum}
*/
export type ExclusiveMaximum = (number);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/minimum}
*/
export type Minimum = (number);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/exclusiveMinimum}
*/
export type ExclusiveMinimum = (number);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/maxLength}
*/
export type MaxLength = (NonNegativeInteger);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/minLength}
*/
export type MinLength = (NonNegativeIntegerDefault0);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/pattern}
*/
export type Pattern = (string);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/maxItems}
*/
export type MaxItems = (NonNegativeInteger);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/minItems}
*/
export type MinItems = (NonNegativeIntegerDefault0);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/uniqueItems}
*/
export type UniqueItems = (boolean);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/maxContains}
*/
export type MaxContains = (NonNegativeInteger);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/minContains}
*/
export type MinContains = (NonNegativeInteger);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/maxProperties}
*/
export type MaxProperties = (NonNegativeInteger);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/minProperties}
*/
export type MinProperties = (NonNegativeIntegerDefault0);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/required}
*/
export type Required = (StringArray);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/dependentRequired}
*/
export type DependentRequired = (
{
[
name: string
]: DependentRequiredAdditionalProperties
}
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/$defs/stringArray/items}
*/
export type StringArrayItems = (string);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/type/anyOf/0}
*/
export type Type0 = (SimpleTypes);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/type/anyOf/1}
*/
export type Type1 = (
[
...(TypeItems)[]
]
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/enum/items}
*/
export type EnumItems = (any);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/dependentRequired/additionalProperties}
*/
export type DependentRequiredAdditionalProperties = (StringArray);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/validation#/properties/type/anyOf/1/items}
*/
export type TypeItems = (SimpleTypes);
/**
* @summary Meta-data vocabulary meta-schema
* @see {@link https://json-schema.org/draft/2020-12/meta/meta-data}
*/
export type MetaData = (
(
{
"title"?: Title,
"description"?: Description,
"default"?: Default,
"deprecated"?: Deprecated,
"readOnly"?: ReadOnly,
"writeOnly"?: WriteOnly,
"examples"?: Examples,
}
)
|
(boolean)
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/meta-data#/properties/title}
*/
export type Title = (string);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/meta-data#/properties/description}
*/
export type Description = (string);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/meta-data#/properties/default}
*/
export type Default = (any);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/meta-data#/properties/deprecated}
*/
export type Deprecated = (boolean);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/meta-data#/properties/readOnly}
*/
export type ReadOnly = (boolean);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/meta-data#/properties/writeOnly}
*/
export type WriteOnly = (boolean);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/meta-data#/properties/examples}
*/
export type Examples = (
[
...(ExamplesItems)[]
]
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/meta-data#/properties/examples/items}
*/
export type ExamplesItems = (any);
/**
* @summary Format vocabulary meta-schema for annotation results
* @see {@link https://json-schema.org/draft/2020-12/meta/format-annotation}
*/
export type FormatAnnotation = (
(
{
"format"?: Format,
}
)
|
(boolean)
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/format-annotation#/properties/format}
*/
export type Format = (string);
/**
* @summary Content vocabulary meta-schema
* @see {@link https://json-schema.org/draft/2020-12/meta/content}
*/
export type Content = (
(
{
"contentEncoding"?: ContentEncoding,
"contentMediaType"?: ContentMediaType,
"contentSchema"?: ContentSchema,
}
)
|
(boolean)
);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/content#/properties/contentEncoding}
*/
export type ContentEncoding = (string);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/content#/properties/contentMediaType}
*/
export type ContentMediaType = (string);
/**
* @see {@link https://json-schema.org/draft/2020-12/meta/content#/properties/contentSchema}
*/
export type ContentSchema = (Schema);
