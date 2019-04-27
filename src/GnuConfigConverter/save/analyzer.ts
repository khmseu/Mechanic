/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import * as BetterSqlite3 from "better-sqlite3";
import { readFileSync } from "fs";
import { syntax } from "mvdan-sh";
import { resolve } from "path";
import { inspect } from "util";
import { IFile } from "./ParserTypes";
import { Token } from "./Token";

const debug = false;

const classlist = new BetterSqlite3("classlist.db", { memory: true });
classlist.prepare("drop table if exists classlist").run();
// tslint:disable-next-line:max-line-length
classlist.prepare("create table classlist(class text, property text, type text, count integer, primary key(class, property, type))").run();
// tslint:disable-next-line:max-line-length
const noteField = classlist.prepare("insert into classlist(class, property, type, count) values(@nt, @prop, @qt, 1) on conflict(class, property, type) do update set count = count + 1");
// tslint:disable-next-line:max-line-length
const showOne = classlist.prepare("select property, type, count from classlist where class = @nt order by property, type");
const getClasses = classlist.prepare("select distinct class from classlist order by class");
const getProps = classlist.prepare("select distinct property from classlist where class = @aClass order by property");
// tslint:disable-next-line:max-line-length
const getTypes = classlist.prepare("select type from classlist where class = @aClass and property = @aProp order by type");

// const sh = require("mvdan-sh");
// const syntax = sh.syntax;

// const printer = syntax.NewPrinter();

/* const src = "echo 'foo'";
const f = parser.Parse(src, "src.sh");

// print out the syntax tree
syntax.DebugPrint(f);
// tslint:disable-next-line:no-console
console.log();

// replace all single quoted string values
syntax.Walk(f, (node: any) => {
  if (syntax.NodeType(node) === "SglQuoted") {
    node.Value = "bar";
  }
  return true;
});

// print the code back out
// tslint:disable-next-line:no-console
console.log(printer.Print(f)); // echo 'bar'
 */
function __stack() {
  const origPrep = Error.prepareStackTrace;
  const origLim = Error.stackTraceLimit;
  Error.prepareStackTrace = (_, stk) => {
    return stk;
  };
  Error.stackTraceLimit = Infinity;
  const err = new Error();
  Error.captureStackTrace(err /*arguments.callee*/);
  const { stack } = err;
  Error.prepareStackTrace = origPrep;
  Error.stackTraceLimit = origLim;
  return stack as any;
}

export function logg(thing: any) {
  // tslint:disable-next-line:no-console
  if (debug) {
    // tslint:disable-next-line:no-console
    console.log(
      inspect(thing, {
        depth: 2,
        compact: false,
        sorted: true,
        // getters: true,
      }),
    );
  }
}

const known: { [key: string]: { [key: string]: number } } = {};

// ---------------------------------------------------------------------------------------------------------------------

interface IZPos {
  Col: never;
  Line: never;
  Offset: number;
}
interface IZPosition {
  End: IZPos;
  Pos: IZPos;
}
interface IMyComment extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Text: string;
}
interface IByType extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Type: string;
}

interface IMyHdoc extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Parts: IByType[];
}
interface IMyRedir extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Hdoc: IMyHdoc;
  N: ILit;
  Op: Token;
  Word: IXWord;
}
interface IMyStmt extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Background: boolean;
  Cmd: IByType;
  Comments: IMyComment[];
  Coprocess: boolean;
  Negated: boolean;
  Redirs: IMyRedir[];
}
interface IMyShellFile extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Last: IMyComment[];
  Name: string;
  Stmts: IMyStmt[];
}
interface ILit extends IByType {
  End: IZPos;
  Pos: IZPos;
  Type: string;
  // ---------
  Value: string;
}
interface IXWord extends IZPosition {
  End: IZPos;
  Pos: IZPos;
  // ---------
  Parts: IByType[];
}

// ---------------------------------------------------------------------------------------------------------------------

interface INodeType {}

// const classlist: { [path: string]: { [path: string]: { [path: string]: number } } } = {};

let pass: number;

