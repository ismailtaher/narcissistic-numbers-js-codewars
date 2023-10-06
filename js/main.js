// A function to test if the given value for the function is a Narcissistic Number or not
// A Narcissistic Number (or Armstrong Number) is a positive number which is the
// sum of its own digits, each raised to the power of the number of digits in a given base.
// e.g. For example, take 153 (3 digits), which is narcissistic:
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//  1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

function narc(value) {
  const valueArray = [];
  var finalNumber = 0;
  const stringNumber = value.toString();
  const length = stringNumber.length;
  for (i = 0; i < stringNumber.length; i++) {
    valueArray[i] = Number(stringNumber[i]);
    finalNumber = Math.pow(valueArray[i], stringNumber.length) + finalNumber;
  }
  return finalNumber === value;
}

console.log(narc(153));
