/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { readFileSync, writeFileSync } from "fs";
import sh from "mvdan-sh";
import { format, resolve } from "path";
import { inspect } from "util";
import { ASTVisitorComments } from "./ASTVisitorComments";
import { ASTVisitorPrint } from "./ASTVisitorPrint";
import { IFile } from "./ParserTypes";
import { ASTNodeFile } from "./generated/ASTNodeFile";
import { joiner } from "./joiner";
import { logg } from "./logg";
export { comm, logg };
const syntax = sh.syntax;

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

let out: string[];

const dumper = (stuff: any) => {
  out.push(
    inspect(stuff, {
      compact: false,
      depth: 2,
      sorted: true,
    })
  );
};

// ---------------------------------------------------------------------------------------------------------------------

const perFile = (f: string): void => {
  logg("perFile");
  logg({ f });
  const t = readFileSync(resolve("gnu-config", f), { encoding: "ascii" });
  const parser = syntax.NewParser(
    syntax.Variant(syntax.LangPOSIX),
    syntax.KeepComments(true)
  );
  const j: IFile = parser.Parse(t, f);
  logg({ j });
  const k: ASTNodeFile = new ASTNodeFile(j, null, "");
  logg({ k });
  k.accept(new ASTVisitorComments());
  logg({ k });
  out = [];
  k.accept(new ASTVisitorPrint(dumper));
  logg({ k });
  // const js = joiner(prepFile(j), "\n");
  const js =
    "mixed:\n\n" +
    joiner(out, "\n") +
    "\n\nraw:\n\n" +
    JSON.stringify(k, null, 2);
  writeFileSync(resolve(format({ ext: ".js", name: f })), js, {
    encoding: "ascii",
  });
};

// ---------------------------------------------------------------------------------------------------------------------

["config.guess", "config.sub"].forEach(perFile);

function comm(_arg0: Record<string, null>, _arg1: string): string {
  throw new Error("Function not implemented.");
}
