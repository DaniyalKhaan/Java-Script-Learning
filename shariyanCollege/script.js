// Topic : Arrays relating coping vs real coping

// if we copy an array with assignment operator "=", the original value 
// will share the value with the assigned array, it means both the arrays 
// will share values so if remove or add element from one array the second array
// will also accept changes because they are sharing the values


// real copy:(we will use spread operator)
// if we want to copy an array to anther array completely we will have 
// to do this using spread operator "...", 
// example:

let array = [1,2,3];

let newArray = [...array];


console.log(newArray);
