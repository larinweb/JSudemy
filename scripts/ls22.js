"use strict";

let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

do {
  console.log(num);
  num++;
}
while (num < 55);

// let num2 = 50;

// for (let i = 1; i < 8; i++){
//   console.log(num2);
//   num2++;
// }

for (let i = 1; i < 10; i++) {
  if (i === 10) {
    // break;
    continue;
  }

  console.log(i);
}

for (let i = 0; i < 10;) {
  if (++i % 2) {
    continue;
  }
  console.log(i);
}

// И сверху и снизу - одно и то же

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

outer: for (let i = 0; i > 100;) {
  let input = prompt('Введите число больше 100? (${i})', '0');
  if (!input) break outer;
  alert('Готово!');
}

let num2;

do {
  num2 = prompt("Введите число больше 100?", 0);
} while (num2 <= 100 && num2);


let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log( i ); // простое число
}




//let moneyInsert = 0;
// while (moneyInsert <= 5){
//   console.log(moneyInsert);
//   moneyInsert++;
// }

// let moneyInsert = 0;
// do {
//   console.log(moneyInsert);
//   moneyInsert++;
// }
// while (moneyInsert <= 5);

// for (let moneyInsert = 1; moneyInsert <= 5; moneyInsert++){
//   console.log(moneyInsert);
// }

for (let moneyInsert = 1; moneyInsert <= 25; moneyInsert++){
  if (moneyInsert === 6) {
    //break;
    continue;
  }
  console.log(moneyInsert);
}