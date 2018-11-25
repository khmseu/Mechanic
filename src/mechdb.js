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

const util = require('util')

const appId = 0x4d656368
const userVer = 2

// while initializing, use throw
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('.mechanic.db', err => {
  if (err) {
    throw err
  }
  db.get('pragma application_id', [], (err, row) => {
    if (err) {
      throw err
    }
    if (row.application_id === appId) {
      db.get('pragma user_version', [], (err, row) => {
        if (err) {
          throw err
        }
        if (row.user_version === userVer) {
          return db
        } else {
          rebuild()
          return db
        }
      })
    } else {
      db.get('pragma schema_version', [], (err, row) => {
        if (err) {
          throw err
        }
        if (row.schema_version === 0) {
          rebuild()
          return db
        } else {
          throw Error('Found .mechanic.db but it is not a Mechanic DB')
        }
      })
    }
  })
})

function rebuild () {
  // try to empty
  db.all("select * from sqlite_master where type = 'table'", [], (err, rows) => {
    if (err) {
      throw err
    }
    db.serialize(() => {
      rows.forEach(row => db.run(`drop table ${row.name}`))
      // just in case
      db.run(`pragma user_version(0)`)
      // mark as mine
      db.run(`pragma application_id(${appId})`)

      // dependencies.status is a JSON object for files, or the content for variables
      // dependlist is a JSON object of an array of 2-element arrays (dependencies.rowid, dependencies.generation)
      db.run('create table dependencies(name text primary key, generation integer, status text)')
      db.run('create table targets(name text primary key, dependlist text)')

      // now at this version
      db.run(`pragma user_version(${userVer})`)
    })
  })
}

// after initializing, use promises
exports.getTarget = util.promisify((name, callback) => {
  db.get('select dependlist from targets where name = ?', [name], (err, row) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, JSON.parse(row.dependlist))
    }
  })
})

exports.setTarget = util.promisify((name, dependlist, callback) => {
  dependlist = JSON.stringify(dependlist)
  exports.getDependency(name).then(old => {
    if (old) {
      if (old.dependlist === dependlist) {
        callback(null, null)
      } else {
        db.run('update targets set dependlist = ? where name = ?', [dependlist, name], err => callback(err, null))
      }
    } else {
      db.run('insert into targets(name, dependlist) values(?, ?)', [name, dependlist], err => callback(err, null))
    }
  }).catch(err => callback(err, null))
})

exports.getDependency = util.promisify((name, callback) => {
  db.get('select generation, status from dependencies where name = ?', [name], (err, row) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, { generation: row.generation, status: JSON.parse(row.status) })
    }
  })
})

exports.setDependency = util.promisify((name, status, callback) => {
  status = JSON.stringify(status)
  exports.getDependency(name).then(old => {
    if (old) {
      if (old.status === status) {
        callback(null, null)
      } else {
        db.run('update dependencies set generation = generation + 1, status = ? where name = ?', [status, name], err => callback(err, null))
      }
    } else {
      db.run('insert into dependencies(name, generation, status) values(?, 1, ?)', [name, status], err => callback(err, null))
    }
  }).catch(err => callback(err, null))
})

exports.close = util.promisify(callback => {
  db.close(err => callback(err, null))
})
