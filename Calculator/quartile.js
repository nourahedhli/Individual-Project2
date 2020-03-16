const divide = require('../Calculator/divide');
const median = require('../Calculator/meadian');

function quartile(a){
    let quartiles = [];
    const arr = a.sort();

    let half = Math.round(divide(a.length, 2));

    let q1 = median(arr.slice(0, half));
    let q2 = median(a);
    let q3 = median(arr.slice(half, arr.length));

    quartiles.push(q1);
    quartiles.push(q2);
    quartiles.push(q3);

    return(quartiles);
}
module.exports = quartile;
