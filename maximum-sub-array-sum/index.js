module.exports = function maxSubarraySum(input, num) {
  var sum = 0;
  var result = 0;
  var length = input.length;
  if (length > 0) {
    for (var i = 0; i < length; i++) {
      sum = 0;
      for (var j = 0; j < num; j++) {
        sum += input[j];
      }
      input.splice(0, 1);
      if (sum > result) result = sum;
    }
    return result;
  } else {
    return null;
  }
};

// function maxSubarraySum(input: number[], num: number) {
//     let sum: number = 0;
//     let result: number = 0;
//     for (let i = 0; i < input.length; i++) {
//       sum = 0;
//       for (let j = 0; j < num; j++) {
//         sum += input[j];
//       }
//       input.splice(0, 1);
//       if (sum > result) result = sum;
//     }
//     return result;
//   }
