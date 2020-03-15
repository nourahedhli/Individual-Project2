const square = require('./square');
const sqrRt = require('./squareRoot');
const mean = require('./mean');
const sub = require('./Subtraction');

function stdDev(a){
    meanVal = mean(a);
    squareSub = []

    for(i = 0; i < a.length; i++){
        val = square(sub(a[i],meanVal));
        squareSub.push(val);
    }

    stdMean = mean(squareSub);
    return(sqrRt(stdMean));
}
module.exports = stdDev;
