var personModuleObj = require('./Person')

class Trainer extends personModuleObj.Person {
    constructor(firstName, lastName, subjectToTeach) {
        super(firstName, lastName);
        this.subjectToTeach = subjectToTeach;
    }
    printInfo() {
        var partialInfo = super.printInfo();
        console.log(partialInfo)
        return partialInfo + ' ' + this.subjectToTeach;
    }
}

module.exports = {
    Trainer
}