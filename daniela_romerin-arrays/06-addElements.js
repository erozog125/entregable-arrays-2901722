function countEvenOddNumbers(array) {
    let evenCount = 0;
    let oddCount = 0;
  
    array.forEach(number => {
      if (number % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    });
  
    return { even: evenCount, odd: oddCount };
  }
  
  // Usage example
  const numbers = [3, 8, 2, 5, 1];
  console.log(countEvenOddNumbers(numbers)); // This will return { even: 2, odd: 3 }