function contarParesImpares(array) {
    let pares = 0;
    let impares = 0;

        array.forEach(numero => {
            if (numero % 2 === 0) {
                pares++;
            } else {
                impares++;
            }
        });

    return { pares, impares };
}

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultado = contarParesImpares(arrayNumeros);
