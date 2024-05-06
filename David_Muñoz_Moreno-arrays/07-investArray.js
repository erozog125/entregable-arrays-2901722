nambers=["faber","godoy","superboy","william"]
function invest(nambers){
   let newNambers= nambers.slice(0,nambers.length)
   newNambers.reverse()
    return newNambers
}
let exit = invest(nambers)
console.log(exit)