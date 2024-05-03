const numbers=[15,30,20]

function smallest(numbers) {
    numbers.sort((a,b) => a-b)
    return numbers[0]
}
console.log(smallest(numbers))