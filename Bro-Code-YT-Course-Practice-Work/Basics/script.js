// Topic: classes in js
// suppose if there is a situation where we needs many object with almost same properties we will need to write so many lines of code
// but instead of this we can make a class place necceary methods and properties in it then we can used this as a blueprint to make many objects


// CLASSES ARE THE SAME AS JAVA IN JAVASCRIPT, A CLASS DEFINES

// Syntax.

class iAmClass{
    iAmAClassMethod(){       // class method does not need to write function at declariont
        
    }
}


const objectOne = new iAmClass();   // an object of iAmClass
const objectSecond = new iAmClass();  // 2nd obj
const objectThird = new iAmClass();   // 3rd obj
const objectFourth = new iAmClass(); // 4th obj
const objectFifth = new iAmClass();    // 5th obj 


