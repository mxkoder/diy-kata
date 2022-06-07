const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns Yes when passed true", () => {
    expect(booleanToWord(true)).toEqual("Yes");
  });

  it("returns No when passed false", () => {
    expect(booleanToWord(false)).toEqual("No");
  });
});