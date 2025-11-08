const { NotImplementedError } = require('../lib');

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
  let number = n | 0;
  if (number < 10) return 0;
  const strNumber = String(number);
  const allNumbers = strNumber.split('').reduce((numArr, number, i) => {
    const newNumber = Number(strNumber.slice(0, i) + strNumber.slice(i + 1));
    numArr.push(newNumber);
    return numArr;
  }, []);
  return Math.max(...allNumbers);
}

module.exports = {
  deleteDigit
};
