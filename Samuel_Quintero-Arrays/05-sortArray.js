function sort(Array) {
    return Array.sort((a,b) => a - b);
}
const Array = [5,7,1,8,10,12,50];

const sorted = sort(Array);

console.table(sorted);