// Contar elementos pares e impares: Escribe una función que tome un array de números como argumento y devuelva un objeto con dos propiedades: una que contenga la cantidad de números pares y otra que contenga la cantidad de números impares en el array

const numbers= [1,2,3,4,5,6,7,8,9]
let num;
function PairOrImpair(numbers){
for(let i=0; i<numbers.length;i++){
    num= numbers[i]%2
    if(num==0){
        console.log("El numero "+numbers[i]+" es par")
    }else{
        console.log("El numero "+numbers[i]+" no es par ")
    }
}

}
PairOrImpair(numbers)
