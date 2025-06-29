import * as fs from "node:fs";
import * as path from "node:path";
import { PackageJson } from "type-fest";
import { makeProjectRoot } from "../root.js";

export function readPackageInfo() {
  const projectRoot = makeProjectRoot();
  const content = fs.readFileSync(path.join(projectRoot, "package.json"), "utf8");
  return JSON.parse(content) as PackageJson;
}
