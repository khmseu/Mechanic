"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = require("sqlite3");
const util_1 = require("util");
/**
 * Mech db
 */
class MechDB {
    /**
     * Creates an instance of mech db.
     */
    constructor() {
        /**
         * App id of mech db
         */
        this.appId = 0x4d656368;
        /**
         * User ver of mech db
         */
        this.userVer = 2;
        // while initializing, use throw
        const sqlite3 = sqlite3_1.verbose();
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
                        }
                        else {
                            this.rebuild();
                            return this.db;
                        }
                    });
                }
                else {
                    this.db.get("pragma schema_version", [], (errSchemaVer, rowSchemaVer) => {
                        if (errSchemaVer) {
                            throw errSchemaVer;
                        }
                        if (rowSchemaVer.schema_version === 0) {
                            this.rebuild();
                            return this.db;
                        }
                        else {
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
    close() {
        return util_1.promisify((callback) => {
            this.db.close((errp) => callback(errp || undefined, null));
        })();
    }
    /**
     * Gets dependency
     * @param outerName
     * @returns dependency
     */
    getDependency(outerName) {
        return util_1.promisify((name, callback) => {
            this.db.get("select generation, status from dependencies where name = ?", [name], (err, row) => {
                if (err) {
                    callback(err, undefined);
                }
                else {
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
    getTarget(outerName) {
        return util_1.promisify((name, callback) => {
            //  export const getTarget: StringToPromise = promisify((name: string, callback: CallbackGT) => {
            this.db.get("select dependlist from targets where name = ?", [name], (err, row) => {
                if (err) {
                    callback(err, undefined);
                }
                else {
                    callback(undefined, JSON.parse(row.dependlist));
                }
            });
        })(outerName);
    }
    /**
     *
     * @return
     */
    rebuild() {
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
    setDependency(outerName, outerStatus) {
        return util_1.promisify((name, status, callback) => {
            status = JSON.stringify(status);
            exports
                .getDependency(name)
                .then((old) => {
                if (old) {
                    if (old.status === status) {
                        callback(undefined, null);
                    }
                    else {
                        this.db.run("update dependencies set generation = generation + 1, status = ? where name = ?", //
                        [status, name], (err) => callback(err, null));
                    }
                }
                else {
                    this.db.run("insert into dependencies(name, generation, status) values(?, 1, ?)", //
                    [name, status], (err) => callback(err, null));
                }
            })
                .catch((err) => callback(err, null));
        })(outerName, outerStatus);
    }
    /**
     * Sets target
     * @param outerName
     * @param outerDependlistJ
     * @returns target
     */
    setTarget(outerName, outerDependlistJ) {
        return util_1.promisify((name, dependlistJ, callback) => {
            const dependlist = JSON.stringify(dependlistJ);
            exports
                .getTarget(name)
                .then((old) => {
                if (old) {
                    if (old.status === dependlist) {
                        callback(undefined, null);
                    }
                    else {
                        this.db.run("update targets set dependlist = ? where name = ?", //
                        [dependlist, name], (err) => callback(err, null));
                    }
                }
                else {
                    this.db.run("insert into targets(name, dependlist) values(?, ?)", //
                    [name, dependlist], (err) => callback(err, null));
                }
            })
                .catch((err) => callback(err, null));
        })(outerName, outerDependlistJ);
    }
}
exports.MechDB = MechDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVjaERCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21lY2hkYi9NZWNoREIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHFDQUE0QztBQUM1QywrQkFBaUM7QUFPakM7O0dBRUc7QUFDSCxNQUFhLE1BQU07SUFhakI7O09BRUc7SUFDSDtRQWZBOztXQUVHO1FBQ0ssVUFBSyxHQUFHLFVBQVUsQ0FBQztRQUMzQjs7V0FFRztRQUNLLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFTbEIsZ0NBQWdDO1FBQ2hDLE1BQU0sT0FBTyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzdELElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sTUFBTSxDQUFDO2FBQ2Q7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQzlELElBQUksUUFBUSxFQUFFO29CQUNaLE1BQU0sUUFBUSxDQUFDO2lCQUNoQjtnQkFDRCxJQUFJLFFBQVEsQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDMUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFO3dCQUNoRSxJQUFJLFVBQVUsRUFBRTs0QkFDZCxNQUFNLFVBQVUsQ0FBQzt5QkFDbEI7d0JBQ0QsSUFBSSxVQUFVLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBQzVDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQzt5QkFDaEI7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLE9BQU8sRUFBRSxD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