const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function countEvenAndOddNumbers() {
    const evens = numbers.filter(number => number % 2 === 0).length;
    const odds = numbers.length - evens;
    return { evens, odds };
}

const result = countEvenAndOddNumbers(numbers);
