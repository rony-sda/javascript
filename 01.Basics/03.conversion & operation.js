
// *********************** Conversion ***********************

// Number
let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// Example
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


// Boolean
let isLoggedIn = "Rony"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// Example
// 1 => true; 0 => false
// "" => false
// "Rony" => true


// String
let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Rony"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log( (3 + 4) * 5 % 3);
// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

// prefix vs postfix
let gameCounter = 100
// ++gameCounter;
gameCounter++
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion