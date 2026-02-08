// static keyword


class Father {
    static greetParent(){
        return "This is father constructure";
    }
};

class Son extends Father {
    greetParent() {
        console.log("This is son constructure");
    }
};

console.log(Son.greetParent());