//Encontrar el número menor: Escribe una función que tome un array de números como argumento y devuelva el número más pequeño en el array.

const numbers = [1,2,3,4,5,6,7,8,9];

function lowerNumber(numbers){
    return Math.min(...numbers)
}
console.log(lowerNumber(numbers))