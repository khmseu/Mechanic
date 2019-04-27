"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const BetterSqlite3 = require("better-sqlite3");
const fs_1 = require("fs");
const mvdan_sh_1 = require("mvdan-sh");
const path_1 = require("path");
const util_1 = require("util");
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
    return stack;
}
function logg(thing) {
    // tslint:disable-next-line:no-console
    if (debug) {
        // tslint:disable-next-line:no-console
        console.log(util_1.inspect(thing, {
            depth: 2,
            compact: false,
            sorted: true,
        }));
    }
}
exports.logg = logg;
const known = {};
// const classlist: { [path: string]: { [path: string]: { [path: string]: number } } } = {};
let pass;
function quickType(node, source, ind) {
    logg(ind + " quickType " + source);
    // tslint:disable-next-line:curly
    //  if (ind > 3) return "STACK";
    // tslint:disable-next-line:no-console
    if (debug) {
        // tslint:disable-next-line:no-console
        console.log(util_1.inspect({ node }, {
            compact: false,
            depth: 2,
            getters: true,
            showHidden: true,
            showProxy: true,
            sorted: true,
        }));
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
        const ptd = util_1.inspect(pt, {
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
                const $ = mvdan_sh_1.syntax.NodeType(node);
                logg({ $ });
                if ($) {
                    logg(ind + " quickType=" + $);
                    return $;
                }
            }
            catch (error) {
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
        const ee = {};
        // tslint:disable-next-line:max-line-length
        Object.getOwnPropertyNames(node).forEach((i) => {
            if (i !== "length") {
                ee[quickType(node[i], source + " Array " + i, ind + 1)] = true;
            }
        });
        const rec = Object.keys(ee)
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
function noteType(node, ind) {
    logg(ind + " noteType");
    const t = typeof node;
    if (node != null && t === "object") {
        const props = Object.getOwnPropertyDescriptors(node);
        // tslint:disable-next-line:no-console
        if (debug) {
            // tslint:disable-next-line:no-console
            console.log(util_1.inspect({ props }, {
                depth: 3,
                compact: false,
                sorted: true,
                showHidden: true,
                showProxy: true,
            }));
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
const outstack = [];
const handlers = {};
handlers.File = (node) => {
    logg("handlers.File");
    const t = typeof node;
    const k = Object.keys(node);
    const d = Object.getOwnPropertyDescriptors(node);
    logg({ t, k, d });
    const tn = node;
    const { ...rest_File0 } = tn;
    logg({ rest_File0 });
    const { Name, StmtList, Last, ...rest_File } = tn;
    logg({ Name, StmtList, Last, rest_File });
    return "";
};
function walker(node) {
    logg("walker");
    if (node === null) {
        if (debug) {
            // tslint:disable-next-line:no-console
            console.log("null node");
        }
        return true;
    }
    noteType(node, +1);
    const nt = mvdan_sh_1.syntax.NodeType(node);
    logg({ nt, node });
    return true;
    const handler = handlers[nt];
    logg({ handler });
    if (handler) {
        outstack.push(handler(node));
        return true;
    }
    else {
        logg({ nt, node });
        //    syntax.DebugPrint(node);
        logg({ exit: "now" });
        // throw 0;
        return true;
    }
}
// ---------------------------------------------------------------------------------------------------------------------
function perFile(f) {
    logg("perFile");
    logg({ f });
    //  const is = createReadStream(resolve("gnu-config", f), { encoding: "ascii" });
    const t = fs_1.readFileSync(path_1.resolve("gnu-config", f), { encoding: "ascii" });
    const parser = mvdan_sh_1.syntax.NewParser(mvdan_sh_1.syntax.Variant(mvdan_sh_1.syntax.LangPOSIX), mvdan_sh_1.syntax.KeepComments);
    //  const j: IMyShellFile = parser.Parse(is, is.path);
    const j = parser.Parse(t, f);
    // typelist(j, ["j", "IMyShellFile", "res.stdout"]);
    pass = 1;
    walker(j);
    pass++;
    mvdan_sh_1.syntax.Walk(j, walker);
    mvdan_sh_1.syntax.DebugPrint(j);
    //  const js = statements(j.Stmts, "Stmts") + "\n" + comments(j.Last, "Last");
    // tslint:disable-next-line:no-console
    // console.log(js);
}
// ---------------------------------------------------------------------------------------------------------------------
["config.guess", "config.sub"].forEach(perFile);
if (0) {
    // tslint:disable-next-line:no-console
    console.log(Object.keys(known)
        .map((k) => k +
        "\n\t" +
        Object.keys(known[k])
            .map((v) => known[k][v] + " " + v)
            .sort()
            .join("\n\t"))
        .sort()
        .join("\n"));
}
// tslint:disable-next-line:no-console
console.log("classlist\n");
// tslint:disable-next-line:no-console
console.log({ getClasses });
const classes = getClasses.pluck().all();
classes.forEach((aClass) => {
    // tslint:disable-next-line:no-console
    console.log(aClass);
    const props = getProps.pluck().all({ aClass });
    props.forEach((aProp) => {
        // tslint:disable-next-line:no-console
        console.log("\t" +
            aProp +
            "\t" +
            getTypes
                .pluck()
                .all({ aClass, aProp })
                .join(", "));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL3NhdmUvYW5hbHl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILGdEQUFnRDtBQUNoRCwyQkFBa0M7QUFDbEMsdUNBQWtDO0FBQ2xDLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFJL0IsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBRXBCLE1BQU0sU0FBUyxHQUFHLElBQUksYUFBYSxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3RFLFNBQVMsQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxRCwyQ0FBMkM7QUFDM0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpSEFBaUgsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNJLDJDQUEyQztBQUMzQyxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLG1KQUFtSixDQUFDLENBQUM7QUFDekwsMkNBQTJDO0FBQzNDLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsdUZBQXVGLENBQUMsQ0FBQztBQUMzSCxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7QUFDNUYsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO0FBQ3RILDJDQUEyQztBQUMzQyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLHNGQUFzRixDQUFDLENBQUM7QUFFM0gsa0NBQWtDO0FBQ2xDLDRCQUE0QjtBQUU1Qix1Q0FBdUM7QUFFdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxTQUFTLE9BQU87SUFDZCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMs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