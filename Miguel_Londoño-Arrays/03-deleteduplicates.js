const duplicates=[2,2,2,5,10,14,2,6,8]


function deletes(duplicates){


    return duplicates.filter((a,b)=>duplicates.indexOf(a)=== b)

}


console.log(deletes(duplicates));