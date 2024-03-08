// Topic: promises




// SYNTAX : VARIABLE = new Promise((res,rej) => {})

let x = new Promise((resolved, rejected)=>{
    if (false){
        console.log("This code is resolved.");
    } else{
        console.log("This code is rejected!");
    }
})


x.then().catch();
