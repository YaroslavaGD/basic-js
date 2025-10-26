const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (typeof str !== 'string' || str.length === 0) return '';

  let res = '';
  let currCount = 1;

  for (let i = 1; i <= str.length; i += 1) {
    const curr = str[i];
    const prev = str[i - 1];

    if (curr === prev) currCount += 1;
    else {
      res += (currCount > 1 ? currCount : '') + prev;
      currCount = 1;
    }
  }

  return res;
}

module.exports = {
  encodeLine
};
