const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const frequency = new Map();

  domains.forEach((element) => {
    let currDomain = '';
    element
      .split('.')
      .reverse()
      .forEach((element) => {
        currDomain += `.${element}`;
        if (!frequency.has(currDomain)) {
          frequency.set(currDomain, 1);
          return;
        }

        const prev = frequency.get(currDomain);
        frequency.set(currDomain, prev + 1);
      });
  });

  return Object.fromEntries(frequency);
}

module.exports = {
  getDNSStats
};
