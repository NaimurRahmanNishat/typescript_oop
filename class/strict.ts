// static keyword in class

// this is wrong because (PersonType interface ≠ static)
// interface PersonType{
//     first_name: string;
//     last_name: string;
// }

// class Person implements PersonType {
//     static first_name = "Naimur Rahman";
//     static last_name = "Nishat";

//     getName = () => {
//         return `My name is ${this.first_name} ${this.last_name}`
//     }
// }

// const personObj = new Person();
// console.log(personObj.getName());



// class Person {
//   static first_name = "Naimur Rahman";
//   static last_name = "Nishat";

//   getName() {
//     return `My name is ${Person.first_name} ${Person.last_name}`;
//   }
// }

// const personObj = new Person();
// console.log(personObj.getName());



class Person {
  static first_name = "Naimur Rahman";
  static last_name = "Nishat";

  static getName() {
    return `My name is ${this.first_name} ${this.last_name}`;
  }
}

console.log(Person.getName());

