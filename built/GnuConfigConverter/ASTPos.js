"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("./logg");
class ASTPos {
    constructor(pos) {
        logg_1.logg("ASTPos");
        const { Col, IsValid, Line, Offset, String, ...rest_pos } = pos;
        this.Col = Col();
        this.IsValid = IsValid();
        this.Line = Line();
        this.Offset = Offset();
        this.String = String();
        this.rest = rest_pos;
    }
}
exports.ASTPos = ASTPos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUUG9zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1RQb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILGlDQUE4QjtBQUc5QixNQUFhLE1BQU07SUFTakIsWUFBWSxHQUFVO1FBQ3BCLFdBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNmLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7QUFuQkQsd0JBbUJDIn0=