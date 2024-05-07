let numbers = [11,11,11,11];

function removeNumbers(numbers) {
   let delte = new Set(numbers)

   let newArray = [...delte]

   return newArray
}

console.log(removeNumbers(numbers));