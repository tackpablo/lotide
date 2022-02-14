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

module.exports = letterPositions;

// console.log(letterPositions("hello"));
// // for letter e, position 1 check
// assertArraysEq(letterPositions("hello").e, [1]);
// assertArraysEq(letterPositions("hello").l, [2, 3]);
