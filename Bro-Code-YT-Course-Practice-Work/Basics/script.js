// Topic: break and continue statements.

// break and continue statements can  be used in switch statements and loops(for, while, do while, everyone of them)
// in order to come out (break, exit) from a loop or switch statement.

// we can also make labels (iAmLabel:) to get more control over break and continue, we can give them target by
// mantioning label name.

// Note : break and continue statements works the same for java as well as java script, ( for label also)

// break; example:
/*for ( let i=0; i<20; i++){
    if ( i == 10){
        break;
        // after adding this break statement here the loop will end(exit from the loop) if when i == 10, more numbers will not be generated
        
    }
    console.log(i);

}

// continue; example:
for ( let i=0; i<20; i++){
    if ( i == 10){
        continue;
        // when we use continue it will generate all 20 numbers except 10
        
    }
    console.log(i);

}

for ( let i=0; i<20; i++){
    if ( i == 10){
        continue;
        // when we use continue it will generate all 20 numbers except 10
        
    }
    console.log(i);

}
*/

// When I was new to programming, I was so confused with labels in break and continue statments, I thought that what 
// is the need for labels when we can make them exit from a loop or a statement, but here the magic of labels comes when
// we need nested loop, we can have control to exit from all loops from a child loop this is possible by labels

// label Example:

outerLoop:
for ( let i=0; i<20; i++){


    console.log(i);

    iLoop:
    for (let j = 0; j>=-20; j--){

        if (j == -5){
            break outerLoop;
            // when we use break here with label name it cameout from the whole loop instead of loop where this is used
            
        }
        console.log(j);
    }

}