function quickType(node: any, source: string, ind: number): string {
  logg(ind + " quickType " + source);
  // tslint:disable-next-line:curly
  //  if (ind > 3) return "STACK";
  // tslint:disable-next-line:no-console
  if (debug) {
    // tslint:disable-next-line:no-console
    console.log(
      inspect(
        { node },
        {
          compact: false,
          depth: 2,
          getters: true,
          showHidden: true,
          showProxy: true,
          sorted: true,
        },
      ),
    );
  }
  if (node == null || node === undefined) {
    const nu = JSON.stringify(node);
    logg(ind + " quickType=" + nu);
    return nu;
  }
  const t = typeof node;
  if (t !== "object") {
    logg(ind + " quickType=" + t);
    return t;
  }
  if (pass === 1 && source !== "gen" && source[0] !== "$" && source[0] !== "_") {
    logg({ source });
    noteType(node, ind + 1);
  }
  const pt = Object.getPrototypeOf(node);
  if (debug) {
    const ptd = inspect(pt, {
      breakLength: 222,
      compact: true,
      depth: 2,
      getters: true,
      sorted: true,
    });
    logg(ind + " quickType is object, prototype is " + ptd);
  }
  if (node.hasOwnProperty("$type")) {
    if (node.$type === "mvdan.cc/sh/v3/syntax.*Pos") {
      return "_Pos";
    }
    if (node.$type === "mvdan.cc/sh/v3/syntax.*Expansion") {
      return "_Expansion";
    }
    if (1) {
      try {
        const $ = syntax.NodeType(node);
        logg({ $ });
        if ($) {
          logg(ind + " quickType=" + $);
          return $;
        }
      } catch (error) {
        const { code, message } = error;
        logg({ code, message });
      }
      logg(ind + " quickType no NodeType");
    }
    logg(ind + " quickType=" + node.$type);
    return node.$type;
  }
  logg(ind + " quickType no $type");
  if (Array.isArray(node) || Array.isArray(pt)) {
    const ee: { [key: string]: boolean } = {};
    // tslint:disable-next-line:max-line-length
    Object.getOwnPropertyNames(node).forEach((i) => {
      if (i !== "length") {
        ee[quickType(node[i], source + " Array " + i, ind + 1)] = true;
      }
    });
    const rec =
      Object.keys(ee)
        .sort()
        .join("|") + "[]";
    logg(ind + " quickType=" + rec);
    return rec;
  }
  logg(ind + " quickType no Array");
  const to = [t, ...Object.getOwnPropertyNames(node).sort()].join(":");
  logg(ind + " quickType=" + to);
  return to;
}

function noteType(node: any, ind: number): void {
  logg(ind + " noteType");
  const t = typeof node;
  if (node != null && t === "object") {
    const props = Object.getOwnPropertyDescriptors(node);
    // tslint:disable-next-line:no-console
    if (debug) {
      // tslint:disable-next-line:no-console
      console.log(
        inspect(
          { props },
          {
            depth: 3,
            compact: false,
            sorted: true,
            showHidden: true,
            showProxy: true,
            // getters: true,
          },
        ),
      );
    }
    const nt = quickType(node, "gen", ind + 1);
    Object.keys(props)
      .sort()
      .forEach((prop) => {
        if (1 || (prop[0] !== "$" && prop[0] !== "_")) {
          // const desc = props[prop];
          // logg({ desc });
          let qt;
          const p = node[prop];
          qt = quickType(p, prop + " node[prop]", ind + 1);
          logg({ prop, type_value: qt, p });
          logg({ classlist: [{ nt }, { prop }, { qt }] });
          noteField.run({ nt, prop, qt });
        }
      });
    // //    logg({ __internal_object__: node.__internal_object__ });
    // Object.keys(node.__internal_object__).forEach((k) => {
    //   const thing = node.__internal_object__[k];
    //   const thingtype = typeof thing;
    //   //    logg({ thing, k, thingtype });
    //   if (!classlist[nt][k] || classlist[nt][k] === "object") {
    //     classlist[nt][k] = thingtype;
    //     if (thingtype === "object" && thing) {
    //       //      logg({ thing_type: [thing.$val] });
    //       if (Array.isArray(thing)) {
    //         classlist[nt][k] = thingtype + "[]";
    //       } else {
    //         if (thing.$val && thing.$val.$type) {
    //           classlist[nt][k] = thing.$val.$type;
    //         }
    //       }
    //     }
    //   }
    // });
    logg({ [nt]: showOne.all({ nt }) });
  }
}

