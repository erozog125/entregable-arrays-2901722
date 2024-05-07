const number= [5,1,6,2]
let a;
function pairOdd(number){
 for(let i=0; i<number.length;i++){
    a= number[i]%2
     if(a==0){
        console.log("El numero "+number[i]+" es par")
    }else{
        console.log("El numero "+number[i]+" no es par ")
    }
}

}
pairOdd(number)


