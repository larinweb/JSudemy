'use strict';

const obj = {
    name: "Slava",
    age: 25,
    isMarried: false
};

console.log(obj.name); // call via dot better
//console.log(obj["name"]);

let arr = ['plump.png', 'orange.png', 6, 'apple.png', {}
];
console.log(arr[3]);

// count start from 0 zero
const arr2 = [0, 1, 2];
const arr3 = [1, 2, 3];


const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c'
};

//const b = 'b';

//arrObj.b = '1234'; down the same but better
//arrObj['.b'] = '1234';


//console.log(arrObj[b]); error
console.log(arrObj['0']);
//console.log(arrObj.b); undefined



const obj2 = {
    'Anna': 500,
    'Alice': 800
};

//alert('Aloha');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("вам есть 18?", "18");
// console.log(typeof(answer));
// console.log(answer + 5);


const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Скоько вам лет?', '');

// document.write(answers);
console.log(typeof (answers));

const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = "Slava";

// alert(`Привет, ${user}`);

// Lesson 15


let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(++incr);
console.log(--decr);

console.log(5 % 2);

console.log(2 * 4 === 8);

// const isChecked = true,
//       isClose = true;

// console.log(isChecked && isClose);

const isChecked = true,
    isClose = true;

//console.log(isChecked || isClose);
console.log(isChecked && isClose);

console.log(2 + 2 * 2 == '7');