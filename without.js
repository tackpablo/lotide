const without = function (list, filter) {
  let filteredList = [];
  for (let i = 0; i < list.length; i++) {
    if (!filter.includes(list[i])) {
      filteredList.push(list[i]);
    }
  }

  return filteredList;
};

module.exports = without;

// console.log(without([1, 2, 3], [1])); // => [1, 2]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
// console.log(without(["1", "2", "3"], [2, 1, "3"])); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEq(words, ["hello", "world", "lighthouse"]);
