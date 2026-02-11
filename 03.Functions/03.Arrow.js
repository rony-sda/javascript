// --------------- access with this ------------------
const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage(); // current execution context
user.username = "sam"; // context change
user.welcomeMessage(); // current execution context

// --------------- this with functions ------------------
console.log(this); // {}

function user() {
  let username = "rony";
  console.log(this.username); // undifined
}

user(); // call

const user2 = function () {
  let username = "hitesh";
  console.log(this.username); // undifined
};

const user3 = () => {
  let username = "hitesh";
  console.log(this); // {}
};

user3(); // call

// --------------- arrow function ------------------
const addTwo = (num1, num2) => {
  return num1 + num2;
};

const addTwo1 = (num1, num2) => num1 + num2;

const addTwo2 = (num1, num2) => num1 + num2;

const addTwo3 = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));
