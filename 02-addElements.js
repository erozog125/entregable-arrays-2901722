// Definimos la función que calculará el promedio
function calcularPromedio(array) {
    // Verificamos si el array está vacío
    if (array.length === 0) {
        return 0; // Si está vacío, devolvemos 0 para evitar división por cero
    }
    
    // Sumamos todos los elementos del array
    const suma = array.reduce((total, num) => total + num, 0);
    
    // Calculamos el promedio dividiendo la suma entre la cantidad de elementos
    const promedio = suma / array.length;
    
    // Devolvemos el promedio
    return promedio;
}
