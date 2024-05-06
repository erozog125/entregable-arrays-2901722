function findTheMaximum(array) {
  if (array.length === 0) {
      return undefined; 
  }

  let maximum = array[0]; 
  for (let i = 1; i < array.length; i++) {
      if (array[i] > maximum) {
          maximum = array[i];
      }
  }
  return maximum;
}  

