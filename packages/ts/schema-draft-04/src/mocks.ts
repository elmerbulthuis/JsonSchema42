// @generated by
//     __             _____     _                 ___ ___
//  _ |  |___ ___ ___|   __|___| |_ ___ _____  __| | |_  |
// | |_| |_ -| . |   |__   |  _|   | -_|     ||. |_  |  _|
// |_____|___|___|_|_|_____|___|_|_|___|_|_|_|___| |_|___|
// v0.11.5                         -- www.JsonSchema42.org
//
import * as types from "./types.js";
const depthCounters: Record<string, number> = {};
export const unknownValue = {};
export const anyValue = {};
export const neverValue = {};
export interface MockGeneratorOptions {
maximumDepth?: number;
numberPrecision?: number;
stringCharacters?: string;
defaultMinimumValue?: number;
defaultMaximumValue?: number;
defaultMinimumItems?: number;
defaultMaximumItems?: number;
defaultMinimumProperties?: number;
defaultMaximumProperties?: number;
defaultMinimumStringLength?: number;
defaultMaximumStringLength?: number;
}
const defaultMockGeneratorOptions = {
maximumDepth: 1,
numberPrecision: 1000,
stringCharacters: "abcdefghijklmnopqrstuvwxyz",
defaultMinimumValue: -1000,
defaultMaximumValue: 1000,
defaultMinimumItems: 1,
defaultMaximumItems: 5,
defaultMinimumProperties: 1,
defaultMaximumProperties: 5,
defaultMinimumStringLength: 5,
defaultMaximumStringLength: 20,
}
/**
* @description Core schema meta-schema
* @see {@link http://json-schema.org/draft-04/schema#}
*/
export function mockSchemaDocument(options: MockGeneratorOptions = {}): types.SchemaDocument {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["0"] ??= 0;
try {
depthCounters["0"]++;
return (
{
"id": (depthCounters["6"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockId() : undefined,
"$schema": (depthCounters["7"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockSchema() : undefined,
"title": (depthCounters["8"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockTitle() : undefined,
"description": (depthCounters["9"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockDescription() : undefined,
"default": (depthCounters["10"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockDefault() : undefined,
"multipleOf": (depthCounters["11"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockMultipleOf() : undefined,
"maximum": (depthCounters["12"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockMaximum() : undefined,
"exclusiveMaximum": (depthCounters["13"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockExclusiveMaximum() : undefined,
"minimum": (depthCounters["14"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockMinimum() : undefined,
"exclusiveMinimum": (depthCounters["15"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockExclusiveMinimum() : undefined,
"maxLength": (depthCounters["2"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockMaxLength() : undefined,
"minLength": (depthCounters["3"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockMinLength() : undefined,
"pattern": (depthCounters["18"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockPattern() : undefined,
"additionalItems": (depthCounters["19"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockAdditionalItems() : undefined,
"items": (depthCounters["20"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockPropertiesItems() : undefined,
"maxItems": (depthCounters["2"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockMaxItems() : undefined,
"minItems": (depthCounters["3"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockMinItems() : undefined,
"uniqueItems": (depthCounters["23"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockUniqueItems() : undefined,
"maxProperties": (depthCounters["2"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockMaxProperties() : undefined,
"minProperties": (depthCounters["3"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockMinProperties() : undefined,
"required": (depthCounters["5"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockRequired() : undefined,
"additionalProperties": (depthCounters["27"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockPropertiesAdditionalProperties() : undefined,
"definitions": (depthCounters["28"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockDefinitions() : undefined,
"properties": (depthCounters["29"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockProperties() : undefined,
"patternProperties": (depthCounters["30"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockPatternProperties() : undefined,
"dependencies": (depthCounters["31"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockDependencies() : undefined,
"enum": (depthCounters["32"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockEnum() : undefined,
"type": (depthCounters["33"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockType() : undefined,
"format": (depthCounters["34"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockFormat() : undefined,
"allOf": (depthCounters["1"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockAllOf() : undefined,
"anyOf": (depthCounters["1"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockAnyOf() : undefined,
"oneOf": (depthCounters["1"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockOneOf() : undefined,
"not": (depthCounters["0"] ?? 0) < configuration.maximumDepth && Boolean(nextSeed() % 2) ? mockNot() : undefined,
}
);
}
finally {
depthCounters["0"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/definitions/schemaArray}
*/
export function mockSchemaArray(options: MockGeneratorOptions = {}): types.SchemaArray {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["1"] ??= 0;
try {
depthCounters["1"]++;
return (
new Array(
1 + nextSeed() % (configuration.defaultMaximumItems - 1 + 1)
)
.fill(undefined)
.map(() => mockSchemaArrayItems())
);
}
finally {
depthCounters["1"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/definitions/positiveInteger}
*/
export function mockPositiveInteger(options: MockGeneratorOptions = {}): types.PositiveInteger {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["2"] ??= 0;
try {
depthCounters["2"]++;
return (
(Math.ceil(0 / 1) + nextSeed() % (Math.floor(configuration.defaultMaximumValue / 1) - Math.ceil(0 / 1) + 1)) * 1
);
}
finally {
depthCounters["2"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0}
*/
export function mockPositiveIntegerDefault0(options: MockGeneratorOptions = {}): types.PositiveIntegerDefault0 {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["3"] ??= 0;
try {
depthCounters["3"]++;
return (
(Math.ceil(0 / 1) + nextSeed() % (Math.floor(configuration.defaultMaximumValue / 1) - Math.ceil(0 / 1) + 1)) * 1
);
}
finally {
depthCounters["3"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/definitions/simpleTypes}
*/
export function mockSimpleTypes(options: MockGeneratorOptions = {}): types.SimpleTypes {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["4"] ??= 0;
try {
depthCounters["4"]++;
return ((["array", "boolean", "integer", "null", "number", "object", "string"] as const)[nextSeed() % 7]);
}
finally {
depthCounters["4"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/definitions/stringArray}
*/
export function mockStringArray(options: MockGeneratorOptions = {}): types.StringArray {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["5"] ??= 0;
try {
depthCounters["5"]++;
return (
new Array(
1 + nextSeed() % (configuration.defaultMaximumItems - 1 + 1)
)
.fill(undefined)
.map(() => mockStringArrayItems())
);
}
finally {
depthCounters["5"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/id}
*/
export function mockId(options: MockGeneratorOptions = {}): types.Id {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["6"] ??= 0;
try {
depthCounters["6"]++;
return (
new Array(
configuration.defaultMinimumStringLength + nextSeed() % (configuration.defaultMaximumStringLength - configuration.defaultMinimumStringLength + 1)
).
fill(undefined).
map(() => configuration.stringCharacters[nextSeed() % configuration.stringCharacters.length]).
join("")
);
}
finally {
depthCounters["6"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/$schema}
*/
export function mockSchema(options: MockGeneratorOptions = {}): types.Schema {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["7"] ??= 0;
try {
depthCounters["7"]++;
return (
new Array(
configuration.defaultMinimumStringLength + nextSeed() % (configuration.defaultMaximumStringLength - configuration.defaultMinimumStringLength + 1)
).
fill(undefined).
map(() => configuration.stringCharacters[nextSeed() % configuration.stringCharacters.length]).
join("")
);
}
finally {
depthCounters["7"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/title}
*/
export function mockTitle(options: MockGeneratorOptions = {}): types.Title {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["8"] ??= 0;
try {
depthCounters["8"]++;
return (
new Array(
configuration.defaultMinimumStringLength + nextSeed() % (configuration.defaultMaximumStringLength - configuration.defaultMinimumStringLength + 1)
).
fill(undefined).
map(() => configuration.stringCharacters[nextSeed() % configuration.stringCharacters.length]).
join("")
);
}
finally {
depthCounters["8"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/description}
*/
export function mockDescription(options: MockGeneratorOptions = {}): types.Description {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["9"] ??= 0;
try {
depthCounters["9"]++;
return (
new Array(
configuration.defaultMinimumStringLength + nextSeed() % (configuration.defaultMaximumStringLength - configuration.defaultMinimumStringLength + 1)
).
fill(undefined).
map(() => configuration.stringCharacters[nextSeed() % configuration.stringCharacters.length]).
join("")
);
}
finally {
depthCounters["9"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/default}
*/
export function mockDefault(options: MockGeneratorOptions = {}): types.Default {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["10"] ??= 0;
try {
depthCounters["10"]++;
return (unknownValue);
}
finally {
depthCounters["10"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/multipleOf}
*/
export function mockMultipleOf(options: MockGeneratorOptions = {}): types.MultipleOf {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["11"] ??= 0;
try {
depthCounters["11"]++;
return (
((0 * configuration.numberPrecision + 1) + nextSeed() % ((configuration.defaultMaximumValue * configuration.numberPrecision) - (0 * configuration.numberPrecision + 1) + 1) / configuration.numberPrecision)
);
}
finally {
depthCounters["11"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/maximum}
*/
export function mockMaximum(options: MockGeneratorOptions = {}): types.Maximum {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["12"] ??= 0;
try {
depthCounters["12"]++;
return (
(configuration.defaultMinimumValue * configuration.numberPrecision + nextSeed() % ((configuration.defaultMaximumValue * configuration.numberPrecision) - configuration.defaultMinimumValue * configuration.numberPrecision + 1) / configuration.numberPrecision)
);
}
finally {
depthCounters["12"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/exclusiveMaximum}
*/
export function mockExclusiveMaximum(options: MockGeneratorOptions = {}): types.ExclusiveMaximum {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["13"] ??= 0;
try {
depthCounters["13"]++;
return (Boolean(nextSeed() % 2));
}
finally {
depthCounters["13"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/minimum}
*/
export function mockMinimum(options: MockGeneratorOptions = {}): types.Minimum {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["14"] ??= 0;
try {
depthCounters["14"]++;
return (
(configuration.defaultMinimumValue * configuration.numberPrecision + nextSeed() % ((configuration.defaultMaximumValue * configuration.numberPrecision) - configuration.defaultMinimumValue * configuration.numberPrecision + 1) / configuration.numberPrecision)
);
}
finally {
depthCounters["14"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/exclusiveMinimum}
*/
export function mockExclusiveMinimum(options: MockGeneratorOptions = {}): types.ExclusiveMinimum {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["15"] ??= 0;
try {
depthCounters["15"]++;
return (Boolean(nextSeed() % 2));
}
finally {
depthCounters["15"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/maxLength}
*/
export function mockMaxLength(options: MockGeneratorOptions = {}): types.MaxLength {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["16"] ??= 0;
try {
depthCounters["16"]++;
return (mockPositiveInteger());
}
finally {
depthCounters["16"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/minLength}
*/
export function mockMinLength(options: MockGeneratorOptions = {}): types.MinLength {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["17"] ??= 0;
try {
depthCounters["17"]++;
return (mockPositiveIntegerDefault0());
}
finally {
depthCounters["17"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/pattern}
*/
export function mockPattern(options: MockGeneratorOptions = {}): types.Pattern {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["18"] ??= 0;
try {
depthCounters["18"]++;
return (
new Array(
configuration.defaultMinimumStringLength + nextSeed() % (configuration.defaultMaximumStringLength - configuration.defaultMinimumStringLength + 1)
).
fill(undefined).
map(() => configuration.stringCharacters[nextSeed() % configuration.stringCharacters.length]).
join("")
);
}
finally {
depthCounters["18"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/additionalItems}
*/
export function mockAdditionalItems(options: MockGeneratorOptions = {}): types.AdditionalItems {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["19"] ??= 0;
try {
depthCounters["19"]++;
return (
(() => {
switch (
(
nextSeed() % 2
) as 0 | 1
) {
case 0:
return (mockAdditionalItems0());
case 1:
return (mockAdditionalItems1());
}
})()
);
}
finally {
depthCounters["19"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/items}
*/
export function mockPropertiesItems(options: MockGeneratorOptions = {}): types.PropertiesItems {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["20"] ??= 0;
try {
depthCounters["20"]++;
return (
(() => {
switch (
(
nextSeed() % 2
) as 0 | 1
) {
case 0:
return (mockItems0());
case 1:
return (mockItems1());
}
})()
);
}
finally {
depthCounters["20"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/maxItems}
*/
export function mockMaxItems(options: MockGeneratorOptions = {}): types.MaxItems {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["21"] ??= 0;
try {
depthCounters["21"]++;
return (mockPositiveInteger());
}
finally {
depthCounters["21"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/minItems}
*/
export function mockMinItems(options: MockGeneratorOptions = {}): types.MinItems {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["22"] ??= 0;
try {
depthCounters["22"]++;
return (mockPositiveIntegerDefault0());
}
finally {
depthCounters["22"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/uniqueItems}
*/
export function mockUniqueItems(options: MockGeneratorOptions = {}): types.UniqueItems {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["23"] ??= 0;
try {
depthCounters["23"]++;
return (Boolean(nextSeed() % 2));
}
finally {
depthCounters["23"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/maxProperties}
*/
export function mockMaxProperties(options: MockGeneratorOptions = {}): types.MaxProperties {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["24"] ??= 0;
try {
depthCounters["24"]++;
return (mockPositiveInteger());
}
finally {
depthCounters["24"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/minProperties}
*/
export function mockMinProperties(options: MockGeneratorOptions = {}): types.MinProperties {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["25"] ??= 0;
try {
depthCounters["25"]++;
return (mockPositiveIntegerDefault0());
}
finally {
depthCounters["25"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/required}
*/
export function mockRequired(options: MockGeneratorOptions = {}): types.Required {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["26"] ??= 0;
try {
depthCounters["26"]++;
return (mockStringArray());
}
finally {
depthCounters["26"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/additionalProperties}
*/
export function mockPropertiesAdditionalProperties(options: MockGeneratorOptions = {}): types.PropertiesAdditionalProperties {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["27"] ??= 0;
try {
depthCounters["27"]++;
return (
(() => {
switch (
(
nextSeed() % 2
) as 0 | 1
) {
case 0:
return (mockAdditionalProperties0());
case 1:
return (mockAdditionalProperties1());
}
})()
);
}
finally {
depthCounters["27"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/definitions}
*/
export function mockDefinitions(options: MockGeneratorOptions = {}): types.Definitions {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["28"] ??= 0;
try {
depthCounters["28"]++;
return (
(depthCounters["0"] ?? 0) < configuration.maximumDepth ?
Object.fromEntries(
new Array(
configuration.defaultMinimumProperties + nextSeed() % (configuration.defaultMaximumProperties - configuration.defaultMinimumProperties + 1)
)
.fill(undefined)
.map(() => [(
new Array(
configuration.defaultMinimumStringLength + nextSeed() % (configuration.defaultMaximumStringLength - configuration.defaultMinimumStringLength + 1)
).
fill(undefined).
map(() => configuration.stringCharacters[nextSeed() % configuration.stringCharacters.length]).
join("")
), mockDefinitionsAdditionalProperties()])
) :
{}
);
}
finally {
depthCounters["28"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/properties}
*/
export function mockProperties(options: MockGeneratorOptions = {}): types.Properties {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["29"] ??= 0;
try {
depthCounters["29"]++;
return (
(depthCounters["0"] ?? 0) < configuration.maximumDepth ?
Object.fromEntries(
new Array(
configuration.defaultMinimumProperties + nextSeed() % (configuration.defaultMaximumProperties - configuration.defaultMinimumProperties + 1)
)
.fill(undefined)
.map(() => [(
new Array(
configuration.defaultMinimumStringLength + nextSeed() % (configuration.defaultMaximumStringLength - configuration.defaultMinimumStringLength + 1)
).
fill(undefined).
map(() => configuration.stringCharacters[nextSeed() % configuration.stringCharacters.length]).
join("")
), mockPropertiesPropertiesAdditionalProperties()])
) :
{}
);
}
finally {
depthCounters["29"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/patternProperties}
*/
export function mockPatternProperties(options: MockGeneratorOptions = {}): types.PatternProperties {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["30"] ??= 0;
try {
depthCounters["30"]++;
return (
(depthCounters["0"] ?? 0) < configuration.maximumDepth ?
Object.fromEntries(
new Array(
configuration.defaultMinimumProperties + nextSeed() % (configuration.defaultMaximumProperties - configuration.defaultMinimumProperties + 1)
)
.fill(undefined)
.map(() => [(
new Array(
configuration.defaultMinimumStringLength + nextSeed() % (configuration.defaultMaximumStringLength - configuration.defaultMinimumStringLength + 1)
).
fill(undefined).
map(() => configuration.stringCharacters[nextSeed() % configuration.stringCharacters.length]).
join("")
), mockPatternPropertiesAdditionalProperties()])
) :
{}
);
}
finally {
depthCounters["30"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/dependencies}
*/
export function mockDependencies(options: MockGeneratorOptions = {}): types.Dependencies {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["31"] ??= 0;
try {
depthCounters["31"]++;
return (
(depthCounters["52"] ?? 0) < configuration.maximumDepth ?
Object.fromEntries(
new Array(
configuration.defaultMinimumProperties + nextSeed() % (configuration.defaultMaximumProperties - configuration.defaultMinimumProperties + 1)
)
.fill(undefined)
.map(() => [(
new Array(
configuration.defaultMinimumStringLength + nextSeed() % (configuration.defaultMaximumStringLength - configuration.defaultMinimumStringLength + 1)
).
fill(undefined).
map(() => configuration.stringCharacters[nextSeed() % configuration.stringCharacters.length]).
join("")
), mockDependenciesAdditionalProperties()])
) :
{}
);
}
finally {
depthCounters["31"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/enum}
*/
export function mockEnum(options: MockGeneratorOptions = {}): types.Enum {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["32"] ??= 0;
try {
depthCounters["32"]++;
return (
new Array(
1 + nextSeed() % (configuration.defaultMaximumItems - 1 + 1)
)
.fill(undefined)
.map(() => (anyValue))
);
}
finally {
depthCounters["32"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/type}
*/
export function mockType(options: MockGeneratorOptions = {}): types.Type {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["33"] ??= 0;
try {
depthCounters["33"]++;
return (
(() => {
switch (
(
nextSeed() % 2
) as 0 | 1
) {
case 0:
return (mockType0());
case 1:
return (mockType1());
}
})()
);
}
finally {
depthCounters["33"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/format}
*/
export function mockFormat(options: MockGeneratorOptions = {}): types.Format {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["34"] ??= 0;
try {
depthCounters["34"]++;
return (
new Array(
configuration.defaultMinimumStringLength + nextSeed() % (configuration.defaultMaximumStringLength - configuration.defaultMinimumStringLength + 1)
).
fill(undefined).
map(() => configuration.stringCharacters[nextSeed() % configuration.stringCharacters.length]).
join("")
);
}
finally {
depthCounters["34"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/allOf}
*/
export function mockAllOf(options: MockGeneratorOptions = {}): types.AllOf {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["35"] ??= 0;
try {
depthCounters["35"]++;
return (mockSchemaArray());
}
finally {
depthCounters["35"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/anyOf}
*/
export function mockAnyOf(options: MockGeneratorOptions = {}): types.AnyOf {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["36"] ??= 0;
try {
depthCounters["36"]++;
return (mockSchemaArray());
}
finally {
depthCounters["36"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/oneOf}
*/
export function mockOneOf(options: MockGeneratorOptions = {}): types.OneOf {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["37"] ??= 0;
try {
depthCounters["37"]++;
return (mockSchemaArray());
}
finally {
depthCounters["37"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/not}
*/
export function mockNot(options: MockGeneratorOptions = {}): types.Not {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["38"] ??= 0;
try {
depthCounters["38"]++;
return (mockSchemaDocument());
}
finally {
depthCounters["38"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/definitions/schemaArray/items}
*/
export function mockSchemaArrayItems(options: MockGeneratorOptions = {}): types.SchemaArrayItems {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["39"] ??= 0;
try {
depthCounters["39"]++;
return (mockSchemaDocument());
}
finally {
depthCounters["39"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0/allOf/0}
*/
export function mockPositiveIntegerDefault00(options: MockGeneratorOptions = {}): types.PositiveIntegerDefault00 {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["40"] ??= 0;
try {
depthCounters["40"]++;
return (mockPositiveInteger());
}
finally {
depthCounters["40"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0/allOf/1}
*/
export function mockPositiveIntegerDefault01(options: MockGeneratorOptions = {}): types.PositiveIntegerDefault01 {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["41"] ??= 0;
try {
depthCounters["41"]++;
return (unknownValue);
}
finally {
depthCounters["41"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/definitions/stringArray/items}
*/
export function mockStringArrayItems(options: MockGeneratorOptions = {}): types.StringArrayItems {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["42"] ??= 0;
try {
depthCounters["42"]++;
return (
new Array(
configuration.defaultMinimumStringLength + nextSeed() % (configuration.defaultMaximumStringLength - configuration.defaultMinimumStringLength + 1)
).
fill(undefined).
map(() => configuration.stringCharacters[nextSeed() % configuration.stringCharacters.length]).
join("")
);
}
finally {
depthCounters["42"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/additionalItems/anyOf/0}
*/
export function mockAdditionalItems0(options: MockGeneratorOptions = {}): types.AdditionalItems0 {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["43"] ??= 0;
try {
depthCounters["43"]++;
return (Boolean(nextSeed() % 2));
}
finally {
depthCounters["43"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/additionalItems/anyOf/1}
*/
export function mockAdditionalItems1(options: MockGeneratorOptions = {}): types.AdditionalItems1 {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["44"] ??= 0;
try {
depthCounters["44"]++;
return (mockSchemaDocument());
}
finally {
depthCounters["44"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/items/anyOf/0}
*/
export function mockItems0(options: MockGeneratorOptions = {}): types.Items0 {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["45"] ??= 0;
try {
depthCounters["45"]++;
return (mockSchemaDocument());
}
finally {
depthCounters["45"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/items/anyOf/1}
*/
export function mockItems1(options: MockGeneratorOptions = {}): types.Items1 {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["46"] ??= 0;
try {
depthCounters["46"]++;
return (mockSchemaArray());
}
finally {
depthCounters["46"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/additionalProperties/anyOf/0}
*/
export function mockAdditionalProperties0(options: MockGeneratorOptions = {}): types.AdditionalProperties0 {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["47"] ??= 0;
try {
depthCounters["47"]++;
return (Boolean(nextSeed() % 2));
}
finally {
depthCounters["47"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/additionalProperties/anyOf/1}
*/
export function mockAdditionalProperties1(options: MockGeneratorOptions = {}): types.AdditionalProperties1 {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["48"] ??= 0;
try {
depthCounters["48"]++;
return (mockSchemaDocument());
}
finally {
depthCounters["48"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/definitions/additionalProperties}
*/
export function mockDefinitionsAdditionalProperties(options: MockGeneratorOptions = {}): types.DefinitionsAdditionalProperties {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["49"] ??= 0;
try {
depthCounters["49"]++;
return (mockSchemaDocument());
}
finally {
depthCounters["49"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/properties/additionalProperties}
*/
export function mockPropertiesPropertiesAdditionalProperties(options: MockGeneratorOptions = {}): types.PropertiesPropertiesAdditionalProperties {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["50"] ??= 0;
try {
depthCounters["50"]++;
return (mockSchemaDocument());
}
finally {
depthCounters["50"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/patternProperties/additionalProperties}
*/
export function mockPatternPropertiesAdditionalProperties(options: MockGeneratorOptions = {}): types.PatternPropertiesAdditionalProperties {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["51"] ??= 0;
try {
depthCounters["51"]++;
return (mockSchemaDocument());
}
finally {
depthCounters["51"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/dependencies/additionalProperties}
*/
export function mockDependenciesAdditionalProperties(options: MockGeneratorOptions = {}): types.DependenciesAdditionalProperties {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["52"] ??= 0;
try {
depthCounters["52"]++;
return (
(() => {
switch (
(
nextSeed() % 2
) as 0 | 1
) {
case 0:
return (mockDependencies0());
case 1:
return (mockDependencies1());
}
})()
);
}
finally {
depthCounters["52"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/type/anyOf/0}
*/
export function mockType0(options: MockGeneratorOptions = {}): types.Type0 {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["53"] ??= 0;
try {
depthCounters["53"]++;
return (mockSimpleTypes());
}
finally {
depthCounters["53"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/type/anyOf/1}
*/
export function mockType1(options: MockGeneratorOptions = {}): types.Type1 {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["54"] ??= 0;
try {
depthCounters["54"]++;
return (
new Array(
1 + nextSeed() % (configuration.defaultMaximumItems - 1 + 1)
)
.fill(undefined)
.map(() => mockTypeItems())
);
}
finally {
depthCounters["54"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/dependencies/additionalProperties/anyOf/0}
*/
export function mockDependencies0(options: MockGeneratorOptions = {}): types.Dependencies0 {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["55"] ??= 0;
try {
depthCounters["55"]++;
return (mockSchemaDocument());
}
finally {
depthCounters["55"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/dependencies/additionalProperties/anyOf/1}
*/
export function mockDependencies1(options: MockGeneratorOptions = {}): types.Dependencies1 {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["56"] ??= 0;
try {
depthCounters["56"]++;
return (mockStringArray());
}
finally {
depthCounters["56"]--;
}
}
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/type/anyOf/1/items}
*/
export function mockTypeItems(options: MockGeneratorOptions = {}): types.TypeItems {
const configuration = {
...defaultMockGeneratorOptions,
...options,
};
depthCounters["57"] ??= 0;
try {
depthCounters["57"]++;
return (mockSimpleTypes());
}
finally {
depthCounters["57"]--;
}
}
let seed = 1;
function nextSeed() {
// https://en.wikipedia.org/wiki/Linear_congruential_generator
// https://statmath.wu.ac.at/software/src/prng-3.0.2/doc/prng.html/Table_LCG.html
const p = Math.pow(2, 31) - 1;
const a = 950706376;
const b = 0;
seed = (a * seed + b) % p;
return seed;
}
