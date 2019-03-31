/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { inspect } from "util";
import { __stack } from "./__stack";
import { debug } from "./logg";

export function comm(thing: object, dflt: string | null = null): string {
  const stk = __stack();
  //  logg(stk[2].getFunctionName());
  let js = JSON.stringify(thing);
  if (js === dflt || (!dflt && js === "{}")) {
    return "";
  } else {
    // logg({ thing: js, dflt });
  }
  if (js.length > 200) {
    if (debug) {
      js = inspect(thing, {
        depth: 2,
        breakLength: 999999,
      });
    }
  }
  return "/*" + stk[2].getFunctionName() + " -> " + js + "*/\n";
}
