const mean = require('../functions/mean');
const median = require('../functions/median');
const mode = require('../functions/mode');
const stdDev = require('../functions/stdDev');
const variance = require('../functions/variance');
const quartile = require('../functions/quartile');
const skew = require('../functions/skew');
const zscore = require('../functions/zscore');
const meanDeviation = require('../functions/meanDeviation');

arr1 = [1,5,2,3,4,6];
arr2 = [3,6,6,7,8,11,15,16];
arr3 = [1,1,1,2,2,3,3,3,3,3,4,4,5];

test('Mean of arr1 to equal 3.5', () => {
    expect(mean(arr1)).toBe(3.5);
});

test('Median of arr1 to equal 3.5', () => {
    expect(median(arr1)).toBe(3.5);
});

test('Mode of arr3 to equal 3', () => {
    expect(mode(arr3)).toBe(3);
});

test('Standard Deviation of arr2 to equal 4.3', () => {
    expect(stdDev(arr2)).toBeCloseTo(4.3,2);
});

test('Variance of arr2 to equal 18.5', () => {
    expect(variance(arr2)).toBe(18.5);
});

test('Quartile of arr1 to equal [2,3.5,5]', () => {
    expect(quartile(arr1)).toStrictEqual([2,3.5,5]);
});

test('Skew of arr1 to equal 0', () => {
    expect(skew(arr1)).toBe(0);
});

test('Zscore of 3 in arr3 to equal 0.25', () => {
    expect(zscore(3,arr3)).toBeCloseTo(0.25,1);
});

test('Mean Deviation of arr2 to equal 3.75', () => {
    expect(meanDeviation(arr2)).toBe(3.75);
});
