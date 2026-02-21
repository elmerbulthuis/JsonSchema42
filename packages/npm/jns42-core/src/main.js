import fs from "node:fs";
import { instantiate } from "../dist/jns42_core.component.js";

async function getCoreModule(path) {
  const bytes = fs.readFileSync(new URL(`../dist/${path}`, import.meta.url));
  const module = await WebAssembly.compile(bytes);
  return module;
}

// instantiate returns a promise, but not according to the typings!
// wrapping it in a Promise.resolve makes everybody happy
const instance = await Promise.resolve(instantiate(getCoreModule, {
  "jns42:core/imports": {
    fetchText(location) {
      const locationLower = location.toLowerCase();
      try {
        if (locationLower.startsWith("http://") || locationLower.startsWith("https://")) {
          throw new TypeError("async fetch text not supported (yet!)")
        }
      } catch (error) {
        console.error(error);
        throw new Error("http-error");
      }

      try {
        const text = fs.readFileSync(location, "utf-8");
        return text;
      } catch (error) {
        console.error(error);
        throw new Error("io-error");
      }
    },
  },
}));

export const documents = instance.documents;
export const models = instance.models;
export const naming = instance.naming;
export const utilities = instance.utilities;
