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

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // check if length of both object keys are the same (i.e check if key for both objects are equal)
  if (keys1.length !== keys2.length) {
    return false;
  }

  //loop through keys
  for (key of keys1) {
    // check if values of both objects have an array (nested)
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // return array check function to see if arrays are matching (nested arrays)
      return eqArrays(object1[key], object2[key]);
    } else {
      // if any values do not match
      if (object1[key] !== object2[key]) {
        // return false
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

obj1 = { b: 1, a: 2 };
obj2 = { a: 2, b: 1 };
obj3 = { a: 1, b: 2, c: 3 };
obj4 = { a: 1, b: 2, c: "3" };

assertObjectsEqual(obj1, obj1); // objects are the same so they should pass
assertObjectsEqual(obj1, obj2); // objects but key/values are in different orders
assertObjectsEqual(obj1, obj3); // objects are not the same so fail
assertObjectsEqual(obj3, obj4); // a value is not the same so fail
