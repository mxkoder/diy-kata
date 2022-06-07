const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(9)).toEqual('Fizz');
    expect(fizzBuzz(261)).toEqual('Fizz');
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(10)).toEqual('Buzz');
    expect(fizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz(160)).toEqual('Buzz');
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(150)).toEqual('FizzBuzz');
    expect(fizzBuzz(195)).toEqual('FizzBuzz');

  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(8)).toEqual(8);
    expect(fizzBuzz(91)).toEqual(91);
    expect(fizzBuzz(152)).toEqual(152);
  });
});
