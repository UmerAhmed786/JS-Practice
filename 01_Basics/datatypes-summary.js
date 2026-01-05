//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = "100"
const scoreValue = 100.3

const isLoggedIn = false
const outSideTem = null
let userEail;

const id = Symbol('113')
const anotherId = Symbol('414')
// console.log(id === anotherId);

const bigNumber = 1234569878541n
// console.log(typeof score);

// Reference (Non primitive)

// Array, Objects, Functions

// const hero = [Key, Bottle, Com];
// let myObj = {
//     name: "umer ahmed",
//     age: 21,
// }

// const myFountion = function (){
//     console.log("Hell World");   
// }

// console.log(typeof outSideTem);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(Primitive),  Heap(Non Primitive)

let myName = "Umer"
let anotherName = myName
anotherName = "Umer Ahmed"

// console.log(myName);
// console.log(anotherName);


let userOne = {
    name: "umer",
    age: 21
}

let userTwo = userOne

userTwo.name = "Umer Ahmed",

console.log(userOne.name);
console.log(userTwo.name);
