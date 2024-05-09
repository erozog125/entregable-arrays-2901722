let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,14,13];
function countevenandodd(array) {
    let count = {
        even: 0,
        odd: 0
    };

    array.forEach(num => {
        if (num % 2 === 0) {
            count.even++;
        } else {
            count.odd++;
        }
    });

    return count;
}

let result = countevenandodd(numbers);
console.table(result);