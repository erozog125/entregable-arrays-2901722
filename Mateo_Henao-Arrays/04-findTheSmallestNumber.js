const myArray=[5, 10, 35, 100, 1]
function findTheSmallestNumber(array) {
    array.sort((a, b) => a - b);
    const smallestNumber = array[0];
    console.log("el numero mas pequeño del array es: "+smallestNumber);
    return smallestNumber;
}
findTheSmallestNumber(myArray);
