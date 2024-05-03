// Suma de elementos: Escribe una función que tome un array de números como parámetro y devuelva la suma de todos los elementos.

const numbers = [12,3,4,5,66,77,-12,78,0,5]

function addNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function Start() {
  let sum = addNumbers(numbers);
  console.log(sum);
}

Start();