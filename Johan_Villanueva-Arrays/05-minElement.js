const numbers = [1,2,4,5,7,9,8,5,6,2,0.1,3,111,22,5,4,8,999,323]

function minElement(numbers) {
    numbers.sort((a,b)=> a-b)
    return numbers[0]
}
console.log(minElement(numbers))