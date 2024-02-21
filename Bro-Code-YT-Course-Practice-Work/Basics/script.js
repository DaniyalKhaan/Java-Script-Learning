// Topic: Variables scope(Where variable is accessible) in java script

// Following are the scopes of all the three types of variables in JS

// let: let vaiables have block scope{} it cannot be accessible outside ofthe block in which it was declared

// var: var variables can be access from outside of the block, but it cannot escape a funtion means it can be accessible
// from blocks{} of for loop or any other {} except of function() blocks {}.

// global variables: Global variables are the variables in java script that are declared outside of the blocks,(block independent)
// whole program can access global variables.

// One thing to keep notice on is that using var for global variables can make problems with browser default window 
// variable names, Means if someone assign names samilar to window variables name it can assign value to the window
// variable name and it can cause problem. In order to avoid this issue we can make let variables globall.


let letGloballVariable = "sbc";

var varGlobalVariable = "This can make problems if the name uses is similar to window object variables";

for (var dani = 0; dani<10; dani++){

}
console.log(dani);
// we can access dani even from outside of the blocks, this is because it is a var variable.

function ifVarIsAccessible(){
    var yal = "This wil not be accessible outside of this function.";
}
console.log(yal);