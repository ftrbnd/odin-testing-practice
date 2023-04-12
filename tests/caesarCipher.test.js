const caesarCipher = require('../src/caesarCipher');

test("Encrypt 'gio'", () => {
    expect(caesarCipher('gio', 1)).toBe('hjp');
});

test("Encrypt 'amazing'", () => {
    expect(caesarCipher('amazing', 12)).toBe('mymluzs');
});

test("Encrypt 'AmAZinG'", () => {
    expect(caesarCipher('AmAZinG', 12)).toBe('mymluzs');
});