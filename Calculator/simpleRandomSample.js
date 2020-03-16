const data = require('../Calculator/randomeData');

function simpleRandomSample(x){

    let dataset = [];
    for (let i = 0; i < x; i++){
        let y = data.randomN_numbers_withSeed();
        for (let element in y){
            if (dataset.length <= x) {
                dataset.push(element);
            }
            else{
                break;
            }
        }

        if (dataset === x){
            break;
        }

        }
        return dataset;
    }




module.exports = simpleRandomSample;