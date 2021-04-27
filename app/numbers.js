const { keys } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    console.log(num);
    console.log(bit);
  },

  base10: function(str) {
    return parseInt(str,2);
  },

  convertToBinary: function(num) {
    const value = num.toString(2);
    console.log(num);
    console.log(value);
    return value;
    //return value.padStart(1,"0");
  },

  multiply: function(a, b) {
    const k = 4; 
    return Math.round(a * b * (10 ** k)) / (10 ** k);
  }
};
