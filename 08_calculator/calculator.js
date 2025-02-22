const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let finalSum = 0;
  for (let num of array) {
    finalSum += num;
  }
  return finalSum;
};

const multiply = function(array) {
  let finalProduct = 1;
  for (let num of array) {
    finalProduct *= num;
  }
  return finalProduct;
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
