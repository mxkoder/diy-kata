const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns an array of numbers with the age in human, cat, and dog years ", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    expect(humanCatDogYears(17)).toEqual([17, 84, 99]);
  });
});


/*Cat Years

15 cat years for first human year
+9 cat years for second human year
+4 cat years for each human year after that

Dog Years

15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that*/