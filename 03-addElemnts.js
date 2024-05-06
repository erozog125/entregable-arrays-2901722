const dupli=[4,4,4,7,10,16,4,6,8]
function delet(dupli) {
  return dupli.filter((a,b)=> dupli.index(a)==b)  
}