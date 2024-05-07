let peoples=["lintler","osama","jahir","gato","shower"]
function duplicates(names) {
let notDuplicates =[... new Set(peoples)];
console.log(notDuplicates)
}

duplicates()