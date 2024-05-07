//Ordenar array: Escribe una función que tome un array de números como argumento y devuelva un nuevo array con los números ordenados de menor a mayor.

const numbers = [5,4,3,2,1]

function orderArray(numbers){
    return numbers.sort((a,b) => a - b)
}

console.log(orderArray(numbers));