// duplicate class


// class expression works like assigning a function to a variable
// let ❌ redeclaration
// implements = interface must match exactly
// One interface → many classes ✅
// One variable name → one declaration only ❌❌


// thi is not working because this is wrong process.
// interface PersonType {
//     first_name: string;
//     last_name: string;
//     age: number;
//     city: string;
//     isBangladeshi: boolean;
//     getName(): string;
// }

// class Person implements PersonType {
//     first_name = "Naimur Rahman";
//     last_name = "Nishat";
//     age = 25;
//     city = "Dhaka";
//     isBangladeshi = true;

//     getName = () =>{
//         return `My name is ${this.first_name} ${this.last_name}`
//     }
// }


// class Person implements PersonType {
//     first_name = "Naimur Rahman";
//     last_name = "Nishat";
//     age = 25;
//     city = "Dhaka";
//     isBangladeshi = true;

//     getName = () =>{
//         return `My name is ${this.first_name} ${this.last_name}`
//     }
// }

// let personObj = new Person();
// console.log(personObj)




// A class can be declared once only. If we try to declare class more than one time, it throws an error.


// Another way to define a class is by using a class expression.
// this is wrong process because the class name is same both class.
// interface PersonType {
//     num1: number;
//     num2: number;
//     getName(): number;
// }

// let Person = class implements PersonType {
//     num1 = 100;
//     num2 = 20;

//     getName = () =>{
//         return this.num1 + this.num2;
//     }
// }


// let Person = class implements PersonType {
//     num1 = 10;
//     num2 = 20;

//     getName = () =>{
//         return this.num1 + this.num2;
//     }
// }


// let personObj = new Person();
// console.log(personObj)


// this is right process 
interface PersonType {
    num1: number;
    num2: number;
    getName(): number;
}

let PersonA = class implements PersonType {
    num1 = 100;
    num2 = 20;

    getName = () =>{
        return this.num1 + this.num2;
    }
}


let PersonB = class implements PersonType {
    num1 = 10;
    num2 = 20;

    getName = () =>{
        return this.num1 + this.num2;
    }
}


let personObjA = new PersonA();
console.log(personObjA)

let personObjB = new PersonB();
console.log(personObjB)


