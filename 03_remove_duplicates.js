let peoples=["esteban","juan","paulo","andres","andres"]
function duplicates(names) {
let notDuplicates =[... new Set(peoples)];
console.log(notDuplicates)
}

duplicates()