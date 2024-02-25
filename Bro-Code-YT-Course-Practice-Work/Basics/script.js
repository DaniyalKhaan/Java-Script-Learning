// Topic : ArrayMap() method
// this method also work like forEach() but the main difference is that 
// this method makes a copy of of array which used this method


// example:

let numbers = [1, 2, 3, 4, 5];

numbers.map(multiplyBtItself);
numbers.map(display);

function multiplyBtItself (elem, index, array){
     array[index] = elem * elem;

}

function display(element){
    console.log(element);
}