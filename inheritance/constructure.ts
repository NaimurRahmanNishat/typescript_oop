// constructure inside only parent class


interface FatherTypes{}

class Father implements FatherTypes {

    constructor (){
        console.log("This is father constructure");
    }

}

class Son extends Father {

}

new Father();
new Son();





// constructure inside only child class parameters


// interface FatherTypes{}

// class Father implements FatherTypes {

//     constructor (msg:string){
//         console.log(msg);
//     }

// }

// class Son extends Father {

// }

// new Father("This is father constructure");
// new Son("This is father constructure");






// constructure inside both parent & child class pass paremeters


// interface FatherTypes{}

// class Father implements FatherTypes {
//     constructor (){
//         console.log("This is father constructure");
//     }
// }

// class Son extends Father {
//     constructor (){
//         super();  // permission
//         console.log("This is son constructure");
//     }
// }

// new Son();