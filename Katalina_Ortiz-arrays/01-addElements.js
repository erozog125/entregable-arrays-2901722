let numbers = [2, 26, 22, 5, 16]

function addNumbers (numbers) {
   let sum=0
  numbers.forEach(number =>{
    sum+=number
  })
  return sum
}
console.log(addNumbers(numbers)) 