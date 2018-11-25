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

const options = require('options-parser')

let opts = options.parse({
  version: { short: 'v', flag: true },
  help: {
    short: 'h',
    flag: true,
    showHelp: {
      banner: 'Mechanic [options] [settings] [targets]',
      callback: () => {
        console.log('Home page:      https://github.com/khmseu/Mechanic\nDocumentation:  https://github.com/khmseu/Mechanic/wiki\nReport bugs to: https://github.com/khmseu/Mechanic/issues')
      }
    }
  }
  //   user: { required: true },
  //   all: { short: 'a', flag: true },
  //   host: { short: 'h', default: 'localhost' },
  //   input: { short: 'i', multi: true },
  //   r: { flag: true },
  //   db: { default: 'test' },
  //   out: { short: 'o', type: options.type.file.open.write() }
})

console.log(opts)

if (opts.opt.version) {
  console.log('Mechanic 0.1.0\nCopyright © 2018 Kai Henningsen\nLicense: MIT')
  process.exit()
}

const mdb = require('./mechdb')
console.error({mdb: mdb})
mdb.close().catch(err => console.error(err))
