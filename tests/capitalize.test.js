const capitalize = require('../src/capitalize');

test('Capitalize hello', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('Capitalize ahhh', () => {
    expect(capitalize('ahhh')).toBe('Ahhh');
});