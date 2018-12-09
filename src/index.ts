/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import * as options from "options-parser";

const footer =
`Home page:      https://github.com/khmseu/Mechanic
Documentation:  https://github.com/khmseu/Mechanic/wiki
Report bugs to: https://github.com/khmseu/Mechanic/issues`;

const verstr =
`Mechanic 0.1.0
Copyright © 2018 Kai Henningsen
License: MIT`;

const opts = options.parse({
  help: {
    flag: true,
    short: "h",
    showHelp: {
      banner: "Mechanic [options] [settings] [targets]",
      callback: () => {
        // tslint:disable-next-line:no-console
        console.log(footer);
      },
    },
    version: { short: "v", flag: true },
  },
  //   user: { required: true },
  //   all: { short: 'a', flag: true },
  //   host: { short: 'h', default: 'localhost' },
  //   input: { short: 'i', multi: true },
  //   r: { flag: true },
  //   db: { default: 'test' },
  //   out: { short: 'o', type: options.type.file.open.write() }
});

console.log(opts);

if (opts.opt.version) {
  // tslint:disable-next-line:no-console
  console.log(verstr);
  process.exit();
}

import * as mdb from "./mechdb";
console.error({mdb});
import * as rules from "./rules";
mdb.close().catch((err) => console.error(err));
