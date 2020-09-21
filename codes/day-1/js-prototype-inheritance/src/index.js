function person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

person.prototype.printInfo = function () {
    console.log(this)
    return this.firstName + ' ' + this.lastName;
}
//console.log(person.prototype.printInfo());

//console.log(person.prototype)
function trainee(firstName, lastName, subjectToLearn) {
    person.call(this, firstName, lastName);
    this.subjectToLearn = subjectToLearn;
    this.printInfo = function () {
        //var partialInfo = person.prototype.printInfo.apply(this);
        var partialInfo = this.__proto__.printInfo.apply(this);
        console.log(partialInfo)
        return partialInfo + ' ' + this.subjectToLearn;
    }
}

function trainer(firstName, lastName, subjectToTeach) {
    person.call(this, firstName, lastName);
    this.subjectToTeach = subjectToTeach;
    this.printInfo = function () {
        // var partialInfo = person.prototype.printInfo.apply(this);
        var partialInfo = this.__proto__.printInfo.apply(this);
        return partialInfo + ' ' + this.subjectToTeach;
    }
}

Object.setPrototypeOf(trainee.prototype, person.prototype);
Object.setPrototypeOf(trainer.prototype, person.prototype);


var ajay = new trainee('ajay', 'kumar', 'React JS');
console.log(ajay.printInfo());
console.log(ajay.__proto__)

var joydip = new trainer('joydip', 'mondal', 'React JS');
console.log(joydip.printInfo());
console.log(joydip.__proto__)

var x = 20;
var x;
console.log(x)
/*
//console.log(x)
x = 10;

// console.log(x)
// console.log(window.x)
var iterate = function () {
    for (var i = 0; i < 2; i++) {
        var x = 20;
        console.log(x)
    }
}
iterate();
console.log(window.x)
*/