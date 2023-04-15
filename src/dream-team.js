const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let res = "";

  res = members.map((element) => {
    if (typeof element === 'string' || element instanceof String) {
      return convertStringName(element);
    }

    return "";
  }).sort().join("");

  function convertStringName(name) {
    let firstSymbol = name;
    firstSymbol = firstSymbol.replace(/\s/g,"").toUpperCase();
    firstSymbol = firstSymbol[0];

    return firstSymbol;
  }

  return res;
}


module.exports = {
  createDreamTeam
};
