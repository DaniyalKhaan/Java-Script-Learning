// TOPIC: Passing functions as arguments to another functions
// javascript allow to send a function as argument to anther function 



function functionsCanAcceptFuntionsAsArguments(anyNameForFunction){

    anyNameForFunction();    // you have to invoke the function you just accepted
}


functionsCanAcceptFuntionsAsArguments(function(){console.log("THis function was send as Argument");});




