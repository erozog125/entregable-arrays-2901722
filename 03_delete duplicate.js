function deleteDuplicates(array) {
    // Utilizamos un conjunto para almacenar elementos únicos
    const uniqueElements = array.filtrer(value, index, );
    // Convertimos el conjunto de nuevo a un array
    const uniqueArray = [...uniqueElements];
    return uniqueArray;
  }
  
  const numbersWithDuplicates = [11, 222, 222, 45, 11, 45, 7, 100];
  const uniqueNumbers = deleteDuplicates(numbersWithDuplicates);
  
  console.log("Array original:", numbersWithDuplicates);
  console.log("Array sin duplicados:", uniqueNumbers);
  