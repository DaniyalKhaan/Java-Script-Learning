// Topic: forin Loop ( IT IS USED TO ITTERATE THROUGH OBJECT)

// THE FOR IN LOOP ITTERATES THROUGH PROPERTIES OF OBJECTS




let obj = {
    name: "daniyal",
    age: 23,
    field: "IT",
    isStudent: true

}


for (let key in obj){
    console.log(key, obj[key]);
}
