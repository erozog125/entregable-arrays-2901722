const numbers = [12,3,4,5,66,77,-12,78,0,5];
function sumElements(array) {
    const sum = array.reduce((accumulator, element) => accumulator + element, 0);
    console.log("La suma de los elementos es:", sum);
}
sumElements(numbers);
