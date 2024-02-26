// Topic : Difference between var, let , and const

// var: js have only one variable which was var before the version jsES6
// var have some disadvantages in which the major one was that it was
// accesible by browser window object, it means your vaibales and arguments
// were visible in browser 
// due to all this var variables can change values to window variables if 
// in case of same variables names

// let: let was added in jsE6, it solve the issue which was with var
// let variables is not accessible outside the program(by widow object)
// due to this let variables does not change the default value of window
// object variables (means we can give same name as wndow variables and it
// will not effect original window variables)


// const:

// const was also added in jsE6, cosnt make a value constant means if 
// someone try to change const values an error will generate

// SCOPES OF JS Variables

// var: var have function scope and global scope depending on where 
// var is declared ( inside a funtion or in the top of the scroipt), 
// var variables are hoiseted to the top of their functino of global scope
// this means you can access them before the line of declarition but their 
// value will be undefined

// let : let are block scope means it is not accessible outside the 
// curly brackets {} , one more difference is it is not hoisted(means
// during runtime the declaration of let is not moved to the top)


// const : this also have block scope, const variables needs to assign value
// in time of declaration then afterwarards therir values will  not be changebal
// const declarition are also not hoisted