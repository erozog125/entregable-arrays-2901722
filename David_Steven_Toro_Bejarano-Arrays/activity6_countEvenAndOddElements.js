let numbers = [1, 5, 3, 8, 10, 29, 2, 7, 11, 14, 21, 535]

function countEvenAndOddNumbers(numbers) {
     let counter = {
        even : 0, odd : 0
     }

     numbers.forEach(number => {
        if (number % 2 == 0) {
            counter.even++
        } else counter.odd++
     });
     return counter
}
console.log(countEvenAndOddNumbers(numbers));