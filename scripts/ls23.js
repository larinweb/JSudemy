"use strict";
for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);

    }
}

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n'; // perenos stroki
}

console.log(result);


let treeResult = '';
const treeLenght = 7;

for (let treeLine = 1; treeLine < treeLenght; treeLine++) {

    for (let treeColumn = 0; treeColumn < treeLine; treeColumn++) {
        treeResult += '*';
    }

    treeResult += '\n'; // perenos stroki
}

console.log(treeResult);


let reverse = '';
const reverseHeight = '8';

for (let reverseLine = 0; reverseLine < reverseHeight; reverseLine++) {
    for (let reverseColumn = reverseHeight; reverseColumn > reverseLine; reverseColumn--) {
        reverse += '*';
    }
    reverse += '\n'; // perenos stroki
}
console.log(reverse);



first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}