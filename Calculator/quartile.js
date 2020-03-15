const divide = require('./divide');
const median = require('./median');

function quartile(a){
    quartiles = [];
    const arr = a.sort();

    half = Math.round(divide(a.length, 2));

    q1 = median(arr.slice(0,half));
    q2 = median(a);
    q3 = median(arr.slice(half, arr.length));

    quartiles.push(q1);
    quartiles.push(q2);
    quartiles.push(q3);

    return(quartiles);
}
module.exports = quartile;
