"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.logg = void 0;
const fs_1 = require("fs");
const mvdan_sh_1 = require("mvdan-sh");
const path_1 = require("path");
const util_1 = require("util");
const ASTVisitorComments_1 = require("./ASTVisitorComments");
const ASTVisitorPrint_1 = require("./ASTVisitorPrint");
const ASTNodeFile_1 = require("./generated/ASTNodeFile");
const joiner_1 = require("./joiner");
const logg_1 = require("./logg");
Object.defineProperty(exports, "logg", { enumerable: true, get: function () { return logg_1.logg; } });
const syntax = mvdan_sh_1.default.syntax;
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
const dumper = (stuff) => {
    out.push((0, util_1.inspect)(stuff, {
        compact: false,
        depth: 2,
        sorted: true,
    }));
};
// ---------------------------------------------------------------------------------------------------------------------
const perFile = (f) => {
    (0, logg_1.logg)("perFile");
    (0, logg_1.logg)({ f });
    const t = (0, fs_1.readFileSync)((0, path_1.resolve)("gnu-config", f), { encoding: "ascii" });
    const parser = syntax.NewParser(syntax.Variant(syntax.LangPOSIX), syntax.KeepComments(true));
    const j = parser.Parse(t, f);
    (0, logg_1.logg)({ j });
    const k = new ASTNodeFile_1.ASTNodeFile(j, null, "");
    (0, logg_1.logg)({ k });
    k.accept(new ASTVisitorComments_1.ASTVisitorComments());
    (0, logg_1.logg)({ k });
    out = [];
    k.accept(new ASTVisitorPrint_1.ASTVisitorPrint(dumper));
    (0, logg_1.logg)({ k });
    // const js = joiner(prepFile(j), "\n");
    const js = "mixed:\n\n" +
        (0, joiner_1.joiner)(out, "\n") +
        "\n\nraw:\n\n" +
        JSON.stringify(k, null, 2);
    (0, fs_1.writeFileSync)((0, path_1.resolve)((0, path_1.format)({ ext: ".js", name: f })), js, {
        encoding: "ascii",
    });
};
// ---------------------------------------------------------------------------------------------------------------------
["config.guess", "config.sub"].forEach(perFile);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7O0FBRUgsMkJBQWlEO0FBQ2pELHVDQUEwQjtBQUMxQiwrQkFBdUM7QUFDdkMsK0JBQStCO0FBQy9CLDZEQUEwRDtBQUMxRCx1REFBb0Q7QUFFcEQseURBQXNEO0FBQ3RELHFDQUFrQztBQUNsQyxpQ0FBOEI7QUFDckIscUZBREEsV0FBSSxPQUNBO0FBQ2IsTUFBTSxNQUFNLEdBQUcsa0JBQUUsQ0FBQyxNQUFNLENBQUM7QUFFekIscURBQXFEO0FBQ3JELHNCQUFzQjtBQUN0Qiw4QkFBOEI7QUFDOUIsMkJBQTJCO0FBQzNCLDBDQUEwQztBQUMxQyx5R0FBeUc7QUFDekcsUUFBUTtBQUNSLGdCQUFnQjtBQUNoQixJQUFJO0FBRUosd0hBQXdIO0FBRXhILElBQUksR0FBYSxDQUFDO0FBRWxCLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7SUFDNUIsR0FBRyxDQUFDLElBQUksQ0FDTixJQUFBLGNBQU8sRUFBQyxLQUFLLEVBQUU7UUFDYixPQUFPLEVBQUUsS0FBSztRQUNkLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDLENBQ0gsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLHdIQUF3SDtBQUV4SCxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQVMsRUFBUSxFQUFFO0lBQ2xDLElBQUEsV0FBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hCLElBQUEsV0FBSSxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLE1BQU0sQ0FBQyxHQUFHLElBQUEsaUJBQVksRUFBQyxJQUFBLGNBQU8sRUFBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4RSxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFDaEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FDMUIsQ0FBQztJQUNGLE1BQU0sQ0FBQyxHQUFVLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLElBQUEsV0FBSSxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLE1BQU0sQ0FBQyxHQUFnQixJQUFJLHlCQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwRCxJQUFBLFdBQUksRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksdUNBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLElBQUEsV0FBSSxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksaUNBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLElBQUEsV0FBSSxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLHdDQUF3QztJQUN4QyxNQUFNLEVBQUUsR0FDTixZQUFZO1FBQ1osSUFBQSxlQUFNLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztRQUNqQixjQUFjO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLElBQUEsa0JBQWEsRUFBQyxJQUFBLGNBQU8sRUFBQyxJQUFBLGFBQU0sRUFBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7UUFDMUQsUUFBUSxFQUFFLE9BQU87S0FDbEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsd0hBQXdIO0FBRXhILENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyJ9