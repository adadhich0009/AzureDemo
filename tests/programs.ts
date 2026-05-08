let a :string | number= 10;
a = 'a';
console.log(`value of a is ${a}`);

const b : number= 20;
// b = 15; // This will throw an error because b is a constant
console.log(`value of b is ${b}`);

let  ar : number[] = [1, 2, 3, 2, 4, 5, 7, 2, 1 , 2, 1];

for(let i of ar){
    console.log(`value of a is ${i}`);

}

for(let i = 0; i < ar.length; i++){
    for(let j = i +1 ; j < ar.length ; j++){
        let isDuplicate = false;
        if(ar[i] === ar[j]){
            isDuplicate = true;
            break;
        }

        for(let k = 0; k < i; k++){
            if(ar[i] ===ar[k]){
                isDuplicate = false;
            }


        console.log(`value of a is ${ar[i]}`);
    }}
}


console.log("==================================");
let seat : "aisle" | "window" | "middle";
if(true){
    seat = "aisle";
}  
console.log(`my seat is ${seat}`);

function getChai(type : string | number){
    if(typeof type === "string"){
        console.log(`my chai is ${type}`);
    }
    return console.log(`my chai count is ${type}`);
}

getChai("masala");
getChai(2);

function isSandwich(type ?: string){
    if(type){
      return  console.log(`my sandwich is ${type}`);
    }
   return  console.log(`my sandwich is not available`);
}
isSandwich("veg");
isSandwich();


