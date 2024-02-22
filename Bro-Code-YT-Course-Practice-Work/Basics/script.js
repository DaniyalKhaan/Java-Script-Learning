// Topic : sorting arrays of String (Sorting: Alphabatically Accending or decending)


let someArray = ["m","o","n","e","y","is","s","o","l","u","t","i","o","n", 
"to 85% of my problems."];


someArray.sort(); // for sorting A to Z(alphabatically)

someArray.sort().reverse(); // for sorting in reverse (Z to A)


for (let i of someArray){
    console.log(i);
}