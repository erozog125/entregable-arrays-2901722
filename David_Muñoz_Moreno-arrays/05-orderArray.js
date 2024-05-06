let numbers = [4, 2, 5, 1, 3]
function order_Numbers(numbers){
    let newNumbers= numbers.slice(0, numbers.length)
    newNumbers.sort(function(a, b) {
        return a - b;
    });
    console.log(newNumbers)
}
order_Numbers(numbers)