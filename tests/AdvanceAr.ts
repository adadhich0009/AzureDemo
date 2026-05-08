let ids: number[] = [4,3,22,5,1];
// foreach(currentvalue, index, array)
ids.forEach((value, index, array) => {
    console.log(`Index: ${index} -> Value: ${value}  , ${array}`);
});

let doubledIds = ids.map((value) => {
     
    value = value *2;
    console.log(`value is ${value}`);
    return value;
});

console.log(doubledIds);
doubledIds.filter(value => value %2 ===0).forEach((value) => console.log(`divide by 2  is ${value}`));

let strAr1: Array<string> = ["   ajay", "   ashish", "  sachin"];

let trimmedStrAr1 = strAr1.map(ele => ele.trim().substring(0,2).toUpperCase());
trimmedStrAr1.forEach(el => console.log(`trimmed string is ${el}`));

