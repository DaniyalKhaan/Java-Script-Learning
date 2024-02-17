// Topic: Type Conversion ( Converting one datatype to Another)

let age = window.prompt("Your age");

// age = age + 1;
console.log("You are ", age, " years old");
// This is showing the output of 211 years old, which is not what we expected, as I already know this is 
// because the age variable is a string, and when try to increment it it concate the characters, which is why we are seing
// 211 instead of 22.

// Solution: so to solve this issue we can convert the age which is string to number, this can be done by calling
// pre define constructor of the Number class in java script., given below is the syntax and way to do this


age = Number(age);

age = age+1;

console.log("You are ", age, " Years old.");
// so know the issue is been solved and the output is "You are 22 years old."




// Other data type conversions:
// we can also convert other data types to required data type by calling the constructor of the targer data type

let x;
let y;
let z;

x = 83;
y = "76";
z = "";

// we can also check that which is the data type of the variable by putting typeof keyword, implemented below;


z = Number(z);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
