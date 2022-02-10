const eqArrays = function (actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertEqArrays = function (actual, expected) {
  let eqArraysResult = eqArrays(actual, expected);

  if (eqArraysResult === true) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const takeUntil = function (array, callback) {
  // variable to capture end result
  let result = [];
  // loop through elements in array
  for (const el in array) {
    // if element of array meets condition of callback function
    if (callback(array[el])) {
      // result will be to slice from that point to the element
      result = array.slice(0, el);
      return result;
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertEqArrays(results1, [1, 2, 5, 7, 2]); // [ 1, 2, 5, 7, 2 ]

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
assertEqArrays(results2, ["I've", "been", "to", "Hollywood"]); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]
