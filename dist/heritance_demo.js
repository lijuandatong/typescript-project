"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('walking');
    }
}
class Student extends Person {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    test() {
        console.log();
    }
}
let student = new Student(1, 'lijuan', 'wang');
console.log(student.fullName);
//# sourceMappingURL=heritance_demo.js.map