
const name = "Rony"
const age = 20

// string concatenation
console.log(name + age + " Value");

// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${age}`);

const teamName = new String('bangladesh')
console.log(teamName) // [String: 'bangladesh']
console.log(teamName[0]); // b
console.log(teamName.__proto__); // {}
const newStringOne = "   rony    "
const str1 = "Hello";
const str2 = "World";
const url = "https://rony.com/rony%20gazi"

// String Methods
console.log(teamName.length); // 10 
console.log(teamName.toUpperCase()); // BANGLADESH
console.log(teamName.toLowerCase()); // bangladesh
console.log(teamName.charAt(2)); // n
console.log(teamName.indexOf('d')); // 6 
console.log(teamName.substring(0, 4)) // bang
console.log(teamName.slice(-8, 4)) // ng
console.log(teamName.split('a')); // [ 'b', 'ngl', 'desh' ]
console.log(teamName.startsWith("ban")); // true
console.log(teamName.toString()) // [String: 'any'] => any
console.log(newStringOne.trim()); // rony
console.log(str1.concat(" ", str2)); // "Hello World"
console.log(url.replace('%20', '-')) // %20 replace -
console.log(url.includes('any')) // false

