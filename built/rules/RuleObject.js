"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
class RuleObject {
    constructor(targets, dependencies, recipe) {
        this.targets = targets;
        this.dependencies = dependencies;
        this.recipe = recipe;
    }
    matches(target) {
        const grouplist = [];
        this.targets.forEach((element) => {
            const groups = element.match(target);
            if (groups) {
                grouplist.push(groups);
            }
        });
        if (grouplist.length > 1) {
            throw new Error("Matches for several targets on one rule " + this);
        }
        return grouplist.length ? grouplist[0] : null;
    }
}
exports.RuleObject = RuleObject;
exports.rules = [];
//# sourceMappingURL=RuleObject.js.map