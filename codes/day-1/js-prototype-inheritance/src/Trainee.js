var personModuleObj = require('./Person');
/**
var personModuleObj = {
    Person, //Person:Person
    Show //Show:Show
}
 * 
 */

class Trainee extends personModuleObj.Person {
    constructor(firstName, lastName, subjectToLearn) {
        super(firstName, lastName);
        this.subjectToLearn = subjectToLearn;
    }
    printInfo() {
        var partialInfo = super.printInfo();
        console.log(partialInfo)
        return partialInfo + ' ' + this.subjectToLearn;
    }
}
module.exports = Trainee;