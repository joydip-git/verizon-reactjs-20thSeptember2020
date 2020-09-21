class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    printInfo() {
        return this.firstName + ' ' + this.lastName;
    }
}
function Show() {
    console.log('show...')
}

var moduleExportableObj = {
    Person, //Person:Person
    Show //Show:Show
}

module.exports = moduleExportableObj;
console.log('person module info')
console.log(module.exports)
