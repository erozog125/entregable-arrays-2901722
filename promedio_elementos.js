const numbers = [12, 3, 4, 5, 66, 77, -12, 78, 0, 5];

function averageNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}


