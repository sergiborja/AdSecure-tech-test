const assert = require("chai").assert;
const { expect } = require("chai");
const maxSubarraySum = require("../index");

describe("Should succed on finding the max frequency element of the input using maxSubarraySum function", function () {
  it("First example of the Highest Occurrence exercise", function () {
    let input = [1, 2, 5, 2, 8, 1, 5];
    let num = 4;
    let result = maxSubarraySum(input, num);
    // assert.typeOf(result, "Array<string | number>");
    expect(result).to.equal(17);
  });
  it("Second example of the Highest Occurrence exercise", function () {
    let input = [1, 2, 5, 2, 8, 1, 5];
    let num = 2;
    let result = maxSubarraySum(input, num);
    // assert.typeOf(result, "Array<string | number>");
    expect(result).to.equal(10);
  });
  it("Third example of the Highest Occurrence exercise", function () {
    let input = [4, 2, 1, 6];
    let num = 1;
    let result = maxSubarraySum(input, num);
    // assert.typeOf(result, "Array<string | number>");
    expect(result).to.equal(6);
  });
  it("Fourth example of the Highest Occurrence exercise", function () {
    let input = [4, 2, 1, 6, 2];
    let num = 4;
    let result = maxSubarraySum(input, num);
    // assert.typeOf(result, "Array<string | number>");
    expect(result).to.equal(13);
  });
  it("Last example of the Highest Occurrence exercise", function () {
    let input = [];
    let num = 4;
    let result = maxSubarraySum(input, num);
    // assert.typeOf(result, "Array<string | number>");
    expect(result).to.equal(null);
  });
});
