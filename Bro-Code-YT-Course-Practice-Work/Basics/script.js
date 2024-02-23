// Topic : Rest Parameters (...)

// Rest parameters also work like spread operator but instead of Arrays or 
// Strings it works with function

// Rest Parameters can make a function takes multiple parameters
// Uses : suppose we have multiple variables and we need them for sum operation
// in a funtion, now if there is scene where we just want two or maybe three
// or any other number of arguments, so if we call that funtion with less arguments
// it will generate error

// SO in order to avoid this error we can use rest parameters and then 
// we can call the funtion with parameters available it that movement, it 
// will work with two, three , four ar any number of parameters and we
// will not need to make multiple funtions for multiple argument senario



// background functionality: when we use this operator it make any array for 
// arguments and it could be one, two , or any arguments ( it accept arguments as array elements)


// Syntax:  funtion funtionName(...(three dots) with any name for parameter)

// EXameple: funtion with rest parameters can accept any number of arguments

function functionName(...anyName){

    let addition = 0;

    for (let number of anyName){
        addition += number;
    }
    return addition;
}

let a = 2;
let b = 4;
let c = 6;
let d = 8;

console.log(functionName(a, b));
console.log(functionName(a, b, c, d));
console.log(functionName(a, b, c, d, 100, 3, 43));

// Now see this funtion will not generate any errors and we can pass any number
// of arguments