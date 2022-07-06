let person ={  
    Name:{
        firstName : "NIJIN",
        lastName : "P S"
    },
    age : 23
}

let{firstName} = person.Name;
let{age} = person;

console.log("Name: "+firstName);
console.log("Age: "+age);