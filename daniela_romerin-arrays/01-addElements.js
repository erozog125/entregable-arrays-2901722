function sumArrayElements(array) {
   return array.reduce((acc, current) => acc + current, 0);
 }
 
 // Usage example
 const numbers = [3, 8, 2, 5, 1];
 console.log(sumArrayElements(numbers)); // This will return 19