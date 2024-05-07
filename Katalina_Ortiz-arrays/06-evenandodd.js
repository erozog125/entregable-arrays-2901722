// Definimos la función que cuenta la cantidad de números pares e impares en un array
function countEvenOdd(array) {
    // Iniciamos variables para contar los números pares e impares
    let quantityPairs = 0;
    let quantityOdd = 0;

    // Iteramos sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Verificamos si el número en la posición actual es par o impar
        if (array[i] % 2 === 0) {
            // Si es par, incrementamos la cantidad de pares
            quantityPairs++;
        } else {
            // Si es impar, incrementamos la cantidad de impares
            quantityOdd++;
        }
    }

    // Creamos un objeto con las propiedades cantidadPares y cantidadImpares y las devolvemos
    const result = {
        quantityPairs: quantityPairs,
        quantityOdd: quantityOdd
    };

    return result;
}
