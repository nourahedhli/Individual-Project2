const add = require('./addition');
const divide = require('./divide');

function median(a){
    arr = a.sort();
    mid = divide(arr.length,2);

    if(a.length % 2 == 0){
        ans = add(a[mid],a[mid-1]);
        ans = divide(ans, 2);
        return ans;
    }
    else{
        ans = a[mid-0.5];
        return ans;
    }
}
module.exports = median;
