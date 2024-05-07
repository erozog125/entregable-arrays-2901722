let smallerNumber = [3, 25, 39, 8, 32, 18];

function number(smallerNumber) {
    smallerNumber.sort((a, b) => a - b);
    return smallerNumber[0];
}

console.log("El número más pequeño es:", number(smallerNumber));