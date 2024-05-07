// Definimos la función que encuentra el número más pequeño en un array
function encontrarNumeroMasPequeno(array) {
    // Inicializamos una variable para almacenar el número más pequeño, comenzando con el primer elemento del array
    let numeroMasPequeno = array[0];

    // Iteramos sobre cada elemento del array
    for (let i = 1; i < array.length; i++) {
        // Comparamos el elemento actual con el número más pequeño encontrado hasta ahora
        if (array[i] < numeroMasPequeno) {
            // Si encontramos un número más pequeño, lo actualizamos como el número más pequeño
            numeroMasPequeno = array[i];
        }
    }

    // Devolvemos el número más pequeño encontrado
    return numeroMasPequeno;
}
