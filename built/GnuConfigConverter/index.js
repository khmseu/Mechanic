"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const mvdan_sh_1 = require("mvdan-sh");
const path_1 = require("path");
const ASTNodeFile_1 = require("./ASTNodeFile");
const ASTVisitorComments_1 = require("./ASTVisitorComments");
const logg_1 = require("./logg");
function joiner(list, dlm) {
    logg_1.logg("joiner");
    return list.filter((s) => !!s).join(dlm);
}
exports.joiner = joiner;
// function patterns(pts: IWord[] | null): string[] {
//   logg("patterns");
//   const res: string[] = [];
//   pts.forEach((pat) => {
//     const { Parts, ...rest_pts } = pat;
//     res.push(...parts(Parts).map((p) => "case " + p + " :\n"), comm({ rest_pts }, '{"rest_pts":{}}'));
//   });
//   return res;
// }
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
function perFile(f) {
    logg_1.logg("perFile");
    logg_1.logg({ f });
    const t = fs_1.readFileSync(path_1.resolve("gnu-config", f), { encoding: "ascii" });
    const parser = mvdan_sh_1.syntax.NewParser(mvdan_sh_1.syntax.Variant(mvdan_sh_1.syntax.LangPOSIX), mvdan_sh_1.syntax.KeepComments);
    const j = parser.Parse(t, f);
    logg_1.logg(j);
    const k = new ASTNodeFile_1.ASTNodeFile(j, null, "");
    k.accept(new ASTVisitorComments_1.ASTVisitorComments());
    // const js = joiner(prepFile(j), "\n");
    const js = JSON.stringify(k, null, 2);
    fs_1.writeFileSync(path_1.resolve(path_1.format({ ext: ".js", name: f })), js, { encoding: "ascii" });
}
// ---------------------------------------------------------------------------------------------------------------------
["config.guess", "config.sub"].forEach(perFile);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCwyQkFBaUQ7QUFDakQsdUNBQWtDO0FBQ2xDLCtCQUF1QztBQUN2QywrQ0FBNEM7QUFDNUMsNkRBQTBEO0FBQzFELGlDQUE4QjtBQUc5QixTQUFnQixNQUFNLENBQUMsSUFBYyxFQUFFLEdBQVc7SUFDaEQsV0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCx3QkFHQztBQUVELHFEQUFxRDtBQUNyRCxzQkFBc0I7QUFDdEIsOEJBQThCO0FBQzlCLDJCQUEyQjtBQUMzQiwwQ0FBMEM7QUFDMUMseUdBQXlHO0FBQ3pHLFFBQVE7QUFDUixnQkFBZ0I7QUFDaEIsSUFBSTtBQUVKLHdIQUF3SDtBQUV4SCx3SEFBd0g7QUFFeEgsU0FBUyxPQUFPLENBQUMsQ0FBUztJQUN4QixXQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEIsV0FBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLE1BQU0sQ0FBQyxHQUFHLGlCQUFZLENBQUMsY0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLE1BQU0sTUFBTSxHQUFHLGlCQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsaUJBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RixNQUFNLENBQUMsR0FBVSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxXQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixNQUFNLENBQUMsR0FBZ0IsSUFBSSx5QkFBVyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLHVDQUFrQixFQUFFLENBQUMsQ0FBQztJQUNuQyx3Q0FBd0M7SUFDeEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLGtCQUFhLENBQUMsY0FBTyxDQUFDLGFBQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNyRixDQUFDO0FBRUQsd0hBQXdIO0FBRXhILENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyJ9