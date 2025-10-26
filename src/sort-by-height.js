const { NotImplementedError } = require('../lib');

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
  if (!Array.isArray(arr)) return [];

  const sortedHeights = arr
    .filter((height) => height !== -1)
    .sort((a, b) => b - a);

  return arr.map((height) => height === -1 ? -1 : sortedHeights.pop());
}

module.exports = {
  sortByHeight
};
