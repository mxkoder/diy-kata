const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(9)).toEqual("Fizz");
    expect(fizzBuzz(261)).toEqual("Fizz");
    expect(fizzBuzz(3)).toEqual("Fizz");
  });

  it("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(10)).toEqual("Buzz");
    expect(fizzBuzz(5)).toEqual("Buzz");
    expect(fizzBuzz(160)).toEqual("Buzz");
  });

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
    expect(fizzBuzz(150)).toEqual("FizzBuzz");
    expect(fizzBuzz(195)).toEqual("FizzBuzz");
  });

  it("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(8)).toEqual(8);
    expect(fizzBuzz(91)).toEqual(91);
    expect(fizzBuzz(152)).toEqual(152);
  });
});


/* alternate:
 it("returns Fizz when passed a multiple of 3", () => {
    const numbers = [3, 6, 9, 12, 18, 21, 24];
    const results = ["Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "Fizz"];
    expect(numbers.map(number => fizzBuzz(number))).toStrictEqual(results);
  }); */