"use strict";

if (4 == 9) {
  console.log('Ok');
} else {
  console.log('Error');
}

const num = 50;

if (num < 49) {
  console.log('Error');
} else if (num > 100) {
  console.log('Too many');
} else {
  console.log('Ok');
}

// Тернарный оператор (три аргумента a ? b : c)
const num2 = 50;
(num2 === 50) ? console.log('Ok!') : console.log('NotOK');


const num3 = 50;
switch (num3) {
  case 49:
    console.log('Incorect');
    break;
  case 100:
    console.log('Incorect');
    break;
  case 50:
    console.log('Ok');
    break;
  default:
    console.log('Not this time');
    break;
}