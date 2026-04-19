// object হলো একটা বাক্স যেখানে সম্পর্কিত data (properties) আর কাজ (methods) একসাথে রাখা হয়।

const user = {
  username: "Rahim", // property
  loginCount: 8, // property
  signedIn: true, // property

  getUserDetails: function () {
    // method
    console.log(this.username); // 'this' মানে এই object-ই
  },
};

user.getUserDetails(); // "Rahim"

// কুকি কাটার ছাঁচ ভাবো। একটা ছাঁচ দিয়ে অনেক কুকি বানানো যায়। Constructor হলো সেই ছাঁচ!

// একই ধরনের অনেক object বানাতে Constructor Function ব্যবহার করি।

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log("Welcome " + this.username);
  };
}

// 'new' দিয়ে নতুন object তৈরি
const userOne = new User("Rahim", 12, true);
const userTwo = User("Karim", 5, false);
//  new ব্যবহার না করলে this কাজ করবে না! (userTwo অবজেক্ট new ছাড়া ভুল)

userOne.greeting(); // "Welcome Rahim"
userTwo.greeting(); // "Welcome Karim"

// new keyword — পর্দার পেছনে কী হয়?

// step -1 :=>
// 🧱 ব্যাংক একটা ফাঁকা account folder তৈরি করলো। এখনো কিছু নেই, শুধু folder-টা আছে।
// নতুন ফাঁকা Object তৈরি হয়
// JavaScript ভেতরে এটা করে:
const userOne = {}; // ফাঁকা object তৈরি

// তুমি এটা লিখোনি — JavaScript নিজেই করেছে!
// এখন userOne = {}
// 📦 এই ফাঁকা object-টাই পরে ভরে উঠবে। এটাকেই শেষে return করবে।

// step -2 : =>
// Prototype যুক্ত হয়
// 📚 ব্যাংকের সব account-ই একটা common rulebook (নিয়মকানুন) follow করে। সেই rulebook-এর সাথে নতুন folder-টা link হয়ে গেলো।
// JavaScript ভেতরে এটা করে:
userOne.__proto__ = User.prototype;

// এখন userOne, User.prototype-এর সব
// method access করতে পারবে!

// যেমন — আগের উদাহরণে:
User.prototype.increment = function () {
  this.score++;
};
userOne.increment(); // কাজ করবে!
// 🔗 Prototype link মানে — userOne-এর নিজের কাছে method না থাকলেও, User.prototype-এ খুঁজবে।

// step - 3: =>
// Constructor চলে, this = নতুন Object
// 📝 এখন ফর্মের তথ্য folder-এ লেখা হচ্ছে। this মানে এই নতুন folder-টাই।
// Constructor function এখন চলে
// এবং 'this' = userOne (নতুন object)

function User(username, loginCount) {
  this.username = username; // userOne.username = "Rahim"
  this.loginCount = loginCount; // userOne.loginCount = 12
}

// এখন userOne = { username: "Rahim", loginCount: 12 }
// ⚡ this.username লেখা মানে — নতুন object-এ username property সেট করো।

// step -4: =>
// নতুন Object return হয়
// 🎉 ফর্ম পূরণ শেষ, folder তৈরি — এখন তোমার হাতে দেওয়া হলো। userOne এখন পরিপূর্ণ!
// Constructor-এ return না লিখলেও
// JavaScript নিজেই return করে:
// return this  ← এটা automatically হয়

const userOne = new User("Rahim", 12);

console.log(userOne);
// { username: "Rahim", loginCount: 12 }

console.log(userOne.constructor); // User function
// ⚠️ যদি constructor-এ নিজে return {} লিখো — তাহলে সেটাই return হবে, এই auto-return হবে না।
