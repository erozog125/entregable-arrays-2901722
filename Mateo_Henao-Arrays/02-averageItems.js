const numeros = [10, 20, 30, 40, 50];
function calcularPromedio(array) {
    if (array.length === 0) {
        return "El array está vacío. No se puede calcular el promedio.";
    }

    const suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);
    const promedio = suma / array.length;

    return  console.log("El promedio de los elementos es:", promedio);
}
calcularPromedio(numeros);
