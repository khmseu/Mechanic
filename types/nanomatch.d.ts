export = index;
declare function index(list: any, patterns: any, options: any): any;
declare namespace index {
  function all(str: any, patterns: any, options: any): any;
  function any(str: any, patterns: any, options: any): any;
  namespace cache {
    function cache(cacheName: any): any;
    const caches: {};
    function get(name: any, key: any): any;
    function has(cacheName: any, key: any): any;
    function set(cacheName: any, key: any, val: any): any;
  }
  function capture(pattern: any, str: any, options: any): any;
  function clearCache(): void;
  function compile(ast: any, options: any): any;
  function compilers(nanomatch: any, options: any): void;
  function contains(str: any, patterns: any, options: any): any;
  function create(pattern: any, options: any): any;
  function every(list: any, patterns: any, options: any): any;
  function isMatch(str: any, pattern: any, options: any): any;
  function makeRe(pattern: any, options: any): any;
  function match(list: any, pattern: any, options: any): any;
  function matchBase(pattern: any, options: any): any;
  function matchKeys(obj: any, patterns: any, options: any): any;
  function matcher(pattern: any, options: any): any;
  function not(list: any, patterns: any, options: any): any;
  function parse(pattern: any, options: any): any;
  function parsers(nanomatch: any, options: any): void;
  namespace parsers {
    const not: string;
  }
  function some(list: any, patterns: any, options: any): any;
}