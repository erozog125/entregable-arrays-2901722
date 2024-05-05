const numbers = [12,3,4,5,66,77,-12,78,0,5]

function addNumbers (numbers) {
  return numbers.reduce((a,b)=> a+b)
}
console.log(addNumbers(numbers));