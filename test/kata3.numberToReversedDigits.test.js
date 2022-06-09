const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    expect(numberToReversedDigits([5, 3, 10, 11, 203])).toEqual([203, 11, 10, 3, 5]);
    expect(numberToReversedDigits([1001, 0, 2])).toEqual([2, 0, 1001]);
  });
});
