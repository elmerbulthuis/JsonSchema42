// @generated by
//     __             _____     _                 ___ ___
//  _ |  |___ ___ ___|   __|___| |_ ___ _____  __| | |_  |
// | |_| |_ -| . |   |__   |  _|   | -_|     ||. |_  |  _|
// |_____|___|___|_|_|_____|___|_|_|___|_|_|_|___| |_|___|
// v0.10.0                         -- www.JsonSchema42.org
//
import assert from "node:assert/strict";
import test from "node:test";
import * as validators from "./validators.js";
import * as mocks from "./mocks.js";
test("Schema", () => {
const mock = mocks.mockSchema();
const valid = validators.isSchema(mock);
assert.equal(valid, true);
});
test("Definitions", () => {
const mock = mocks.mockDefinitions();
const valid = validators.isDefinitions(mock);
assert.equal(valid, true);
});
test("Dependencies", () => {
const mock = mocks.mockDependencies();
const valid = validators.isDependencies(mock);
assert.equal(valid, true);
});
test("RecursiveAnchor", () => {
const mock = mocks.mockRecursiveAnchor();
const valid = validators.isRecursiveAnchor(mock);
assert.equal(valid, true);
});
test("RecursiveRef", () => {
const mock = mocks.mockRecursiveRef();
const valid = validators.isRecursiveRef(mock);
assert.equal(valid, true);
});
test("AllOf0", () => {
const mock = mocks.mockAllOf0();
const valid = validators.isAllOf0(mock);
assert.equal(valid, true);
});
test("AllOf1", () => {
const mock = mocks.mockAllOf1();
const valid = validators.isAllOf1(mock);
assert.equal(valid, true);
});
test("AllOf2", () => {
const mock = mocks.mockAllOf2();
const valid = validators.isAllOf2(mock);
assert.equal(valid, true);
});
test("AllOf3", () => {
const mock = mocks.mockAllOf3();
const valid = validators.isAllOf3(mock);
assert.equal(valid, true);
});
test("AllOf4", () => {
const mock = mocks.mockAllOf4();
const valid = validators.isAllOf4(mock);
assert.equal(valid, true);
});
test("AllOf5", () => {
const mock = mocks.mockAllOf5();
const valid = validators.isAllOf5(mock);
assert.equal(valid, true);
});
test("AllOf6", () => {
const mock = mocks.mockAllOf6();
const valid = validators.isAllOf6(mock);
assert.equal(valid, true);
});
test("DefinitionsAdditionalProperties", () => {
const mock = mocks.mockDefinitionsAdditionalProperties();
const valid = validators.isDefinitionsAdditionalProperties(mock);
assert.equal(valid, true);
});
test("DependenciesAdditionalProperties", () => {
const mock = mocks.mockDependenciesAdditionalProperties();
const valid = validators.isDependenciesAdditionalProperties(mock);
assert.equal(valid, true);
});
test("Dependencies0", () => {
const mock = mocks.mockDependencies0();
const valid = validators.isDependencies0(mock);
assert.equal(valid, true);
});
test("Dependencies1", () => {
const mock = mocks.mockDependencies1();
const valid = validators.isDependencies1(mock);
assert.equal(valid, true);
});
test("AnchorString", () => {
const mock = mocks.mockAnchorString();
const valid = validators.isAnchorString(mock);
assert.equal(valid, true);
});
test("UriReferenceString", () => {
const mock = mocks.mockUriReferenceString();
const valid = validators.isUriReferenceString(mock);
assert.equal(valid, true);
});
test("Core", () => {
const mock = mocks.mockCore();
const valid = validators.isCore(mock);
assert.equal(valid, true);
});
test("UriString", () => {
const mock = mocks.mockUriString();
const valid = validators.isUriString(mock);
assert.equal(valid, true);
});
test("Id", () => {
const mock = mocks.mockId();
const valid = validators.isId(mock);
assert.equal(valid, true);
});
test("CoreSchema", () => {
const mock = mocks.mockCoreSchema();
const valid = validators.isCoreSchema(mock);
assert.equal(valid, true);
});
test("Ref", () => {
const mock = mocks.mockRef();
const valid = validators.isRef(mock);
assert.equal(valid, true);
});
test("Anchor", () => {
const mock = mocks.mockAnchor();
const valid = validators.isAnchor(mock);
assert.equal(valid, true);
});
test("DynamicRef", () => {
const mock = mocks.mockDynamicRef();
const valid = validators.isDynamicRef(mock);
assert.equal(valid, true);
});
test("DynamicAnchor", () => {
const mock = mocks.mockDynamicAnchor();
const valid = validators.isDynamicAnchor(mock);
assert.equal(valid, true);
});
test("Vocabulary", () => {
const mock = mocks.mockVocabulary();
const valid = validators.isVocabulary(mock);
assert.equal(valid, true);
});
test("Comment", () => {
const mock = mocks.mockComment();
const valid = validators.isComment(mock);
assert.equal(valid, true);
});
test("Defs", () => {
const mock = mocks.mockDefs();
const valid = validators.isDefs(mock);
assert.equal(valid, true);
});
test("VocabularyAdditionalProperties", () => {
const mock = mocks.mockVocabularyAdditionalProperties();
const valid = validators.isVocabularyAdditionalProperties(mock);
assert.equal(valid, true);
});
test("VocabularyPropertyNames", () => {
const mock = mocks.mockVocabularyPropertyNames();
const valid = validators.isVocabularyPropertyNames(mock);
assert.equal(valid, true);
});
test("DefsAdditionalProperties", () => {
const mock = mocks.mockDefsAdditionalProperties();
const valid = validators.isDefsAdditionalProperties(mock);
assert.equal(valid, true);
});
test("Applicator", () => {
const mock = mocks.mockApplicator();
const valid = validators.isApplicator(mock);
assert.equal(valid, true);
});
test("SchemaArray", () => {
const mock = mocks.mockSchemaArray();
const valid = validators.isSchemaArray(mock);
assert.equal(valid, true);
});
test("PrefixItems", () => {
const mock = mocks.mockPrefixItems();
const valid = validators.isPrefixItems(mock);
assert.equal(valid, true);
});
test("ApplicatorItems", () => {
const mock = mocks.mockApplicatorItems();
const valid = validators.isApplicatorItems(mock);
assert.equal(valid, true);
});
test("Contains", () => {
const mock = mocks.mockContains();
const valid = validators.isContains(mock);
assert.equal(valid, true);
});
test("ApplicatorAdditionalProperties", () => {
const mock = mocks.mockApplicatorAdditionalProperties();
const valid = validators.isApplicatorAdditionalProperties(mock);
assert.equal(valid, true);
});
test("Properties", () => {
const mock = mocks.mockProperties();
const valid = validators.isProperties(mock);
assert.equal(valid, true);
});
test("PatternProperties", () => {
const mock = mocks.mockPatternProperties();
const valid = validators.isPatternProperties(mock);
assert.equal(valid, true);
});
test("DependentSchemas", () => {
const mock = mocks.mockDependentSchemas();
const valid = validators.isDependentSchemas(mock);
assert.equal(valid, true);
});
test("ApplicatorPropertyNames", () => {
const mock = mocks.mockApplicatorPropertyNames();
const valid = validators.isApplicatorPropertyNames(mock);
assert.equal(valid, true);
});
test("If", () => {
const mock = mocks.mockIf();
const valid = validators.isIf(mock);
assert.equal(valid, true);
});
test("Then", () => {
const mock = mocks.mockThen();
const valid = validators.isThen(mock);
assert.equal(valid, true);
});
test("Else", () => {
const mock = mocks.mockElse();
const valid = validators.isElse(mock);
assert.equal(valid, true);
});
test("AllOf", () => {
const mock = mocks.mockAllOf();
const valid = validators.isAllOf(mock);
assert.equal(valid, true);
});
test("AnyOf", () => {
const mock = mocks.mockAnyOf();
const valid = validators.isAnyOf(mock);
assert.equal(valid, true);
});
test("OneOf", () => {
const mock = mocks.mockOneOf();
const valid = validators.isOneOf(mock);
assert.equal(valid, true);
});
test("Not", () => {
const mock = mocks.mockNot();
const valid = validators.isNot(mock);
assert.equal(valid, true);
});
test("SchemaArrayItems", () => {
const mock = mocks.mockSchemaArrayItems();
const valid = validators.isSchemaArrayItems(mock);
assert.equal(valid, true);
});
test("PropertiesAdditionalProperties", () => {
const mock = mocks.mockPropertiesAdditionalProperties();
const valid = validators.isPropertiesAdditionalProperties(mock);
assert.equal(valid, true);
});
test("PatternPropertiesAdditionalProperties", () => {
const mock = mocks.mockPatternPropertiesAdditionalProperties();
const valid = validators.isPatternPropertiesAdditionalProperties(mock);
assert.equal(valid, true);
});
test("PatternPropertiesPropertyNames", () => {
const mock = mocks.mockPatternPropertiesPropertyNames();
const valid = validators.isPatternPropertiesPropertyNames(mock);
assert.equal(valid, true);
});
test("DependentSchemasAdditionalProperties", () => {
const mock = mocks.mockDependentSchemasAdditionalProperties();
const valid = validators.isDependentSchemasAdditionalProperties(mock);
assert.equal(valid, true);
});
test("Unevaluated", () => {
const mock = mocks.mockUnevaluated();
const valid = validators.isUnevaluated(mock);
assert.equal(valid, true);
});
test("UnevaluatedItems", () => {
const mock = mocks.mockUnevaluatedItems();
const valid = validators.isUnevaluatedItems(mock);
assert.equal(valid, true);
});
test("UnevaluatedProperties", () => {
const mock = mocks.mockUnevaluatedProperties();
const valid = validators.isUnevaluatedProperties(mock);
assert.equal(valid, true);
});
test("Validation", () => {
const mock = mocks.mockValidation();
const valid = validators.isValidation(mock);
assert.equal(valid, true);
});
test("NonNegativeInteger", () => {
const mock = mocks.mockNonNegativeInteger();
const valid = validators.isNonNegativeInteger(mock);
assert.equal(valid, true);
});
test("NonNegativeIntegerDefault0", () => {
const mock = mocks.mockNonNegativeIntegerDefault0();
const valid = validators.isNonNegativeIntegerDefault0(mock);
assert.equal(valid, true);
});
test("SimpleTypes", () => {
const mock = mocks.mockSimpleTypes();
const valid = validators.isSimpleTypes(mock);
assert.equal(valid, true);
});
test("StringArray", () => {
const mock = mocks.mockStringArray();
const valid = validators.isStringArray(mock);
assert.equal(valid, true);
});
test("Type", () => {
const mock = mocks.mockType();
const valid = validators.isType(mock);
assert.equal(valid, true);
});
test("Const", () => {
const mock = mocks.mockConst();
const valid = validators.isConst(mock);
assert.equal(valid, true);
});
test("Enum", () => {
const mock = mocks.mockEnum();
const valid = validators.isEnum(mock);
assert.equal(valid, true);
});
test("MultipleOf", () => {
const mock = mocks.mockMultipleOf();
const valid = validators.isMultipleOf(mock);
assert.equal(valid, true);
});
test("Maximum", () => {
const mock = mocks.mockMaximum();
const valid = validators.isMaximum(mock);
assert.equal(valid, true);
});
test("ExclusiveMaximum", () => {
const mock = mocks.mockExclusiveMaximum();
const valid = validators.isExclusiveMaximum(mock);
assert.equal(valid, true);
});
test("Minimum", () => {
const mock = mocks.mockMinimum();
const valid = validators.isMinimum(mock);
assert.equal(valid, true);
});
test("ExclusiveMinimum", () => {
const mock = mocks.mockExclusiveMinimum();
const valid = validators.isExclusiveMinimum(mock);
assert.equal(valid, true);
});
test("MaxLength", () => {
const mock = mocks.mockMaxLength();
const valid = validators.isMaxLength(mock);
assert.equal(valid, true);
});
test("MinLength", () => {
const mock = mocks.mockMinLength();
const valid = validators.isMinLength(mock);
assert.equal(valid, true);
});
test("Pattern", () => {
const mock = mocks.mockPattern();
const valid = validators.isPattern(mock);
assert.equal(valid, true);
});
test("MaxItems", () => {
const mock = mocks.mockMaxItems();
const valid = validators.isMaxItems(mock);
assert.equal(valid, true);
});
test("MinItems", () => {
const mock = mocks.mockMinItems();
const valid = validators.isMinItems(mock);
assert.equal(valid, true);
});
test("UniqueItems", () => {
const mock = mocks.mockUniqueItems();
const valid = validators.isUniqueItems(mock);
assert.equal(valid, true);
});
test("MaxContains", () => {
const mock = mocks.mockMaxContains();
const valid = validators.isMaxContains(mock);
assert.equal(valid, true);
});
test("MinContains", () => {
const mock = mocks.mockMinContains();
const valid = validators.isMinContains(mock);
assert.equal(valid, true);
});
test("MaxProperties", () => {
const mock = mocks.mockMaxProperties();
const valid = validators.isMaxProperties(mock);
assert.equal(valid, true);
});
test("MinProperties", () => {
const mock = mocks.mockMinProperties();
const valid = validators.isMinProperties(mock);
assert.equal(valid, true);
});
test("Required", () => {
const mock = mocks.mockRequired();
const valid = validators.isRequired(mock);
assert.equal(valid, true);
});
test("DependentRequired", () => {
const mock = mocks.mockDependentRequired();
const valid = validators.isDependentRequired(mock);
assert.equal(valid, true);
});
test("StringArrayItems", () => {
const mock = mocks.mockStringArrayItems();
const valid = validators.isStringArrayItems(mock);
assert.equal(valid, true);
});
test("Type0", () => {
const mock = mocks.mockType0();
const valid = validators.isType0(mock);
assert.equal(valid, true);
});
test("Type1", () => {
const mock = mocks.mockType1();
const valid = validators.isType1(mock);
assert.equal(valid, true);
});
test("EnumItems", () => {
const mock = mocks.mockEnumItems();
const valid = validators.isEnumItems(mock);
assert.equal(valid, true);
});
test("DependentRequiredAdditionalProperties", () => {
const mock = mocks.mockDependentRequiredAdditionalProperties();
const valid = validators.isDependentRequiredAdditionalProperties(mock);
assert.equal(valid, true);
});
test("TypeItems", () => {
const mock = mocks.mockTypeItems();
const valid = validators.isTypeItems(mock);
assert.equal(valid, true);
});
test("MetaData", () => {
const mock = mocks.mockMetaData();
const valid = validators.isMetaData(mock);
assert.equal(valid, true);
});
test("Title", () => {
const mock = mocks.mockTitle();
const valid = validators.isTitle(mock);
assert.equal(valid, true);
});
test("Description", () => {
const mock = mocks.mockDescription();
const valid = validators.isDescription(mock);
assert.equal(valid, true);
});
test("Default", () => {
const mock = mocks.mockDefault();
const valid = validators.isDefault(mock);
assert.equal(valid, true);
});
test("Deprecated", () => {
const mock = mocks.mockDeprecated();
const valid = validators.isDeprecated(mock);
assert.equal(valid, true);
});
test("ReadOnly", () => {
const mock = mocks.mockReadOnly();
const valid = validators.isReadOnly(mock);
assert.equal(valid, true);
});
test("WriteOnly", () => {
const mock = mocks.mockWriteOnly();
const valid = validators.isWriteOnly(mock);
assert.equal(valid, true);
});
test("Examples", () => {
const mock = mocks.mockExamples();
const valid = validators.isExamples(mock);
assert.equal(valid, true);
});
test("ExamplesItems", () => {
const mock = mocks.mockExamplesItems();
const valid = validators.isExamplesItems(mock);
assert.equal(valid, true);
});
test("FormatAnnotation", () => {
const mock = mocks.mockFormatAnnotation();
const valid = validators.isFormatAnnotation(mock);
assert.equal(valid, true);
});
test("Format", () => {
const mock = mocks.mockFormat();
const valid = validators.isFormat(mock);
assert.equal(valid, true);
});
test("Content", () => {
const mock = mocks.mockContent();
const valid = validators.isContent(mock);
assert.equal(valid, true);
});
test("ContentEncoding", () => {
const mock = mocks.mockContentEncoding();
const valid = validators.isContentEncoding(mock);
assert.equal(valid, true);
});
test("ContentMediaType", () => {
const mock = mocks.mockContentMediaType();
const valid = validators.isContentMediaType(mock);
assert.equal(valid, true);
});
test("ContentSchema", () => {
const mock = mocks.mockContentSchema();
const valid = validators.isContentSchema(mock);
assert.equal(valid, true);
});
