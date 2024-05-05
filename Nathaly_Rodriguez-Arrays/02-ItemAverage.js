let numbers = [100, 300];

function average(numbers){
    return numbers.reduce ((a,b)=> a + b, 0)/ numbers.length;
}
console.log(average(numbers));
