const assert = require("chai").assert;
const { expect } = require("chai");
const averagePair = require("../index");

describe("Should recieve a true as the returning value of averagePair", function () {
  it("First example of the average pair exercise", function () {
    let input = [1, 2, 3];
    let target = 2.5;
    let result = averagePair(input, target);
    assert.typeOf(result, "boolean");
    expect(result).to.equal(true);
  });
  it("Second example of the average pair exercise", function () {
    let input = [1, 3, 3, 5, 6, 7, 10, 12, 19];
    let target = 8;
    let result = averagePair(input, target);
    assert.typeOf(result, "boolean");
    expect(result).to.equal(true);
  });
});

describe("Should recieve a false as the returning value of averagePair", function () {
  it("Third example of the average pair exercise", function () {
    let input = [1, 3, 3, 5, 6, 7, 10, 12, 19];
    let target = 8;
    let result = averagePair(input, target);
    assert.typeOf(result, "boolean");
    expect(result).to.equal(true);
  });

  it("Last example of the average pair exercise", function () {
    let input = [1, 3, 3, 5, 6, 7, 10, 12, 19];
    let target = 8;
    let result = averagePair(input, target);
    assert.typeOf(result, "boolean");
    expect(result).to.equal(true);
  });
});
