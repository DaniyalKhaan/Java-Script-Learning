// Topic: Locale Method(toLocaleString), by this we can format a string to different countries counting style (like 
// commas, etc), currency type and more

// we have to put .toLocaleString() after the string which we want to format and then inside the parameters of this 
// method we will spacify (locale , {options});

// Exmaple

let number = 123456789.234;

// number = number.toLocaleString("en-US");

console.log(number);
// the output is 123,456,789.234, using this method it is automatically formated to US counting style, we can do 
// alot of more styles like the following will format the string according to indian counting rules

// number =  number.toLocaleString("hi-IN");
console.log(number);

number = number.toLocaleString("en-US", {style: "currency", currency: "INR"});
number = number.toLocaleString("en-US", {style: "currency", currency: "USD"});
console.log(number);

