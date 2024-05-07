let numbers=[20,30,20,40]
function addition(n1,n2){
    return n1+n2
}

let average=numbers.reduce(addition)

function divison(b){
   return b/numbers.length
}

console.log(divison(average))