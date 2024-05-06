const numberOne = [1,2,5,6,4]
const numberTwo = [1,2,5,6,4]

function addElements(numberOne,numberTwo) {
    return numberOne.map((a, b) => a + numberTwo[b]);
}  
console.table([addElements(numberOne,numberTwo)])
