// @generated by
//     __             _____     _                 ___ ___
//  _ |  |___ ___ ___|   __|___| |_ ___ _____  __| | |_  |
// | |_| |_ -| . |   |__   |  _|   | -_|     ||. |_  |  _|
// |_____|___|___|_|_|_____|___|_|_|___|_|_|_|___| |_|___|
// v0.8.14                         -- www.JsonSchema42.org
import * as types from "./types.js";
// http://json-schema.org/draft-04/schema#
export function isDraft04Schema(value: unknown): value is types.Draft04Schema {
if(!_isMapDraft04Schema(value)) {
return false;
}
return true;
}
function _isMapDraft04Schema(value: unknown): value is unknown {
if(typeof value !== "object" || value === null || Array.isArray(value)) {
return false;
}
for(const propertyName in value) {
const propertyValue = value[propertyName as keyof typeof value];
switch(propertyName) {
case "id":
if(!isId(propertyValue)) {
return false;
}
continue;
case "$schema":
if(!isPropertiesSchema(propertyValue)) {
return false;
}
continue;
case "title":
if(!isTitle(propertyValue)) {
return false;
}
continue;
case "description":
if(!isDescription(propertyValue)) {
return false;
}
continue;
case "default":
if(!isDefault(propertyValue)) {
return false;
}
continue;
case "multipleOf":
if(!isMultipleOf(propertyValue)) {
return false;
}
continue;
case "maximum":
if(!isMaximum(propertyValue)) {
return false;
}
continue;
case "exclusiveMaximum":
if(!isExclusiveMaximum(propertyValue)) {
return false;
}
continue;
case "minimum":
if(!isMinimum(propertyValue)) {
return false;
}
continue;
case "exclusiveMinimum":
if(!isExclusiveMinimum(propertyValue)) {
return false;
}
continue;
case "maxLength":
if(!isMaxLength(propertyValue)) {
return false;
}
continue;
case "minLength":
if(!isMinLength(propertyValue)) {
return false;
}
continue;
case "pattern":
if(!isPattern(propertyValue)) {
return false;
}
continue;
case "additionalItems":
if(!isAdditionalItems(propertyValue)) {
return false;
}
continue;
case "items":
if(!isPropertiesItems(propertyValue)) {
return false;
}
continue;
case "maxItems":
if(!isMaxItems(propertyValue)) {
return false;
}
continue;
case "minItems":
if(!isMinItems(propertyValue)) {
return false;
}
continue;
case "uniqueItems":
if(!isUniqueItems(propertyValue)) {
return false;
}
continue;
case "maxProperties":
if(!isMaxProperties(propertyValue)) {
return false;
}
continue;
case "minProperties":
if(!isMinProperties(propertyValue)) {
return false;
}
continue;
case "required":
if(!isRequired(propertyValue)) {
return false;
}
continue;
case "additionalProperties":
if(!isSchemaPropertiesAdditionalProperties(propertyValue)) {
return false;
}
continue;
case "definitions":
if(!isDefinitions(propertyValue)) {
return false;
}
continue;
case "properties":
if(!isProperties(propertyValue)) {
return false;
}
continue;
case "patternProperties":
if(!isPatternProperties(propertyValue)) {
return false;
}
continue;
case "dependencies":
if(!isDependencies(propertyValue)) {
return false;
}
continue;
case "enum":
if(!isEnum(propertyValue)) {
return false;
}
continue;
case "type":
if(!isType(propertyValue)) {
return false;
}
continue;
case "format":
if(!isFormat(propertyValue)) {
return false;
}
continue;
case "allOf":
if(!isAllOf(propertyValue)) {
return false;
}
continue;
case "anyOf":
if(!isAnyOf(propertyValue)) {
return false;
}
continue;
case "oneOf":
if(!isOneOf(propertyValue)) {
return false;
}
continue;
case "not":
if(!isNot(propertyValue)) {
return false;
}
continue;
}
}
return true;
}
// http://json-schema.org/draft-04/schema#/definitions/schemaArray
export function isSchemaArray(value: unknown): value is types.SchemaArray {
if(!_isArraySchemaArray(value)) {
return false;
}
return true;
}
function _isArraySchemaArray(value: unknown): value is unknown {
if(!Array.isArray(value)) {
return false;
}
if(value.length < 1) {
return false;
}
for(let elementIndex = 0; elementIndex < value.length; elementIndex ++) {
const elementValue = value[elementIndex];
if(!isSchemaArrayItems(elementValue)) {
return false;
}
}
return true;
}
// http://json-schema.org/draft-04/schema#/definitions/positiveInteger
export function isPositiveInteger(value: unknown): value is types.PositiveInteger {
if(!_isIntegerPositiveInteger(value)) {
return false;
}
return true;
}
function _isIntegerPositiveInteger(value: unknown): value is unknown {
if(typeof value !== "number" || isNaN(value)) {
return false;
}
if(value < 0) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0
export function isPositiveIntegerDefault0(value: unknown): value is types.PositiveIntegerDefault0 {
if(!_isAllOfPositiveIntegerDefault0(value)) {
return false;
}
return true;
}
function _isAllOfPositiveIntegerDefault0(value: unknown): value is unknown {
if(!isAllOf0(value)) {
return false;
}
if(!isAllOf1(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/definitions/simpleTypes
export function isSimpleTypes(value: unknown): value is types.SimpleTypes {
if(!_isStringSimpleTypes(value)) {
return false;
}
return true;
}
function _isStringSimpleTypes(value: unknown): value is unknown {
if(typeof value !== "string") {
return false;
}
if(value !== "array" && value !== "boolean" && value !== "integer" && value !== "null" && value !== "number" && value !== "object" && value !== "string") {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/definitions/stringArray
export function isStringArray(value: unknown): value is types.StringArray {
if(!_isArrayStringArray(value)) {
return false;
}
return true;
}
function _isArrayStringArray(value: unknown): value is unknown {
if(!Array.isArray(value)) {
return false;
}
if(value.length < 1) {
return false;
}
const elementValueSeen = new Set<unknown>();
for(let elementIndex = 0; elementIndex < value.length; elementIndex ++) {
const elementValue = value[elementIndex];
if(elementValueSeen.has(elementValue)) {
return false;
}
elementValueSeen.add(elementValue);
if(!isStringArrayItems(elementValue)) {
return false;
}
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/id
export function isId(value: unknown): value is types.Id {
if(!_isStringId(value)) {
return false;
}
return true;
}
function _isStringId(value: unknown): value is unknown {
if(typeof value !== "string") {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/$schema
export function isPropertiesSchema(value: unknown): value is types.PropertiesSchema {
if(!_isStringPropertiesSchema(value)) {
return false;
}
return true;
}
function _isStringPropertiesSchema(value: unknown): value is unknown {
if(typeof value !== "string") {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/title
export function isTitle(value: unknown): value is types.Title {
if(!_isStringTitle(value)) {
return false;
}
return true;
}
function _isStringTitle(value: unknown): value is unknown {
if(typeof value !== "string") {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/description
export function isDescription(value: unknown): value is types.Description {
if(!_isStringDescription(value)) {
return false;
}
return true;
}
function _isStringDescription(value: unknown): value is unknown {
if(typeof value !== "string") {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/default
export function isDefault(value: unknown): value is types.Default {
return true;
}
// http://json-schema.org/draft-04/schema#/properties/multipleOf
export function isMultipleOf(value: unknown): value is types.MultipleOf {
if(!_isNumberMultipleOf(value)) {
return false;
}
return true;
}
function _isNumberMultipleOf(value: unknown): value is unknown {
if(typeof value !== "number" || isNaN(value) || value % 1 !== 0) {
return false;
}
if(value <= 0) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/maximum
export function isMaximum(value: unknown): value is types.Maximum {
if(!_isNumberMaximum(value)) {
return false;
}
return true;
}
function _isNumberMaximum(value: unknown): value is unknown {
if(typeof value !== "number" || isNaN(value) || value % 1 !== 0) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/exclusiveMaximum
export function isExclusiveMaximum(value: unknown): value is types.ExclusiveMaximum {
if(!_isBooleanExclusiveMaximum(value)) {
return false;
}
return true;
}
function _isBooleanExclusiveMaximum(value: unknown): value is unknown {
if(typeof value !== "boolean") {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/minimum
export function isMinimum(value: unknown): value is types.Minimum {
if(!_isNumberMinimum(value)) {
return false;
}
return true;
}
function _isNumberMinimum(value: unknown): value is unknown {
if(typeof value !== "number" || isNaN(value) || value % 1 !== 0) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/exclusiveMinimum
export function isExclusiveMinimum(value: unknown): value is types.ExclusiveMinimum {
if(!_isBooleanExclusiveMinimum(value)) {
return false;
}
return true;
}
function _isBooleanExclusiveMinimum(value: unknown): value is unknown {
if(typeof value !== "boolean") {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/maxLength
export function isMaxLength(value: unknown): value is types.MaxLength {
if(!_isReferenceMaxLength(value)) {
return false;
}
return true;
}
function _isReferenceMaxLength(value: unknown): value is unknown {
if(!isPositiveInteger(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/minLength
export function isMinLength(value: unknown): value is types.MinLength {
if(!_isReferenceMinLength(value)) {
return false;
}
return true;
}
function _isReferenceMinLength(value: unknown): value is unknown {
if(!isPositiveIntegerDefault0(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/pattern
export function isPattern(value: unknown): value is types.Pattern {
if(!_isStringPattern(value)) {
return false;
}
return true;
}
function _isStringPattern(value: unknown): value is unknown {
if(typeof value !== "string") {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/additionalItems
export function isAdditionalItems(value: unknown): value is types.AdditionalItems {
if(!_isAnyOfAdditionalItems(value)) {
return false;
}
return true;
}
function _isAnyOfAdditionalItems(value: unknown): value is unknown {
if(isAdditionalItemsAnyOf0(value)) {
return true;
}
if(isAdditionalItemsAnyOf1(value)) {
return true;
}
return false;
}
// http://json-schema.org/draft-04/schema#/properties/items
export function isPropertiesItems(value: unknown): value is types.PropertiesItems {
if(!_isAnyOfPropertiesItems(value)) {
return false;
}
return true;
}
function _isAnyOfPropertiesItems(value: unknown): value is unknown {
if(isItemsAnyOf0(value)) {
return true;
}
if(isItemsAnyOf1(value)) {
return true;
}
return false;
}
// http://json-schema.org/draft-04/schema#/properties/maxItems
export function isMaxItems(value: unknown): value is types.MaxItems {
if(!_isReferenceMaxItems(value)) {
return false;
}
return true;
}
function _isReferenceMaxItems(value: unknown): value is unknown {
if(!isPositiveInteger(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/minItems
export function isMinItems(value: unknown): value is types.MinItems {
if(!_isReferenceMinItems(value)) {
return false;
}
return true;
}
function _isReferenceMinItems(value: unknown): value is unknown {
if(!isPositiveIntegerDefault0(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/uniqueItems
export function isUniqueItems(value: unknown): value is types.UniqueItems {
if(!_isBooleanUniqueItems(value)) {
return false;
}
return true;
}
function _isBooleanUniqueItems(value: unknown): value is unknown {
if(typeof value !== "boolean") {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/maxProperties
export function isMaxProperties(value: unknown): value is types.MaxProperties {
if(!_isReferenceMaxProperties(value)) {
return false;
}
return true;
}
function _isReferenceMaxProperties(value: unknown): value is unknown {
if(!isPositiveInteger(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/minProperties
export function isMinProperties(value: unknown): value is types.MinProperties {
if(!_isReferenceMinProperties(value)) {
return false;
}
return true;
}
function _isReferenceMinProperties(value: unknown): value is unknown {
if(!isPositiveIntegerDefault0(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/required
export function isRequired(value: unknown): value is types.Required {
if(!_isReferenceRequired(value)) {
return false;
}
return true;
}
function _isReferenceRequired(value: unknown): value is unknown {
if(!isStringArray(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/additionalProperties
export function isSchemaPropertiesAdditionalProperties(value: unknown): value is types.SchemaPropertiesAdditionalProperties {
if(!_isAnyOfSchemaPropertiesAdditionalProperties(value)) {
return false;
}
return true;
}
function _isAnyOfSchemaPropertiesAdditionalProperties(value: unknown): value is unknown {
if(isPropertiesAdditionalPropertiesAnyOf0(value)) {
return true;
}
if(isPropertiesAdditionalPropertiesAnyOf1(value)) {
return true;
}
return false;
}
// http://json-schema.org/draft-04/schema#/properties/definitions
export function isDefinitions(value: unknown): value is types.Definitions {
if(!_isMapDefinitions(value)) {
return false;
}
return true;
}
function _isMapDefinitions(value: unknown): value is unknown {
if(typeof value !== "object" || value === null || Array.isArray(value)) {
return false;
}
for(const propertyName in value) {
const propertyValue = value[propertyName as keyof typeof value];
if(!isDefinitionsAdditionalProperties(propertyValue)) {
return false;
}
continue;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/properties
export function isProperties(value: unknown): value is types.Properties {
if(!_isMapProperties(value)) {
return false;
}
return true;
}
function _isMapProperties(value: unknown): value is unknown {
if(typeof value !== "object" || value === null || Array.isArray(value)) {
return false;
}
for(const propertyName in value) {
const propertyValue = value[propertyName as keyof typeof value];
if(!isPropertiesPropertiesAdditionalProperties(propertyValue)) {
return false;
}
continue;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/patternProperties
export function isPatternProperties(value: unknown): value is types.PatternProperties {
if(!_isMapPatternProperties(value)) {
return false;
}
return true;
}
function _isMapPatternProperties(value: unknown): value is unknown {
if(typeof value !== "object" || value === null || Array.isArray(value)) {
return false;
}
for(const propertyName in value) {
const propertyValue = value[propertyName as keyof typeof value];
if(!isPatternPropertiesAdditionalProperties(propertyValue)) {
return false;
}
continue;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/dependencies
export function isDependencies(value: unknown): value is types.Dependencies {
if(!_isMapDependencies(value)) {
return false;
}
return true;
}
function _isMapDependencies(value: unknown): value is unknown {
if(typeof value !== "object" || value === null || Array.isArray(value)) {
return false;
}
for(const propertyName in value) {
const propertyValue = value[propertyName as keyof typeof value];
if(!isDependenciesAdditionalProperties(propertyValue)) {
return false;
}
continue;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/enum
export function isEnum(value: unknown): value is types.Enum {
if(!_isArrayEnum(value)) {
return false;
}
return true;
}
function _isArrayEnum(value: unknown): value is unknown {
if(!Array.isArray(value)) {
return false;
}
if(value.length < 1) {
return false;
}
const elementValueSeen = new Set<unknown>();
for(let elementIndex = 0; elementIndex < value.length; elementIndex ++) {
const elementValue = value[elementIndex];
if(elementValueSeen.has(elementValue)) {
return false;
}
elementValueSeen.add(elementValue);
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/type
export function isType(value: unknown): value is types.Type {
if(!_isAnyOfType(value)) {
return false;
}
return true;
}
function _isAnyOfType(value: unknown): value is unknown {
if(isTypeAnyOf0(value)) {
return true;
}
if(isTypeAnyOf1(value)) {
return true;
}
return false;
}
// http://json-schema.org/draft-04/schema#/properties/format
export function isFormat(value: unknown): value is types.Format {
if(!_isStringFormat(value)) {
return false;
}
return true;
}
function _isStringFormat(value: unknown): value is unknown {
if(typeof value !== "string") {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/allOf
export function isAllOf(value: unknown): value is types.AllOf {
if(!_isReferenceAllOf(value)) {
return false;
}
return true;
}
function _isReferenceAllOf(value: unknown): value is unknown {
if(!isSchemaArray(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/anyOf
export function isAnyOf(value: unknown): value is types.AnyOf {
if(!_isReferenceAnyOf(value)) {
return false;
}
return true;
}
function _isReferenceAnyOf(value: unknown): value is unknown {
if(!isSchemaArray(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/oneOf
export function isOneOf(value: unknown): value is types.OneOf {
if(!_isReferenceOneOf(value)) {
return false;
}
return true;
}
function _isReferenceOneOf(value: unknown): value is unknown {
if(!isSchemaArray(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/not
export function isNot(value: unknown): value is types.Not {
if(!_isReferenceNot(value)) {
return false;
}
return true;
}
function _isReferenceNot(value: unknown): value is unknown {
if(!isDraft04Schema(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/definitions/schemaArray/items
export function isSchemaArrayItems(value: unknown): value is types.SchemaArrayItems {
if(!_isReferenceSchemaArrayItems(value)) {
return false;
}
return true;
}
function _isReferenceSchemaArrayItems(value: unknown): value is unknown {
if(!isDraft04Schema(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0/allOf/0
export function isAllOf0(value: unknown): value is types.AllOf0 {
if(!_isReferenceAllOf0(value)) {
return false;
}
return true;
}
function _isReferenceAllOf0(value: unknown): value is unknown {
if(!isPositiveInteger(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0/allOf/1
export function isAllOf1(value: unknown): value is types.AllOf1 {
return true;
}
// http://json-schema.org/draft-04/schema#/definitions/stringArray/items
export function isStringArrayItems(value: unknown): value is types.StringArrayItems {
if(!_isStringStringArrayItems(value)) {
return false;
}
return true;
}
function _isStringStringArrayItems(value: unknown): value is unknown {
if(typeof value !== "string") {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/additionalItems/anyOf/0
export function isAdditionalItemsAnyOf0(value: unknown): value is types.AdditionalItemsAnyOf0 {
if(!_isBooleanAdditionalItemsAnyOf0(value)) {
return false;
}
return true;
}
function _isBooleanAdditionalItemsAnyOf0(value: unknown): value is unknown {
if(typeof value !== "boolean") {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/additionalItems/anyOf/1
export function isAdditionalItemsAnyOf1(value: unknown): value is types.AdditionalItemsAnyOf1 {
if(!_isReferenceAdditionalItemsAnyOf1(value)) {
return false;
}
return true;
}
function _isReferenceAdditionalItemsAnyOf1(value: unknown): value is unknown {
if(!isDraft04Schema(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/items/anyOf/0
export function isItemsAnyOf0(value: unknown): value is types.ItemsAnyOf0 {
if(!_isReferenceItemsAnyOf0(value)) {
return false;
}
return true;
}
function _isReferenceItemsAnyOf0(value: unknown): value is unknown {
if(!isDraft04Schema(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/items/anyOf/1
export function isItemsAnyOf1(value: unknown): value is types.ItemsAnyOf1 {
if(!_isReferenceItemsAnyOf1(value)) {
return false;
}
return true;
}
function _isReferenceItemsAnyOf1(value: unknown): value is unknown {
if(!isSchemaArray(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/additionalProperties/anyOf/0
export function isPropertiesAdditionalPropertiesAnyOf0(value: unknown): value is types.PropertiesAdditionalPropertiesAnyOf0 {
if(!_isBooleanPropertiesAdditionalPropertiesAnyOf0(value)) {
return false;
}
return true;
}
function _isBooleanPropertiesAdditionalPropertiesAnyOf0(value: unknown): value is unknown {
if(typeof value !== "boolean") {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/additionalProperties/anyOf/1
export function isPropertiesAdditionalPropertiesAnyOf1(value: unknown): value is types.PropertiesAdditionalPropertiesAnyOf1 {
if(!_isReferencePropertiesAdditionalPropertiesAnyOf1(value)) {
return false;
}
return true;
}
function _isReferencePropertiesAdditionalPropertiesAnyOf1(value: unknown): value is unknown {
if(!isDraft04Schema(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/definitions/additionalProperties
export function isDefinitionsAdditionalProperties(value: unknown): value is types.DefinitionsAdditionalProperties {
if(!_isReferenceDefinitionsAdditionalProperties(value)) {
return false;
}
return true;
}
function _isReferenceDefinitionsAdditionalProperties(value: unknown): value is unknown {
if(!isDraft04Schema(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/properties/additionalProperties
export function isPropertiesPropertiesAdditionalProperties(value: unknown): value is types.PropertiesPropertiesAdditionalProperties {
if(!_isReferencePropertiesPropertiesAdditionalProperties(value)) {
return false;
}
return true;
}
function _isReferencePropertiesPropertiesAdditionalProperties(value: unknown): value is unknown {
if(!isDraft04Schema(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/patternProperties/additionalProperties
export function isPatternPropertiesAdditionalProperties(value: unknown): value is types.PatternPropertiesAdditionalProperties {
if(!_isReferencePatternPropertiesAdditionalProperties(value)) {
return false;
}
return true;
}
function _isReferencePatternPropertiesAdditionalProperties(value: unknown): value is unknown {
if(!isDraft04Schema(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/dependencies/additionalProperties
export function isDependenciesAdditionalProperties(value: unknown): value is types.DependenciesAdditionalProperties {
if(!_isAnyOfDependenciesAdditionalProperties(value)) {
return false;
}
return true;
}
function _isAnyOfDependenciesAdditionalProperties(value: unknown): value is unknown {
if(isDependenciesAdditionalPropertiesAnyOf0(value)) {
return true;
}
if(isDependenciesAdditionalPropertiesAnyOf1(value)) {
return true;
}
return false;
}
// http://json-schema.org/draft-04/schema#/properties/type/anyOf/0
export function isTypeAnyOf0(value: unknown): value is types.TypeAnyOf0 {
if(!_isReferenceTypeAnyOf0(value)) {
return false;
}
return true;
}
function _isReferenceTypeAnyOf0(value: unknown): value is unknown {
if(!isSimpleTypes(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/type/anyOf/1
export function isTypeAnyOf1(value: unknown): value is types.TypeAnyOf1 {
if(!_isArrayTypeAnyOf1(value)) {
return false;
}
return true;
}
function _isArrayTypeAnyOf1(value: unknown): value is unknown {
if(!Array.isArray(value)) {
return false;
}
if(value.length < 1) {
return false;
}
const elementValueSeen = new Set<unknown>();
for(let elementIndex = 0; elementIndex < value.length; elementIndex ++) {
const elementValue = value[elementIndex];
if(elementValueSeen.has(elementValue)) {
return false;
}
elementValueSeen.add(elementValue);
if(!isAnyOf1Items(elementValue)) {
return false;
}
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/dependencies/additionalProperties/anyOf/0
export function isDependenciesAdditionalPropertiesAnyOf0(value: unknown): value is types.DependenciesAdditionalPropertiesAnyOf0 {
if(!_isReferenceDependenciesAdditionalPropertiesAnyOf0(value)) {
return false;
}
return true;
}
function _isReferenceDependenciesAdditionalPropertiesAnyOf0(value: unknown): value is unknown {
if(!isDraft04Schema(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/dependencies/additionalProperties/anyOf/1
export function isDependenciesAdditionalPropertiesAnyOf1(value: unknown): value is types.DependenciesAdditionalPropertiesAnyOf1 {
if(!_isReferenceDependenciesAdditionalPropertiesAnyOf1(value)) {
return false;
}
return true;
}
function _isReferenceDependenciesAdditionalPropertiesAnyOf1(value: unknown): value is unknown {
if(!isStringArray(value)) {
return false;
}
return true;
}
// http://json-schema.org/draft-04/schema#/properties/type/anyOf/1/items
export function isAnyOf1Items(value: unknown): value is types.AnyOf1Items {
if(!_isReferenceAnyOf1Items(value)) {
return false;
}
return true;
}
function _isReferenceAnyOf1Items(value: unknown): value is unknown {
if(!isSimpleTypes(value)) {
return false;
}
return true;
}
