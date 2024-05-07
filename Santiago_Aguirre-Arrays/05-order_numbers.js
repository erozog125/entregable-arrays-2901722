let numbers = [2,9,7,1,8,22,4]

function order(){
    let order_numbers = numbers.sort((a, b) => a - b)
    return order_numbers
}
console.log(order(numbers))