// Función para eliminar elementos duplicados de un array
function eliminarDuplicados(array) {
    // Crear un nuevo array vacío para almacenar los elementos únicos
    var arraySinDuplicados = [];

    // Iterar sobre cada elemento del array
    array.forEach(function(elemento) {
        // Si el elemento no está en el nuevo array, añádelo
        if (arraySinDuplicados.indexOf(elemento) === -1) {
            arraySinDuplicados.push(elemento);
        }
    });

    // Devolver el nuevo array sin duplicados
    return arraySinDuplicados;
}