   function numbers(){
    let array = [1,2,2,3,4,5,5];
    let duplicates = new Set(array);
    array = Array.from(duplicates);
    return array
   }
   console.log(numbers());
  