// Functions are First-Class Data
// Functions ARE objects
function multiply(x, y) {
    return x * y;
};
console.log(multiply(5, 4));
multiply.version = "v.1.0.0";
console.log(multiply);
console.log(multiply.toString());
console.log(multiply.version);

// Function factory
function makeMultiplier(multiplier) {
    var myFunc = function(x) {
        return multiplier * x;
    };
    return myFunc;
};

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(5));

// Passing functions as arguments
function doOperation(x, operation) {
    return operation(x);
};

var result = doOperation(5, multiplyBy3);
console.log(result);
result = doOperation(100, doubleAll);
console.log(result)