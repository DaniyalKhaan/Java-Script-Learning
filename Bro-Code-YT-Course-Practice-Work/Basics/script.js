// Topic: Switch Statemant:

let grade = 'D';

switch(grade){
    case('A'):
    case(''):
    console.log("You did great in the exam.")
    break;
    case('B'):
    case('b'):
    console.log("You did great in the exam.")
    break;
    case('C'):
    case('c'):
    console.log("You did good in the exam.")
    break;
    case('D'):
    case('d'):
    console.log("You Failed the exam.")
    break;
    default:
    console.log(grade + " is not a letter grade!")

    
}

let percentage = 72.5;

switch (true){
    case (percentage >= 90):
        console.log("You got grade A+");
        break;
    case (percentage >= 80):
        console.log("You got grade A");
        break;
    case (percentage >= 70):
        console.log("You got grade B");
        break;
    case (percentage >= 60):
        console.log("You got grade C");
        break;
    case (percentage < 60):
        console.log("You got grade D");
        break;
        
        
    
}