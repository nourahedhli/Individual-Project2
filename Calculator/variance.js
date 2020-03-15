const square = require('./square');
const add = require('./addition');
const divide = require('./divide');
const mean = require('./mean');

function variance(a){
    meanVal = mean(a);
    sum = 0;

    for(i = 0; i < a.length; i++){
        val = square(a[i] - meanVal);
        sum = add(sum, val);
    }
    return(divide(sum, a.length));
}
module.exports = variance;
