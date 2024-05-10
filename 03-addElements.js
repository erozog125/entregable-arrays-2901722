function removeDuplicates(array) {

  let uniqueArray = array.filter((value, index, self) => {

    return self.indexOf(value) === index;
  });
  return uniqueArray;
}

const array = [1, 2, 2, 3, 4, 4, 5];