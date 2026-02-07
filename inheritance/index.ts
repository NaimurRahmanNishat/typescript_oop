// inheritance 


interface FatherTypes{
    num1: number;
    num2: number;
    addNumber():void;
}

class Father implements FatherTypes {
    num1 = 10;
    num2 = 20;
    addNumber (){
        let sum = this.num1 + this.num2;
        console.log(sum);
    }
};


class Son extends Father {
    // father all properties here this.
};


let sonObj = new Son();
console.log(sonObj);
