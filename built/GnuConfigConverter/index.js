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
    const k = new ASTNodeFile_1.ASTNodeFile(j);
    // const js = joiner(prepFile(j), "\n");
    const js = JSON.stringify(k, null, 2);
    fs_1.writeFileSync(path_1.resolve(path_1.format({ ext: ".js", name: f })), js, { encoding: "ascii" });
}
// ---------------------------------------------------------------------------------------------------------------------
["config.guess", "config.sub"].forEach(perFile);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCwyQkFBaUQ7QUFDakQsdUNBQWtDO0FBQ2xDLCtCQUF1QztBQUN2QywrQ0FBNEM7QUFDNUMsaUNBQThCO0FBRzlCLFNBQWdCLE1BQU0sQ0FBQyxJQUFjLEVBQUUsR0FBVztJQUNoRCxXQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhELHdCQUdDO0FBRUQscURBQXFEO0FBQ3JELHNCQUFzQjtBQUN0Qiw4QkFBOEI7QUFDOUIsMkJBQTJCO0FBQzNCLDBDQUEwQztBQUMxQyx5R0FBeUc7QUFDekcsUUFBUTtBQUNSLGdCQUFnQjtBQUNoQixJQUFJO0FBRUosd0hBQXdIO0FBRXhILHdIQUF3SDtBQUV4SCxTQUFTLE9BQU8sQ0FBQyxDQUFTO0lBQ3hCLFdBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQixXQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osTUFBTSxDQUFDLEdBQUcsaUJBQVksQ0FBQyxjQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDeEUsTUFBTSxNQUFNLEdBQUcsaUJBQU0sQ0FBQyxTQUFTLENBQUMsaUJBQU0sQ0FBQyxPQUFPLENBQUMsaUJBQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxpQkFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZGLE1BQU0sQ0FBQyxHQUFVLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLFdBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLE1BQU0sQ0FBQyxHQUFnQixJQUFJLHlCQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsd0NBQXdDO0lBQ3hDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxrQkFBYSxDQUFDLGNBQU8sQ0FBQyxhQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDckYsQ0FBQztBQUVELHdIQUF3SDtBQUV4SCxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMifQ==