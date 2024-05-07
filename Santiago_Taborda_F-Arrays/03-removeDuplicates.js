const duplicate = ["papá", "mamá", "papá","santi","santi"];
const noduplicated = eliminate(duplicate);

function eliminate(array) {
    return array.filter((valor, indice) => array.indexOf(valor) === indice);
}

console.log("Sin duplicar:", noduplicated);