
// Basic Comparision
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log("2" === 2); // strict check of value and type
// console.log(2 != 1);




// avoid those comparisons ❌
// console.log("2" > 1);
// console.log("02" > 1);


/* The Reason is that an equality check == and comparison > < >= <= work differently
Comparison convert null to a number, treating it as 0. 
thats why (3) null >= 0 is true and (1) null > 0 is false. */
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

