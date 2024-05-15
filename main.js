// Functions:
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Create a second call to the function with two more numbers as arguments.
var a = 8;
var b = 6;
function sum(x, y) {
    return x + y;
}
;
console.log("Result the first call", sum(a, b));
console.log("Result the second call", sum(7, 4));
