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

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["flight", "plan", "delayed", "major", "tom"];
const words2 = [];
const words3 = ["i", "e"];
const words4 = ["1", "2"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
const results2 = map(words1, (word) => word[0]);
const results3 = map(words2, (word) => word[0]);
const results4 = map(words3, (word) => word[0]);
const results5 = map(words4, (word) => word[0]);

console.log(assertEqArrays(results1, ["g", "c", "t", "m", "t"]));
console.log(assertEqArrays(results2, ["f", "p", "d", "m", "t"]));
console.log(assertEqArrays(results3, []));
console.log(assertEqArrays(results4, ["i", "e"]));
console.log(assertEqArrays(results5, ["1", "2"]));
