const numbers= [3,4,5,1,2,9,0]

function minorNumber(numbers){
return numbers.sort((a,b) => a - b)
}
console.log(minorNumber(numbers))