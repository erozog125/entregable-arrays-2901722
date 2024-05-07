const invertArray = [1, 2, 3, 4, 5];
function reverseArray(array) {
    
    const reversedArray = [];
  
    
    array.map((item, index) => {
    
      reversedArray[array.length - 1 - index] = item;
    });
  
    
    return reversedArray;
  }
  
  
  const reversedArray = reverseArray(invertArray);
  console.log(reversedArray);