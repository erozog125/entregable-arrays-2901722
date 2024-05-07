function calculate(number) {
  if (number.length === 0) {
    
    
    
    return 0;
  }


  const sum = number.reduce((acumulator, current) => acumulator + current, 0);
  const averag = sum / number.length;
  return averag;
}
const number = [1, 3, 2, 1];
const averag = calculate(number);
console.log(`${averag}`);
