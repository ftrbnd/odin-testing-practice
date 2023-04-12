const reverseString = require('../src/reverseString');

test('Reverse hello', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('Reverse ahhh', () => {
    expect(reverseString('ahhh')).toBe('hhha');
});