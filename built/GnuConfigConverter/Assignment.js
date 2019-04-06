"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const STKind_1 = require("./STKind");
class Assignment {
    constructor(Name, Value) {
        this.Name = Name;
        this.Value = Value;
        this.kind = STKind_1.STKind.Assignment;
    }
    js() {
        return ["let", ...this.Name, "=", ...this.Value, ";", "/*4*/"].join(" ");
    }
}
exports.Assignment = Assignment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzaWdubWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQXNzaWdubWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBR0gscUNBQWtDO0FBRWxDLE1BQWEsVUFBVTtJQUVyQixZQUFtQixJQUFZLEVBQVMsS0FBYTtRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUQ5QyxTQUFJLEdBQXNCLGVBQU0sQ0FBQyxVQUFVLENBQUM7SUFDSyxDQUFDO0lBQ2xELEVBQUU7UUFDUCxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0UsQ0FBQztDQUNGO0FBTkQsZ0NBTUMifQ==