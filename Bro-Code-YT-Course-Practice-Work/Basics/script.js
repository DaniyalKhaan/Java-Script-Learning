// Topic: 2d Arrays

// hint always remember when giveing number of rows and colums give index of
// rows and coloums rather than number of row or colomn

// if we want to add multiple arrays inside one array here 2D arrays come to
// the scence

// Note: Down I also show how to edit 2d Arrays, if u want check them out

let firstArray = ["Apple", "Orange", "Mango"];
let secondArray = ["Chicken", "Meat", "Fish"];
let thirdArray = ["IceCream", "Fries", "Sweet"];
let fourthArray = ["Tomatto", "Onion", "Potato"];

// 2D Array: lets make a 2d array from all four Arrays

let iAm2dArray = [firstArray, secondArray, thirdArray, fourthArray]; // A 2d array

for ( let D of iAm2dArray){
    console.log(D);
    // It is printing all the elements of total arrays
}

// manipulation of 2d arrays

// we can add or remove items from 2d list by giving the targer element 
// rows and colums index number (start with zero)

// Syntax for adding or removing elements to 2d array
// 2dArrayName[indexOfRow][indexOfColoumn] = "Content";

iAm2dArray[3][1] = "Chilli"; 

for ( let D of iAm2dArray){
    console.log(D);
    // It is printing all the elements of total arrays
}