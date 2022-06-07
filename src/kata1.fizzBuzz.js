const fizzBuzz = number => {
  if (number % 3 === 0 && number % 5 !== 0) {
    return "Fizz";
  }
  if (number % 5 === 0 && number % 3 !== 0) {
    return "Buzz";
  }
  if (number % 3 === 0 || number % 5 === 0) {
    return "FizzBuzz";
  }
  if (number === 0){
      return 0;
  }
  return number;
};

module.exports = fizzBuzz;
