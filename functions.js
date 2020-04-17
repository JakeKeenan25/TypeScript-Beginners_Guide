"use strict";
exports.__esModule = true;
var helloWord = function () { return "Hello World"; };
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
// Add a question mark after the param to denote the param is optional.
// all optional params must come after the required params
var name = function (first, second) { return second ? first + " " + second : first; };
console.log("Add:", add(2, 3));
console.log("Subtract:", subtract(5, 3));
console.log("Name:", name("jake"));
console.log("Name:", name("jake", "keenan"));
// default params, optional param default value if it is absent
var multiply = function (x, y) {
    if (y === void 0) { y = 5; }
    return x * y;
};
console.log("Multiply:", multiply(5, 1));
console.log("Multiply:", multiply(5));
