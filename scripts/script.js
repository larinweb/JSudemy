"use strict";

const obj = {
    name: "Slava",
    age: 25,
    isMarried: false
};

console.log(obj.isMarried); // call via dot better
//console.log(obj["name"]);

let arr = ['plump.png', 'orange.png', 6, 'apple.png', {}];
console.log(arr[3]);

// count start from 0 zero
const arr2 = [0, 1, 2];
const objLvs = {
    a: 1,
    b: 2
};
console.log(arr2[1]);

// Масив arr4
const arr4 = [1, 2, 3];
// Обьект arr4
const arrObj = {
    0: 1,
    1: 2,
    2: 3
};

// arrObj.b = '1234';
arrObj['.b'] = '1234';

//console.log(arrObj['b']);
console.log(arrObj.b);

//const b = 'b';

//arrObj.b = '1234'; down the same but better
//arrObj['.b'] = '1234';


//console.log(arrObj[b]); error
console.log(arrObj['0']);
//console.log(arrObj.b); undefined

// можно вкладывать обьекты в обьекты, ключом может быть новы обьект и\или масив
const arrObjw = {
    0: 1,
    1: 2,
    2: 3,
    abc: {
        df: [{}, {}],
        def: {

        }
    }
};
// Задание к 12 уроку
const storeName = "NLAW";
const storeDescription = {
    budget: 10000,
    employees: ['Nastya', 'Slava', 'Balyk'],
    products: {
        Nlaw: 1500,
        Stinger: 1800
    },
    open: true
};

const obj2 = {
    Anna: 500, // mozno bez kavicheck
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


// КОНКАНТЕНАЦИЯ - склуивание строкб обратные ковычки.
const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = "Slava";
// alert(`Привет, ${user}`);

const needToUseSomeData = "Some Data from Somewhere";
alert(`Сейчас будем использовать, ${needToUseSomeData}`);



// ************  Lesson 15


let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(5 % 2);

console.log(2 * 4 === 8);

// const isChecked = true,
//       isClose = true;

// console.log(isChecked && isClose);

const isChecked = true,
    isClose = false;

console.log(isChecked || isClose);
console.log(isChecked && isClose);

console.log(2 + 2 * 2 === 8);