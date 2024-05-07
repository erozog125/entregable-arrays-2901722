const myArray = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(array) {
    const arrayWithoutDuplicates = [...new Set(array)];
    console.log("Array original:", array);
    console.log("Array sin duplicados:", arrayWithoutDuplicates);
    return arrayWithoutDuplicates;
  }
  removeDuplicates(myArray);