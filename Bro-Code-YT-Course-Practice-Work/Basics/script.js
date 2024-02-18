// Topic : Practice Program for finding a hypothenuse of a traingle

// The formula to find hyponthenuse is hypothenuse = square root of ( base square + height square)

// so lets do this:

let hyponthenuse;
let base;
let height;

// height = window.prompt("Enter size of Height of the traingle in numbers");
// // Note: Window.prompy take input as string, so make sure to convert the string to number before applying the 
// // formula/operations
// height = Number(height);

// base = window.prompt("Enter Base Size of the traingle in numbers");
// // Converting the string to Numeber
// base = Number(base);
// hyponthenuse  = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
// console.log("The size of the hyponthenuse is: ", hyponthenuse);

// Done. I have verified it is working absolutely fine, but lets make this more fine by using html textboxes for data 
// Entry

document.getElementById("summitButton").onclick = function(){

    base = document.getElementById("baseTextBox").value;

    height = document.getElementById("heightTextBox").value;

    hyponthenuse = Math.sqrt(Math.pow(base, 2) + (Math.pow(height, 2)));
    document.getElementById("labelForHyp").innerHTML ="Result, hypothenuse Size: " + hyponthenuse;
}
