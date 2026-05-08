let typeAr : (string| number | any)[] = ["ajay", "ashish", "sachin" , 324 , 'df'];
typeAr.forEach(el => console.log(`value is ${el}`));

let tuppleType : [String , number , boolean] = ["ajay", 123, true];
for(let i = 0; i < tuppleType.length; i++){
    console.log(`tupple value is ${tuppleType[i]}`);
}

let mutliTuppleType : [String , number , boolean][] = [["ajay", 123, true] , ["ashish", 456, false] , ["sachin", 789, true]];
for(let i = 0; i < mutliTuppleType.length; i++){
   if(i == 1){
     console.log(`tupple value is ${mutliTuppleType[i][1]}`);
   }
}

