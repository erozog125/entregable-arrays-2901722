const numbers=[2,4,3,2,1,2]

function Average(numbers) {
return (numbers.reduce((a,b) => a + b)) / (numbers.length)
}

console.log(Average(numbers))