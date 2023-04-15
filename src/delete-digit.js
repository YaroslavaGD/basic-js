const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split("");
  let currentArr = [];
  let newNumbers = [];

  currentArr.push(...arr);

  arr.forEach((_, i) => {
    currentArr = [];
    currentArr.push(...arr);
    currentArr.splice(i, 1);
    newNumbers.push(+currentArr.join(""));
  });

  return Math.max(...newNumbers);
}

module.exports = {
  deleteDigit
};
