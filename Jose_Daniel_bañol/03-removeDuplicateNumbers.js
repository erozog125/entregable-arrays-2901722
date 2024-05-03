const numbers = [20, 4, 10, 5, 20, 70, 5, 78, 10, 5];

function addNumbers() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
} console.log(addNumbers());

