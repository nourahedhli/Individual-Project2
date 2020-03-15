const stdDev = require('./stdDev');
const mean = require('./mean');
const sub = require('./Subtraction');
const divide = require('./divide');

function zscore(a,arr) {
    meanVal = mean(arr);
    dev = stdDev(arr);

    return(divide(sub(a, meanVal),dev));
}
module.exports = zscore;
