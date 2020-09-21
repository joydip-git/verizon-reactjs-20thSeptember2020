var Trainee = require('./Trainee') // Trainee--->Trainee
var trainerModuleObj = require('./Trainer')
var personModuleObj = require('./Person')

// console.log(Trainee);
// console.log(trainerModuleObj)
// console.log(personModuleObj)
var ajay = new Trainee('ajay', 'kumar', 'React JS');
console.log(ajay.printInfo());

var joydip = new trainerModuleObj.Trainer('joydip', 'mondal', 'React JS');
console.log(joydip.printInfo());

personModuleObj.Show();

let x = 10;
for (let i = 0; i < 2; i++) {
    let x = 20;
    console.log(x)
}
console.log(x)

const y = 10;
//y = 20;
console.log(y)
const numbers = [1, 2, 3, 4];
numbers[0] = 10;
console.log(numbers)
//numbers = [200, 300];

// console.log(ajay.__proto__)
// console.log(joydip.__proto__)
// console.log(Person.prototype)
// console.log(Trainer.prototype)
// console.log(Trainee.prototype)

//console.log(module)

//lexical 'this' problem
function call() {
    this.x = 10;
    //var ref = this;

    let another = function () {
        this.x = 20;
        console.log(this) //global context object
        //console.log(ref.x)
        console.log(this.x)
        //console.log(this.y)
        //console.log(ref.x + this.y)
        this.x = this.x + 1;
        return this.x;
    }
    console.log(this) //current object created based on call function invocation
    // let result = another.apply(this);
    // console.log(result);
    another = another.bind(this)
    // console.log(val)
    // var result = val();
    // console.log(result)
    return another;
}

var callbackFn = new call();
console.log('x: ' + callbackFn());
/*
class Employee {
    constructor(basicPay, daPay, hraPy) {
        this.basicPayment = basicPay;
        this.hraPayment = hraPy;
        this.daPayment = daPay;
    }

    //Employee.prototype.calculateSalary = function(){ return (this.basicPayment + this.hraPayment + this.daPayment);}
    //Employee.prototype.calculateSalary = Employee.prototype.calculateSalary.bind(this);

    calculateSalary = () => {
        return (this.basicPayment + this.hraPayment + this.daPayment);
    }
    //this.__proto__.calculateSalary.apply(this);

    //Employee.prototype.getCalculateSalaryCallback=....
    //this.__proto__.getCalculateSalaryCallback.apply(this);
    getCalculateSalaryCallback() {
        return this.calculateSalary;
        //return this.calculateSalary.bind(this);
    }
}

const empObj = new Employee(100, 2000, 3000);
console.log(empObj.calculateSalary());
//const calSalFn = Employee.prototype.calculateSalary.bind(empObj);
//console.log(calSalFn());
const callback = empObj.getCalculateSalaryCallback();

function printSalary(callback) {
    this.m = 10;
    console.log('salary: ' + callback());
}
printSalary(callback);

//arrow operator
const add = (x, y) => {
    return (x + y);
}
const multiply = (a, b) => (a * b);
// const subtract = function (x, y) {
//     if (x > y) {
//         return x - y;
//     } else {
//         return y - x;
//     }
// }
const subtract = (x, y) => (x > y ? x - y : y - x);
console.log(subtract(10, 20));

(() => {
    console.log('IIFE')
})();

*/