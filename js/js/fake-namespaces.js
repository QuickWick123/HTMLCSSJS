// var name = "QuickWick";
// function sayHi () {
//     console.log("Hi " + name);
// }

// var QuickWickGreeter = {};
// QuickWickGreeter.name = "QuickWick";
// var greeting = "hello ";
// QuickWickGreeter.sayHello = function () {
//     console.log(greeting + QuickWickGreeter.name);
// }

(function (window) {
var QuickWickGreeter = {};
QuickWickGreeter.name = "QuickWick";
var greeting = "hello ";
QuickWickGreeter.sayHello = function () {
    console.log(greeting + QuickWickGreeter.name);
    }

    window.QuickWickGreeter = QuickWickGreeter;
})(window);

