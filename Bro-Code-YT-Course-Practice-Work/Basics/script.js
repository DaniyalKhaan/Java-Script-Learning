

// Topic: forEach() method of Arrays

// forEach method call a funtion for each element of an array ( basically it iterate 
// through array elements but also it add one more big functionality which is it call a function for each element )

// the forEach() method is not executed for empty elements.

let anArray = ["abcde", "ghi", "lmn", "pqr"];

// This method gives as some(total 5  but 2 are required) arguments automaically which are given below( some of them are optional one is required)

// Arguments : functionAsCallback(required)      element(required)    index(optional)     array(optional)   thisvalue(optional)
// need    :         required                         required           optional              optional       optional

 


// syntax: ArrayName.forEach(passFunctionNameHereWithoutParanthesis)
//                              C A L L B A C K NAME


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