let arr5: number[] = [1, 2, 3, 4, 5,  1, 2, 3];
let newset = new  Set(arr5);
let uniqueArr = [...newset];
console.log(uniqueArr);
console.log("==================================");
let newArr6 : number[] = [];
for(let i =0; i< arr5.length; i++){

    let count = 0;
    for(let j = i + 1; j < arr5.length; j++){
        if(arr5[i] === arr5[j]){
            count++;
            
        }
    }
    if(count !== 0){
        newArr6.push(arr5[i]);
    }
    
}
console.log(arr5);
console.log(newArr6);
newArr6.push(100);
console.log(newArr6);

