const numbers= [1,2,2,3,4,5,5,6,7,8,9,9]

function repeatnumbers(numbers){
      norepeat= [... new Set(numbers)]
    return norepeat
}
console.log(repeatnumbers(numbers))
