let numbers = [10, 20, 12, 15, 10, 50, 43]

let minor =numbers.reduce((minValue, num) => num < minValue ? num : minValue, numbers[0]) 
console.log(minor)