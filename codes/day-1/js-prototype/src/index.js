//object literal syntax
var joydip = {
    //value property
    firstName: 'joydip',
    lastName: 'mondal',
    //functional property
    print: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
joydip.subject = 'React JS';

var info = joydip.print();
console.log(info)

for (var propertyName in joydip) {
    var value = joydip[propertyName];
    console.log(propertyName + ':' + value)
}

//Object.prototype.show = function () { console.log('show') }

//constructor function/function constructor
function person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.printInfo = function () {
        return this.firstName + " " + this.lastName;
    }
}
//person.prototype.show = function () { console.log('show') }

//for this person function there will be a prototype object
//that will contain two properties: 
//__proto__: (linking to Object prototype) and 
//constructor: refers the function itself
//this prototype object will NOT contain any properties that you defined

var anil = new person('anil', 'gupta');
//this object will contain all the properties that you defined
//additionally it will contain property:
//__proto__: linking this object to the person prototype object

anil.subject = 'React JS';
anil.show = function () { console.log('show') }
console.log(anil.printInfo());
console.log(anil.hasOwnProperty('show'));
anil.show();

//1. 
//console.log(anil.__proto__)
//2.
//console.log(person.prototype);
//console.log(anil.__proto__ === person.prototype)


