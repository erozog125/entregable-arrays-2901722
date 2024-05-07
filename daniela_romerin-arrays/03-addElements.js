function removeDuplicates(array) {
    return Array.from(new Set(array));
  }
  
  // Usage example
  const numbers = [3, 8, 2, 5, 3, 1, 8];
  console.log(removeDuplicates(numbers)); // This will return [3, 8, 2, 5, 1]