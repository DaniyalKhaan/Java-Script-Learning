// Topic: this keyword
// this keyword point to the object in which it is used it has several functionalities, can see in w3schools
// but the main functionlity of this keyword which I will need in future someoften is that it point to the object in which 
// it is uses

// NOTE: IF this  IS USED OUTSIDE OF ANY FUNCTIONS(GLOBALLY) IT WILL POINT TO THE window OBJECT OF BROWSER


// example:
const dog = {
    name: "riderOp",
    color: "white",
    pet: true,


    sleep: function(){

        console.log(`The ${this.color} dog is sleeping. `);
        // here this function is point to dog(liksThis: dog.color) because the function was called using dog.
    // same for some below examples
    },
    doingSomething: function(action){
        console.log(`${this.name} is ${action}`);
    },
    isPet: function(){
        if (!this.pet){
            console.log("No the dog is not a pet.")

        } else if(this.pet){
            console.log("Yes the dog is a pet.")
        }
    }



}

dog.sleep();
dog.doingSomething("eating");
dog.isPet();
