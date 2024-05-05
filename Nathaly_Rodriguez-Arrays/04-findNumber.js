let listNumbers = [23, 56, 13, 12, 567, 86, 22, 55, 75, 25, 59]

let least = listNumbers.reduce((minValue, num) => num < minValue ? num : minValue, listNumbers[0])

console.log(least)