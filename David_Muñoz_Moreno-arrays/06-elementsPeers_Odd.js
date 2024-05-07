numbers=[2,5,6,23,67,45,16]
function peer_odd(numbers){
    let odd=0
    let peer=0
    numbers.forEach(number => {
        if(number%2 == 0){
            peer++
            return peer
        }else odd++
        return odd
    })
    console.log("cantidad de numeros pares: "+peer+" cantidad de numeros impares: "+odd)
}
peer_odd(numbers)