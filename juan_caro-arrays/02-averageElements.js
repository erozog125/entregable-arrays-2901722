function averageArray(array) {

    if (array.length === 0) {
        return 0; 
    }

    
    var sumaTotal = array.reduce(function(a, b) {
        return a + b;
    });


    var average = sumaTotal / array.length;

    return average;
}


var miArray = [1, 2, 3, 4, 5];
console.log(averageArray(miArray)); 


