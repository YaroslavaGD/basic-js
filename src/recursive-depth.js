const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    if (arr.length === 0) return 1;

    let maxDepth = 0;
    const stack = [{ node: arr, depth: 1 }];

    while (stack.length > 0) {
      const { node, depth } = stack.pop();
      if (depth > maxDepth) maxDepth = depth;

      for (const element of node) {
        if (Array.isArray(element)) stack.push({ node: element, depth: depth + 1 })
      }
    }

    return maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
