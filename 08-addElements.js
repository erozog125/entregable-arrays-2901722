function contarParesEImpares(numbers) {
    let counterPairs = 0;
    let counterOdd = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            counterPairs++;
        } else {
            counterOdd++;
        }
    }

    return {
        pairs: counterPairs,
        odd: counterOdd
    };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];