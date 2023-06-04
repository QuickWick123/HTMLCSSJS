// var name = "FakeName2";
// function sayHi () {
//     console.log("Hi " + name);
// }

// var fakename2Greeter = {};
// fakename2Greeter.name = "FakeName2";
// var greeting = "hi ";
// fakename2Greeter.sayHi = function () {
//     console.log(greeting + fakename2Greeter.name)
// }

(function (window) {
    var fakename2Greeter = {};
    fakename2Greeter.name = "FakeName2";
    var greeting = "hi ";
    fakename2Greeter.sayHi = function () {
        console.log(greeting + fakename2Greeter.name)
    }

    window.fakename2Greeter = fakename2Greeter;
})(window);

//     1  (function(window) {
//     2 
//     3  var obj = {};
//     4
//     5  obj.dreamOn = function () {
//     6   console.log("I want to see the global scope! Let me out!");
//     7  };
//     8
//     9  window.doer = obj;
//     10 
//     11 })(window);
//     12
//     13 doer.dreamOn();