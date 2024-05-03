const numbers = [12,3,4,5,66,77,-12,78,0,5]

function addNumbers(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function Start() {
  let sum = addNumbers(numbers);
  console.log(sum);
}

Start();