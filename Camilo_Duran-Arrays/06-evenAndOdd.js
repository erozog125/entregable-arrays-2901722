const numbers= [2,4,5,1,8,7,6]
let a;
function evenAndOdd(numbers){
for(let i=0; i<numbers.length;i++){
    a= numbers[i]%2
    if(a==0){
        console.log("El numero "+numbers[i]+" es par")
    }else{
        console.log("El numero "+numbers[i]+" es impar ")
    }
}

}
evenAndOdd(numbers)