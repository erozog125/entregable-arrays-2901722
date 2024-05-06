let removeDuplicate = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10];
function deleteDuplicate() {
    return Array.from(new Set(removeDuplicate));
}
console.log(deleteDuplicate());