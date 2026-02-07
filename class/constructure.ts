// class constructure


// simple constructure  (constructure auto call)
// class Person {
//     constructor(){
//         console.log("this is constructure")
//     }
// }

// let personObj = new Person();



// using constructure parameter.
// class Person {
//     constructor(num1:number, num2:number){
//         let sum = num1 + num2;
//         console.log(sum);
//     }
// }

// let personOjb = new Person(10, 20);



// change properties by constructure
// class Person {

//     num1 = 10;
//     num2 = 20;

//     // always consturcture work at first time then work fuction and method.
//     constructor(valueOne:number,valueTwo: number){
//         this.num1 = valueOne;
//         this.num2 = valueTwo;
//     };

//     addTwoNumber (){
//         return this.num1 + this.num2;
//     }
// }

// const personObj = new Person(400, 600);
// console.log(personObj.addTwoNumber());





// getter & setter method. (set means seter and get means gatter)

interface ProductType {
    price: number;
}

class Product implements ProductType {
    private _price: number = 0;

    set price(value: number) {
        this._price = value;
    }

    get price(): number {
        return this._price;
    }
}


let productObj = new Product();
productObj.price = 100;
console.log(productObj);

