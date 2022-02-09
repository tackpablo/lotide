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

const letterPositions = function (sentence) {
  // container for results letter positions
  const results = {};
  // run loop to go through sentence positions
  for (i = 0; i < sentence.length; i++) {
    // save letters at each position i
    const letter = sentence[i];
    // for any position that is not a letter
    if (letter !== " ") {
      // when the result object with the letter is not in the array (which is being generated for every letter)
      if (!Array.isArray(results[letter])) {
        // add in the letter and the index
        results[letter] = [i];
        // when the result object with the letter is in the array
      } else {
        // add in the next index
        results[letter].push(i);
      }
    }
  }
  return results;
};

console.log(letterPositions("hello"));
// for letter e, position 1 check
assertEqArrays(letterPositions("hello").e, [1]);
assertEqArrays(letterPositions("hello").l, [2, 3]);
