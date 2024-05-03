const smallest=[1,2,3,4,5,6,7,0.5,9]

function number(smallest){


     smallest.sort((a,b)=> a-b)

     return smallest[0]
}

console.table(number(smallest))