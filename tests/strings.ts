var myname : string = "ajay";
console.log(`char at ${myname.charAt(4)}`);
for(let i = 0; i < myname.length; i++){
    console.log(`char at ${myname.charAt(i)}`);
}

var myname : string = "dadhich";
for(let i of myname){
    console.log(`char is ${i}`);
}
myname.split('').forEach((c , i)=> console.log(`${i} using split is ${c}`));

let Str : String ="my country is india";
console.log(Str.split(" ", 2));
console.log(Str.substring(3, 7));

let str1 : string = "@#$%^745678DFGHjdfgh";
let newStr1 = str1.replaceAll(/[^a-zA-Z0-9]/g, "");
console.log(newStr1);

let arr : string[] = ['ashish', 'ajay', 'sachin', 'sachin'];
arr.forEach(el => console.log(`name is ${el}`));

let newArray = [...str1];
console.log(newArray);

let unsingSplit = str1.split("");
console.log(unsingSplit);

