/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
/**
 * Mech db
 */
export declare class MechDB {
    /**
     * App id of mech db
     */
    private appId;
    /**
     * User ver of mech db
     */
    private userVer;
    /**
     * Db  of mech db
     */
    private db;
    /**
     * Creates an instance of mech db.
     */
    constructor();
    /**
     * Closes mech db
     * @returns close
     */
    close(): Promise<void>;
    /**
     * Gets dependency
     * @param outerName
     * @returns dependency
     */
    getDependency(outerName: string): Promise<void>;
    /**
     * Gets target
     * @param outerName
     * @returns target
     */
    getTarget(outerName: string): Promise<void>;
    /**
     *
     * @return
     */
    rebuild(): void;
    /**
     * Sets dependency
     * @param outerName
     * @param outerStatus
     * @returns
     */
    setDependency(outerName: string, outerStatus: any): Promise<void>;
    /**
     * Sets target
     * @param outerName
     * @param outerDependlistJ
     * @returns target
     */
    setTarget(outerName: string, outerDependlistJ: string[]): Promise<void>;
}
//# sourceMappingURL=MechDB.d.ts.map