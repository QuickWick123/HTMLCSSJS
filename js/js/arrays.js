// var array = new Array();
// array[0] = "Dog";
// array[1] = 2;
// array[2] = function (name) {
//     console.log("Hello " + name)
// };
// array[3] = {course: "HTML, CSS & JS"};

// console.log(array);
// console.log(array[1]);
// array[2] ("Fido");
// array[2](array[0]);
// // console.log(array[2](array[0])); // undefined
// console.log(array[3].course);

// // SHORT HAND ARRAY CREATION
// var alphanum = [1, "a", 2, "z", "AceofSpades"];
// console.log(alphanum[1]);

// var names = [
//     { name: "Quick"},
//     { name: "Wick"},
//     "Joe"
// ];
// console.log(names);

// for (var i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// names[100] = "Jim";

// for (var i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// SHORT HAND ARRAY CREATION PT 2
var names2 = ["Quick", "Wick", "joe"];

// var myObj = {
//     name: "Quick",
//     course: "HTML/CSS/JS",
//     platform: "Github"
// };

// for (var prop in myObj) {
//     console.log(prop + ": " + myObj[prop])
// };

// for (var name in names2) {
//     console.log("hello " + names2[name]);
// }

names2.greeting = "Hi!";

for (var name in names2) {
    console.log("Hello " + names2[name]);
};