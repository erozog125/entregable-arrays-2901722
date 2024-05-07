const numbers = [67, 37, 50, 44, 23, 6, 7, 8, 9, 22];

function counter(evenAndOdd) {
    const result = {
      even: 0,
      odd: 0
    };

    const evenNumbers = evenAndOdd.filter(num => num % 2 === 0);
    const oddNumbers = evenAndOdd.filter(num => num % 2 !== 0);
  
    
    result.even = evenNumbers.length;
    result.odd = oddNumbers.length;
  
    return result;
  }
 
const result = counter(numbers);
console.log(result);