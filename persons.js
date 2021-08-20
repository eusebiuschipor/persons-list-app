class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    print() {
        return `First name: ${this.firstName} Last name: ${this.lastName} Age: ${this.age}`;
    }
}

const persons = [];

