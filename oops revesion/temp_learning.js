

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("Person constructor");
    }
    talk() {
        console.log(`Hey there !   I'm ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        // this.name = name;
        // this.age = age;
        super(name, age);  // parent class constructor is being called
        this.marks = marks;
    }
    // talk() {
    //     console.log("Hey there ! ");
    // }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        // this.name = name;
        // this.age = age;
        super(name, age)  // parent class constructor is being called
        this.subject = subject;
    }
    // talk() {
    //     console.log("Hey there ! ");
    // }
}


// ~~ for removing repeatition of properties such as name, age, talk()
//  we created new class person and child classes student and teacher will inherite properties
let stu1 = new Student("Mic", 25, 100);
let tec1 = new Teacher("Jack", 59, "JavaScript");

stu1.talk();
tec1.talk();