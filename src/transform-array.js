const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const res = [];
  let skipNext = false;
  let lastDiscardedIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (skipNext) {
      skipNext = false;
      lastDiscardedIndex = i;
      continue;
    }

    if (item === '--discard-next') {
      skipNext = true;
      continue;
    }

    if (item === '--discard-prev') {
      if (res.length > 0 && lastDiscardedIndex !== i - 1) {
        res.pop();
      }
      continue;
    }

    if (item === '--double-next') {
      if (i + 1 < arr.length) {
        res.push(arr[i + 1]);
      }
      continue;
    }

    if (item === '--double-prev') {
      if (res.length > 0 && lastDiscardedIndex !== i - 1) {
        res.push(res[res.length - 1]);
      }
      continue;
    }

    res.push(item);
  }

  return res;
}

module.exports = {
  transform
};
