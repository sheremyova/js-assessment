/* eslint-disable no-undef */
exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
      function listFilesRec(data, dirName, isInsideDirName) {
        const { dir, files } = data;
  
        return files.flatMap((file) => {
          const isCountFile = isInsideDirName || dir === dirName;
          if (typeof file === 'object') return listFilesRec(file, dirName, isCountFile);
          else if (isCountFile) return file;
          else return [];
        });
      }
  
      return listFilesRec(data, dirName, !dirName);
  },

  permute: function(arr) {
    if (arr.length === 2) {
      const [a, b] = arr;
      return [[a, b], [b, a]];
    }

    return arr.flatMap(
        (v1, i) => this.permute(arr.filter((v2, j) => i !== j))
            .map(res => [v1].concat(res))
    );
  },

  fibonacci: function(n) {
    if (n < 2) {
      return n;
    }
    else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  },

  validParentheses: function(n) {

  }
};
