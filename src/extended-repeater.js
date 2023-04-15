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
  const currentOptions = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 0,
    additionSeparator: '|'
  }

  let result = "";

  if (options.hasOwnProperty('repeatTimes')) currentOptions.repeatTimes = options.repeatTimes;
  if (options.hasOwnProperty('separator')) currentOptions.separator = options.separator;
  if (options.hasOwnProperty('addition')) currentOptions.addition = options.addition;
  if (options.hasOwnProperty('additionRepeatTimes')) currentOptions.additionRepeatTimes = options.additionRepeatTimes;
  if (options.hasOwnProperty('additionSeparator')) currentOptions.additionSeparator = options.additionSeparator;

  for (let i = 0; i < currentOptions.repeatTimes; i++) {
    result += str;
    if (currentOptions.addition !== "") {
      result += currentOptions.addition;
      for (let j = 0; j < currentOptions.additionRepeatTimes-1; j++) {
        if (j !== currentOptions.additionRepeatTimes - 1) result += currentOptions.additionSeparator;
        result += currentOptions.addition;
      }
    }

    if (i != currentOptions.repeatTimes - 1) result += currentOptions.separator;
  }

  return result;
}

module.exports = {
  repeater
};
