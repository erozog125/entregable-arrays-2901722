let numbers = [1, 45, 12, 4, 3, 78, 78, 133];

function addNumbers(numbers) {
  let suma = numbers.reduce((total, actual) => total + actual, 0);
  console.log(suma); 
}

console.log("Suma:")
addNumbers(numbers);