const findKeyByValue = function (bestTVShowsByGenre, showName) {
  let dramaKey = Object.keys(bestTVShowsByGenre).find(
    (key) => bestTVShowsByGenre[key] === showName
  );
  return dramaKey;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
