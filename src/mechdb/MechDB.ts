/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Database, verbose } from "sqlite3";
import { promisify } from "util";
import { CallbackC } from "./CallbackC";
import { CallbackGD } from "./CallbackGD";
import { CallbackGT } from "./CallbackGT";
import { CallbackSD } from "./CallbackSD";
import { CallbackST } from "./CallbackST";

/**
 * Mech db
 */
export class MechDB {
  /**
   * App id of mech db
   */
  private appId = 0x4d656368;
  /**
   * User ver of mech db
   */
  private userVer = 2;
  /**
   * Db  of mech db
   */
  private db: Database;
  /**
   * Creates an instance of mech db.
   */
  constructor() {
    // while initializing, use throw
    const sqlite3 = verbose();
    this.db = new sqlite3.Database(".mechanic.this.db", (errNew) => {
      if (errNew) {
        throw errNew;
      }
      this.db.get("pragma application_id", [], (errAppId, rowAppId) => {
        if (errAppId) {
          throw errAppId;
        }
        if (rowAppId.application_id === this.appId) {
          this.db.get("pragma user_version", [], (errUserVer, rowUserVer) => {
            if (errUserVer) {
              throw errUserVer;
            }
            if (rowUserVer.user_version === this.userVer) {
              return this.db;
            } else {
              this.rebuild();
              return this.db;
            }
          });
        } else {
          this.db.get("pragma schema_version", [], (errSchemaVer, rowSchemaVer) => {
            if (errSchemaVer) {
              throw errSchemaVer;
            }
            if (rowSchemaVer.schema_version === 0) {
              this.rebuild();
              return this.db;
            } else {
              throw Error("Found .mechanic.this.db but it is not a Mechanic this.db");
            }
          });
        }
      });
    });
  }
  // after initializing, use promises
  /**
   * Closes mech db
   * @returns close
   */
  public close(): Promise<void> {
    return promisify((callback: CallbackC) => {
      this.db.close((errp?: Error | null | undefined) => callback(errp || undefined, null));
    })();
  }
  /**
   * Gets dependency
   * @param outerName
   * @returns dependency
   */
  public getDependency(outerName: string): Promise<void> {
    return promisify((name: string, callback: CallbackGD) => {
      this.db.get("select generation, status from dependencies where name = ?", [name], (err, row) => {
        if (err) {
          callback(err, undefined);
        } else {
          callback(undefined, { generation: row.generation, status: JSON.parse(row.status) });
        }
      });
    })(outerName);
  }

  /**
   * Gets target
   * @param outerName
   * @returns target
   */
  public getTarget(outerName: string): Promise<void> {
    return promisify((name: string, callback: CallbackGT) => {
      //  export const getTarget: StringToPromise = promisify((name: string, callback: CallbackGT) => {
      this.db.get("select dependlist from targets where name = ?", [name], (err, row) => {
        if (err) {
          callback(err, undefined);
        } else {
          callback(undefined, JSON.parse(row.dependlist));
        }
      });
    })(outerName);
  }
  /**
   *
   * @return
   */
  public rebuild() {
    // try to empty
    this.db.all("select * from sqlite_master where type = 'table'", [], (err, rows) => {
      if (err) {
        throw err;
      }
      this.db.serialize(() => {
        rows.forEach((row) => this.db.run(`drop table ${row.name}`));
        // just in case
        this.db.run(`pragma user_version(0)`);
        // mark as mine
        this.db.run(`pragma application_id(${this.appId})`);
        // dependencies.status is a JSON object for files, or the content for variables
        // dependlist is a JSON object of an array of 2-element arrays (dependencies.rowid, dependencies.generation)
        this.db.run("create table dependencies(name text primary key, generation integer, status text)");
        this.db.run("create table targets(name text primary key, dependlist text)");
        // now at this version
        this.db.run(`pragma user_version(${this.userVer})`);
      });
    });
  }
  /**
   * Sets dependency
   * @param outerName
   * @param outerStatus
   * @returns
   */
  public setDependency(outerName: string, outerStatus: any) {
    return promisify((name: string, status: any, callback: CallbackSD) => {
      status = JSON.stringify(status);
      exports
        .getDependency(name)
        .then((old?: { generation: number; status: any }) => {
          if (old) {
            if (old.status === status) {
              callback(undefined, null);
            } else {
              this.db.run(
                "update dependencies set generation = generation + 1, status = ? where name = ?", //
                [status, name],
                (err?: Error) => callback(err, null),
              );
            }
          } else {
            this.db.run(
              "insert into dependencies(name, generation, status) values(?, 1, ?)", //
              [name, status],
              (err?: Error) => callback(err, null),
            );
          }
        })
        .catch((err?: Error) => callback(err, null));
    })(outerName, outerStatus);
  }
  /**
   * Sets target
   * @param outerName
   * @param outerDependlistJ
   * @returns target
   */
  public setTarget(outerName: string, outerDependlistJ: string[]): Promise<void> {
    return promisify((name: string, dependlistJ: string[], callback: CallbackST) => {
      const dependlist = JSON.stringify(dependlistJ);
      exports
        .getTarget(name)
        .then((old?: { generation: number; status: string }) => {
          if (old) {
            if (old.status === dependlist) {
              callback(undefined, null);
            } else {
              this.db.run(
                "update targets set dependlist = ? where name = ?", //
                [dependlist, name],
                (err?: Error) => callback(err, null),
              );
            }
          } else {
            this.db.run(
              "insert into targets(name, dependlist) values(?, ?)", //
              [name, dependlist],
              (err?: Error) => callback(err, null),
            );
          }
        })
        .catch((err?: Error) => callback(err, null));
    })(outerName, outerDependlistJ);
  }
}
