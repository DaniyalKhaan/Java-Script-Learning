// Making a counter Program, consist of three buttons, one for increasing, one for decreasing and final one for to reset
// the counter.


let counter = 0;

document.getElementById("increaseButton").onclick = function(){
    // counter = document.getElementById("counterLabel").value;
    counter = Number(counter);
    counter++;
    document.getElementById("counterLabel").innerHTML = counter;
}


document.getElementById("resetButton").onclick = function(){
    counter = 0;
    document.getElementById("counterLabel").innerHTML = counter;
}

document.getElementById("decreaseButton").onclick = function(){
    counter--;
    document.getElementById("counterLabel").innerHTML = counter;
}