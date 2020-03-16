const add = require('./addition');
const divide = require('./divide');

function mean(a){
    let tot = 0;

    if(a.length === 0){
        return "none";
    }

    for(let i = 0; i < a.length; i++){
        tot = add(tot, a[i])
    }

    let ans = divide(tot, a.length);
    return ans;
}

module.exports = mean;
