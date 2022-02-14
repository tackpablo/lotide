const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");

// TEST CODE
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // check if length of both object keys are the same (i.e check if key for both objects are equal)
  if (keys1.length !== keys2.length) {
    return false;
  }

  //loop through keys
  for (key of keys1) {
    console.log(key);
    // check if values of both objects have an array (nested)
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // if eqArrays (checking if both arrays are equal) returns is false, return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // return array check function to see if arrays are matching (nested arrays)
      // return eqArrays(object1[key], object2[key]);
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

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// // const dc = { d: ["2", 3], c: "1" };
// // assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "2", d: ["2", 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// // recursive eqobjects
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const eqArrays = function (actual, expected) {
//   if (actual.length !== expected.length) {
//     return false;
//   } else {
//     for (let i = 0; i < actual.length; i++) {
//       if (actual[i] !== expected[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

// const eqObjects = function (object1, object2) {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);
//   // check if length of both object keys are the same (i.e check if key for both objects are equal)
//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   //loop through keys
//   for (key of keys1) {
//     // console.log(key);
//     // check if values of both objects have an array (nested)
//     if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//       // if eqArrays (checking if both arrays are equal) returns is false, return false
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//       // return array check function to see if arrays are matching (nested arrays)
//       // return eqArrays(object1[key], object2[key]);
//     } else {
//       // if any values do not match
//       if (object1[key] !== object2[key]) {
//         // return false
//         return false;
//       }
//     }
//   }
//   return true;
// };

// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
// // console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// // console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
