function removeDuplicates(array) {
  const uniqueElements = new Set(array);
  return Array.from(uniqueElements);
}


const originalArray = [1, 2, 3, 1, 2, 4, 5, 5];
const uniqueArray = removeDuplicates(originalArray);
console.log('Array_Original:', originalArray);
console.log('Array_without_duplicates:', uniqueArray);
