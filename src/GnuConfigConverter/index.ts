/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { readFileSync, writeFileSync } from "fs";
import { syntax } from "mvdan-sh";
import { format, resolve } from "path";
import { ASTNodeFile } from "./ASTNodeFile";
import { logg } from "./logg";
import { IFile } from "./ParserTypes";

export function joiner(list: string[], dlm: string): string {
  logg("joiner");
  return list.filter((s) => !!s).join(dlm);
}

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

function perFile(f: string): void {
  logg("perFile");
  logg({ f });
  const t = readFileSync(resolve("gnu-config", f), { encoding: "ascii" });
  const parser = syntax.NewParser(syntax.Variant(syntax.LangPOSIX), syntax.KeepComments);
  const j: IFile = parser.Parse(t, f);
  logg(j);
  const k: ASTNodeFile = new ASTNodeFile(j);
  // const js = joiner(prepFile(j), "\n");
  const js = JSON.stringify(k, null, 2);
  writeFileSync(resolve(format({ ext: ".js", name: f })), js, { encoding: "ascii" });
}

// ---------------------------------------------------------------------------------------------------------------------

["config.guess", "config.sub"].forEach(perFile);
