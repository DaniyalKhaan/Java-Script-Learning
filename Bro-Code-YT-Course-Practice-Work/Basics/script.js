// Dice game; ( Math.Random())
// making three dices that can generate random number between 1 and 6.

let firstDice;
let secondDice;
let thirdDice;

document.getElementById("rollButton").onclick = function(){
    // so here is the logic of the random numbers which will be generated.
    // I am using math random object, and to use only numbers from 1 to 6, I am *ing it by 6 also adding 1 so it does
    // not generate 0.
    firstDice = (Math.random() * 6) + 1;
    // Than I am just rounding the number using math.floor() class, since math.random generates numbers in decimal als0
    firstDice = Math.floor(firstDice);
   
    document.getElementById("firstDice").innerHTML = firstDice;
    
    secondDice = Math.floor((Math.random() * 6) +1) ;
    document.getElementById("secondDice").innerHTML = secondDice;
    
    thirdDice = Math.floor((Math.random() * 6) +1) ;
    document.getElementById("thirdDice").innerHTML = thirdDice;
}