// Topic : functoin expression also called anonymous function ( function without name is called function expression )
// Note that functions expression are not hoisted in js (rest functions are hoisted) 

// we can also make function in an expression in javaScript called function expression
// we can assign expression functions  to variables, since function expression does not have any name
// it will be called by the variable name it is assigned to 
// syntax:

let x = function (a,b){return a + b;};  // a function of type expression

console.log(x(2,4));

// we can also use function expression with html elements like on some events following are the example;

document.getElementById("button").onclick = function(){   // an function expression
    document.getElementById("h1").textContent = "Responsible";
}

