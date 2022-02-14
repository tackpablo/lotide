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

module.exports = countLetters;
