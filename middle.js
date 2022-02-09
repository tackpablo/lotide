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

const middle = function (array) {
  let arrayResult = [];
  // array that are smaller than length 2
  if (array.length <= 2 && array.length > 0) {
    return arrayResult;
    // for all other cases
  } else if (array.length % 2 === 0) {
    // cases where the index is even, needing to return both middle values
    return (arrayResult = [
      // accessing even (first) value
      array[array.length / 2 - 1],
      // accessing odd (second) value
      array[array.length / 2],
    ]);
  } else {
    // odd arrays
    return (arrayResult = array[(array.length - 1) / 2]);
  }
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
