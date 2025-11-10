const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  isLetter(char) {
    return this.alphabet.includes(char);
  }

  indexOf(char) {
    return this.alphabet.indexOf(char);
  }

  encryptedOrDecryptedChar(msgChar, keyChar, operation) {
    const msgCharIndex = this.indexOf(msgChar);
    const keyCharIndex = this.indexOf(keyChar);
    let charIndex;

    if (operation === 'encrypt') {
      charIndex = (msgCharIndex + keyCharIndex) % this.alphabet.length;
    } else if (operation === 'decrypt') {
      charIndex = (msgCharIndex - keyCharIndex + this.alphabet.length) % this.alphabet.length;
    } else {
      throw new Error('Invalid operation!');
    }

    return this.alphabet[charIndex];
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const msg = message.toUpperCase();
    const k = key.toUpperCase();

    let resultMsg = '';
    let keyIndex = 0;

    for (let i = 0; i < msg.length; i += 1) {
      const msgChar = msg[i];
      if (this.isLetter(msgChar)) {
        const keyChar = k[keyIndex % k.length];
        const encryptedChar = this.encryptedOrDecryptedChar(msgChar, keyChar, 'encrypt');

        resultMsg += encryptedChar;
        keyIndex += 1;
      } else {
        resultMsg += msgChar;
      }
    }

    return this.isDirect ? resultMsg : resultMsg.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const msg = message.toUpperCase();
    const k = key.toUpperCase();

    let resultMsg = '';
    let keyIndex = 0;

    for (let i = 0; i < msg.length; i += 1) {
      const msgChar = msg[i];
      if (this.isLetter(msgChar)) {
        const keyChar = k[keyIndex % k.length];
        const decryptedChar = this.encryptedOrDecryptedChar(msgChar, keyChar, 'decrypt');

        resultMsg += decryptedChar;
        keyIndex += 1;
      } else {
        resultMsg += msgChar;
      }
    }

    return this.isDirect ? resultMsg : resultMsg.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
