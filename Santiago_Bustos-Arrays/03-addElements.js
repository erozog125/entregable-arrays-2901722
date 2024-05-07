//Eliminar duplicados: Escribe una función que tome un array y elimine todos los elementos duplicados, devolviendo un nuevo array sin duplicados.

const duplicates = [11, 11, 22, 22, 33, 33, 44, 44, 55, 56, 66, 66];

function removeDuplicates() {
        return Array.from(new Set(duplicates));
}

console.log(removeDuplicates())