const flatten = function (inputArray) {
  let flatArray = [];
  for (let element of inputArray) {
    if (Array.isArray(element)) {
      flatArray.push(...element);
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
