// Topic: Number Guessing Game

let randomNumber =  Math.round(Math.random() * 100 + 1);
let guess = 0;
let guessTryCounter = 0;

function updateLabel() {
    // Assume you have logic here to generate a new expression
    var newExpression = generateNewExpression(); // Implement this function

    // Update the label text with the new expression
    document.getElementById("onlyH5").textContent = newExpression;
}

// Example function to generate a new expression (replace with your own logic)
function generateNewExpression() {
    // Here you can have your logic to generate a new expression dynamically
    // For demo purposes, let's just return a static string
    return "The number is higher"; // Replace with your logic
}

document.getElementById("summitButton").onclick = function(){

    guessTryCounter++;
    
    guess = document.getElementById("inputGuess").value;
    console.log(guess);
    
    if (randomNumber > guess){

        // document.getElementById("onlyH5").innerHTML = (`The number is higher:`);
        updateLabel();

    } else if (randomNumber < guess ){
        document.getElementById("onlyH5").innerHTML = (`The number is smaller:`);
    }
    else if (randomNumber == guess){
        document.getElementById("onlyH5").innerHTML = (`Congratulation thats correct guess, You have completed
        the guess in ${guess} guesses.`);

    } 

    

}