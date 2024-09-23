const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1-num2;
};

const sum = function(numArray) {
  if (numArray.length == 0){
    return 0;
  }

  let sum = numArray.reduce((total, currentNum) => {
    return total + currentNum;
  })

  return sum;
};

const multiply = function(array) {
  product = array.reduce((total, current) => {
    return total * current;
  })

  return product;
};

const power = function(base, power) {
  return Math.pow(base, power);
};

const factorial = function(base) {
  if (base < 0){
    return -1;
  }
  else if (base == 0){
    return 1;
  }	

  factorialProduct = 1;
  for (let i = base; i > 0; i--){
    factorialProduct *= i;
  }

  return factorialProduct;
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
