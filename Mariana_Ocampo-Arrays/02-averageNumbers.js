const numbers = [1,2,4,23,33,77,15,5,9]

function averageNumber(numbers) {
    let add = numbers.reduce((result, num) => result + num, 0);
    let average = add / numbers.length;
    return average;
}

console.log("El promedio de los elementos es:", averageNumber(numbers));