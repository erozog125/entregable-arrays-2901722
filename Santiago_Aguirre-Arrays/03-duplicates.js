    let array = [1,1,2,2,3,4,5,5];
    let duplicates = new Set(array);
    array = Array.from(duplicates);
    console.log(array);