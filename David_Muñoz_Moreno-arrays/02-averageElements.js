numbers=[1,3,4,5]
function average(numbers){
    let accumulator=0
    numbers.forEach(number =>{
        accumulator+=number
    })
    let solution= accumulator/numbers.length 
    return solution
}
console.log(average(numbers))