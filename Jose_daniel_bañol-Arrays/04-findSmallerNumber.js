const numbers = [-100,0,1,100,200,300,400,500]

function findNumber() {
    numbers.sort((a,b) => a-b)
    return numbers[0]
    
} console.log(findNumber());