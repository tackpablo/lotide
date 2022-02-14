const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const words1 = ["flight", "plan", "delayed", "major", "tom"];
// const words2 = [];
// const words3 = ["i", "e"];
// const words4 = ["1", "2"];

// const results1 = map(words, (word) => word[0]);
// const results2 = map(words1, (word) => word[0]);
// const results3 = map(words2, (word) => word[0]);
// const results4 = map(words3, (word) => word[0]);
// const results5 = map(words4, (word) => word[0]);

// console.log(assertArraysEq(results1, ["g", "c", "t", "m", "t"]));
// console.log(assertArraysEq(results2, ["f", "p", "d", "m", "t"]));
// console.log(assertArraysEq(results3, []));
// console.log(assertArraysEq(results4, ["i", "e"]));
// console.log(assertArraysEq(results5, ["1", "2"]));
