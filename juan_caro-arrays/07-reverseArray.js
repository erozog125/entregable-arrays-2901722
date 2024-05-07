function sortArray(Array) {
    return Array.sort((a,b) => a - b).reverse();
}
const Array = [1,6,72,4,61,63,87];

const sortedArray = sortArray(Array);

console.log(sortedArray);