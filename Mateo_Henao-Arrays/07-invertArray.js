const originalArray = [1, 2, 3, 4, 5];
function reverseArray(array) {
    return array.slice().reverse();
}
const reversedArray = reverseArray(originalArray);
console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);
