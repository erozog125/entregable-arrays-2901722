function countEvenAndOddNumbers(array) {
    return array.reduce((counter, num) => {
        if (num % 2 === 0) {
            counter.even++;
        } else {
            counter.odd++;
        }
        return counter;
    }, { even: 0, odd: 0 });
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = countEvenAndOddNumbers(numbers);
console.log(result); 