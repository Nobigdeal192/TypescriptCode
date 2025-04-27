"use strict";
//Arrays
let stringArr = ['one', 'hey', 'dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
console.log(stringArr);
guitars[0] = 1984;
guitars.unshift();
guitars = stringArr;
console.log(guitars);
let test = [];
let bands = [];
bands.push('Van Halen');
//Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['john', 1, false];
myTuple[1] = 56;
//objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
exampleObj.prop1 = 'John';
console.log(exampleObj);
