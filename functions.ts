export{}
import {Person} from './interfaces'

const helloWord = () => "Hello World";

const add = (a:number,b:number):number => a+b;
const subtract = (a:number,b:number):number => a-b;

// Add a question mark after the param to denote the param is optional.
// all optional params must come after the required params
const name = (first:string, second?:string):string => second ? first + " " + second:first;

console.log("Add:", add(2,3));
console.log("Subtract:", subtract(5,3));
console.log("Name:", name("jake"));
console.log("Name:", name("jake", "keenan"));

// default params, optional param default value if it is absent
const multiply = (x:number, y:number=5):number => x * y;
console.log("Multiply:", multiply(5,1));
console.log("Multiply:", multiply(5));