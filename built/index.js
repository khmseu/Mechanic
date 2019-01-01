"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const options = require("options-parser");
const footer = `Home page:      https://github.com/khmseu/Mechanic
Documentation:  https://github.com/khmseu/Mechanic/wiki
Report bugs to: https://github.com/khmseu/Mechanic/issues`;
const verstr = `Mechanic 0.1.0
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
});
// tslint:disable-next-line:no-console
console.log(opts);
if (opts.opt.version) {
    // tslint:disable-next-line:no-console
    console.log(verstr);
    process.exit();
}
const close = require("./mechdb/close");
const mdb = require("./mechdb/globals");
// tslint:disable-next-line:no-console
console.error({ mdb });
const Rule_1 = require("./rules/Rule");
Rule_1.Rule({});
// tslint:disable-next-line:no-console
close.close().catch((err) => console.error(err));
//# sourceMappingURL=index.js.map