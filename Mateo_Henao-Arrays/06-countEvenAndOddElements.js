const numbers =[1, 15, 36, 55, 22, 30, 88]
function countEvenAndOddElements(array) {
    return array.reduce((counter, num)=>{
        if (num % 2===0){
            counter.even++
        }else{
            counter.odd++
        }
        return counter
    },{even:0, odd:0})
}
const result= countEvenAndOddElements(numbers)
console.log(result)