// Topic: return statement property in functions

// we can return something from a function, like we can declare return statement inside a function and
// whenever we call it from some place, it will return the value which was declared to be return to that 
// spot(line of code) from where the function was called.

let width = window.prompt("Enter the width");
let height = window.prompt("Enter the height");

let area = someFunction(width, height);
// we are assigning here the value of area by calling a method, which have return statment, so that
// the return statement is returning the value of result which is assigning to the area operator through
// = operator.

function someFunction(a, b){

    let result = a * b;
    return result;
}

console.log("Area : " , area);