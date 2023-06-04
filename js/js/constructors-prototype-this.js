//TAKE A LOOK AT CLOSURES.JS AS WELL

// //Function Constructors
// function Circle (radius) {
//     this.radius = radius;
//     // this.getArea = function () {
//     //     return Math.PI * Math.pow(this.radius, 2);
//     // };
// }
// Circle.prototype.getArea = function () {
//     return Math.PI * Math.pow(this.radius, 2);
// }

// var myCircle = new Circle(10); // new Object();
// console.log(myCircle);

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);
// // console.log(myCircle.getArea());


// Object literal and "this"
var literalCircle = {
    radius: 10,

    getArea: function () {
        var self = this;
        console.log(this);

        var increaseRadius = function () {
            self.radius = 20;
        };
        increaseRadius();
        console.log(this.radius);

        return Math.PI * Math.pow(this.radius, 2);
    }

};

console.log(literalCircle.getArea());