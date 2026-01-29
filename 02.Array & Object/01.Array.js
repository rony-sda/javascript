
// *********************** Array ***********************

const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1, 2, 3, 4)
const teams = ["bangladesh", "pakistan"]

console.log(myArr[1]); // Braket notation to access value


// --------------- Array Methods ------------------

// 🔥 MUTATING METHODS (Original Array Change)

const mutArr = [1, 2, 3];

// push() → add to end
mutArr.push(4);
console.log(mutArr); // [1,2,3,4]

// pop() → remove from end
mutArr.pop();
console.log(mutArr); // [1,2,3]

// shift() → remove first
mutArr.shift();
console.log(mutArr); // [2,3]

// unshift() → add to start
mutArr.unshift(0);
console.log(mutArr); // [0,2,3]

// splice() → add/remove
mutArr.splice(1, 1);
console.log(mutArr); // [0,3]

// sort() → sort original
const sortArr = [3,1,2];
sortArr.sort();
console.log(sortArr); // [1,2,3]

// reverse()
sortArr.reverse();
console.log(sortArr); // [3,2,1]

// fill()
const fillArr = [1,2,3];
fillArr.fill(9);
console.log(fillArr); // [9,9,9]

// copyWithin()
const copyArr = [1,2,3,4];
copyArr.copyWithin(0,2);
console.log(copyArr); // [3,4,3,4]



// ❄️ NON-MUTATING METHODS (New Array/String Return)

const arr = [1, 2, 3];

// map()
const mapped = arr.map(x => x * 2);
console.log(arr);    // [1,2,3]
console.log(mapped); // [2,4,6]

// filter()
const filtered = arr.filter(x => x > 1);
console.log(arr);     // [1,2,3]
console.log(filtered); // [2,3]

// slice()
const sliced = arr.slice(0,2);
console.log(arr);   // [1,2,3]
console.log(sliced); // [1,2]

// concat()
const merged = arr.concat([4,5]);
console.log(arr);    // [1,2,3]
console.log(merged); // [1,2,3,4,5]

// flat()
const nested = [1,[2,3]];
const flatArr = nested.flat();
console.log(nested);  // [1,[2,3]]
console.log(flatArr); // [1,2,3]

// flatMap()
const flatMapped = arr.flatMap(x => [x, x*2]);
console.log(arr);        // [1,2,3]
console.log(flatMapped); // [1,2,2,4,3,6]

// join() → string
const joined = arr.join("-");
console.log(arr);    // [1,2,3]
console.log(joined); // "1-2-3"

// includes()
console.log(arr.includes(2)); // true

// indexOf()
console.log(arr.indexOf(3)); // 2

// find()
console.log(arr.find(x => x > 1)); // 2

// findIndex()
console.log(arr.findIndex(x => x > 1)); // 1

// some()
console.log(arr.some(x => x > 2)); // true

// every()
console.log(arr.every(x => x > 0)); // true

// reduce()
const sum = arr.reduce((a,b) => a+b, 0);
console.log(sum); // 6



// 🆕 ES2023 SAFE COPY METHODS (Non-mutating versions)

const nums = [3,1,2];

// toSorted()
const sortedCopy = nums.toSorted();
console.log(nums);       // [3,1,2]
console.log(sortedCopy); // [1,2,3]

// toReversed()
const revCopy = nums.toReversed();
console.log(nums);    // [3,1,2]
console.log(revCopy); // [2,1,3]

// toSpliced()
const splicedCopy = nums.toSpliced(1,1);
console.log(nums);        // [3,1,2]
console.log(splicedCopy); // [3,2]

// with()
const withCopy = nums.with(1, 99);
console.log(nums);     // [3,1,2]
console.log(withCopy); // [3,99,2]
