import { dir } from "console";
import { readFileSync } from "fs";
import * as sh0 from "mvdan-sh";
import { ShellScript } from "mvdan-sh";
import { resolve } from "path";

const sh = sh0 as unknown as ShellScript;
const syntax = sh.syntax;

// dir({ sh });

const dtsIn: Record<string, any> = {};
const DTSperFile = (f: string): void => {
  // dir({ f });
  const t = readFileSync(resolve("gnu-config", f), { encoding: "ascii" });
  const parser = syntax.NewParser(
    syntax.Variant(syntax.LangPOSIX),
    syntax.KeepComments(true)
  );
  const j = parser.Parse(t, f);
  dtsIn[f] = j;
};

// ---------------------------------------------------------------------------------------------------------------------

["config.guess", "config.sub"].forEach(DTSperFile);

dir(
  { dtsIn },
  {
    depth: 9,
    getters: true,
    maxArrayLength: Infinity,
    maxStringLength: Infinity,
    showHidden: true,
    sorted: true,
  }
);

(() => dtsIn)();
