
// *********************** Conversion ***********************

// Number
const score = '32'
let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber);

// Example
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


// Boolean
let isLoggedIn = "Rony"
let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn); // true

// Example
// 1 => true; 0 => false
// "" => false
// "Rony" => true


// String
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); // string


// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue); // -3

console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4
console.log(2**3); // 8
console.log(2/3); // 0.6666666666666666
console.log(2%3); // 2

let str1 = "hello"
let str2 = " Rony"
let str3 = str1 + str2
console.log(str3); // "hello Rony"

console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"
console.log( (3 + 4) * 5 % 3); // 2
console.log(+true); // 1
console.log(+""); // 0


// avoid this assignments
let num1, num2, num3
num1 = num2 = num3 = 2 + 2

// prefix vs postfix

// postfix
let x = 5;
console.log(x++);   // 5
console.log(x);     // now 6
console.log(a--);   // 5
console.log(a);   // 4

// prefix
let y = 5;
console.log(++y);   // 6
console.log(y);     // 6


// example
let i = 5;
let result = i++ + ++i;
// result = 5 + 7 = 12
 console.log(result);   // 12
console.log(i);        // 7


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion