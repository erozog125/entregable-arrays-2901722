let numbers = [3, 4, 5, 6, 1, -2]

function findSmallestNumber(numbers) {
    let orderedNumbers = numbers.sort()
    let reverseArray = orderedNumbers.reverse()
    console.table(reverseArray);
}
findSmallestNumber(numbers)