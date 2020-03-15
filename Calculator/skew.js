const quartile = require('./quartile');
const add = require('./addition');
const sub = require('./Subtraction');
const multiply = require('./Product');
const divide = require('./divide');

function skew(a){
    quart = quartile(a);

    q1 = quart[0];
    q2 = quart[1];
    q3 = quart[2];

    num = (sub(add(q3,q1), multiply(2, q2)));
    den = sub(q3,q1);

    return divide(num, den);
}
module.exports = skew;
