const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  const activity = parseFloat(sampleActivity);
  const isNumber = !isNaN(activity);

  if (activity > MODERN_ACTIVITY || activity <= 0 || !isNumber) return false;

  const lnN0N = Math.log(MODERN_ACTIVITY / activity);
  const log2 = Math.log(2);
  const k = log2 / HALF_LIFE_PERIOD;


  return Math.ceil(lnN0N / k);
}

module.exports = {
  dateSample
};
