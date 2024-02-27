// Topic: truthy vs falsy

// there are two types of values in js one is truthy and another one is falsy
// these are used in conditional statements

// falsy values: NaN, 0, undefiend, null, false and document.all

// truthy values: any value rather than the falsy values will be truthy

// Example: if we use falsy values in conditional statements it will be considered as false
// and if we give truthy values it will be considered as true

// Truthy statements: the following statements contain truthy values and will be excecuted by the java interpreter
if ( -2){
}
if ( 3){
}
if ( "ABCD"){
}

// falsy statements: The folowoin statements are false statements java interpreter will skip these blocks ( it will not be excecueted)

if ( false ){
}

if ( 0 ){
}
if ( NaN ){
}
if ( Null ){
}
if ( undefined ){
}
if ( document.all ){
}
