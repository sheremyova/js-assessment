exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    const regexp = /\d/g;
    return regexp.test(str);
  },

  containsRepeatingLetter: function(str) {
    return (/([A-Za-z])\1/).test(str);
  },

  endsWithVowel: function(str) {
    return /[aeiou]$/i.test(str);
  },

  captureThreeNumbers: function(str) {
    const threeNumbers = /\d{3}/.exec(str);
    if (threeNumbers) {
      return threeNumbers[0];
    }
    else return false;
    
  },

  matchesPattern: function(str) {
    const pattern = /^\d{3}-\d{3}-\d{4}$/;
    return pattern.test(str);
  },

  isUSD: function(str) {
    let regex = (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/);
    return regex.test(str);
  }
};
