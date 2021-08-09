exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
      return str
          .split('')
          .reduce((res, c, i, arr) => {
            if (c === arr[i-1]) {
              res[res.length - 1] += c;
              return res;
            }
            return res.concat(c);
          } , [])
          .map(group => group.substring(0, amount))
          .join('');
  },

  wordWrap: function(str, cols) {
    return str
        .split(' ')
        .reduce((res, word) => {
          if (res.length && res[res.length - 1].length + 1 + word.length <= cols) {
            res[res.length - 1] += ' ' + word;
            return res;
          }
          return res.concat(word);
        }, [])
        .join('\n');
  },

  reverseString: function(str) {
    let splitString = str.split("");
    let reversedString = splitString.reverse();
    let joinArray = reversedString.join("");
    return joinArray;
  }
};
