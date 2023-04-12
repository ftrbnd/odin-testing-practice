const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'];

function caesarCipher(str, shiftFactor) {
    const res = new Array(str.length);
    for (let i = 0; i < str.length; i++) {
        res[i] = alphabet[(alphabet.indexOf(str[i].toUpperCase()) + shiftFactor) % 26];
    }
    return res.join('').toLowerCase();
}

module.exports = caesarCipher;