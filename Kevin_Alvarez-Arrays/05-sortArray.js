const numbers=[2,3,4,1,2,56,2]

function sort(numbers) {
    return numbers.sort((a,b) => a-b)
}

console.log(sort(numbers))