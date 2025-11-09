const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const frequency = (arr, item) => {
    return arr.reduce((count, x) => x === item ? count + 1 : count, 0);
  }
  const uniqueChars1 = new Set(s1);
  const uniqueChars2 = new Set(s2);
  const allUniqueChars = new Set(uniqueChars1.intersection(uniqueChars2));
  
  let res = 0;
  const sArr1 = s1.split('');
  const sArr2 = s2.split('');
  allUniqueChars.forEach(element => {
    const frequency1 = frequency(sArr1, element);
    const frequency2 = frequency(sArr2, element);
    res += Math.min(frequency1, frequency2);
  });

  return res;
}

module.exports = {
  getCommonCharacterCount
};
