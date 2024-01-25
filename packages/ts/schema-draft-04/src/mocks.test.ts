// @generated by
//     __             _____     _                 ___ ___
//  _ |  |___ ___ ___|   __|___| |_ ___ _____  __| | |_  |
// | |_| |_ -| . |   |__   |  _|   | -_|     ||. |_  |  _|
// |_____|___|___|_|_|_____|___|_|_|___|_|_|_|___| |_|___|
// v0.12.10                        -- www.JsonSchema42.org
//
import assert from "node:assert/strict";
import test from "node:test";
import * as validators from "./validators.js";
import * as mocks from "./mocks.js";
/**
* @see {@link http://json-schema.org/draft-04/schema#/definitions/positiveInteger}
*/
test("PositiveInteger", () => {
const mock = mocks.mockPositiveInteger();
const valid = validators.isPositiveInteger(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/id}
*/
test("Id", () => {
const mock = mocks.mockId();
const valid = validators.isId(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/$schema}
*/
test("Schema", () => {
const mock = mocks.mockSchema();
const valid = validators.isSchema(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/title}
*/
test("Title", () => {
const mock = mocks.mockTitle();
const valid = validators.isTitle(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/description}
*/
test("Description", () => {
const mock = mocks.mockDescription();
const valid = validators.isDescription(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/multipleOf}
*/
test("MultipleOf", () => {
const mock = mocks.mockMultipleOf();
const valid = validators.isMultipleOf(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/maximum}
*/
test("Maximum", () => {
const mock = mocks.mockMaximum();
const valid = validators.isMaximum(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/exclusiveMaximum}
*/
test("ExclusiveMaximum", () => {
const mock = mocks.mockExclusiveMaximum();
const valid = validators.isExclusiveMaximum(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/minimum}
*/
test("Minimum", () => {
const mock = mocks.mockMinimum();
const valid = validators.isMinimum(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/exclusiveMinimum}
*/
test("ExclusiveMinimum", () => {
const mock = mocks.mockExclusiveMinimum();
const valid = validators.isExclusiveMinimum(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/maxLength}
*/
test("MaxLength", () => {
const mock = mocks.mockMaxLength();
const valid = validators.isMaxLength(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/maxItems}
*/
test("MaxItems", () => {
const mock = mocks.mockMaxItems();
const valid = validators.isMaxItems(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/uniqueItems}
*/
test("UniqueItems", () => {
const mock = mocks.mockUniqueItems();
const valid = validators.isUniqueItems(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/maxProperties}
*/
test("MaxProperties", () => {
const mock = mocks.mockMaxProperties();
const valid = validators.isMaxProperties(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/properties/format}
*/
test("Format", () => {
const mock = mocks.mockFormat();
const valid = validators.isFormat(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0/allOf/0}
*/
test("PositiveIntegerDefault00", () => {
const mock = mocks.mockPositiveIntegerDefault00();
const valid = validators.isPositiveIntegerDefault00(mock);
assert.equal(valid, true);
});
/**
* @see {@link http://json-schema.org/draft-04/schema#/definitions/stringArray/items}
*/
test("StringArrayItems", () => {
const mock = mocks.mockStringArrayItems();
const valid = validators.isStringArrayItems(mock);
assert.equal(valid, true);
});
