function findSmallestNumber(array) {
    return array.sort((a, b) => a - b)[0];
  }
  
  let numbers = [4, 2, 9, 1, 5,10,20,50];
  //console.log(findSmallestNumber(numbers)); 