var expect = require("chai").expect;
var disemvowel = require("../disemvowel")


describe("Disemvowel", function() {
  it("It should stringy a number ", function() {
    expect(disemvowel(2)).to.equal("2");
  });

  it("should strip all vowels from a string", function() {
    expect(disemvowel("Bugs Bunny")).to.equal("Bgs Bnny");
    expect(disemvowel("Archer")).to.equal("rchr");
  });
});

//mocha runs through a test folder
//mocha uses descibre and it to test 

//describe - naming the function of the test 
//saying what we want the funciton should do
