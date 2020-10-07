module.exports = function averagePair(input, target) {
  for (var i = input.length; i--; ) {
    if (input[i] < target) return false;
    if (input[i] < target * 2) {
      for (var j = input.length; j--; ) {
        if (input[i] + input[j] < target * 2) break;
        if (input[i] + input[j] === target * 2) return true;
      }
    }
  }
  return false;
};

//Auxiliar solution in production below...

// function averagePair(input, target) {
//   var posibleSolutions = [];
//   for (var i = input.length; i--; ) {
//     if (input[i] <= target * 2)
//       posibleSolutions.push(input[input[i] - 2 * (input[i] - target)]);
//     if (posibleSolutions.indexOf(input[i]) !== -1) return true;
//   }
//   return false;
// }
