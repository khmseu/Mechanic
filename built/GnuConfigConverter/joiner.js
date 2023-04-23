"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiner = void 0;
const logg_1 = require("./logg");
function joiner(list, dlm) {
    (0, logg_1.logg)("joiner");
    return list.filter((s) => !!s).join(dlm);
}
exports.joiner = joiner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9qb2luZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOzs7QUFFSCxpQ0FBOEI7QUFFOUIsU0FBZ0IsTUFBTSxDQUFDLElBQWMsRUFBRSxHQUFXO0lBQ2hELElBQUEsV0FBSSxFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCx3QkFHQyJ9