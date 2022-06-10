const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    const namesObj1 = [{

      name: 'Bart'
    
    }, {
    
      name: 'Lisa'
    
    }, {
    
      name: 'Maggie'
    
    }];

    const namesObj2 = [{

      name: 'Sean'
    
    }, {
    
      name: 'Jamie'
    
    }, {
    
      name: 'Pooh'
    
    }, {
    
      name: 'Bear'
    
    }];

    const namesObj3 = [{

      name: 'Apple'
    
    }, {
    
      name: 'Pooh'
    
    }, {
    
      name: 'Star'
    
    }, {
    
      name: 'Vex'
    
    }, {
    
      name: 'Rex'
    
    }];


    expect(joinNames(namesObj1)).toEqual('Bart, Lisa & Maggie');
    expect(joinNames(namesObj2)).toEqual('Sean, Jamie, Pooh & Bear');
    expect(joinNames(namesObj3)).toEqual('Apple, Pooh, Star, Vex & Rex');
  });
});

/*
Your function should take an array of objects and concatenate the names together into a string, 
seperated by commas and an ampersand for the last name.

E.g.

Given an array of objects like so:


[{

  name: 'Bart'

}, {

  name: 'Lisa'

}, {

  name: 'Maggie'

}]

Your function should return:

'Bart, Lisa & Maggie'.

It shouldn't be limited to just 3 names, so ensure you have assertions for any array length.
Assertion

    returns string of names, seperated by commas and an ampersand */