

function DataWithoutSeed() {
    let arr = [];
    for(let i = 0; i < 3; i++) {
        const y = Math.random();
        arr.push(y);
        const x = Math.floor((Math.random() * 10) + 1);
        arr.push(x);

    }
    return arr ;
}

function DataWithSeed(){
    return [0.4, 0.5, 0.66, 3, 7, 12];
}

function DataTwoWithSeed() {
    return [0.1, 0.2, 0.68, 4, 9, 12];

}

function random_item(items)
{

    return items[Math.floor(Math.random()*items.length)];

}

const items = [254, 45, 212, 365, 2543,3456,12];

function randomN_numbers_withoutSeed (){
    let arr = DataWithoutSeed() ;
    for(let i = 0; i < 3; i++) {
        const y = items[Math.floor(Math.random() * items.length)];
        arr.push(y);
    }

    return arr ;

}

function randomN_numbers_withSeed (){
    let arr = DataWithSeed() ;
    for(let i = 0; i < 3; i++) {
        const y = items[Math.floor(Math.random() * items.length)];
        arr.push(y);
    }

    return arr ;

}


module.exports = DataWithoutSeed;
module.exports = random_item(items);
module.exports = DataWithSeed ;
module.exports = DataTwoWithSeed ;
module.exports = randomN_numbers_withoutSeed ;
module.exports = randomN_numbers_withSeed ;