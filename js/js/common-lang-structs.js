var string = "Hello";
string += " World";
console.log(string + "!");

// REGULAR MATH OPERATORS
console.log((5+4)/3);
console.log(undefined/5);
function test1 (a) {
    console.log(a/5);
}
test1();

// EQUALITY
var x = 4, y = 4;
if (x == y) {
    console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
    console.log("x='4' is equal to y=4");
}

// STRICT EQUALITY
if (x === y) {
    console.log("Strict: x='4' is equal to y=4");
}
else {
    console
    .log("Strict x='4' is NOT equal to y=4");
}

// If statement (all false)
if (false || null || undefined || "" || 0 || NaN) {
    console.log("This line won't ever execute");
}
else {
    console.log ("All false");
}

// If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
    console.log("All true");
}

// Best Practice for {} style
// curly brace on the same or next line...
// Is it just a style?
function a()
{
    return //This will put return; and it will return as undefined
    {
        name: "QuickWick"
    };
}
function b() {
    return {
        name: "QuickWick"
    };
}

console.log(a()); //Will show undefined
console.log(b()); //Will return QuickWick

// For Loop
var sum = 0;
for (var i = 0; i<10; i++) {
    console.log(i)
    sum = sum + i;
}
console.log("Sum of 0 through 9 is: " + sum);