function findTheMinimum(array) {
    if (array.length === 0) {
    return undefined; 
    }

    let minimum = array[0]; 
    for (let i = 1; i < array.length; i++) {
    if (array[i] < minimum) {
        minimum = array[i];
    }
    }
    return minimum;
}  

const array = [4, 2, 7, 1, 9];