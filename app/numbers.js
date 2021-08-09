const { keys } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return num >> (bit - 1) & 1;
  },

  base10: function(str) {
    return parseInt(str,2);
  },

  convertToBinary: function(num) {
    return num.toString(2).padStart(8, '0');
  },

  multiply: function(a, b) {
    const k = 4; 
    return Math.round(a * b * (10 ** k)) / (10 ** k);
  }
};
