const numbers=[12,12,12,12,3]

function element(numbers){


    return numbers.reduce((a,b)=>a+b)/(numbers.length)
}

console.log(element(numbers))