const duplicates = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

function removeDuplicates() {
        return Array.from(new Set(duplicates));
}

console.log(removeDuplicates())