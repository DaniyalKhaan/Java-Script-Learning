// Topic: callback in functions [ very important topic]

// callback : callback servers very crucial purpose in programming,
// it call a function from a function when the funtion is finished(a ryme right)
// like we can give a function name to another function in its parameters
// and it will call this function when it is finished

// we can acheive small functionalities like calculations etc whithout callback, but
// imagagine there is a function which reads a file here you will need callback
// so when the file reading is complete the function called the target function afterwars

// it play vital role in ascynchronious operation in java script

// ok, I think this points of callback are enough for now,lets goes straight to its implementation



// Example : callback funtion

// Ok so I have made two funtions one for display and one is a callback funtion
// which will take the name of the display funtion in parameters and will call
// display(printToConsole()) but when it is finished first,
// now lets call the callback funtion and see the result
iAmAcallBackFunction(5, 55, printToConsole);
// so it is working fine:
// here are some tips about this funtion :
// 1. when calling a callback funtion you have to give the genuone name of the 
// target funtion without parameters as argument to the callback funtion;


function printToConsole(takeSum){
    console.log(takeSum);

}

function iAmAcallBackFunction(a, b, anyNameForCallBack){

    let sum = a + b;
    anyNameForCallBack(sum);



}


// there is alot more we can acheive throgh callback funtions but will see later InshaAllah