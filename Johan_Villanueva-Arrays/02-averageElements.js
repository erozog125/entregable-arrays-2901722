const numbers= [1,2,4,8,6,5,4,3,2]

function averageNumbers(numbers) {
    return numbers.reduce((a,b)=> a+b)/(numbers.length)
    
}
console.log(averageNumbers(numbers));