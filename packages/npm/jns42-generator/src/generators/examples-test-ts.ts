import * as core from "@jns42/core";
import * as models from "../models.js";
import { itt, mapIterable, readPackageInfo } from "../utilities.js";

export function* generateExamplesTestTsCode(specification: models.Specification) {
  const packageInfo = readPackageInfo();

  yield core.banner("//", `v${packageInfo.version}`);

  const { names, typeModels } = specification;

  yield itt`
    import assert from "node:assert";
    import test from "node:test";
    import * as validators from "./validators.js";
  `;

  for (const [itemKey, item] of typeModels) {
    const name = names.getName(itemKey);
    if (name == null) {
      continue;
    }

    yield mapIterable(
      item.examples ?? [],
      (example) => itt`
        await test(${JSON.stringify(name.toPascalCase())}, () => {
          const example = ${JSON.stringify(example)};
          const valid = validators.is${name.toPascalCase()}(example);
          assert.equal(valid, true);
        });
      `,
    );
  }
}
