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

