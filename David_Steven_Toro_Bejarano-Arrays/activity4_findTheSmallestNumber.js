numbers = [3,4,5,6,1,-2]

function findSmallestNumber(numbers) {
    let orderedNumbers = numbers.sort()
    let smallestNumber = orderedNumbers[0]
    
    console.log(smallestNumber);
}
findSmallestNumber(numbers)