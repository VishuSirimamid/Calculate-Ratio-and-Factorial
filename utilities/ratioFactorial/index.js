const ratio = require("../ratio/index.js");
const factorial = require("../factorial/index.js");

const ratioAndFactorial = (a, b, c) => {
  return ratio(a, b), factorial(c);
};
module.exports = ratioAndFactorial;
