const numbers=[2,3,4,5,1,8,7,6]

function orderNumbers(c){
    return c.sort((a,b) => a - b);
}


console.log(orderNumbers(numbers));
