function ordenarNumeros(array) {
    let sortedArray = array.slice().sort((a, b) => a - b);
    return sortedArray;
}

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];