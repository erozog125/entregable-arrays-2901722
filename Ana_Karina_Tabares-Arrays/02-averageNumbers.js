let numbers = [2, 4, 6, 8, 10];

function averageNumber(numbers) {
    let add = numbers.reduce((result, num) => result + num, 0);
    let average = add / numbers.length;
    return average;
}

console.log("El promedio de los elementos es:", averageNumber(numbers));