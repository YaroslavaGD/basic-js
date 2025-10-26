const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = matrix[0].reduce((sum0, number) => sum0 + number, 0);

  for (let i = 0; i < matrix.length - 1; i += 1) {
    for (let j = 0; j < matrix[i + 1].length; j += 1) {
      if (matrix[i][j] !== 0) {
        sum += matrix[i + 1][j];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
