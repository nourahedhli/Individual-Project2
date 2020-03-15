const mean = require('./mean');
const sub = require('./Subtraction');
const add = require('./addition');
const divide = require('./divide');

function meanDeviation(a) {
    meanVal = mean(a);
    tot = 0;

    for(i = 0; i < a.length; i++) {
        dif = Math.abs(sub(meanVal, a[i]));
        tot = add(tot, dif);
    }

    return divide(tot, a.length);
}
module.exports = meanDeviation;
