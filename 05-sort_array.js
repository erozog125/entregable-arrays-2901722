function ordenarArray(array) {
    const arrayCopia = array.slice();
    arrayCopia.sort((a, b) => a - b);
    return arrayCopia;
}

const arrayOriginal = [5, 2, 9, 1, 7];
const arrayOrdenado = ordenarArray(arrayOriginal);
