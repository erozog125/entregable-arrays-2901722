function removeDuplicates(array) {

  let uniqueArray = array.filter((value, index, self) => {

    uniqueArray=self.indexOf(value) === index;
  });
  return uniqueArray;
}

