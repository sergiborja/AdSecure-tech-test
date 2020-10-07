const assert = require("chai").assert;
const { expect } = require("chai");
const highestOccurrence = require("../index");

describe("Should succed on finding the max frequency element of the input using highestOccurrence function", function () {
  it("First example of the Highest Occurrence exercise", function () {
    let input = [2, 3, 2, 2, 2, 4, 2];
    let result = highestOccurrence(input);
    // assert.typeOf(result, "Array<string | number>");
    expect(result.length).to.equal(1);
    expect(result[0]).to.equal(2);
  });
  it("Second example of the Highest Occurrence exercise", function () {
    let input = [2, 3, 2, 3, 2, 3, 4];
    let result = highestOccurrence(input);
    // assert.typeOf(result, "Array<string | number>");
    expect(result.length).to.equal(2);
    expect(result[0], result[1]).to.equal(2, 3);
  });
  it("Third example of the Highest Occurrence exercise", function () {
    let input = ["a", "b", "c", "a", "a", "a", "a"];
    let result = highestOccurrence(input);
    // assert.typeOf(result, "Array<string | number>");
    expect(result.length).to.equal(1);
    expect(result[0]).to.equal("a");
  });
  it("Fourth example of the Highest Occurrence exercise", function () {
    let input = ["a", "a", 2, 2, 2, "a", 4];
    let result = highestOccurrence(input);
    // assert.typeOf(result, "Array<string | number>");
    expect(result.length).to.equal(2);
    expect(result[1], result[0]).to.equal("a", 2);
  });
});
