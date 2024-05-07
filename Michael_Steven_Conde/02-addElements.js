const number=[1,2,3,4,5,6,7,8,9]
function addNumber(n1,n2){
    return n1+n2
}
let sum=number.reduce(addNumber)
let num=number.length
function divide(num2){
return (sum)/num2
}
console.log(divide(num))


    