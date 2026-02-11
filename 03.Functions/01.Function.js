// --------------- simple func decleartion ------------------
function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
// --------------- return a func value ------------------
function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}
// pass as a arguments
const result = addTwoNumbers(3, 5);
console.log("Result: ", result);

// --------------- parameter default value ------------------
function loginUserMessage(username = "mehedi") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("rony"));

// --------------- rest oparator ------------------
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000)); // [500,2000]

// --------------- object & array ------------------
// pass as object
const user = {
  username: "rony",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

// with array
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
