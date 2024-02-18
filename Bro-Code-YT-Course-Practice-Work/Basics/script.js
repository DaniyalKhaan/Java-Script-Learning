// Topic : Math Class/Object in java script

// we can use this object of build in Math class to do some tasks, like rounding a decial number, finding maximum-minimum
// between variables or numbers, roundiing to bottom number, rounding to top number, square root of a number/variable
// etc etc


// implementation: It can be used by calling object of Math class and accecing function by dot, given below

// ROunding a decimal Number
let x = 2.9993;

x = Math.round(x);

console.log(x);

// These are some more functionalites which can be done using Math object;

z = Math.sqrt(x);
z = Math.max(23, 4, x);
z = Math.min(23,45,x);
// floor function will round up decimal downwords like 4.7 will be rounded to just 4;
z = Math.floor(x);
// ceil function will round up decimal number upward e.x 4.7 will become 5, also 4.1 will become 5. it just 
// round up to the next number
z = Math.ceil(x);
let power = Math.pow(4, 4);
z = Math.PI;

console.log(power);
console.log("Pi : ", z);

