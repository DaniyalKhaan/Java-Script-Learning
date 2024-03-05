// Topic:  object


// syntax:   THINGS T0 REMEMBER ABOUT THE SYNTAX
// IN OBJECT WE USE colon : TO DECLARE A PROPERTY OR A FUNCTION 

const dog = {
    name: "riderOp",
    color: "white",
    weight: 25,
    pet: true,

    bark: function(){
        console.log("The dog is barking.");
    },

    sleep: function(){

        console.log(`The ${this.color} dog is sleeping. `);
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

dog.bark();
dog.sleep();
dog.doingSomething("eating");
dog.isPet();



