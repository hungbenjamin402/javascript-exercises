const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
	let sum = 0
  arr.forEach(element => {
    sum += element
  });
  return sum
};

const multiply = function(arr) {
  let multiply = 1
  arr.forEach(element => {
    multiply *= element
  });
  return multiply
};

const power = function(base, exp) {
  if (exp === 1) return base;
  else if (exp % 2 == 0) {
    return power(base, parseInt(exp/2)) * power(base, parseInt(exp/2))
  }
  else {
    return base * power(base, parseInt(exp/2)) * power(base, parseInt(exp/2))
  }
};

const factorial = function(num) {
	let multiple = 1
  for (let i = 1; i <= num; i++) {
    multiple *= i
  }
  return multiple
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
