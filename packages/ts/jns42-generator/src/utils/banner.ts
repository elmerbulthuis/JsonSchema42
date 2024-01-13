import { packageInfo } from "../utils/package.js";

export const banner = `
// @generated by
//     __             _____     _                 ___ ___ 
//  _ |  |___ ___ ___|   __|___| |_ ___ _____  __| | |_  |
// | |_| |_ -| . |   |__   |  _|   | -_|     ||. |_  |  _|
// |_____|___|___|_|_|_____|___|_|_|___|_|_|_|___| |_|___|
// v${(packageInfo.version ?? "").padEnd(30, " ")} -- www.JsonSchema42.org
//
`;
