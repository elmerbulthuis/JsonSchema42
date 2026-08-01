# JsonSchema42

Because JsonSchema is the answer to everything!

JsonSchema42 is generates code from your JSON schemas. It is able to deal with every aspect of JSON schema, also things like any-of, if-then-else or not schema's are fully supported.

This is achieved by creating a type per schema, and then a validator per schema. If the validator passes then the type is valid according to the schema. In most languages we use a new-type design that enforces all of these types to pass the validator.

Next to generating types and validators JsonSchema42 is also able to generate mocks and tests. Tests are generated with the mocks, or with example data in the schema.

JsonSchema42 is mostly written in Rust but exposes it's logic via a WebAssembly component. This component can be used in the target language, so we can generate code from the target language for the target language.

JsonSchema42 was created for Skiffa, an OpenApi code generator, but it can be used in many types of generators, or it may be used stand alone.

Please check out the readme's one of the packages in the `./packages` directory to find out more.

## Installing

Make sure you have [`task`](https://taskfile.dev/) installed on your system, then install everything via `task install`.

## Building

Build everything via `task build`.

## Testing

Run tests with

- `task test`
