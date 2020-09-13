// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
        console.log(`role: ${this.role}`);

    }
    getName() {
        return this.name
    }
    getEmail() {
        return this.email
    }
    getId() {
        return this.id
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;