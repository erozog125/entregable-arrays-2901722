let numbers = [1, 2, 5]

function addElements(numbers) {
    let sum = 0
    numbers.forEach(number => {
        sum += number
    });
    return sum
}

console.log(addElements(numbers))





