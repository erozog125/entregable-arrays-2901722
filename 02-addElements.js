function averageNumbers(numbers) {

  if (numbers.length === 0) {
    return 0;
  }

  let suma = numbers.reduce((total, num) => total + num, 0);

  let average = suma / numbers.length;
  
  return average;
}

function Start() {
  const numbers = [12, 3, 4, 5, 66, 77, -12, 78, 0, 5];
  let averages = averageNumbers(numbers);
  console.log(averages);
}

Start();
