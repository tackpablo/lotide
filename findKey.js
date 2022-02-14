const findKey = function (object, callback) {
  // variable to capture end result
  let result = "";
  // loop through object
  for (const el in object) {
    // console.log(el);

    // if element of the object meets condition of callback function
    if (callback(object[el])) {
      // the result is the element
      result = el;
      return result;
    }
  }
  return result;
};

module.exports = findKey;

// assertEqual(
//   findKey(
//     {
//       "Blue Hill": { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 },
//     },
//     (x) => x.stars === 2
//   ),
//   "noma"
// ); // => "noma"
