// Topic : sorting arrays of String/numbers (Sorting: Alphabatically Accending or decending)
// Note it can aslo sort numbers

let someArray = ["m","o","n","e","y","is","s","o","l","u","t","i","o","n", 
"to 85% of my problems."];


someArray.sort(); // for sorting A to Z(alphabatically)

someArray.sort().reverse(); // for sorting in reverse (Z to A)


for (let i of someArray){
    console.log(i);
}


// it aslo works for numbers

let number = [7,4,6,2,6,9];
number.sort().reverse();
number.sort();

for (let i of number){
    console.log(i);
}