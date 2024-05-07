function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const average = sum / numbers.length;
  return average;
}
const numbers = [1, 5, 2, -3, 4];
const average = calculateAverage(numbers);
console.log(`${average}`);
