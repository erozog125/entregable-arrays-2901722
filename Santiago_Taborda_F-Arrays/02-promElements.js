const numbers =[100, 300]

function prom(numbers) {
    return numbers.reduce ((a,b)=> a + b, 0) /numbers.length; 
    
}
console.log(prom(numbers))