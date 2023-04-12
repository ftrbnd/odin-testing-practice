const { add, subtract, divide, multiply } = require('../src/calculator');

test('Add 1 + 5', () => {
    expect(add(1, 5)).toBe(6);
});

test('Subtract 1 + 5', () => {
    expect(subtract(1, 5)).toBe(-4);
});

test('Divide 1 / 5', () => {
    expect(divide(1, 5)).toBe(0.2);
});

test('Multiply 1 * 5', () => {
    expect(multiply(1, 5)).toBe(5);
});