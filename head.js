const head = function (array) {
  let headValue = array[0];
  return headValue;
};

module.exports = head;

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([2]), 2);
// assertEqual(head([]));
