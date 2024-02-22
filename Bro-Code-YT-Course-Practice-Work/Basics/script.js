// Hint: Interested Topic (Learning something new )
// Topic: Idderation through Arrays via for loop

// if we have an array and we need to apply or do something on all of its 
// elements we can achive this via for loop

// Example:

let job = ["Softwear Engineer", "Secuiry Expert","Dev-Ops Enginner", "Android Developer"];



for ( let i = 0; i < job.length; i++){
    console.log(job[i]);
} // we can travel to complete array this way using for loop. Make sure 
// that the length of the counter variable is just < (less only) than the 
// length of the Array



// Now lets do the same in reverse order in the same array, if sometimes needed we
// can achive Array reversily

for (let i=job.length -1 ; i >= 0; i--){
    console.log(` ${job[i]} This will print all elements in revere order`);
}


// there is also another method available in java script for the same functionality
// I was not familiar with this method, today I found this method
// let me show you the syntax and functionality(already told you is the same)

for ( let i of job){
    console.log(i);
  // isnt this very simple?
  // keep one thing in mind that in this method we just print the counter
  // variable it prints the complete array but in normal for loop we use 
  // array name than inside matrix brackets [] we put counter variable name 
}