function calculateAverage(array) {
    const sum = array.reduce((acc, current) => acc + current, 0);
    return sum / array.length;
  }
  
  // Usage example
  const numbers = [3, 8, 2, 5, 1];
  console.log(calculateAverage(numbers)); // This will return 3.