const square = require('./square');
const sqrRt = require('../Calculator/squareRoot');
const mean = require('../Calculator/mean');
const sub = require('../Calculator/Subtraction');

function stdDev(a){
    let meanVal = mean(a);
    let squareSub = [];

    let val;
    for (let i = 0; i < a.length; i++) {
        val = square(sub(a[i], meanVal));
        squareSub.push(val);
    }

    let stdMean = mean(squareSub);
    return(sqrRt(stdMean));
}
module.exports = stdDev;
