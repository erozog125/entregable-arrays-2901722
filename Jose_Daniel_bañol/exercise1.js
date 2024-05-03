const numbers = [12, 3, 4, 5, 66, 77, -12, 78, 0, 5];

function addNumbers() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
} console.log(addNumbers());


