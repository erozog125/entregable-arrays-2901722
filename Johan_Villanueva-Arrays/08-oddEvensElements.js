const numbers = [1,5,28,9,6,44,5,7,77,8,6,33,1]

function oddEvensElement(numbers,oddNumbers,evensNumbers) {
    oddNumbers = numbers.filter(a => a % 2 === 0)
    evensNumbers = numbers.filter(a => a % 2 !== 0)

    return {
        pares: oddNumbers,
        impares: evensNumbers
    }
}
console.table(oddEvensElement(numbers))
