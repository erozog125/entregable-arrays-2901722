function removeDuplicates(array) {

  let uniqueArray = array.filter((value, index, self) => {

    return self.indexOf(value) === index;
  });
  return uniqueArray;
}

const originalArray = [1, 2, 3, 4, 4, 5, 5, 6, 6];
const newArrayWithoutDuplicates = removeDuplicates(originalArray);
console.log(newArrayWithoutDuplicates); 
