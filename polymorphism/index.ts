// Polymorphism

// Method Overriding

class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
dog.speak(); 

const cat = new Cat();
cat.speak();







// Method Overloading (Compile-time Polymorphism)
class Calculator {
  // overload signatures (compile-time)
  add(a: number): number;
  add(a: number, b: number): number;

  // implementation (runtime)
  add(a: number, b?: number): number {
    if (b === undefined) {
      return a + a;
    }
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2));     // 4
console.log(calc.add(2, 3));  // 5







// Polymorphism with Functions and Objects

class A {
    area(x: number, y: number) {
        console.log(x * y);
    }
}
class B extends A {
    area(a: number, b: number) {
        super.area(a, b);
        console.log('Class B')
    }
}

let ob = new B();
let output = ob.area(100, 200);