// Functions:
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Create a second call to the function with two more numbers as arguments.

let a = 8;
let b = 6;
function sum(x:number , y:number){
    return x + y
};
console.log("Result the first call" , sum(a , b));
console.log("Result the second call" , sum(7 ,4));

