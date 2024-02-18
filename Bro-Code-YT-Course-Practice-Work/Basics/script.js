// Topic: String usefull properties and methods
// There is alot of string very usefull properties some of them are given below

let yourName = "Hidden";
let z = "";

// yourName = yourName.toUpperCase();
// yourName = yourName.toLowerCase();
// yourName = yourName.length;

z = yourName.charAt(3);
// we can also check on which index the given character is stored inside a string
z = yourName.indexOf("H");

// if there are multiple same characters inside a string and we want to find the index of second or thirs
// or maybe last character we can do like this.
console.log(yourName.lastIndexOf("d"));


// if there is extra spaces in a string we can set it by trim() method
let x = "   Daniyal   Khan        ";
console.log("Length of x: before triming " + x.length);
x = x.trim();
console.log("Length of x: AFTER triming " + x.length);
// Note that after triming the spaces between the character will still be present
// but the spaces in front and back will be none
console.log(x);
console.log(z);



// we can also rephlace some character to another character or maybe to nothing if needed
// by replaceAll method it take two parameters the first one is the character which we want to 
// get rid of and the second one will be the character we want to put

// let phoneNumber = 92-343-454-3433; 
// so i was trying to implement this functionallity but it was not working, it is because the phoneNumber
// is not a string because I did not put the number in quotes""(means phoneNumber is not a string),
// It seems helpful to be notes thats why I am comminting it.
// initialixing below again with quotes;
let phoneNumber = "92-343-454-3433";
phoneNumber = phoneNumber.replaceAll("-", ".");
// now working fine.

console.log(phoneNumber);

// Alright Mr Daniyal these are some of the methods which string offers, there is alot more but
// I will see them later, for now remembet these.