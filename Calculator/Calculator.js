const MathOperations = require('./MathOperation');

class Calculator {
    Add(a = null, b = null) {
        if (Array.isArray(a)) {
            return this.Result = MathOperations.sum(a);

        } else {
            return this.Result = MathOperations.sum(a, b);
        }
    }

    Subtract(a,b){
        return this.Result = MathOperations.subtract(a,b);

    }
    Divide(a,b) {
        return this.Result = MathOperations.divide(a,b);
    }
    Multiply(a,b) {
        return this.Result = MathOperations.product(a,b);
    }
    square(a){
        return this.Result = MathOperations.square(a);
    }

    squareRoot (a){
        return this.Result = MathOperations.square_root(a);
    }
}


module.exports = Calculator;