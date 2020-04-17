"use strict";
exports.__esModule = true;
var peep1 = {
    firstName: 'Jake',
    secondName: 'Keenan',
    age: 26
};
var peep2 = {
    firstName: 'Liam',
    secondName: 'Keenan'
};
var fullName = function (person) {
    // if statment inside the string lateral
    console.log(person.firstName + " " + person.secondName + " " + (!person.age ? '' : person.age));
};
fullName(peep1);
fullName(peep2);
