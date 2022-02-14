const eqArrays = require("./eqArrays");

const assertArraysEq = require("./assertArraysEqual");

const takeUntil = function (array, callback) {
  // variable to capture end result
  let result = [];
  // loop through elements in array
  for (const el in array) {
    // if element of array meets condition of callback function
    console.log(el);
    if (callback(array[el])) {
      // result will be to slice from that point to the element
      result = array.slice(0, el);
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, (x) => x < 0);
// assertArraysEq(results1, [1, 2, 5, 7, 2]); // [ 1, 2, 5, 7, 2 ]

// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, (x) => x === ",");
// assertArraysEq(results2, ["I've", "been", "to", "Hollywood"]); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]
