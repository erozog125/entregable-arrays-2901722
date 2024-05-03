// Suma de elementos: Escribe una función que tome un array de números como parámetro y devuelva la suma de todos los elementos.

const numbers = [12,3,4,5,66,77,-12,78,0,5]

function addNumbers (numbers) {
  return numbers.reduce((a,b)=> a+b)

}
console.log(addNumbers(numbers));
