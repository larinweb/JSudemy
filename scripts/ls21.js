"use strict";
// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries){
//   console.log('I am happy');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'monjihuvygdtr');

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log('All happy');
// } else {
//   console.log('We leave');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 5;


if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
   console.log('All happy');
} else {
   console.log('We leave');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let johnReport, alexReports, samReport, mariReport = 'done';

console.log((johnReport || johnReport || samReport || mariReport));

console.log(!0); // оператор "НЕ"


// ------------ Tasks

//Что выведет в консоль код?

console.log(NaN || 2 || undefined); //t 2
console.log(NaN && 2 && undefined); //f nan
console.log(1 && 2 && 3); //t 3
console.log(!1 && 2 || !3); //f
console.log(25 || null && !3); //t
console.log(NaN || null || !3 || undefined || 5); //t 5
console.log(NaN || null && !3 && undefined || 5); //t 5
console.log(5 === 5 && 3 > 1 || 5); //t

//Выполняется ли условие?

const hamburger1 = 3;
const fries1 = 3;
const cola1 = 0;
const nuggets1 = 2;

if (hamburger1 === 3 && cola1 || fries1 === 3 && nuggets1) {
   console.log('Done!');
}
// Done.

let hamburger2;
const fries2 = NaN;
const cola2 = 0;
const nuggets2 = 2;

if (hamburger2 || cola2 || fries2 === 3 || nuggets2) {
   console.log('Done!');
}
// Done

let hamburger3;
const fries3 = NaN;
const cola3 = 0;
const nuggets3 = 2;

if (hamburger3 && cola3 || fries3 === 3 && nuggets3) {
   console.log('Done!');
}
// none