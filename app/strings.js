exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    console.log(str);
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    let splitString = str.split("");
    let reversedString = splitString.reverse();
    let joinArray = reversedString.join("");
    return joinArray;
  }
};
