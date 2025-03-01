const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, currentItem) => {
    return total * currentItem;
  });
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }

	return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
