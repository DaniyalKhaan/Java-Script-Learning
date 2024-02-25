// Topic : ArrayMap() method
// this method also work like forEach() but the main difference is that 
// this method makes a copy of of array which used this method


// example:

let numbers = [1, 2, 3, 4, 5];

numbers.map(multiplyBtItself);
numbers.forEach(display);   // see this is also working like forEach the output is print to the console
// but the thing we can do in this method which was not possible in forEach is 
// we can copy array ( can assign one array to another), see below

let copyNumbers = numbers.map(multiplyBtItself); // assigning this to new array
for ( let n of copyNumbers){
    console.log(n);
}
function multiplyBtItself (element){
    
    return element * element;

}

function display(element){
    console.log(element);
}