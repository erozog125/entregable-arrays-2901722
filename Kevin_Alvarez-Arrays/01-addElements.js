const numbers = [12,4,2,5,1,2]

function addNumbers (numbers) {
  return numbers.reduce((a,b) => a + b)
}

console.log(addNumbers(numbers))