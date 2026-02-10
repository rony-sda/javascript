// consructor => singleton
// Object.create();
const singleton = new Object();

// litaral
const mySym = Symbol("mySym");
const myTeam = {
  name: "Bangladesh",
  "members count": 11,
  isQualified: true,
  [mySym]: "mySym1",
};

// access braket Notation (right way)
console.log(myTeam["name"]);
console.log(myTeam["members count"]);
console.log(myTeam[mySym]);
console.log(myTeam);

// access dot notation
console.log(myTeam.name);
console.log(myTeam.isQualified);

myTeam.isPlay = function () {
  console.log(`Yes We Are Playing..... ${this.name}`);
};

console.log(myTeam.isPlay());

//  nested objects
const regularUser = {
  email: "any@gmail.com",
  fullname: {
    userfullname: {
      firstname: "rony",
      lastname: "gazi",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname);

// merge object
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = { obj1, obj2 }; // {{1: "a", 2: "b"},{3: "c", 4: "d"}}
const obj5 = Object.assign({}, obj1, obj2, obj4);
// {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"}

const obj6 = { ...obj1, ...obj2 };
console.log(obj3);
// {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"}

// Array Of Objects
const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email; // access

//  objects loops
console.log(Object.keys(myTeam));
// [ 'name', 'members count', 'isQualified', 'isPlay' ]
console.log(Object.values(myTeam));
// [ 'Bangladesh', 11, true, [Function (anonymous)] ]
console.log(Object.entries(myTeam));
/* [
  [ 'name', 'Bangladesh' ],
  [ 'members count', 11 ],
  [ 'isQualified', true ],
  [ 'isPlay', [Function (anonymous)] ]
] */

console.log(myTeam.hasOwnProperty("isLoggedIn")); // false

// destructuring
const course = {
  coursename: "ai ml",
  price: "999",
  courseInstructor: "rony",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);
