const numbers = [12,3,4,5,66,77,12,77,0,5]

function addNumbers (numbers) {
    let counter = 0
    numbers.forEach(element => {
        counter += element    
    });
  
  return counter
}

console.log(addNumbers(numbers))