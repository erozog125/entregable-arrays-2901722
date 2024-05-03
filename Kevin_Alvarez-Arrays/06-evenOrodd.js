const numbers = [2,3,4,1,2,4,1,6,7,8,9]

function even(numbers) {
    return  numbers.filter(a => a % 2 === 0)
}

console.log("even: "+even(numbers))

function odd(numbers) {
    return  numbers.filter(a => a % 2 !== 0)
}

console.log("odd: "+odd(numbers))