// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  // counter for keeping track of results
  const result = {};
  // loop through each key
  for (const item of allItems) {
    // cycle through firstNames array
    //   console.log(item)
    // if boolean for checking is true (we want to count it)
    if (itemsToCount[item]) {
      // if name is in the counter
      if (result[item]) {
        console.log(result[item]);
        // increase count for their name
        result[item] += 1;
      } else {
        // if not inside counter make it 1 to start count
        result[item] = 1;
      }
    }
  }
  // return counter
  return result;
};

module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe",
// ];

// const result1 = countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true,
//   Agouhanna: false,
// });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
