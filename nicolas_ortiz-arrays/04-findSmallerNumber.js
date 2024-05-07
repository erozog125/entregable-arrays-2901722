const numbers = [-100, 100, 200, 200]

function encontrarnumero() {
    numbers.sort((a, b) => a - b)
    return numbers[0]

}