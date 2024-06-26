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

// function declaration. #Leccion34 Pueden llamarse antes de ejecutar la funcion
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

// arrow functions #Leccion35
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1994, 'Pablo'));

// Functions calling other Functions #Leccion36

const cutPieces = function (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// #Challenge1

// calculo del promedio
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;  
// almacenado del promedio de cada equipo
const scoreDolphins = calcAverage(85,54,41);
const scoreKoalas = calcAverage(23,34,27);
// funcion para generar un ganador
const checkWinner = function (avgDolphins, avgKoalas){
    if(avgDolphins > avgKoalas){
        return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas > avgDolphins){
        return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        return console.log(`No team wins...`)
    }
}

checkWinner(scoreDolphins, scoreKoalas);
*/

// Introduction to arrays #Leccion39
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Forma 1 de crear arrays 
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Forma 2 de crear arrays obligatoriamente se usa new Array
const years = new Array(1991, 1984, 2008, 2020);

// En JS los arrays empiezan en 0
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
// Dentro de los [] se puede colocar cualquier expresion
console.log(friends[friends.length - 1]);

// Los arrays se pueden mutar/transformar incluso si son const
friends[2] = 'Jay';
console.log(friends);
// friends - ['Bob', 'Alice'] esto no se puede hacer

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);