/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmar";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
*/

const firstName = "Pablo";
const job = "Project Manager";
const birthYear = 1994;
const year = 2024;

const pablo = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(pablo);

// IMPORTANTE: Al uso de la `` se le llama Template Literal
const pabloNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(pabloNew);

console.log(`Just a regular string...`);

// \n es para dejar un renglon y si coloco una barra al final \ puedo en mi codigo bajar un renglon
console.log('String with \nmultiple \n\
lunes');

console.log(`String with 
multiple
lines`);