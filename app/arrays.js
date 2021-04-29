exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
      // return arr.reduce(function(memo, element){
      //   return a + b
      // }, 0);
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
  },

  remove: function(arr, item) {
   return arr.filter(x => x !== item);
  },

  removeWithoutCopy: function(arr, item) {
    let i = 0;
    while ((i = arr.indexOf(item)) !== -1) {
      arr.splice(i, 1);
}
return arr;
  //   while (true) {
  //     const i = arr.indexOf(item);
  //     if (i === -1) {
  //       break;}
  //     arr.splice(i, 1);
  //   }
  //   return arr;
  },

  append: function(arr, item) {
    return arr.concat(item);
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
        count += 1;}
      }
      return count;
  },

  duplicates: function(arr) {
    const dups = [];
    const compare = [];

    for (let num of arr) {
      if (!compare.includes(num)) {
        compare.push(num);
      }
      else if (!dups.includes(num)) {
        dups.push(num);
      }
    }
    return dups
  },

  square: function(arr) {
    let squareArray = [];
    for (let i = 0; i < arr.length; i++) {
     squareArray.push(arr[i]*arr[i]);
    }
    return squareArray;
  },

  findAllOccurrences: function(arr, target) {
   let allOccurrences = [];
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] === target) {
       allOccurrences.push(i);
     }
   }
   return allOccurrences;
  }
};
