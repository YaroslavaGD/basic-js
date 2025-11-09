const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixRows = matrix.length;
  const matrixCols = matrix[0].length;

  const result = Array(matrixRows)
    .fill(0)
    .map(() => Array(matrixCols).fill(0));

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1],
  ];

  for (let i = 0; i < matrixRows; i += 1) {
    for (let j = 0; j < matrixCols; j += 1) {
      const isCurrentMine = matrix[i][j];
      if (!isCurrentMine) continue;

      result[i][j] = 1;

      directions.forEach(([dx, dy]) => {
        const x = i + dx;
        const y = j + dy;
        const isValidX = x >= 0 && x < matrixRows;
        const isValidY = y >= 0 && y < matrixCols;
        const isNeighborMine = matrix[x] ? matrix[x][y] : false;

        if (isValidX && isValidY && !isNeighborMine) {
          result[x][y] += 1;
        }
      });
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
