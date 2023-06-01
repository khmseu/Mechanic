/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* trunk-ignore(eslint/prefer-arrow/prefer-arrow-functions */

/**
 * Copyright © 2023 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { dir, log } from "console";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmdirSync,
  writeFileSync,
} from "fs";
import { inspect } from "util";

const text: string[] = [];

const copyr = `/**
 * Copyright © ${new Date().getFullYear()} Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

`;

const outdir = "src/GnuConfigConverter/generated";

const prefix = `
/* eslint-disable no-trailing-spaces */
/* $["trunk"]-ignore(git-diff-check/error) */

type X_bool = boolean;
type X_error = Error;
type X_int = number;
type X_io_Reader = ReadableStream<string>;
type X_io_Writer = WritableStream<string>;
type X_string = string;
type X_uint = number;

// classlist


export interface I_base {
  \$type: string;
  __internal_object__: { \$val: any };
}

`;

const _STACK = function stack_getter(): NodeJS.CallSite[] {
  const orig = Error.prepareStackTrace;
  Error.prepareStackTrace = function (_, astack): NodeJS.CallSite[] {
    return astack;
  };
  const err = new Error();
  Error.captureStackTrace(err, stack_getter);
  const stack = err.stack as unknown as NodeJS.CallSite[];
  Error.prepareStackTrace = orig;
  return stack;
};

const _FUNCTION = function (): string | null {
  return _STACK()[1].getFunctionName();
};
const _PARENT = function (): string | null {
  return _STACK()[1].getFunctionName();
};

let generating = false;
const PT: Record<string, Record<string, { comments: string[] }>> = {};
let PTT = "";
let PTF = "";

function setPT(t: string) {
  PTT = t;
  PTF = "";
}

function renPT(to: string | number, tn: string | number) {
  if (PT[tn]) throw new Error("");
  const o = PT[to];
  delete PT[to];
  PT[tn] = o;
}

function setPF(f: string) {
  PTF = f;
}

function keys(dict?: object | undefined) {
  return Object.keys(dict as object);
}

function save(txt: string) {
  text.push(...txt.split(/(?<=\n)/));
}

function note(txt?: string) {
  const txta = txt?.split(/\n/) ?? [];
  txta.forEach((t) => {
    save(`// ${t}\n`);
    PT[PTT] ??= {};
    PT[PTT][PTF] ??= { comments: [] };
    PT[PTT][PTF].comments.push(t);
  });
}

function p2aname(pp: string) {
  switch (pp) {
    case "INode": {
      return "ASTNode";
    }
    case "I_base": {
      return undefined;
    }
    default: {
      let r: RegExpExecArray | null;
      if ((r = /^I_(\w+)$/.exec(pp))) return `AST${r[1]}`;
      if ((r = /^I(\w+)$/.exec(pp))) return `ASTNode${r[1]}`;

      // when (/^([A-Z]\w+)$/) { return "ASTToken$1"; }
      return pp;
    }
  }
}

