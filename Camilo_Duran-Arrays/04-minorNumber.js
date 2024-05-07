const numbers=[2,3,5,1,8,7,6]

function minorNumbers(c){
    return c.sort((a,b) => a - b);
}
console.log(minorNumbers(numbers));
