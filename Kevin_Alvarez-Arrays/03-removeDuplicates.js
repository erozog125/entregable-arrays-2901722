const numbers=[2,1,2,2,3,4,1,5,6,7,8,]

function removeDuplicates(numbers) {
return  numbers.filter((a, b) => numbers.indexOf(a) === b)
}

console.log(removeDuplicates(numbers))