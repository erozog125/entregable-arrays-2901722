const numbers=[2,2,2,2,5,6,3,4,23]

function even(numbers){


    return numbers.filter(a => a % 2 === 0)

}


function odd(numbers){

return numbers.filter(a => a % 2 !== 0)

}


console.table("even: " + even(numbers))
console.table( "odd: "+ odd(numbers))