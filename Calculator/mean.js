const add = require('./addition');
const divide = require('./divide');

function mean(a){
    tot = 0;

    if(a.length == 0){
        return "none";
    }

    for(i = 0; i < a.length; i++){
        tot = add(tot, a[i])
    }

    ans = divide(tot, a.length);
    return ans;
}
module.exports = mean;
