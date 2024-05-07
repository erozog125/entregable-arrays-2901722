const numbers = [10, 20, 30, 40, 50];
function calculateAverage(array) {
    if (array.length === 0) {
        console.log("El array está vacío. No se puede calcular el promedio.");
        return;
    }

    const sum = array.reduce((acumulator, element) => acumulator + element, 0);
    const average = sum / array.length;

    console.log("El promedio de los elementos es:" +average);
}
calculateAverage(numbers);
