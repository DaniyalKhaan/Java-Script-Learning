// Topic: array.sort() method
// we can sort arrays aplphabaticaly ascending or descending , also can sort
// numeracaly . 

// Problem to Solve: Find an smallest or largest number of an array

// Following are the functionalites we can do by sort methods

/* 
Alphabetically Ascending Sort = array.sort();
Alphabetically desending Sort = array.reverse();

Numerically Ascending Sort (sort() + function that return a - b);
Numerically Descending Sort (sort() + function that return b - a);

REMEMBER THE UPPER METHODS WILL MAKE CHANGES TO ORIGINAAL ARRAY SO IN ORDER 
TO NOT MAKE CHANGES TO ORIGINAL ARRAY WE CAN USE THE FOLLOWING SORTED METHODS
THAT WERE INTRODUCED IN JS ES2023:
Array.toSorted(); This will not make changes to the original array insted will
make a copy of and will do operations on the copy, we can also create new array
and can assign original array to newly created array with this method so the 
original array is safe from risk of data manipulation
Array.toReversed; same as abobe but it will sort the new array reversily
*/


// EXAMPLES

// Alphabetically Ascending Sort = array.sort();
// let studentsEnrolled = ["Daniyal", "Zohaib", "Yaaser", "Uzair", "Abbas", "Abdul", "Nazar"];
// studentsEnrolled.sort();  // if we assign this to newArray it will sort both arrays(to solve this see below .toSorted method)
// studentsEnrolled.forEach(displayTheArray);
// A to Z Done!

// Alphabetically desending Sort = array.reverse();
// studentsEnrolled.reverse();
// studentsEnrolled.forEach(displayTheArray);
// Z to A Done!


// Alphabetically Ascending Sort = array.toSorted(); ( will make imaginory copy or assign values to new array rather than doinig changes to orginal array)
// let originalArray = ["Daniyal", "Abbas", "Abdul", "Nazar", "Zohaib", "Yaaser", "Uzair"];
// let newSortedArray = originalArray.toSorted(); // this will not effect the original array
// newSortedArray.forEach(displayTheArray);
// A  TO Z SORTING WITH ORGINAL ARRAY UNCHANGED DONE!

// Alphabetically Descending Sort = array.toReversed(); ( will make imaginory copy or assign values to new array rather than doinig changes to orginal array)
// let newReverseSortedArray = originalArray.toReversed(); // this will not effect the original array
// newReverseSortedArray.forEach(displayTheArray);
// Z TO A SORTING WITH ORIGINAL ARRAY UNCHANGED DONE!



// NUMERICAL SORTING ( AS MENTIONED EARLIER FOR NUMBERICAL SORTING WE HAVE TO PROVIDE A FUNCTION WITH RETURN VALUES OF A-B FOR ASCENDING AND B-A FOR DESENDING)

// NUMERICAL ASCENDING 
let numbers = [5,4,6,7,3,3,2,8,9,1];
numbers.sort(function(a,b){ // we can also use expression functions here
    return a - b;
})
numbers.forEach(displayTheArray);
// Small to large sorting done!

// NUMERCIAL DESENDING
numbers.sort(function (a,b){return b-a;})
numbers.forEach(displayTheArray);
// LARGE TO SMALL SORTING IN NUMBERS DONE!










function displayTheArray (elem){
    console.log(elem);
}
