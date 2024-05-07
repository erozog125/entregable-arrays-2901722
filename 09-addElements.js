function SumOfTwoArrays(numbers1,numbers2) {
    const sum1 = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const sum2 = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const totalSum = sum1 + sum2;
    return totalSum;
}


