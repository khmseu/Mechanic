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
    logg_1.logg({ j });
    const k = new ASTNodeFile_1.ASTNodeFile(j, null, "");
    logg_1.logg({ k });
    k.accept(new ASTVisitorComments_1.ASTVisitorComments());
    logg_1.logg({ k });
    // const js = joiner(prepFile(j), "\n");
    const js = JSON.stringify(k, null, 2);
    fs_1.writeFileSync(path_1.resolve(path_1.format({ ext: ".js", name: f })), js, { encoding: "ascii" });
}
// ---------------------------------------------------------------------------------------------------------------------
["config.guess", "config.sub"].forEach(perFile);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCwyQkFBaUQ7QUFDakQsdUNBQWtDO0FBQ2xDLCtCQUF1QztBQUN2QywrQ0FBNEM7QUFDNUMsNkRBQTBEO0FBQzFELGlDQUE4QjtBQUc5QixxREFBcUQ7QUFDckQsc0JBQXNCO0FBQ3RCLDhCQUE4QjtBQUM5QiwyQkFBMkI7QUFDM0IsMENBQTBDO0FBQzFDLHlHQUF5RztBQUN6RyxRQUFRO0FBQ1IsZ0JBQWdCO0FBQ2hCLElBQUk7QUFFSix3SEFBd0g7QUFFeEgsd0hBQXdIO0FBRXhILFNBQVMsT0FBTyxDQUFDLENBQVM7SUFDeEIsV0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hCLFdBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixNQUFNLENBQUMsR0FBRyxpQkFBWSxDQUFDLGNBQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4RSxNQUFNLE1BQU0sR0FBRyxpQkFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLGlCQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkYsTUFBTSxDQUFDLEdBQVUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsV0FBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLE1BQU0sQ0FBQyxHQUFnQixJQUFJLHlCQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwRCxXQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLHVDQUFrQixFQUFFLENBQUMsQ0FBQztJQUNuQyxXQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osd0NBQXdDO0lBQ3hDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxrQkFBYSxDQUFDLGNBQU8sQ0FBQyxhQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDckYsQ0FBQztBQUVELHdIQUF3SDtBQUV4SCxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMifQ==