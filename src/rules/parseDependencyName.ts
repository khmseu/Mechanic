/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 *
 * @param  {string} m
 * @return
 */
function parseDependencyName(m: string) {
  const fp = m.split(/(%|(?:\$(?:\w+:)?\w+))/);
  const rx: string[] = [];
  const vr: Array<{
    ns: string;
    name: string;
  }> = [];
  let rs: string[] = [];
  fp.map((v) => {
    if (v === "%") {
      rs.push("(.*)");
    } else if (/^\$/.test(v)) {
      rx.push(rs.join(""));
      rs = [];
      const [ns, name] = /^\$(?:(\w+):)(\w+)$/.exec(v)!;
      vr.push({ ns, name });
    } else {
      rs.push(
        [...v]
          .map((c: string) => {
            c.replace(/\W/, "\\$&");
          })
          .join(""),
      );
    }
  });
  rx.push(rs.join(""));
  return { fp, rx, vr };
}
