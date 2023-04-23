"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataOrCallable = void 0;
class DataOrCallable {
    constructor(data) {
        this.call = (...args) => {
            if (this.callable)
                return this.callable(...args);
            else
                return this.data;
        };
        if (typeof data === "function") {
            this.data = null;
            this.callable = data;
        }
        else {
            this.data = data;
            this.callable = null;
        }
    }
}
exports.DataOrCallable = DataOrCallable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YU9yQ2FsbGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvRGF0YU9yQ2FsbGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxjQUFjO0lBR3pCLFlBQVksSUFBZ0I7UUFTNUIsU0FBSSxHQUFHLENBQUMsR0FBRyxJQUFXLEVBQU8sRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRO2dCQUFFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDOztnQkFDNUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLENBQUMsQ0FBQztRQVhBLElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBNEIsQ0FBQztTQUM5QzthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDSCxDQUFDO0NBS0Y7QUFoQkQsd0NBZ0JDIn0=