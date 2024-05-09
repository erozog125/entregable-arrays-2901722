function findmenor() {
    let numbers = [1,2,3,4,5,1,0];
    
    let  minor_number= numbers.reduce((previous, current) => {
        return current < previous ? current : previous;
      });
      
      console.log(minor_number);
}

findmenor()