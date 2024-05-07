const numbers = [12, 20, 3, 10, 10, 10]
function element(numbers) {
    return numbers.reduce((a, b) => a + b) / (numbers.length)
}
