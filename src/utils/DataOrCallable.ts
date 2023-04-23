import { DataFromJS } from "../js/DataFromJS";

export class DataOrCallable {
  private data: DataFromJS;
  private callable: ((...args: any) => any) | null;
  constructor(data: DataFromJS) {
    if (typeof data === "function") {
      this.data = null;
      this.callable = data as typeof this.callable;
    } else {
      this.data = data;
      this.callable = null;
    }
  }
  call = (...args: any[]): any => {
    if (this.callable) return this.callable(...args);
    else return this.data;
  };
}
