function ordenarNumeros(array) {
    let sortedArray = array.slice().sort((a, b) => a - b);
    return sortedArray;
  }
  
  const numeros = [12, 3, 4, 5, 66, 77, -12, 78, 0, 5];
  const numerosOrdenados = ordenarNumeros(numeros);
  console.log(numerosOrdenados);
  