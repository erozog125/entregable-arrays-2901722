
let numbers =[1.3,4.5,5.];
function Average(numbers) {
    let counter=0 
    numbers.forEach(number =>{   
        counter += number/3

})
return counter

}

console.log( Average(numbers));