const numbers= [1,1,2,5,6,7,8,2]

function deleteNumbers(numbers) {
    return numbers.filter((a,b)=>numbers.indexOf(a)=== b)
    
}
console.log(deleteNumbers(numbers));