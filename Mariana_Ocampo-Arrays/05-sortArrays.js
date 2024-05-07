let numbers = [15, 10, 14, 1, 35, 3];

function sortArrays(numbers) {
    return numbers.sort((a, b) => a - b);
}

console.log("Array ordenado:", sortArrays(numbers));