function countEvenOdd(array) {
    let evens = 0;
    let odds = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evens++; // si es divisible por dos es par
        } else {
            odds++; // si no es divisible por dos es impar
        }
    }
    
    return {
        evens: evens,
        odds: odds
    };
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = countEvenOdd(numbers);
//console.log("Number of even numbers:", result.evens);
//console.log("Number of odd numbers:", result.odds);



