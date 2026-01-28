
// *********************** primitive *********************** 

/*  7 types : 
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique
*/

const myName = 'Rony'
const score = 100
const scoreValue = 100.3
const isLoggedin = false
const outsideTemp = null
let userEmail; // undefined
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false
console.log(typeof anotherId); // symbol
const bigNumber = 3456543576654356754n



// ********************* Reference (Non primitive) *********************

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// --------------- Notes ------------------
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

    https://262.ecma-international.org/5.1/#sec-11.4.3
*/