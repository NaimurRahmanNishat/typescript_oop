// constructure object



// Interview / Exam Tip

// ❌ Constructor function → JS legacy
// ✅ class + constructor → TypeScript standard
// interface = structure
// class = implementation


// good practice of constructure object.
// interface PersonType {
//     first_name: string;
//     last_name: string;
//     age: number;
//     city: string;
//     isBangladeshi: boolean;
//     getName(): string;
// }


// class Person implements PersonType {
//     first_name: string;
//     last_name: string;
//     age: number;
//     city: string;
//     isBangladeshi: boolean;

//     constructor() {
//         this.first_name = "Naimur Rahman";
//         this.last_name = "Nishat";
//         this.age = 25;
//         this.city = "Dhaka";
//         this.isBangladeshi = true;
//     }

//     getName(): string {
//         return `My name is ${this.first_name} ${this.last_name}`;
//     }
// }

// const person1 = new Person();
// console.log(person1.getName());




// bignner practice of constructure object.
interface PersonType {
    first_name: string;
    last_name: string;
    age: number;
    city: string;
    isBangladeshi: boolean;
    getName(): string;
}

function Person(this: PersonType) {
    this.first_name = "Naimur Rahman";
    this.last_name = "Nishat";
    this.age = 25;
    this.city = "Dhaka";
    this.isBangladeshi = true;
    
    this.getName = function () {
        return `My name is ${this.first_name} ${this.last_name}`;
    };
}

const person1 = new (Person as any)();
console.log(person1.getName());
