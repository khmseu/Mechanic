"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const options = require("options-parser");
const readRuleFile_1 = require("./io/readRuleFile");
const MechDB_1 = require("./mechdb/MechDB");
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
                // tslint:disable-next-line:no-console
                console.log(footer);
            },
        },
        version: { short: "v", flag: true },
    },
}, undefined, undefined);
// tslint:disable-next-line:no-console
console.log(opts);
if (opts.opt.version) {
    // tslint:disable-next-line:no-console
    console.log(verstr);
    process.exit();
}
const mdb = new MechDB_1.MechDB();
readRuleFile_1.readRuleFile(".");
// tslint:disable-next-line:no-console
console.error({ mdb });
// tslint:disable-next-line:no-console
mdb.close().catch((err) => console.error(err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILDBDQUEwQztBQUMxQyxvREFBaUQ7QUFDakQsNENBQXlDO0FBRXpDLE1BQU0sTUFBTSxHQUFHOzswREFFMkMsQ0FBQztBQUUzRCxNQUFNLE1BQU0sR0FBRzs7YUFFRixDQUFDO0FBRWQsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FDeEI7SUFDRSxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFO1lBQ1IsTUFBTSxFQUFFLHlDQUF5QztZQUNqRCxRQUFRLEVBQUUsR0FBRyxFQUFFO2dCQUNiLHNDQUFzQztnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QixDQUFDO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7S0FDcEM7Q0FRRixFQUNELFNBQVMsRUFDVCxTQUFTLENBQ1YsQ0FBQztBQUVGLHNDQUFzQztBQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7SUFDcEIsc0NBQXNDO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0NBQ2hCO0FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztBQUV6QiwyQkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRWxCLHNDQUFzQztBQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUN2QixzQ0FBc0M7QUFDdEMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDIn0=