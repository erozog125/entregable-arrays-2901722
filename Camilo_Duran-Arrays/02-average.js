let numbers=[5,4,3]
    function average(n1,n2){
        return (n1+n2)
    }
    let a = numbers.reduce(average)

    function division(b){
        return b/numbers.length
        
    }
    
console.log(division(a))
