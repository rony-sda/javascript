// consructor => singleton
Object.create();

// --------------- litaral ------------------
const mySym = Symbol("mySym");
const myTeam = {
  name: "Bangladesh",
  "members count": 11,
  isQualified: true,
  [mySym]: "mySym1", // variable treat as property
};

// access braket Notation (right way)
console.log(myTeam["name"]);
console.log(myTeam["members count"]);
console.log(myTeam[mySym]);
console.log(myTeam);

// access dot notation
console.log(myTeam.name);
console.log(myTeam.isQualified);

// add methods in obj & access this with grap a context
myTeam.isPlay = function () {
  console.log(`Yes We Are Playing..... ${this.name}`);
};

console.log(myTeam.isPlay());
