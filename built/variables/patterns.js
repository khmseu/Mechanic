"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const identifier = "p{IDS}p{IDC}*";
exports.parseVar = `\\\${(?:(${identifier}):)?(${identifier})`;
exports.testVar = `\\\${(?:(?:${identifier}):)?(?:${identifier}})`;
exports.rexParseAsVar = new RegExp(`^${exports.parseVar}$`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmFyaWFibGVzL3BhdHRlcm5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxNQUFNLFVBQVUsR0FBRyxlQUFlLENBQUM7QUFDdEIsUUFBQSxRQUFRLEdBQUcsWUFBWSxVQUFVLFFBQVEsVUFBVSxHQUFHLENBQUM7QUFDdkQsUUFBQSxPQUFPLEdBQUcsY0FBYyxVQUFVLFVBQVUsVUFBVSxJQUFJLENBQUM7QUFDM0QsUUFBQSxhQUFhLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxnQkFBUSxHQUFHLENBQUMsQ0FBQyJ9