const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  const resArr = [];
  const templateArr = arr.filter(el => el !== -1).sort((a,b) => b-a);

  arr.forEach((el) => {
    if (el == -1) {
      resArr.push(el);
    } else {
      if (templateArr.length !== 0) resArr.push(templateArr.pop())
    }
  });

  return resArr;
}

module.exports = {
  sortByHeight
};
