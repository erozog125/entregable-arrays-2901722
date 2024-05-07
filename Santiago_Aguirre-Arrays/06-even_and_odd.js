const number= [5,2,6,9]
let a;
function even_Odd(number){
for(let i=0; i<number.length;i++){
    a= number[i]%2
    if(a==0){
        console.log("El numero "+number[i]+" es par")
    }else{
        console.log("El numero "+number[i]+" no es par ")
    }
}

}
even_Odd(number)