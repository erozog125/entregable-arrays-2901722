function ordenarArray(array) {
    return array.slice().sort((a, b) => a - b);
}

const arrayOriginal = [5, 2, 9, 1, 7];
const arrayOrdenado = ordenarArray(arrayOriginal);


