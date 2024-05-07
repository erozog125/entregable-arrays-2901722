let numbers = [2,6,7,1,8,22,4]

function minior(){
    let minior_numbers = numbers.sort((a, b) => a - b).shift()
    return minior_numbers
}
console.log(minior(numbers))