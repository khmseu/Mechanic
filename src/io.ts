import {existsSync} from 'fs';
import {isAbsolute, normalize, parse, resolve} from 'path';

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
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// modified from path-search module
type string3 = [string, string, string];
export function pathSearch(path: string[], name: string): string3 {
  const triple = (dir: string): string3 => {
    if (isAbsolute(name)) {
      return [resolve(name), parse(name).root, normalize(name)];
      }
    return [resolve(dir, name), resolve(dir), normalize(name)];
  };
  if (isAbsolute(name)) {
    return triple('');
    }
  for (const dir of path) {
    const candidate = resolve(dir, name);
    if (existsSync(candidate)) {
      return triple(dir);
    }
    }
  return triple(path[0]);
}
