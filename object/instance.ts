// instance of object

// Interface = object- exact structure
// Property name same match 
// new Object() ❌
// {} or object literal ✅



// bad practice use all time literal object. literal object is best practice.
// interface PersonType{
//     first_name: string;
//     last_name: string;
//     age: number;
//     city: string;
//     isBangladeshi: boolean;
// }


// let person: PersonType = new Object();

// person.first_name = "Naimur Rahman";
// person.last_name = "Nishat";
// person.age = 25;
// person.city = "Dhaka";
// person.isBangladeshi = true;

// console.log(person);




// bigneer practice
interface PersonType{
    first_name: string;
    last_name: string;
    age: number;
    city: string;
    isBangladeshi: boolean;
}

let person = {} as PersonType;

person.first_name = "Naimur Rahman";
person.last_name = "Nishat";
person.age = 25;
person.city = "Dhaka";
person.isBangladeshi = true;

console.log(person);