type Stackdata = string | string[];
const outstack: Stackdata[] = [];
const handlers: { [key: string]: (node: INodeType) => Stackdata } = {};

handlers.File = (node: INodeType): Stackdata => {
  logg("handlers.File");
  const t = typeof node;
  const k = Object.keys(node);
  const d = Object.getOwnPropertyDescriptors(node);
  logg({ t, k, d });
  const tn = node as IFile;
  const { ...rest_File0 } = tn;
  logg({ rest_File0 });
  const { Name, StmtList, Last, ...rest_File } = tn;
  logg({ Name, StmtList, Last, rest_File });
  return "";
};

function walker(node: INodeType): boolean {
  logg("walker");
  if (node === null) {
    if (debug) {
      // tslint:disable-next-line:no-console
      console.log("null node");
    }
    return true;
  }
  noteType(node, +1);
  const nt = syntax.NodeType(node);
  logg({ nt, node });
  return true;
  const handler = handlers[nt];
  logg({ handler });
  if (handler) {
    outstack.push(handler(node));
    return true;
  } else {
    logg({ nt, node });
    //    syntax.DebugPrint(node);
    logg({ exit: "now" });
    // throw 0;
    return true;
  }
}

// ---------------------------------------------------------------------------------------------------------------------

function perFile(f: string): void {
  logg("perFile");
  logg({ f });
  //  const is = createReadStream(resolve("gnu-config", f), { encoding: "ascii" });
  const t = readFileSync(resolve("gnu-config", f), { encoding: "ascii" });
  const parser = syntax.NewParser(syntax.Variant(syntax.LangPOSIX), syntax.KeepComments);
  //  const j: IMyShellFile = parser.Parse(is, is.path);
  const j: IMyShellFile = parser.Parse(t, f);
  // typelist(j, ["j", "IMyShellFile", "res.stdout"]);
  pass = 1;
  walker(j);
  pass++;
  syntax.Walk(j, walker);
  syntax.DebugPrint(j);
  //  const js = statements(j.Stmts, "Stmts") + "\n" + comments(j.Last, "Last");
  // tslint:disable-next-line:no-console
  // console.log(js);
}

// ---------------------------------------------------------------------------------------------------------------------

["config.guess", "config.sub"].forEach(perFile);
if (0) {
  // tslint:disable-next-line:no-console
  console.log(
    Object.keys(known)
      .map(
        (k) =>
          k +
          "\n\t" +
          Object.keys(known[k])
            .map((v) => known[k][v] + " " + v)
            .sort()
            .join("\n\t"),
      )
      .sort()
      .join("\n"),
  );
}
// tslint:disable-next-line:no-console
console.log("classlist\n");
// tslint:disable-next-line:no-console
console.log({ getClasses });
const classes: string[] = getClasses.pluck().all();
classes.forEach((aClass) => {
  // tslint:disable-next-line:no-console
  console.log(aClass);
  const props: string[] = getProps.pluck().all({ aClass });
  props.forEach((aProp) => {
    // tslint:disable-next-line:no-console
    console.log(
      "\t" +
        aProp +
        "\t" +
        getTypes
          .pluck()
          .all({ aClass, aProp })
          .join(", "),
    );
  });
});
// // tslint:disable-next-line:no-console
// console.log(
//   "classlist\n",
//   Object.keys(classlist)
//     .map(
//       (k) =>
//         k +
//         "\n\t" +
//         Object.keys(classlist[k])
//           .map(
//             (v) =>
//               v +
//               " " +
//               Object.keys(classlist[k][v])
//                 .sort()
//                 .join(", "),
//           )
//           .sort()
//           .join("\n\t"),
//     )
//     .sort()
//     .join("\n"),
// );
