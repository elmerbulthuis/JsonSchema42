install-all: \

  npm install


build-all: \
  build-npm-jns42-core \
  build-npm-jns42-generator \
  build-npm-jns42-lib \

build-npm: \
  build-npm-jns42-core \
  build-npm-jns42-generator \
  build-npm-jns42-lib \

build-cargo: \
  build-cargo-jns42-core \
  build-cargo-jns42-generator \
  build-cargo-jns42-tester \


build-cargo-jns42-core: \

  cargo build --package jns42-core --target wasm32-unknown-unknown --release

  wasm-tools component new \
    --output target/wasm32-unknown-unknown/release/jns42_core.component.wasm \
    target/wasm32-unknown-unknown/release/jns42_core.wasm \

build-cargo-jns42-generator: \

  cargo build --package jns42-generator --release

build-cargo-jns42-tester: \

  cargo build --package jns42-tester --release

build-npm-jns42-core: \
  build-cargo-jns42-core \

  npm --workspace @jns42/core run generate

build-npm-jns42-generator: \
  npm-tsc \
  build-npm-jns42-lib \
  build-npm-jns42-core \

  npm --workspace @jns42/generator run bundle

build-npm-jns42-lib: \
  npm-tsc \

  npm --workspace @jns42/lib run bundle


npm-tsc: \

  npm run tsc
