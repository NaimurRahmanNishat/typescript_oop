// overloading

interface MyInterface {
    myMethod(value1: number): void;
    myMethod(value1: number, value2: number): void;
    myMethod(value1: number, value2: number, value3: number): void;
}

class MyClass implements MyInterface {
  myMethod(value1: number, value2?: number, value3?: number): void {
    if (value3 !== undefined) {
      console.log("Received three arguments", value1, value2, value3);
    } else if (value2 !== undefined) {
      console.log("Received two arguments", value1, value2);
    } else {
      console.log("Received only one argument", value1);
    }
  }
}

const obj = new MyClass();
obj.myMethod(10);
obj.myMethod(10, 20);
obj.myMethod(10, 20, 30);

// Output:
// Received only one argument 10
// Received two arguments 10 20
// Received three arguments 10 20 30