// QuickWickGreeter.sayHello();
// fakename2Greeter.sayHi();

// function a() {
//     console.log("Hello Peoples!");
// }
// a();

// var a = (function () {
//     console.log("Hello Peoples!");
// });
// a();

//Imediately Invoked Function Expression
// IIFE
QuickWickGreeter.sayHello();
fakename2Greeter.sayHi();
(function (name) {
    console.log("Hello Peoples! " + name);
})("IIFENAME");