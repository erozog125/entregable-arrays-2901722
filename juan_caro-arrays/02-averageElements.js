const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function averageNumbers() {
  let average =  numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /numbers.length;
  return average
  
} 
