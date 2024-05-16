'use strict';
/*
function logger() {
    console.log('My name is Jonas')
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// function declaration. Pueden llamarse antes de ejecutar la funcion
const age1 = calcAge1(1994);

function calcAge1(birthYear) {
    return 2024 - birthYear;
}

console.log();

// function expression. No pueden llamarse antes de ejecutar la funcion
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}
const age2 = calcAge2(1994)
console.log(age1, age2);