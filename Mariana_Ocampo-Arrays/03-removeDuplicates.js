const numbers = [2, 2, 2, 2, 1, 3, 3, 3, 4, 4, 5, 5, 6];
function removeDuplicates(numbers) {
    return Array.from(new Set(numbers));
}
console.log(removeDuplicates(numbers));
