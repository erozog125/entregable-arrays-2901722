const numbers = [12,3,4,5,66,77,-12,78,0,5];
function addNumbers(array) {
    const sum = array.reduce((result, element) => result + element, 0);
    console.log("La suma de los elementos es:", sum);
    return  sum
}
addNumbers(numbers);
