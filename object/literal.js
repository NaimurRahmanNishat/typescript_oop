// object literal  
var studentInfo = {
    name: "Naimur Rahman Nishat",
    id: 121427,
    dept: "CSE",
    course: "OOP",
    getInfo: function () {
        return ("stuent name: ".concat(studentInfo.name) + " " + "student id: ".concat(studentInfo.id));
    }
};
console.log(studentInfo.getInfo());
