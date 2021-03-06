/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable prefer-reflect */
Object.defineProperty(global, "__stack", {
  get: function () {
    let orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function (_, stack) {
      return stack;
    };
    let err = new Error();
    Error.captureStackTrace(err, arguments.callee);
    let {stack} = err;
    Error.prepareStackTrace = orig;
    return stack;
  }
});

Object.defineProperty(global, "__line", {
  get: function () {
    return __stack[1].getLineNumber();
  }
});

Object.defineProperty(global, "__function", {
  get: function () {
    return __stack[1].getFunctionName();
  }
});

function foo () {
  console.log(__line);
  console.log(__function);
}

foo();
