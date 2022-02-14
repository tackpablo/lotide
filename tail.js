const assertEqual = require("./assertEqual");

const tail = function (array) {
  let tailValue = array.slice(1);
  return tailValue;
};

module.exports = tail;
