let numbers = [12,3,4,5]

function addNumbers (numbers) {
   let sum=0
  numbers.forEach(number =>{
    sum+=number
  })
  return sum
}
console.log(addNumbers(numbers)) 
