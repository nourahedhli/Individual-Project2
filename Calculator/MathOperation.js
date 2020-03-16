const addition = require('../Calculator/addition');
const product = require('../Calculator/Product');
const divide = require('../Calculator/divide');
const subtract = require('../Calculator/Subtraction');
const square_root = require('../Calculator/squareRoot');
const square = require('../Calculator/square');

class MathOperation {

    static sum(a = null, b = null) {
        if (Array.isArray(a)) {
            return addition.sum(a)
        } else {
            return addition.sum(a, b)
        }


    }

    static subtract(a, b) {
        return subtract(a, b);


    }

    static product(a, b) {
        return product (a, b);
    }

    static divide(a, b) {
        return divide(a, b);

    }

    static square_root(a) {
        return square_root(a)

    }

    static square(a) {
        return square(a)
    }
}

module.exports = MathOperation;