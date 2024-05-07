function ordenarNumeros(array) {
    return array.slice().sort((a, b) => a - b);
  }
  
  // Ejemplo de uso
  const numeros = [3, 8, 2, 5, 1];
  console.log(ordenarNumeros(numeros)); // Devolverá [1, 2, 3, 5, 8]