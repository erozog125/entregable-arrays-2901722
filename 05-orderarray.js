function sortlist() {
    let messy=[2,3,7,8,0,1,9,4,5,6,20];
    console.table(messy.sort((a,b) => a - b))
}

sortlist()