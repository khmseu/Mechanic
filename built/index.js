"use strict";
// MIT License
//
// Copyright (c) 2018 Kai Henningsen
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
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
console.log(opts);
if (opts.opt.version) {
    // tslint:disable-next-line:no-console
    console.log(verstr);
    process.exit();
}
const mdb = require("./mechdb");
console.error({ mdb });
mdb.close().catch((err) => console.error(err));
//# sourceMappingURL=index.js.map