// Problem: Find an smallest or largest number of an array
// THERE IS NO BUILT IN FUNCTION/METHOD AVAILABLE IN JS TO FIND THE SMALLES OR THE BIGGEST NUMBER IN AN ARRAY
// WE CAN FIND IT BY THE FOLLOWING LOGIC

// SOLUTION:

let anArray = [3,23,4,43,55,432,445,232,234,667,645,434,678,456,574];

anArray.sort(function (a,b){return a-b;});
// now when the array is sorted in Ascending order, index[0] contains the lowest value and indexLast[anArray.length-1] contain the highest value
// we can print the minimum or highest value like this
console.log(anArray[0]); // Minumum Value
console.log(anArray[anArray.length -1]); // Highest Value



// working fine.
