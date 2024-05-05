const numbers = [1,2,200,3,8,6,55,22,46,84,95,20,12,100]

function maxElement(numbers) {
    numbers.sort((a,b)=> a-b).reverse()
    return numbers[0]
}
console.log(maxElement(numbers))