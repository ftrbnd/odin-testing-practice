function analyzeArray(arr) {
    return {
        average: average(arr),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    };
}

function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum / arr.length;
}

module.exports = analyzeArray;