let smallerNumber = [1, 0, 9, 4, 6, 2];

function number(smallerNumber) {
    smallerNumber.sort((a, b) => a - b);
    return smallerNumber[0];
}

console.log("El número más pequeño es:", number(smallerNumber));