# JsonSchema42

Because JsonSchema is the answer to everything!

## Installing

Install dependencies via `npm install`.

## Building

You might want to build The project via `npm --workspaces run build`. This is automatically done before testing and packaging.

## Generating

The generator uses code that is generated by the generator (!). To regenerate, use make via the `make` command.

But...

This might also update the `package-lock.json` file to use the local, generated code in stead of the published code. Don't check in this new generated `package-lock.json`. It will ruin the install experience in a fresh repo. This might break ci.

So use this only for debugging! And make sure you know what you are doing.

## Publishing

Bump version via `npm --workspaces version patch`. You could also bump a minor or major version.

Then regenerate code via `make rebuild`.

Then update dependencies via `npm --workspaces update --save`, or do this manually.

The publish everything via `npm --workspaces publish`.

Then commit and push everything to git. Do make sure that the `package-lock.json` does not reference the generated code!
