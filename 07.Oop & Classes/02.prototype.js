// স্কুলে একটা লাইব্রেরি থাকে — সব ছাত্র সেটা ব্যবহার করতে পারে। প্রত্যেকের কাছে আলাদা বই কিনতে হয় না। Prototype এভাবেই কাজ করে!
// Prototype-এ method রাখলে সব object সেটা share করে — memory বাঁচে।

// Function oo ak doroner special object. behabier as a function. but object dot notitaion dia vlaue access hoy.
function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
  // এখানে method রাখিনি!
}

// Prototype-এ method যোগ করো — সব object পাবে
createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log("Score: " + this.score);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 10);

chai.increment();
chai.printMe(); // Score: 26
tea.printMe(); // Score: 10

// chai আর tea-এর নিজস্ব কোনো printMe নেই, কিন্তু Prototype-এ আছে তাই কাজ করছে

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// বাবার কাছ থেকে সন্তান স্বভাব পায়। Teacher User-এর কাছ থেকে properties নিতে পারে।

// Prototype chain ব্যবহার করে একটা object আরেকটার properties inherit করতে পারে।

const User = {
  name: "chai",
  email: "chai@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

// Teacher এখন User-এর সব property পাবে
Teacher.__proto__ = User;
// অথবা আধুনিক পদ্ধতি:
Object.setPrototypeOf(Teacher, User);

console.log(Teacher.name); // "chai" — User থেকে পেয়েছে!
console.log(Teacher.makeVideo); // true — নিজেরটা

// String-এও custom method যোগ করা যায়!
String.prototype.trueLength = function () {
  return this.trim().length; // খালি জায়গা বাদ দিয়ে length
};

"  hello  ".trueLength(); // 5
