const numbers = [12, 3, 4, 5, 66, 77, -12, 78, 0, 5];

function addNumbers() {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}



