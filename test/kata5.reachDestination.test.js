const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.");
    expect(reachDestination(100, 15)).toEqual("I should be there in 7 hours.");
    expect(reachDestination(3, 4)).toEqual("I should be there in 1 hours.");
    expect(reachDestination(13, 4)).toEqual("I should be there in 3.5 hours.");
  });
});

/*  Assuming you know the train's distance from your destination in miles, 
and you know how fast the train is going in miles per hour, you'll use a 
reachDestination function to output a string:


I should be there in 4.5 hours.

# The time should be rounded up to the nearest 0.5 hours (half an hour).

# reachDestination has two parameters: distance and speed - it is expected that only arguments of a Number type will be passed.

E.g.


reachDestination(44, 10);

Would output:


I should be there in 4.5 hours.

Because 44 / 10 is 4.4, which we round up to the nearest 0.5 to equal 4.5.*/