const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  it("returns the employee's role in the company", () => {
    const employees1 = [{

      name: 'Satti',
    
      role: 'Developer'
    
    }, {
    
      name: 'Jenny',
    
      role: 'Sales Associate'
    
    }, {
    
      name: 'Javid',
    
      role: 'Human Recommended Reading Assistant'
    
    }]

    const employees2 = [{

      name: 'Bob',
    
      role: 'Clerk'
    
    }, {
    
      name: 'Adam',
    
      role: 'Doctor'
    
    }, {
    
      name: 'Helen',
    
      role: 'Archivist'
    
    }]

    expect(getEmployerRole('Javid', employees1)).toEqual('Human Recommended Reading Assistant');
    expect(getEmployerRole('Jenny', employees1)).toEqual('Sales Associate');
    expect(getEmployerRole('Bob', employees2)).toEqual('Clerk');
    expect(getEmployerRole('Helen', employees2)).toEqual('Archivist');
  });
});

/*
Your function should have two parameters: employeeName (string) and employees (array).

Given an array of employees, and an employeeName, you should find and return that person's role in the company.

E.g.

If we have the following employees:


const employees = [{

  name: 'Satti',

  role: 'Developer'

}, {

  name: 'Jenny',

  role: 'Sales Associate'

}, {

  name: 'Javid',

  role: 'Human Recommended Reading Assistant'

}]

When calling the getEmployerRole function like so:


getEmployerRole('Javid', employees);

We would expect a return value of:


'Human Recommended Reading Assistant'
*/