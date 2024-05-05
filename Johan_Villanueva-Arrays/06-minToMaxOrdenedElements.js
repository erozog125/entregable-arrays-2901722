const numbers = [1,2,4,5,7,9,8,5,6,2,0.1,3]

function ordenedNumbers(numbers) {
    numbers.sort((a,b)=> a-b)
    return numbers
}
console.table([ordenedNumbers(numbers)])