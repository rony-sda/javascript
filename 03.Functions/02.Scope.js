// --------------- var problem example ------------------
var c = 300;
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("INNER: ", a);
  console.log("inner ", c);
}

// console.log(a); error => a is not defined
// console.log(b); error => b is not defined
console.log(c);

// --------------- variable access scopes (let,const) --------------
function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website); // error => website is not defined

  two(); // call
}
// call
one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    console.log(username + website);
  }
  // console.log(website); error => website is not defined
}
// console.log(username); error => username is not defined

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));

function addone(num) {
  return num + 1;
}

// addTwo(5); error => cannot call before initializations
const addTwo = function (num) {
  return num + 2;
};
