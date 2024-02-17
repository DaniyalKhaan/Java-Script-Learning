// Taking Input from the user

// There are two ways both are given below the first one in easy but not a good approach



// Fist Way: not a good approach
// let userName = window.prompt("What is your Name");
// console.log(userName);


// Second Way: through html elements(like textfield etc)

let inputThroughHtml;

document.getElementById("button").onclick = function() {

    inputThroughHtml = document.getElementById("textField").value;
    console.log(inputThroughHtml);

    document.getElementById("onlyLabel").innerHTML = "What about the wheather in " + inputThroughHtml;
}

