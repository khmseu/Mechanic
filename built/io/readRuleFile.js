"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.readRuleFile = void 0;
const assert_1 = require("assert");
const path_1 = require("path");
const typia_1 = require("typia");
const vm2_1 = require("vm2");
const DependencyGeneratorProxy_1 = require("../dependencies/DependencyGeneratorProxy");
const assertClass_1 = require("../js/assertClass");
const checkArgs_1 = require("../js/checkArgs");
const Rule_1 = require("../rules/Rule");
const TargetMatcherProxy_1 = require("../targets/TargetMatcherProxy");
const VarTree_1 = require("../variables/VarTree");
const vmopts = {
    sandbox: {
        /**
         *
         * @param args
         * @return
         */
        Rule: (...args) => {
            (0, checkArgs_1.checkArgs)(1, args);
            const specraw = (input => {
                const $guard = typia_1.assert.guard;
                const __is = input => {
                    const $io0 = input => Array.isArray(input.Targets) && Array.isArray(input.Dependencies) && true;
                    return "object" === typeof input && null !== input && $io0(input);
                };
                if (false === __is(input))
                    ((input, _path, _exceptionable = true) => {
                        const $ao0 = (input, _path, _exceptionable = true) => (Array.isArray(input.Targets) || $guard(_exceptionable, {
                            path: _path + ".Targets",
                            expected: "Array<any>",
                            value: input.Targets
                        })) && (Array.isArray(input.Dependencies) || $guard(_exceptionable, {
                            path: _path + ".Dependencies",
                            expected: "Array<any>",
                            value: input.Dependencies
                        })) && true;
                        return ("object" === typeof input && null !== input || $guard(true, {
                            path: _path + "",
                            expected: "Resolve<IRuleArgRaw>",
                            value: input
                        })) && $ao0(input, _path + "", true);
                    })(input, "$input", true);
                return input;
            })(args[0]);
            return (0, Rule_1.Rule)({
                Targets: specraw.Targets.map((t) => {
                    const tt = (input => {
                        const $guard = typia_1.assert.guard;
                        const __is = input => {
                            const $io0 = input => true && true && true;
                            return null !== input && undefined !== input && ("string" === typeof input || "object" === typeof input && null !== input && $io0(input));
                        };
                        if (false === __is(input))
                            ((input, _path, _exceptionable = true) => {
                                const $ao0 = (input, _path, _exceptionable = true) => true && true && true;
                                return (null !== input || $guard(true, {
                                    path: _path + "",
                                    expected: "(Resolve<ITargetMatcherRaw> | string)",
                                    value: input
                                })) && (undefined !== input || $guard(true, {
                                    path: _path + "",
                                    expected: "(Resolve<ITargetMatcherRaw> | string)",
                                    value: input
                                })) && ("string" === typeof input || ("object" === typeof input && null !== input || $guard(true, {
                                    path: _path + "",
                                    expected: "(Resolve<ITargetMatcherRaw> | string)",
                                    value: input
                                })) && $ao0(input, _path + "", true));
                            })(input, "$input", true);
                        return input;
                    })(t);
                    if (typeof tt === "string") {
                        return tt;
                    }
                    else {
                        return new TargetMatcherProxy_1.TargetMatcherProxy(tt);
                    }
                }),
                Dependencies: specraw.Dependencies.map((d) => {
                    const dd = (input => {
                        const $guard = typia_1.assert.guard;
                        const __is = input => {
                            const $io0 = input => "object" === typeof input.generate && null !== input.generate && $io1(input.generate) && ("object" === typeof input.toString && null !== input.toString && $io1(input.toString));
                            const $io1 = input => true;
                            return "object" === typeof input && null !== input && $io0(input);
                        };
                        if (false === __is(input))
                            ((input, _path, _exceptionable = true) => {
                                const $ao0 = (input, _path, _exceptionable = true) => ("object" === typeof input.generate && null !== input.generate || $guard(_exceptionable, {
                                    path: _path + ".generate",
                                    expected: "Resolve<DataOrCallable>",
                                    value: input.generate
                                })) && $ao1(input.generate, _path + ".generate", true && _exceptionable) && (("object" === typeof input.toString && null !== input.toString || $guard(_exceptionable, {
                                    path: _path + ".toString",
                                    expected: "Resolve<DataOrCallable>",
                                    value: input.toString
                                })) && $ao1(input.toString, _path + ".toString", true && _exceptionable));
                                const $ao1 = (input, _path, _exceptionable = true) => true || $guard(_exceptionable, {
                                    path: _path + ".call",
                                    expected: "unknown",
                                    value: input.call
                                });
                                return ("object" === typeof input && null !== input || $guard(true, {
                                    path: _path + "",
                                    expected: "Resolve<IDependencyGeneratorRaw>",
                                    value: input
                                })) && $ao0(input, _path + "", true);
                            })(input, "$input", true);
                        return input;
                    })(d);
                    if (typeof dd === "string") {
                        return dd;
                    }
                    else {
                        return new DependencyGeneratorProxy_1.DependencyGeneratorProxy(dd);
                    }
                }),
                Recipe: (vars) => {
                    var _a;
                    (0, assert_1.equal)(typeof specraw.Recipe, "function");
                    return (_a = specraw.Recipe) === null || _a === void 0 ? void 0 : _a.call(vars);
                },
            });
        },
        /**
         * Gets var
         *
         * @param args
         * @returns
         */
        getVar: (...args) => {
            (0, checkArgs_1.checkArgs)(2, args);
            (0, assert_1.ok)(args[0] instanceof VarTree_1.VarTree, TypeError("first parameter must be a VarTree"));
            const vt = (0, assertClass_1.assertClass)(VarTree_1.VarTree, args[0]);
            const vn = (input => {
                const $guard = typia_1.assert.guard;
                const __is = input => {
                    return "string" === typeof input;
                };
                if (false === __is(input))
                    ((input, _path, _exceptionable = true) => {
                        return "string" === typeof input || $guard(true, {
                            path: _path + "",
                            expected: "string",
                            value: input
                        });
                    })(input, "$input", true);
                return input;
            })(args[1]);
            return vt.getVar(vn);
        },
        /**
         * Sets var
         *
         * @param args
         * @returns
         */
        setVar: (...args) => {
            (0, checkArgs_1.checkArgs)(3, args);
            (0, assert_1.ok)(args[0] instanceof VarTree_1.VarTree, TypeError("first parameter must be a VarTree"));
            const vt = args[0];
            const vn = (input => {
                const $guard = typia_1.assert.guard;
                const __is = input => {
                    return "string" === typeof input;
                };
                if (false === __is(input))
                    ((input, _path, _exceptionable = true) => {
                        return "string" === typeof input || $guard(true, {
                            path: _path + "",
                            expected: "string",
                            value: input
                        });
                    })(input, "$input", true);
                return input;
            })(args[1]);
            const vv = (input => {
                const $guard = typia_1.assert.guard;
                const __is = input => {
                    const $io0 = input => true;
                    return null === input || undefined === input || "string" === typeof input || "object" === typeof input && null !== input && $io0(input);
                };
                if (false === __is(input))
                    ((input, _path, _exceptionable = true) => {
                        const $ao0 = (input, _path, _exceptionable = true) => true || $guard(_exceptionable, {
                            path: _path + ".toString",
                            expected: "unknown",
                            value: input.toString
                        });
                        return null === input || undefined === input || "string" === typeof input || ("object" === typeof input && null !== input || $guard(true, {
                            path: _path + "",
                            expected: "(Resolve<IUserVarValue> | null | string | undefined)",
                            value: input
                        })) && $ao0(input, _path + "", true);
                    })(input, "$input", true);
                return input;
            })(args[2]);
            return vt.setVar(vn, vv);
        },
    },
    console: "inherit",
    require: {
        builtin: ["*"],
        context: "sandbox",
        external: true,
        root: "./",
    },
    sourceExtensions: ["mechanic"],
};
const vm = new vm2_1.NodeVM(vmopts);
const reqScript = new vm2_1.VMScript(`
module.exports = function(what) {
  require(what);
};
`);
const req = vm.run(reqScript);
const readRuleFile = (dir) => {
    const fn = (0, path_1.resolve)(dir, "manual.mechanic");
    req(fn);
};
exports.readRuleFile = readRuleFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZFJ1bGVGaWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2lvL3JlYWRSdWxlRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7OztBQUVILG1DQUFtQztBQUNuQywrQkFBK0I7QUFDL0IsaUNBQStCO0FBQy9CLDZCQUFzRDtBQUN0RCx1RkFBb0Y7QUFFcEYsbURBQWdEO0FBQ2hELCtDQUE0QztBQUc1Qyx3Q0FBcUM7QUFFckMsc0VBQW1FO0FBQ25FLGtEQUErQztBQUcvQyxNQUFNLE1BQU0sR0FBa0I7SUFDNUIsT0FBTyxFQUFFO1FBQ1A7Ozs7V0FJRztRQUNILElBQUksRUFBRSxDQUFDLEdBQUcsSUFBa0IsRUFBRSxFQUFFO1lBQzlCLElBQUEscUJBQVMsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkIsTUFBTSxPQUFPOytCQUFHLGNBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsT0FBTyxJQUFBLFdBQUksRUFBQztnQkFDVixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDakMsTUFBTSxFQUFFO3VDQUFHLGNBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUE2QixDQUFDLENBQUMsQ0FBQztvQkFDakQsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRLEVBQUU7d0JBQzFCLE9BQU8sRUFBRSxDQUFDO3FCQUNYO3lCQUFNO3dCQUNMLE9BQU8sSUFBSSx1Q0FBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDbkM7Z0JBQ0gsQ0FBQyxDQUFDO2dCQUNGLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUMzQyxNQUFNLEVBQUU7dUNBQUcsY0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7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