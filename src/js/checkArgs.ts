/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ok } from "assert";
import { DataFromJS } from "./DataFromJS";

/**
 * Checks args
 * @param wanted
 * @param got
 */
export function checkArgs(wanted: number, got: DataFromJS[]) {
  ok(
    got.length === wanted, //
    Error("Must have " + wanted + " parameter" + (wanted === 1 ? "" : "s") + ", got " + got.length),
  );
}
