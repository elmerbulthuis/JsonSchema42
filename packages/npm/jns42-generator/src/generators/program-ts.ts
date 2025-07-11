import * as core from "@jns42/core";
import assert from "node:assert";
import * as models from "../models.js";
import { itt, readPackageInfo } from "../utilities.js";

export function* generateProgramTsCode(
  specification: models.Specification,
  packageName: string,
  packageVersion: string,
  entryLocation: string,
) {
  const packageInfo = readPackageInfo();

  const packageNameMatch = /^(?:(@[a-z][a-z0-9\-_\.]*?)\/)?([a-z][a-z0-9\-_\.]*)$/.exec(
    packageName,
  );

  if (packageNameMatch == null) {
    throw new Error("invalid package name");
  }

  const { names, locationToKeyMap } = specification;

  const entryKey = locationToKeyMap.get(entryLocation);
  assert(entryKey != null);

  const entryTypeName = names.getName(entryKey);
  assert(entryTypeName != null);

  const parseFunction = "parse" + entryTypeName.toPascalCase();
  const validatorFunction = "is" + entryTypeName.toPascalCase();

  yield core.banner("//", `v${packageInfo.version}`);

  yield itt`
    import * as lib from "@jns42/lib";
    import * as consumers from "node:stream/consumers";
    import { hideBin } from "yargs/helpers";
    import yargs from "yargs/yargs";
    import * as validators from "./validators.js";
    import * as parsers from "./parsers.js";
  `;

  yield itt`
    const program = yargs(hideBin(process.argv));
  
    program.scriptName(${JSON.stringify(packageNameMatch[2])});
    program.version(${JSON.stringify(packageVersion)});
    program.demandCommand();

    program.command(
      "assert",
      "asserts JSON from stdin",
      yargs => yargs.
        option("parse", {
          description: "parse the data before asserting",
          type: "boolean",
        }).
        option("quiet", {
          description: "Don't display error",
          type: "boolean",
          default: false,
        }),
      async argv => {
        const stdinData = await consumers.text(process.stdin);
        let data = JSON.parse(stdinData);
        if(argv.parse) {
          data = parsers.${parseFunction}(data);
        }
        if(!validators.${validatorFunction}(data)) {
          const error = lib.validation.getValidationError();
          if(!argv.quiet) {
            console.error(error.message);
          }
          process.exit(1);
        }
      },
    );

    await program.parseAsync();
  `;
}
