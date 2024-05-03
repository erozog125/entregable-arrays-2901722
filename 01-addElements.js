let numbers = [1,2,5]
function addElements(numbers){

    let counter = 0

    numbers.forEach(number => {
      counter += number

    });

    return counter
}

console.log(addElements(numbers))