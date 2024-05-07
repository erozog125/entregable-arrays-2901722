numbers=[7,5,6,8,9,3,1]
function numberM(numbers){
    numbers.sort(function(numbers){
        minor= Math.min(numbers)
    })
    return minor
}
console.log(numberM(numbers))