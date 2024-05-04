
    let numbers = [1, 2, 5]

    function averageOfTheElements(numbers) {
    let sum = 0
    numbers.forEach(number => {
        sum += number
    });
    let average = sum / numbers.length
    return average
}

    console.log(averageOfTheElements(numbers));