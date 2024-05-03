
const numbers = [12,55,12,12,12];

function addNumbers(numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(addNumbers(numbers));