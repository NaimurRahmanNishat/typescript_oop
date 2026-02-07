// class



interface PersonType {
    first_name: string;
    last_name: string;
    age: number;
    city: string;
    isBangladeshi: boolean;
    getName(): string;
}

class Person implements PersonType {
    first_name = "Naimur Rahman";
    last_name = "Nishat";
    age = 25;
    city = "Dhaka";
    isBangladeshi = true;

    getName = () =>{
        return `My name is ${this.first_name} ${this.last_name}`
    }
}

let personObj = new Person();
console.log(personObj)
let personObjOne = new Person();
console.log(personObjOne.getName)
let personObjTwo = new Person();
console.log(personObjTwo.age)
