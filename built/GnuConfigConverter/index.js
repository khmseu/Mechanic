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
const util_1 = require("util");
const ASTVisitorComments_1 = require("./ASTVisitorComments");
const ASTVisitorPrint_1 = require("./ASTVisitorPrint");
const ASTNodeFile_1 = require("./generated/ASTNodeFile");
const joiner_1 = require("./joiner");
const logg_1 = require("./logg");
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
let out;
function dumper(stuff) {
    out.push(util_1.inspect(stuff, {
        depth: 2,
        compact: false,
        sorted: true,
    }));
}
// ---------------------------------------------------------------------------------------------------------------------
function perFile(f) {
    logg_1.logg("perFile");
    logg_1.logg({ f });
    const t = fs_1.readFileSync(path_1.resolve("gnu-config", f), { encoding: "ascii" });
    const parser = mvdan_sh_1.syntax.NewParser(mvdan_sh_1.syntax.Variant(mvdan_sh_1.syntax.LangPOSIX), mvdan_sh_1.syntax.KeepComments);
    const j = parser.Parse(t, f);
    logg_1.logg({ j });
    const k = new ASTNodeFile_1.ASTNodeFile(j, null, "");
    logg_1.logg({ k });
    k.accept(new ASTVisitorComments_1.ASTVisitorComments());
    logg_1.logg({ k });
    out = [];
    k.accept(new ASTVisitorPrint_1.ASTVisitorPrint(dumper));
    logg_1.logg({ k });
    // const js = joiner(prepFile(j), "\n");
    const js = "mixed:\n\n" + joiner_1.joiner(out, "\n") + "\n\nraw:\n\n" + JSON.stringify(k, null, 2);
    fs_1.writeFileSync(path_1.resolve(path_1.format({ ext: ".js", name: f })), js, { encoding: "ascii" });
}
// ---------------------------------------------------------------------------------------------------------------------
["config.guess", "config.sub"].forEach(perFile);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCwyQkFBaUQ7QUFDakQsdUNBQWtDO0FBQ2xDLCtCQUF1QztBQUN2QywrQkFBK0I7QUFDL0IsNkRBQTBEO0FBQzFELHVEQUFvRDtBQUNwRCx5REFBc0Q7QUFDdEQscUNBQWtDO0FBQ2xDLGlDQUE4QjtBQUc5QixxREFBcUQ7QUFDckQsc0JBQXNCO0FBQ3RCLDhCQUE4QjtBQUM5QiwyQkFBMkI7QUFDM0IsMENBQTBDO0FBQzFDLHlHQUF5RztBQUN6RyxRQUFRO0FBQ1IsZ0JBQWdCO0FBQ2hCLElBQUk7QUFFSix3SEFBd0g7QUFFeEgsSUFBSSxHQUFhLENBQUM7QUFFbEIsU0FBUyxNQUFNLENBQUMsS0FBVTtJQUN4QixHQUFHLENBQUMsSUFBSSxDQUNOLGNBQU8sQ0FBQyxLQUFLLEVBQUU7UUFDYixLQUFLLEVBQUUsQ0FBQztRQUNSLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDLENBQ0gsQ0FBQztBQUNKLENBQUM7QUFFRCx3SEFBd0g7QUFFeEgsU0FBUyxPQUFPLENBQUMsQ0FBUztJQUN4QixXQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEIsV0FBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLE1BQU0sQ0FBQyxHQUFHLGlCQUFZLENBQUMsY0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLE1BQU0sTUFBTSxHQUFHLGlCQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsaUJBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RixNQUFNLENBQUMsR0FBVSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxXQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osTUFBTSxDQUFDLEdBQWdCLElBQUkseUJBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELFdBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksdUNBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLFdBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ1QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGlDQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0QyxXQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osd0NBQXdDO0lBQ3hDLE1BQU0sRUFBRSxHQUFHLFlBQVksR0FBRyxlQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUYsa0JBQWEsQ0FBQyxjQUFPLENBQUMsYUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ3JGLENBQUM7QUFFRCx3SEFBd0g7QUFFeEgsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDIn0=