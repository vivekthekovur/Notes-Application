function Person(firstName, lastName) {
    // this = {};

    // add properties to this
    this.firstName = firstName;
    this.lastName = lastName;

    // return this;
}
let person1 = new Person('Jane','Doe')
let person2 = new Person('James','Smith')
console.log(person1)
console.log(person2)