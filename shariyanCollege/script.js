// Topic: How arrays are made in behind the scences in js
// js convert arrays to object by default

let anArray = [2,3,4,5,6];

console.log(typeof(anArray));  // the output is (object), it is because the js convert the array to an object

// Behind the scences js store anArray as object with index and value, see below example
/* let anArray = {
    0: 2,
    1: 3,
    2: 4,
    3: 5,
    4: 6

} 
*/



// IF THIS IS THE CASE THEN HOW WE WILL IDENTIFY ARRAY, IF IT IS SHOWN AS OBJECT WHEN USE TYPEOF() METHOD
// WE CAN IDENTIFY ARRAY BY isArray() method if this method return true it means it is an array if false then 
// it is not an array

console.log(Array.isArray(anArray)); // BY USING THIS METHOD WE CAN IDINTIFY ARRAY
