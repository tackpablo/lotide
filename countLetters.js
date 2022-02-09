const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);

const countLetters = function (sentence) {
  // container for results letter positions
  const results = {};
  // run loop to go through sentence positions
  for (letter of sentence) {
    // for places where the letter isn't an empty space
    if (letter !== " ") {
      // if letter is already in results object
      if (results[letter]) {
        // add + 1 to count
        results[letter] += 1;
        // if letter is not already in results object
      } else {
        // initialize letter and make it equal to 1
        results[letter] = 1;
      }
    }
  }
  return results;
};

console.log(countLetters("LHL"));
console.log(countLetters("Pablo"));
console.log(countLetters("lighthouse in the house"));
