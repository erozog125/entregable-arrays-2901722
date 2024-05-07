function SumOfTwoArrays(numbers1,numbers2) {
    const sum1 = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const sum2 = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const totalSum = sum1 + sum2;
    return totalSum;
}
 const numbers1 = [1, 2, 3, 4, 5];
 const numbers2 = [6, 7, 8, 9, 10];
 console.log(SumOfTwoArrays(numbers1, numbers2));

