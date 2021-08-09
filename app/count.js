exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let counting = true;

    function countRec(start, end) {
      if (!counting) return;

      console.log(start);
      if (start !== end) {
        setTimeout(() => countRec(start + 1, end), 100);
      }
    }

    countRec(start, end);

    function cancel() { counting = false; }

    return { cancel }
  }
};
