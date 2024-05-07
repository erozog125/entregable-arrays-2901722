// Definimos la función que ordena un array de números de menor a mayor
function sortNumbers(array) {
    // Utilizamos el método sort para ordenar el array
    // Pasamos una función de comparación que compara dos números y los ordena de menor a mayor
    array.sort(function(a, b) {
        return a - b;
    });

    // Devolvemos el array ordenado
    return array;
}
