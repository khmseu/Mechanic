"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dAnalyse_1 = require("./dAnalyse");
const RuleObject_1 = require("./RuleObject");
const tmAnalyse_1 = require("./tmAnalyse");
// MIT License
//
// Copyright (c) 2018 Kai Henningsen
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
exports.Rule = (spec) => {
    const t = tmAnalyse_1.tmAnalyse(spec.Targets);
    const d = dAnalyse_1.dAnalyse(spec.Dependencies);
    RuleObject_1.rules.push(new RuleObject_1.RuleObject(t, d, spec.Recipe));
};
//# sourceMappingURL=index.js.map