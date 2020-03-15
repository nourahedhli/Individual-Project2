const add = require('./addition');

function mode(a){
    ans = "none";
    ans_count = 0;

    if(a.length == 0){
        return ans;
    }

    unique_arr = [];
    for(i = 0; i < a.length; i++){
        if(unique_arr.includes(a[i])){
            continue;
        }
        else{
            unique_arr.push(a[i]);
        }
    }

    for(i = 0; i < unique_arr.length; i++){
        count = 0;
        for(j = 0; j < a.length; j++){
            if(a[j] == unique_arr[i]){
                count = add(count ,1);
            }
        }

        if(count == 1){
            continue;
        }
        else{
            if(ans_count < count){
                ans_count = count;
                ans = unique_arr[i];
            }
            else{
                continue;
            }
        }
    }

    return ans;
}
module.exports = mode;
