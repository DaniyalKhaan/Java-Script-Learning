// TOPIC : JAVA-SCRIPT IS NOT ASYNCRHONOUS IT IS SYNCHRONOUS

// YES JAVASCRIPT IS SYNCHRONOUS NOT ASYNCHRONOUS IT MEANS JS EXECUTE CODE SYNCHRONOUSLY meaning
// when one line execute it execute another line

// HOW JS EXECUTE SYNCHROUNOUS AND ASYNCHRONOUS CODE at a time?

// there are two stacks in js for code execution one is Main stack and the second one is side stack
// MAIN STACK: js put all synchronous code in main stack and execute them one by one 
// SIDE STACK: all the asynchronous code is shifted to side stack and when their delay time is over then they are moved
// to MAIN STACK where they got executed

// NOTE: JS first execute main stack(in which synchronous code is present), when all the code is executed then and 
// only then js checks with asynchronous code if asynchronous code is ready to be execute js will shift it to 
// MAIN STACK(which is empty now because all the synchronous code is executed) where the code will execute



// EXAMPLE:    The expected output of this code is One, Two, Fourth and then Three(because it has three second delay)
console.log("One");
console.log("Two");
setTimeout(function(){console.log("Third");},3000);
console.log("Fourth");
// BEHIND THE SCENCES EXECUTION OF THIS CODE WAS AS:
// first three line of synchronous code was placed in MAIN STACK and the setTimeout(ASYNCHROUNOUS CODE) was placed in 
// side stack
// then js execute all the three line of synchrounous code and print the given input and then ask from side stack
// is there code to be execute, side stack respond wait for 3 seconds then then there is a function to be execute
// then after 3 seconds main stack takes the function from side stack and execute the fucntion


// EXPEXT OUTPUT OF THIS EXAMPLE CODE:

// THERE IS NO DELAY THIS TIME IN SETTIMOUT BUT STIL IT EXECUTED LAST THIS IS BECUASE IT WAS MOVED TO SIDESTACK
// AND WHEN MAIN STACK BECOME EMPTY IT WAS MOVED AND EXECUTE IN MAIN STACK
console.log("One");
console.log("Two");
setTimeout(function(){console.log("Third");},0);  // no delay here
console.log("Fourth");
console.log("Fifth");
console.log("Six");


