
let numbers =[1,2,3,4,5,6,7];
function Numbers(numbers) {
    let counter=0 
    numbers.forEach(number =>{   
        counter += number

})
return counter

}

console.log( Numbers(numbers));


//otra forma de hacerlo 

function Numbers(number) {
    let numbers =[1,2,3,4,5,6,7];

    console.table(numbers.reduce((a,b) => a + b))

}

Numbers()

