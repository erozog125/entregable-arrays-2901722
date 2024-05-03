function averageNumbers(numbers) {

  if (numbers.length === 0) {
    return 0;
  }

  let suma = numbers.reduce((total, num) => total + num, 0);

  let average = suma / numbers.length;
  
  return average;
}

