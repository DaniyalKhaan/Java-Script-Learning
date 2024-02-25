// Topic: array.filter() method

// we can create  a new array like map() method with this method but with
// filter ( we can set a filter/test), or a condition that just


let age = [16,14,24,54,54,32,21,34,14,23];

let nonAdults = age.filter(kids);



function kids(element){
    return element < 18;
}

for ( let a of nonAdults){
    console.log(a);
}

// one very important thing which I notice currently in that map filter methods does 
// not do changes to the original array