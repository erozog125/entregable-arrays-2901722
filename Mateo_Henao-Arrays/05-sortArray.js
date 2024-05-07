const myArray=[23,45,50,105,57,88]
function sortArray(array) {
    const sortedArray = array.slice().sort((a, b) => a - b);
    console.log("el array ordenado es: "+sortedArray);
    return sortedArray;
}
sortArray(myArray)