// Función para eliminar elementos duplicados de un array
function removeduplicates(array) {
    // Crea un nuevo array vacío para almacenar los elementos únicos
    let arrayNoDuplicates = [];

    // Iterar sobre cada elemento del array
    array.forEach(function(element) {
        // Si el elemento no está en el nuevo array, añádelo
        if (arrayNoDuplicates.indexOf(element) === -1) {
            arrayNoDuplicates.push(element);
        }
    });

    // Devolver el nuevo array sin duplicados
    return arrayNoDuplicates;
}