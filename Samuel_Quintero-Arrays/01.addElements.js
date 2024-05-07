function sumArray(numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

const numbers = [1, 5, 2, -3, 4];
const sum = sumArray(numbers);
console.log(`${sum}`);
