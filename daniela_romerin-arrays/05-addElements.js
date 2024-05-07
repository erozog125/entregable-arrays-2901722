function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
  }
  
  // Usage example
  const numbers = [3, 8, 2, 5, 1];
  console.log(sortNumbers(numbers)); // This will return [1, 2, 3, 5, 8]