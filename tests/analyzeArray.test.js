const analyzeArray = require('../src/analyzeArray');

test("Analyze [1,2,3,4,5]", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
});

test("Analyze []", () => {
    expect(analyzeArray([])).toEqual({
        average: NaN,
        min: Infinity,
        max: -Infinity,
        length: 0
    });
});

test("Analyze [0]", () => {
    expect(analyzeArray([0])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 1
    });
});

test("Analyze [1]", () => {
    expect(analyzeArray([1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1
    });
});

test("Analyze [1,2]", () => {
    expect(analyzeArray([1,2])).toEqual({
        average: 1.5,
        min: 1,
        max: 2,
        length: 2
    });
});