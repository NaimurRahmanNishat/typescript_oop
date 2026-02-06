// object literal  

// typescript setup  (install nodemon use auto run)
// tsc --init
// tsc index.ts -w
// nodemon literal.ts


// using interface because this is object.

interface Student {
    name: string;
    id: number;
    dept: string;
    course: string;
    getInfo: () => string;   // inside the object function all ways string and number return. not return void.
}



let studentInfo: Student = {
    name: "Naimur Rahman Nishat",
    id: 121427,
    dept: "CSE",
    course: "OOP",
    getInfo: () => {
        return (`stuent name: ${studentInfo.name}` + " " + `student id: ${studentInfo.id}`);
    }
};


console.log(studentInfo.getInfo());