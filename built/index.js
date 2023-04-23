"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const options = require("options-parser");
const readRuleFile_1 = require("./io/readRuleFile");
const MechDB_1 = require("./mechdb/MechDB");
const console_1 = require("console");
const footer = `Home page:      https://github.com/khmseu/Mechanic
Documentation:  https://github.com/khmseu/Mechanic/wiki
Report bugs to: https://github.com/khmseu/Mechanic/issues`;
const verstr = `Mechanic 0.1.19-0
Copyright © 2018 Kai Henningsen
License: MIT`;
const opts = options.parse({
    help: {
        flag: true,
        short: "h",
        showHelp: {
            banner: "Mechanic [options] [settings] [targets]",
            callback: () => {
                (0, console_1.log)(footer);
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
}, undefined, undefined);
// eslint-disable-next-line no-console
console.log(opts);
if (opts && ((_a = opts === null || opts === void 0 ? void 0 : opts.opt) === null || _a === void 0 ? void 0 : _a.version)) {
    // eslint-disable-next-line no-console
    console.log(verstr);
    process.exit();
}
const mdb = new MechDB_1.MechDB();
(0, readRuleFile_1.readRuleFile)(".");
// eslint-disable-next-line no-console
console.error({ mdb });
// eslint-disable-next-line no-console
mdb.close().catch((err) => console.error(err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOzs7QUFFSCwwQ0FBMEM7QUFDMUMsb0RBQWlEO0FBQ2pELDRDQUF5QztBQUN6QyxxQ0FBOEI7QUFFOUIsTUFBTSxNQUFNLEdBQUc7OzBEQUUyQyxDQUFDO0FBRTNELE1BQU0sTUFBTSxHQUFHOzthQUVGLENBQUM7QUFTZCxNQUFNLElBQUksR0FBZSxPQUFPLENBQUMsS0FBSyxDQUNwQztJQUNFLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUU7WUFDUixNQUFNLEVBQUUseUNBQXlDO1lBQ2pELFFBQVEsRUFBRSxHQUFHLEVBQUU7Z0JBQ2IsSUFBQSxhQUFHLEVBQUMsTUFBTSxDQUFDLENBQUM7WUFDZCxDQUFDO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7S0FDcEM7SUFDRCw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLGdEQUFnRDtJQUNoRCx3Q0FBd0M7SUFDeEMsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3Qiw4REFBOEQ7Q0FDL0QsRUFDRCxTQUFTLEVBQ1QsU0FBUyxDQUNJLENBQUM7QUFFaEIsc0NBQXNDO0FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFbEIsSUFBSSxJQUFJLEtBQUksTUFBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsR0FBRywwQ0FBRSxPQUFPLENBQUEsRUFBRTtJQUM5QixzQ0FBc0M7SUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDaEI7QUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0FBRXpCLElBQUEsMkJBQVksRUFBQyxHQUFHLENBQUMsQ0FBQztBQUVsQixzQ0FBc0M7QUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDdkIsc0NBQXNDO0FBQ3RDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyJ9