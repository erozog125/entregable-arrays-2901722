// Suma de elementos: Escribe una función que tome un array de números como parámetro y devuelva la suma de todos los elementos.

const number=[1,2,3,4,5,6,7,8,9]
function addNumber(num1,num2){
    return num1+num2
}
console.log(number.reduce(addNumber))