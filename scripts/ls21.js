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