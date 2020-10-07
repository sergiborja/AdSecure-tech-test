module.exports = function highestOccurrence(input) {
  var duplicatedValues = {};
  var output = [];
  input.map(function (el) {
    duplicatedValues[el] = (duplicatedValues[el] || 0) + 1;
  });
  var max = Math.max.apply(Math, Object.values(duplicatedValues));
  for (var key in duplicatedValues) {
    if (duplicatedValues[key] === max)
      output.push(isNaN(key) ? key : Number(key));
  }
  return output;
};
