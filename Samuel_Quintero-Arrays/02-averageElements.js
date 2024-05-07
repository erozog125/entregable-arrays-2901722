<<<<<<< HEAD
function calculate(number) {
  if (number.length === 0) {
    
    
    
    return 0;
  }


  const sum = number.reduce((acumulator, current) => acumulator + current, 0);
  const averag = sum / number.length;
  return averag;
}
const number = [1, 3, 2, 1];
const averag = calculate(number);
console.log(`${averag}`);
=======
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
>>>>>>> f2606f33b1f89f1a164aba64f692f6a584e755ee
