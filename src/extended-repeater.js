const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  throw new NotImplementedError('Not implemented');
  // let res = "";
  // for (let i = 0; i < options.repeatTimes; i++) {
  //   res += str;
  //   for (let j = 0; j < options.additionRepeatTimes; j++) {
  //     res += options.addition;
  //     res += (j !== options.additionRepeatTimes - 1) ? options.additionSeparator : "";
  //   }
  //   res +=  (i !== options.repeatTimes - 1) ? options.separator : "";
  // }

  // return res;
}

module.exports = {
  repeater
};