function fieldof(var_: string, field: string) {
  let r: RegExpExecArray | null;
  if ((r = /^\["(\w+)"\]$/.exec(field))) return `${var_}.${r[1]}`;
  return /^\[/.test(field) ? `${var_}${field}` : `${var_}.${field}`;
}

function export_(name: string, atext: string[], needType: object) {
  // const sub = {
  //   [_PARENT() ?? ""]: _FUNCTION() ?? "",
  //   name,
  //   needType,
  //   text: atext,
  // };
  // dir(sub);
  if (!atext.length) return;
  const to: Record<string, string> = {};
  keys(needType)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .map((_) => {
      return ["I_base", name].includes(_)
        ? []
        : _ === "syntax"
        ? [_, "mvdan-sh"]
        : _ === "ok"
        ? [_, "assert"]
        : _ === "op"
        ? [_, "../Token"]
        : /^AST/.test(_)
        ? [_, "./$_"]
        : /^(logg|Token)$/.test(_)
        ? [_, "../$_"]
        : [_, "../ParserTypes"];
    })
    .forEach((v) => {
      if (v.length) to[v[0]] = v[1];
    });
  // print inspect(%to);
  const from: Record<string, string[]> = {};
  keys(to).forEach((_) => {
    from[to[_]] ??= [];
    from[to[_]].push(_);
  });

  // print inspect(%from);
  const hdr = keys(from)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .map((_) => {
      const want = from[_].sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      ).join(", ");
      return `import { ${want} } from "${_}";\n`;
    });
  const hdr1 = hdr.filter((_) => !/\//.test(_));
  const hdr2 = hdr.filter((_) => /\//.test(_));

  // print inspect( @hdr, @hdr1, @hdr2 );
  if (hdr) atext.unshift("\n");
  atext.unshift(copyr, ...hdr1, ...hdr2);
  atext = atext.map(($_) => $_.split(/(?<=\n)/)).flat();
  atext = atext
    .map(($_) => {
      if ($_.length < 120) {
        return $_;
      } else {
        const res = /^(\s*)/.exec($_);
        return [
          `${res?.[1] ?? ""}// tslint:disable-continue-line:max-line-length\n`,
          $_,
        ];
      }
    })
    .flat();
  log(`> ${outdir}/${name}.ts`);
  writeFileSync(`${outdir}/${name}.ts`, atext.join(""), { encoding: "utf8" });
  atext = [];
  needType = {};
}

function export_maybe(name: string, atext: string[], needType: object) {
  if (!existsSync(`${outdir}/${name}.ts`)) export_(name, atext, needType);
}

type Ads = {
  types?: {
    [x: string]: {
      doc?: string;
      comment?: string;
      implementers?: Type[];
      type?: Type;
      enumvalues?: any[] | undefined;
      methods?: {
        [x: string]: {
          doc?: string;
          comment?: string;
          type?: {
            kind?: "function";
            doc?: string;
            comment?: string;
            params?: NamedType[];
            results?: NamedType[];
          };
        };
      };
    };
  };
};
let ads: Ads;

type Type =
  | string
  | {
      kind?: "list" | "pointer";
      elem?: Type;
    }
  | {
      kind?: "function";
      params?: NamedType[];
      results?: NamedType[];
    }
  | {
      kind?: "struct" | "interface";
      doc?: string;
      fields?: Record<string, { doc: string; comment: string; type: Type }>;
      methods?: {
        [x: string]: {
          comment?: string;
          doc?: string;
          type?: {
            kind?: "function";
            doc?: string;
            comment?: string;
            params?: NamedType[];
            results?: NamedType[];
          };
        };
      };
    }
  | { kind: "42" }
  | undefined;
type NamedType = { name?: string; type: Type };

function ungo_prepare(name?: Type): { pre: string; mid: string; post: string } {
  if (name === undefined) throw new Error("undefined");
  let pre = "";
  let mid;
  let post;
  if (typeof name === "object") {
    switch (name.kind) {
      case "list": {
        ({ pre, mid, post } = ungo_prepare(name.elem));
        if (generating) {
          pre = `(${pre}`;
          post += ")[]";
        }
        break;
      }
      case "pointer": {
        ({ pre, mid, post } = ungo_prepare(name.elem));
        if (generating) post += " | null";
        break;
      }
      case "function": {
        [pre, mid, post] = ["", "", ""];
        if (generating)
          post = `(${
            name.params
              ?.map(
                (p: { name?: string; type: Type }) =>
                  `${p.name || "_"}: ${ungo(p.type)}`
              )
              .join(", ") ?? ""
          }) => ${
            name.results
              ?.map((r: { type: Type }) => ungo(r.type))
              .join(" | ") ?? ""
          }`;
        break;
      }
      default: {
        pre = "§";
        mid = `${inspect({ name })}${name.kind ?? ""}`;
        post = "§";
      }
    }
  } else {
    if (!name.length) throw new Error("empty");
    const res = /^mvdan\.cc\/sh\/v3\/syntax\.(\w+)$/.exec(name);
    mid = res?.[1] ?? name;
    // dir({ name, res, mid });
    post = "";
    if (generating) {
      switch (mid) {
        // defined elsewhere
        case "bool":
        case "error":
        case "int":
        case "io.Reader":
        case "io.Writer":
        case "string":
        case "uint": {
          mid = `X_${mid.replace(".", "_")}`;
          // nothing
          break;
        }
        default: {
          if (!ads.types?.[mid]) throw new Error(`Bad index ${mid}`);
          // enums
          if (ads.types[mid].enumvalues !== undefined) {
            // ;
          }
          // normal case
          else if (!!mid) {
            mid = `I${mid}`;
          } else {
            // say inspect( name, mid, generating );
          }
        }
      }
    }
  }
  return { pre, mid, post };
}

function ungo(name?: Type) {
  const { pre, mid, post } = ungo_prepare(name);
  if (pre === undefined || mid === undefined || post === undefined)
    dir({ generating, name, pre, mid, post });
  return pre + mid + post;
}

function mv2pt() {
  save(copyr);
  save(prefix);

  const ad = readFileSync(
    "src/GnuConfigConverter/gen-api/mvdan-sh/api_dump.json",
    { encoding: "utf8" }
  );

  ads = JSON.parse(ad) as Ads;

  // analyze

  const TYPS: Record<
    string,
    {
      isa?: { [x: string]: boolean };
      impl?: { [x: string]: boolean };
      type?: boolean;
      elems?: { [x: string]: boolean };
      ["struct"]?: boolean;
      ref?: {
        f?: { [x: string]: { [x: string]: boolean } };
        m?: { [x: string]: { [x: string]: boolean } };
      };
      enum?: boolean;
    }
  > = {};
  const types = ads.types;

  for (const tn of keys(types).sort()) {
    TYPS[tn] ??= {};
    TYPS[tn].type = true;
    const tv = types?.[tn];
    const methods = tv?.methods;
    for (const mn of keys(methods).sort()) {
      const mv = methods?.[mn];
      const mtr = mv?.type;
      if (typeof mtr !== "object" || mtr.kind !== "function")
        throw new Error(`method ${mn} isn't function: ${inspect({ mtr })}`);
      TYPS[tn].elems ??= {};
      TYPS[tn].elems[mn] = true;
      [...(mtr.params ?? []), ...(mtr.results ?? [])].forEach((e) => {
        TYPS[ungo(e.type)] ??= {};
        TYPS[ungo(e.type)].ref ??= {};
        TYPS[ungo(e.type)].ref.m ??= {};
        TYPS[ungo(e.type)].ref.m[tn] ??= {};
        TYPS[ungo(e.type)].ref.m[tn][mn] = true;
      });
    }
    const type = tv?.type;
    switch (typeof type) {
      case "object": {
        switch (type.kind) {
          case "struct":
          case "interface": {
            TYPS[tn].struct = true;
            const fields = type.fields;
            Object.keys(fields ?? {})
              .sort()
              .forEach((fn) => {
                const fv = fields?.[fn];
                const ftr = typeof fv === "object" ? fv.type : "";
                const ft = ungo(ftr);
                TYPS[tn] ??= {};
                TYPS[tn].elems ??= {};
                TYPS[tn].elems[fn] = true;
                TYPS[ft] ??= {};
                TYPS[ft].ref ??= {};
                TYPS[ft].ref.f ??= {};
                TYPS[ft].ref.f[tn] ??= {};
                TYPS[ft].ref.f[tn][fn] = true;
              });
            const tmethods = type.methods;
            Object.keys(tmethods ?? {})
              .sort()
              .forEach((mn) => {
                const mv = tmethods?.[mn];
                const mtr = mv?.type;
                if (typeof mtr !== "object" || mtr.kind !== "function")
                  throw new Error(`method ${mn} isn't function`);
                TYPS[tn] ??= {};
                TYPS[tn].elems ??= {};
                TYPS[tn].elems[mn] = true;
                [...(mtr.params ?? []), ...(mtr.results ?? [])].forEach((p) => {
                  TYPS[ungo(p.type)] ??= {};
                  TYPS[ungo(p.type)].ref ??= {};
                  TYPS[ungo(p.type)].ref.m ??= {};
                  TYPS[ungo(p.type)].ref.m[tn] ??= {};
                  TYPS[ungo(p.type)].ref.m[tn][mn] = true;
                });
              });
            (tv?.implementers ?? []).forEach((i) => {
              const u = ungo(i);
              TYPS[tn] ??= {};
              TYPS[tn].impl ??= {};
              TYPS[tn].impl[u] = true;
              TYPS[u] ??= {};
              TYPS[u].isa ??= {};
              TYPS[u].isa[tn] = true;
            });
            break;
          }
        }
        break;
      }
      case "string": {
        switch (type) {
          case "uint32":
          case "int":
            TYPS[tn].enum = true;
            break;
          default:
            throw new Error(`Unknown type type '${type}'`);
        }
        break;
      }
      default: {
        throw new Error(`Unknown type type '${typeof type}'`);
      }
    }
  }
  dir(TYPS, {
    depth: Infinity,
    maxArrayLength: Infinity,
    maxStringLength: Infinity,
  });

  // generate
  generating = true;

  try {
    keys(types)
      .sort()
      .forEach((tn) => {
        setPT(tn);
        const tv = types?.[tn];
        if (TYPS[tn].impl) {
          const type = tv?.type;
          note(tv?.doc);
          switch (typeof type) {
            case "object": {
              switch (type.kind) {
                case "interface": {
                  renPT(tn, `I_${tn}`);
                  save(
                    `export interface I_${tn} extends ${[
                      ["base", ...Object.keys(TYPS[tn].isa ?? [])].map(
                        (e) => `I_${e}`
                      ),
                    ].join(", ")} {\n`
                  );
                  const fields = type.fields;
                  Object.keys(fields ?? {})
                    .sort()
                    .forEach((fn) => {
                      const fv = fields?.[fn];
                      const ftr = fv?.type;
                      const ft = ungo(ftr);
                      setPF(ft);
                      note(fv?.doc);
                      if (fv?.comment.length) {
                        save(`  ${fn}: ${ft}; // ${fv.comment}`);
                      } else {
                        save(`  ${fn}: ${ft};\n`);
                      }
                    });
                  let methods = type.methods;
                  keys(methods)
                    .sort()
                    .forEach((mn) => {
                      const mv = methods?.[mn];
                      const mtr = mv?.type;
                      const mt = ungo(mtr ?? "");
                      setPF(mt);
                      note(mv?.doc);
                      if (mv?.comment?.length) {
                        save(`  ${mn}: ${mt}; // ${mv.comment}`);
                      } else {
                        save(`  ${mn}: ${mt};\n`);
                      }
                    });
                  methods = tv?.methods;
                  keys(methods)
                    .sort()
                    .forEach((mn) => {
                      const mv = methods?.[mn];
                      const mtr = mv?.type;
                      const mt = ungo(mtr);
                      setPF(mt);
                      note(mv?.doc);
                      if (mv?.comment?.length) {
                        save(`  ${mn}: ${mt}; // ${mv.comment}`);
                      } else {
                        save(`  ${mn}: ${mt};\n`);
                      }
                    });
                  save("}\n");
                }
              }
              break;
            }
            default: {
              throw new Error(`Unknown type kind '${typeof type}'`);
            }
          }
        }
      });

    keys(types)
      .sort()
      .forEach((tn) => {
        setPT(tn);
        const tv = types?.[tn];
        const type = tv?.type;
        note(tv?.doc);
        switch (typeof type) {
          case "object": {
            switch (type.kind) {
              case "struct": {
                renPT(tn, ungo(tn));
                save(
                  `export interface ${ungo(tn)} extends ${[
                    "base",
                    ...Object.keys(TYPS[tn].isa ?? {}).sort(),
                  ]
                    .map((i) => `I_${i}`)
                    .join(", ")} {\n`
                );
                const fields = type.fields;
                keys(fields)
                  .sort()
                  .forEach((fn) => {
                    const fv = fields?.[fn];
                    const ftr = fv?.type;
                    const ft = ungo(ftr);
                    setPF(ft);
                    note(fv?.doc);
                    if (fv?.comment.length) {
                      save(`  ${fn}: ${ft}; // ${fv.comment}`);
                    } else {
                      save(`  ${fn}: ${ft};\n`);
                    }
                  });
                let methods = type.methods;
                Object.keys(methods ?? {})
                  .sort()
                  .forEach((mn) => {
                    const mv = methods?.[mn];
                    const mtr = mv?.type;
                    const mt = ungo(mtr);
                    setPF(mt);
                    note(mv?.doc);
                    if (mv?.comment?.length) {
                      save(`  ${mn}: ${mt}; // ${mv.comment}`);
                    } else {
                      save(`  ${mn}: ${mt};\n`);
                    }
                  });
                methods = tv?.methods;
                keys(methods)
                  .sort()
                  .forEach((mn) => {
                    const mv = methods?.[mn];
                    const mtr = mv?.type;
                    const mt = ungo(mtr);
                    setPF(mt);
                    note(mv?.doc);
                    if (mv?.comment?.length) {
                      save(`  ${mn}: ${mt}; // ${mv.comment}`);
                    } else {
                      save(`  ${mn}: ${mt};\n`);
                    }
                  });
                save("}\n");
                break;
              }
              case "interface": {
                const impl = tv?.implementers?.map((i) => ungo(i));
                renPT(tn, ungo(tn));
                save(
                  ["export type " + ungo(tn) + " =", ...(impl ?? [])].join(
                    "\n  | "
                  ) + ";\n"
                );
              }
            }
            break;
          }
          case "string": {
            switch (type) {
              case "uint32":
              case "int": {
                save(`export enum ${tn} {\n`);
                tv?.enumvalues?.forEach((e) => {
                  save(`  ${(e as object).toString()},\n`);
                });
                save("}\n");
                break;
              }
              default: {
                throw new Error(`Unknown type type '${inspect({ type })}'`);
              }
            }
            break;
          }
          default: {
            // dir({ types, tn, tv });
            throw new Error(
              `Unknown type kind '${typeof type}' ${inspect({ type })}`
            );
          }
        }
      });
  } catch (error) {
    save(inspect({ error }));
    dir(error);
  }
  setPT("");
  writeFileSync("src/GnuConfigConverter/ParserTypes.ts", text.join(""), {
    encoding: "utf-8",
  });
}

function pt2at() {
  const needType: Record<string, any> = {};
  const kind: Record<string, any> = {};

  const fi = "";
  // prepare output
  mkdirSync(outdir, { recursive: true });
  rmdirSync(outdir, { recursive: true });
  mkdirSync(outdir, { recursive: true });

  export_(
    "ASTCall",
    [
      `export function ASTCall<PE>(pe: (() => PE) | null) {
  return pe ? pe() : null;
}
`,
    ],
    {}
  );
  export_(
    "ASTSimpleSingle",
    [
      `export function ASTSimpleSingle<AE, PE>(at: new(pt: PE) => AE, pe: PE | null) {
  const ae = pe ? new at(pe) : null;
  return ae;
}
`,
    ],
    {}
  );
  export_(
    "ASTSimpleSingleNotNull",
    [
      `export function ASTSimpleSingleNotNull<AE, PE>(at: new(pt: PE) => AE, pe: PE | null) {
  ok(pe, "ASTSimpleSingleNotNull");
  const ae = new at(pe!);
  return ae;
}
`,
    ],
    { ok: 1 }
  );
  export_(
    "ASTSingle",
    [
      `export function ASTSingle<AE extends ASTNode, PE>(at: new (pt: PE, parent: ASTNode | null, parentField: string) => AE, pe: PE | null, parent: ASTNode | null, parentField: string) {
  const ae = pe ? new at(pe, parent, parentField) : null;
  return ae;
}
`,
    ],
    { ASTNode: 1 }
  );
  export_(
    "ASTSingleNotNull",
    [
      `export function ASTSingleNotNull<AE extends ASTNode, PE>(at: new (pt: PE, parent: ASTNode | null, parentField: string) => AE, pe: PE | null, parent: ASTNode | null, parentField: string) {
  ok(pe, parentField);
  const ae = new at(pe!, parent, parentField);
  return ae;
}
`,
    ],
    { ASTNode: 1, ok: 1 }
  );
  export_(
    "ASTArray",
    [
      `export function ASTArray<AE extends ASTNode, PE>(at: new(pt: PE, parent: ASTNode | null, parentField: string) => AE, pa: PE[] | null, parent: ASTNode | null, parentField: string) {
  const aa: AE[] = [];
  if (pa) {
    pa.forEach((pe) => {
        const ae = ASTSingle<AE, PE>(at, pe, parent, parentField);
        if (ae) {
          aa.push(ae);
        }
    });
  }
  return aa;
}
`,
    ],
    { ASTNode: 1, ASTSingle: 1 }
  );
  export_(
    "ASTMore",
    [
      `export class ASTMore {
  public commentField: { [f: string]: number } = {};
  public printDone = false;
  [f: string]: any;
}
`,
    ],
    {}
  );

  const fia = fi.split(/\bexport\s+(?:declare\s+)?/);
  for (const $typ of fia) {
    if (!$typ.length) continue;
    if (/^\/\*/.test($typ)) continue;
    const [$what, $name, $body] =
      $typ.match(/^(\w+)\s+(\w+)\s+(.*\S)\s*$/s) ?? [];

    // note inspect($what, $name, $body);
    const $an = p2aname($name) ?? "";
    if ($an === undefined) continue; // I_base
    switch ($what) {
      case "interface": {
        const [$ext, $body1] =
          $body.match(/^extends\s+((?:\w|, )+)\s+(.*)$/s) ?? [];

        // note inspect( $ext, $body1 );
        let $this: string;
        const ext: Record<string, any> = {};
        if ($ext !== undefined && /\S/.test($ext)) {
          $ext.split(/[\w,\s]/).map(($_) => {
            ext[$_] = true;
          });
          needType[$name]++;
          if ("INode" in ext) {
            save(
              `export class ${$an} extends ASTNode {
  public kind: ASTnodeKind.${$an} = ASTnodeKind.${$an};
  public kindString: string = ASTnodeKind[ASTnodeKind.${$an}];
`
            );
            needType.ASTNode++;
            needType.ASTnodeKind++;
            kind[$an]++;
            $this = "this";
          } else if ($name === "INode") {
            needType.ASTMore++;
            save(
              `export class ${$an} {
  public kind: ASTnodeKind = ASTnodeKind.bad;
  public kindString: string = ASTnodeKind[ASTnodeKind.bad];
  public more: ASTMore = new ASTMore();
`
            );
            needType.ASTnodeKind++;
            $this = "this";
          } else {
            save(
              `export class ${$an} {
`
            );
            $this = "null";
          }
          const fields = $body1.split(/\n /).filter((_) => /\w/.test(_));

          // note inspect(@fields);
          let fdefh: Record<
            string,
            {
              a: boolean;
              aft: string;
              f: number;
              i: boolean;
              n: boolean;
              t: string;
              text: string[];
            }
          >;
          const fdefa: string[] = [];
          let $aft: string;
          fields.forEach(($field) => {
            const [$name1, $func, $def0, $kind] =
              $field.match(
                /^\s*(\w+|\["[^"]*"\])\s*:\s*((?:\(?(?:\([^()]*\)\s*=>\s*))?)(\w*(?:\s*\|\s*\w*)*\)?)\s*(.*);$/
              ) ?? [];
            if ($name1 === undefined) throw new Error("");
            const $def = $def0;
            if ($kind !== undefined)
              throw new Error(`can't handle ${inspect({ $field })}`);

            // print( inspect( $field, $name1, $def, $func, $kind ), "\n" );

            // note inspect( $name1, $def, $func, $kind );
            let [$aa, $nn, $ff, $ii] = [false, false, 0, false];
            if ($func.length) {
              $ff = 1;
              if (!/\(\)/.test($func)) $ff++;
            }
            // given ($kind) {
            if ($kind === "") {
              // ok
            } else if (/^\|\s*null$/.test($kind)) {
              $nn = true;
            } else if ($kind === "[]") {
              $aa = true;
            } else if (/^\[\]\s*\|\s*null$/.test($kind)) {
              $aa = true;
              $nn = true;
            } else if (/^\((\w+)(\s*\|\s*null)?\)\[\]$/.test($kind)) {
              $aa = true;
            } else {
              throw new Error(
                `Unknown ${inspect({ $kind, $name1, $def, $func, $field })}`
              );
            }
            // }
            $aft = p2aname($def) ?? "";
            if (/^I_/.test($def)) $ii = true;
            fdefh[$name1] = {
              a: $aa,
              aft: $aft,
              f: $ff,
              i: $ii,
              n: $nn,
              t: $def,
              text: [$field],
            };
            if ($ff < 2) {
              let $tail = "";
              if ($aa) $tail += "[]";
              if ($nn && !$aa) $tail += " | null";
              if ($aft === $def && /^[A-Z]/.test($aft)) {
                save(
                  `  public ${$name1}: string${$tail}; // ${$field}
  public ${$name1}String: string${$tail};
`
                );
                needType.op++;
                needType.Token++;
              } else {
                save(`  public ${$name1}: ${$aft}${$tail}; // ${$field}
`);
              }
              if ($aft !== $def) {
                needType[$aft]++;
              } else if (/^[A-Z]/.test($def)) {
                needType[$aft]++;
              }
            } else {
              save(`  // ignored: ${$field}
`);
            }
            fdefa.push($name1);
          });

          // note inspect( $name, %fdef, @fdef );
          const $list1 = fdefa.filter(($_) => fdefh[$_].f < 2).join(", ");
          let $ln = $name.toLowerCase();
          $ln = $ln.replaceAll(/^i_*/, "");
          let $tv: string;
          const recur = fdefa
            .filter(($_) => fdefh[$_].f < 2)
            .map(($_) => {
              const $sin = fdefh[$_].aft;
              const [$ff, $nn, $aa, $ii] = [
                fdefh[$_].f,
                fdefh[$_].n,
                fdefh[$_].a,
                fdefh[$_].i,
              ];
              const $s1 = fdefh[$_].t === $sin;
              const $s2 = $s1 && /^[A-Z]/.test($sin);

              // note inspect( $_, $fdef[$_] );
              // Flags:
              // $aa
              // $s1
              // $ff
              // $ii
              // $nn
              // $s2
              // Strings:
              // $_
              // $ln
              // $sin
              // $this
              const $fv0 = fieldof($ln, $_);
              $tv = fieldof("this", $_);
              let $fv = $fv0;
              if ($ff) {
                $fv = `ASTCall(${$fv})`;
                needType.ASTCall++;
              }

              let $par = `, ${$this}, "${$_}"`;
              if ($ii) {
                $par = "";
              }

              let [$pre, $post] = ["", ""];
              if ($s1) {
                if ($nn) {
                  $pre = `${$fv0} ? `;
                  $post = " : null";
                }
              } else {
                if ($aa) {
                  $fv = `ASTArray(${$sin}, ${$fv}${$par})`;
                  needType.ASTArray++;
                } else {
                  const $nnt = $nn ? "" : "NotNull";
                  if ($ii) {
                    $fv = `ASTSimpleSingle${$nnt}(${$sin}, ${$fv})`;
                    needType[`ASTSimpleSingle${$nnt}`]++;
                  } else {
                    $fv = `ASTSingle${$nnt}(${$sin}, ${$fv}${$par})`;
                    needType[`ASTSingle${$nnt}`]++;
                  }
                }
              }

              let $res;
              if ($s2) {
                $res = `    ${$tv} = ${$pre}${$sin}\[${$fv}\]${$post};
    ${$tv}String = ${$pre}op((${$fv} as unknown) as Token)${$post};
`;
              } else {
                $res = `    ${$tv} = ${$pre}${$fv}${$post};
`;
              }
              {
                $res = $res.replace(/\n+$/, "");
              }

              // inspect( $aa, $s1, $ff, $ii, $nn, $s2, $_, $ln, $sin, $this,) +
              return $res;
            });
          const $recur = recur.join("\n");
          const recur2 = fdefa
            .filter(($_) => /^ASTNode/.test(fdefh[$_].aft))
            .map(($_) =>
              fdefh[$_].a
                ? `    ${$tv}.forEach((e) => e.accept(visitor));
`
                : fdefh[$_].n
                ? `    if (${$tv}) {
      ${$tv}.accept(visitor);
    }
`
                : `    ${$tv}.accept(visitor);
`
            );
          let $recur2 = recur2.join("");
          $recur2 = $recur2.replace(/\n$/, "");
          const $list2 =
            "INode" in ext || $name === "INode"
              ? [
                  "kind",
                  "parent",
                  "parentField",
                  fdefa.filter(($_) => fdefh[$_].t === "I_Pos"),
                ]
                  .flat()
                  .map(($_) => `"${$_}"`)
                  .join(", ")
              : "";
          if ("INode" in ext || $name === "INode") {
            save(`
  constructor(${$ln}: ${$name}, public parent: ASTNode | null, public parentField: string) {
`);
            needType.ASTNode++;
          } else {
            save(`
  constructor(${$ln}: ${$name}) {
`);
          }
          if (ext.INode) {
            save(`    super(${$ln}, parent, parentField);
`);
          }
          save(`    logg("${$an}");
${$recur}
    [${$list2}].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
`);
          needType.logg++;
          if (ext.INode) {
            needType.ASTVisitorBase++;
            save(`  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visit${$an}Pre(this);
    visitor.visitAllPreAfter(this);
${$recur2}
    visitor.visitAllPostBefore(this);
    visitor.visit${$an}Post(this);
    visitor.visitAllPostAfter(this);
  }
`);
          } else if ($name === "INode") {
            needType.ASTVisitorBase++;
            save(`  public accept(visitor: ASTVisitorBase) {
    visitor = visitor;
  }
`);
          }
          save(`}
`);
        } else {
          throw new Error(
            `interface ${$name}/${$an} extends ${inspect({
              $body,
              $body1,
              $ext,
              ext,
            })} `
          );
        }
        break;
      }
      case "type": {
        needType[$name]++;

        // note inspect( $what, $name, $body );
        const alts = $body.split(/\W+/).filter(($_) => /./.test($_));
        const $list1 = alts
          .map(($_) => `ASTnodeKind.${p2aname($_) ?? ""}`)
          .join(" | ");
        save(`export class ${$an} extends ASTNode {
  public kind: ASTnodeKind.bad | ${$list1} = ASTnodeKind.bad;
  public kindString: string = ASTnodeKind[ASTnodeKind.bad];
`);
        needType.ASTNode++;
        needType.ASTnodeKind++;

        // note inspect(@alts);
        let $ln = $name.toLowerCase();
        $ln = $ln.replace(/^i_*/, "");
        const recur = alts.map(($_) => {
          let $san = $_;
          $san = $san.replace(/^I_*/, "");
          const $atn = p2aname($_) ?? "";
          needType[$atn]++;
          needType[$_]++;
          return `      case "${$san}":
        return new ${$atn}(${$ln} as ${$_}, parent, parentField);
`;
        });
        const $recur = recur.join("").replace(/\n$/, "");
        save(`  constructor(${$ln}: ${$name}, public parent: ASTNode | null, public parentField: string) {
    super(${$ln}, parent, parentField);
    logg("${$an}");
    switch (syntax.NodeType(${$ln})) {
${$recur}
      default:
        throw { NodeType: syntax.NodeType(${$ln}) };
    }
  }
}
`);
        needType.ASTNode++;
        needType.logg++;
        needType.syntax++;
        break;
      }
      case "enum": {
        // skip throw "missing " + $what;
        break;
      }
      default: {
        throw new Error(`Unknown ${inspect({ $what, $typ })}`);
      }
    }
    export_($an, text, needType);
  }

  const $list0 = keys(kind)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join(",\n  ");
  save(
    `export enum ASTnodeKind {
  bad,
  ${$list0},
}
`
  );
  export_("ASTnodeKind", text, needType);

  save(`export class ASTVisitorBase {
  public visitAllPreBefore(node: ASTNode): void {
    node = node;
  }
  public visitAllPreAfter(node: ASTNode): void {
    node = node;
  }
  public visitAllPostBefore(node: ASTNode): void {
    node = node;
  }
  public visitAllPostAfter(node: ASTNode): void {
    node = node;
  }
`);
  needType.ASTNode++;
  keys(kind)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .forEach(($cc) => {
      needType[$cc]++;
      save(`  public visit${$cc}Pre(node: ${$cc}): void {
    node = node;
  }
  public visit${$cc}Post(node: ${$cc}): void {
    node = node;
  }
`);
    });
  save(`}
`);
  export_("ASTVisitorBase", text, needType);
}
function pt2pw() {}
//
mv2pt();
//
pt2at();
//
pt2pw();
