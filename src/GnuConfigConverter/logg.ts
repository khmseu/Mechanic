/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { log } from "console";
import { inspect } from "util";

export const debug = true;

export const logg = (thing: any) => {
  if (debug) {
    log(
      inspect(thing, {
        compact: false,
        depth: 2,
        sorted: true,
      })
    );
  }
};
