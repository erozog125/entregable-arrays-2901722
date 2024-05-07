const numbers = [10, 20, 30, 40, 50];
function calcularPromedio(array) {
    if (array.length === 0) {
        return "El array está vacío. No se puede calcular el promedio.";
    }

    const sum = array.reduce((acumulator, elemet) => acumulator + elemet, 0);
    const average = sum / array.length;

    return  console.log("El promedio de los elementos es:", average);
}
calcularPromedio(numbers);
