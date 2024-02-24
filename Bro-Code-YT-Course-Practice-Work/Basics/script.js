// Topic: forEach() method of Arrays

// forEach method call a funtion for each element of an array ( basically we can iterate 
// through array elements using this method but it add one more big functionality which is it call a function for each element )

// the forEach() method is not executed for empty elements.

let anArray = ["abcde", "ghi", "lmn", "pqr"];




// syntax: ArrayName.forEach(passFunctionNameHereWithoutParanthesis)


anArray.forEach(printArray);
// when we pass printArray here it call the function and execute the operation
// for every element in anArray

function printArray (arrayElements){
    console.log(arrayElements);
}

// we can also make a function inside the parameters of forEach(here) method like this
anArray.forEach(function (g){
    console.log(g);
})