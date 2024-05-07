function evenAndOdd(array) {
    let evens = 0;
    let odds = 0;
  
    array.forEach(number => {
      if (number % 2 === 0) {
        evens++;
      } else {
        odds++;
      }
    });
  
    return { evens, odds };
  }
  
  let number = [2, 3, 6, 43, 7, 8, 1, 33, 74, 55, 31, 100]
  let result = evenAndOdd(number);
  console.log(result);





