const numbers = [12, 3, 4, 5, 66, 77, -12, 78, 0, 5];

function sumOfNumbers() {
  let sum = 0;
  let prom = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    
  }
  prom = sum / numbers.length
  return prom
  
} console.log(sumOfNumbers());
  

