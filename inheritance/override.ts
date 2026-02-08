// overriding

class Father {
    addNumber() {
        let num1 = 10;
        let num2 = 20;
        let sum = num1 + num2;
        console.log(sum);
    }
}

class Son extends Father {
    addNumber() {
        let num1 = 100;
        let num2 = 20;
        let sum = num1 + num2;
        console.log(sum);  // 120
    }
}

let sonObj = new Son();
sonObj.addNumber();  // 120