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
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { promisify } from "util";

const appId = 0x4d656368;
const userVer = 2;

import { verbose } from "sqlite3";
// while initializing, use throw
const sqlite3 = verbose();
const db = new sqlite3.Database(".mechanic.db", (err) => {
  if (err) {
    throw err;
  }
  // tslint:disable-next-line:no-shadowed-variable
  db.get("pragma application_id", [], (err, row) => {
    if (err) {
      throw err;
    }
    if (row.application_id === appId) {
      // tslint:disable-next-line:no-shadowed-variable
      db.get("pragma user_version", [], (err, row) => {
        if (err) {
          throw err;
        }
        if (row.user_version === userVer) {
          return db;
        } else {
          rebuild();
          return db;
        }
      });
    } else {
      // tslint:disable-next-line:no-shadowed-variable
      db.get("pragma schema_version", [], (err, row) => {
        if (err) {
          throw err;
        }
        if (row.schema_version === 0) {
          rebuild();
          return db;
        } else {
          throw Error("Found .mechanic.db but it is not a Mechanic DB");
        }
      });
    }
  });
});

function rebuild() {
  // try to empty
  db.all("select * from sqlite_master where type = 'table'", [], (err, rows) => {
    if (err) {
      throw err;
    }
    db.serialize(() => {
      rows.forEach((row) => db.run(`drop table ${row.name}`));
      // just in case
      db.run(`pragma user_version(0)`);
      // mark as mine
      db.run(`pragma application_id(${appId})`);

      // dependencies.status is a JSON object for files, or the content for variables
      // dependlist is a JSON object of an array of 2-element arrays (dependencies.rowid, dependencies.generation)
      db.run("create table dependencies(name text primary key, generation integer, status text)");
      db.run("create table targets(name text primary key, dependlist text)");

      // now at this version
      db.run(`pragma user_version(${userVer})`);
    });
  });
}

type CallbackGT = (errt?: Error, data?: number[]) => void;
type CallbackST = (errt?: Error, data?: null) => void;
type CallbackGD = (errt?: Error, data?: { generation: number, status: any }) => void;
type CallbackSD = (errt?: Error, data?: null) => void;
type CallbackC = (errt?: Error, data?: null) => void;

// after initializing, use promises
export const getTarget = promisify((name: string, callback: CallbackGT) => {
  db.get("select dependlist from targets where name = ?", [name], (err, row) => {
    if (err) {
      callback(err, undefined);
    } else {
      callback(undefined, JSON.parse(row.dependlist));
    }
  });
});

export const setTarget = promisify((name: string, dependlistJ: string[], callback: CallbackST) => {
  const dependlist = JSON.stringify(dependlistJ);
  exports.getTarget(name).then((old?: { generation: number, status: string }) => {
    if (old) {
      if (old.status === dependlist) {
        callback(undefined, null);
      } else {
        db.run("update targets set dependlist = ? where name = ?", [dependlist, name],
          (err?: Error) => callback(err, null));
      }
    } else {
      db.run("insert into targets(name, dependlist) values(?, ?)", [name, dependlist],
        (err?: Error) => callback(err, null));
    }
  }).catch((err?: Error) => callback(err, null));
});

export const getDependency = promisify((name: string, callback: CallbackGD) => {
  db.get("select generation, status from dependencies where name = ?", [name], (err, row) => {
    if (err) {
      callback(err, undefined);
    } else {
      callback(undefined, { generation: row.generation, status: JSON.parse(row.status) });
    }
  });
});

export const setDependency = promisify((name: string, status: any, callback: CallbackSD) => {
  status = JSON.stringify(status);
  exports.getDependency(name).then((old?: { generation: number; status: any }) => {
    if (old) {
      if (old.status === status) {
        callback(undefined, null);
      } else {
        db.run("update dependencies set generation = generation + 1, status = ? where name = ?",
          [status, name], (err?: Error) => callback(err, null));
      }
    } else {
      db.run("insert into dependencies(name, generation, status) values(?, 1, ?)",
        [name, status], (err?: Error) => callback(err, null));
    }
  }). catch ((err?: Error) => callback(err, null));
});

export const close = promisify((callback: CallbackC) => {
  db.close((errp?: Error|null) => callback(errp || undefined, null));
});
