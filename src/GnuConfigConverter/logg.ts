/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { inspect } from "util";

export const debug = true;

export function logg(thing: any) {
  // tslint:disable-next-line:no-console
  if (debug) {
    // tslint:disable-next-line:no-console
    console.log(
      inspect(thing, {
        depth: 2,
        compact: false,
        sorted: true,
      }),
    );
  }
}
