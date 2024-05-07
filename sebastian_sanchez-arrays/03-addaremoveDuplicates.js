let peoples=["sebas","santiago","samuel","andrea","pilar"]
function duplicates(names) {
let notDuplicates =[... new Set(peoples)];
console.log(notDuplicates)
}

duplicates()