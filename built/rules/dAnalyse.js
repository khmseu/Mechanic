"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
function dAnalyse(depends) {
    const ret = [];
    depends.forEach((depend) => {
        if (Array.isArray(depend)) {
            ret.push({
                ns: depend[0],
                name: depend[1],
            });
        }
        else if (util_1.isFunction(depend)) {
            ret.push({
                name: depend,
            });
        }
        else if (typeof (depend) === "string") {
            const m = /^(\w+):(.*)$/.exec(depend);
            if (m) {
                ret.push({
                    ns: m[1],
                    name: m[2],
                });
            }
            else {
                ret.push({
                    name: depend,
                });
            }
        }
    });
    return ret;
}
exports.dAnalyse = dAnalyse;
//# sourceMappingURL=dAnalyse.js.map