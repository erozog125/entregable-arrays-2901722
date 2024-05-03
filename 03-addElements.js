const dupli=[2,2,2,5,10,14,2,6,8]

function delet (dupli){

    return dupli.filter((a,b) => dupli.indexOF(a)=== b)

}
console.log(delet(dupli));