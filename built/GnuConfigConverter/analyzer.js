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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2FuYWx5emVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxnREFBZ0Q7QUFDaEQsMkJBQWtDO0FBQ2xDLHVDQUFrQztBQUNsQywrQkFBK0I7QUFDL0IsK0JBQStCO0FBSS9CLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQztBQUVwQixNQUFNLFNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN0RSxTQUFTLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUQsMkNBQTJDO0FBQzNDLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUhBQWlILENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMzSSwyQ0FBMkM7QUFDM0MsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxtSkFBbUosQ0FBQyxDQUFDO0FBQ3pMLDJDQUEyQztBQUMzQyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLHVGQUF1RixDQUFDLENBQUM7QUFDM0gsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0FBQzVGLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUZBQWlGLENBQUMsQ0FBQztBQUN0SCwyQ0FBMkM7QUFDM0MsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxzRkFBc0YsQ0FBQyxDQUFDO0FBRTNILGtDQUFrQztBQUNsQyw0QkFBNEI7QUFFNUIsdUNBQXVDO0FBRXZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBQ0gsU0FBUyxPQUFPO0lBQ2QsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixD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