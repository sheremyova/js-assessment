exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures: function(arr, fn) {
    return arr.map(v => () => fn(v));
  },

  partial: function(fn, str1, str2) {
    const res = fn(str1, str2);
    return (str3) => res.replace('!', '') + str3;
  },

  useArguments: function() {
    return Array.from(arguments).reduce((s, v) => s + v, 0);
  },

  callIt: function(fn) {
    return fn.apply(null, Array.from(arguments).slice(1));
  },

  partialUsingArguments: function(fn) {
    const firstArgs = Array.from(arguments).slice(1);

    return function() {
      const secondArgs = Array.from(arguments);
      return fn.apply(null, firstArgs.concat(secondArgs));
    }
  },

  curryIt: function(fn) {
    const totalArgsCnt = fn.length;
    let currentArgs = [];

    return function inner(v) {
      if (currentArgs.length < totalArgsCnt - 1) {
        currentArgs.push(v);
        return inner;
      } else {
        return fn.apply(null, currentArgs.concat(v));
      }
    }
  }
};
