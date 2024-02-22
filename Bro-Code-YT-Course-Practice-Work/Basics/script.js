// Topic: Template Literal in java Script

// Template literals are back-ticks(``), it can be used to define, concate a string without quotes.
// template literals(``) are more easy to handle string concatation than quotes("")

// template literals alows string to accept variables , expression etc more easliy than quotes

// Syntax:

let iAmString = `Hi I am template string`;
console.log(iAmString);

// Example of embedding variables using template literals

let price = 100;
let discout = 20;
let total = price - discout;

console.log(`Original price:  ${price}`);
console.log(`Discout you got:  ${discout}`);
console.log(`Amount to Pay: $${total}`);

// see by using template string/literals we can embed string(multiple string), more easily
// when to embed a variable use this syntax ${variableName} inside the back-ticks(``)
