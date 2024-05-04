 let numbers = [1, 2, 3, 4, 1, 2, 5, 6];

 function removeNumbers(numbers) {
    let delte = new Set(numbers)

    let newArray = [...delte]

    return newArray
 }

 console.log(removeNumbers(numbers));