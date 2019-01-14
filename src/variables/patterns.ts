/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const identifier = "p{IDS}p{IDC}*";
export const parseVar = `\\\${(?:(${identifier}):)?(${identifier})`;
export const testVar = `\\\${(?:(?:${identifier}):)?(?:${identifier}})`;
export const rexParseAsVar = new RegExp(`^${parseVar}$`);
