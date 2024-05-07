function encontrarNumeroMasPequeno(array) {
    let numeroMasPequeno = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < numeroMasPequeno) {
        numeroMasPequeno = array[i];
      }
    }
    return numeroMasPequeno;
  }
  