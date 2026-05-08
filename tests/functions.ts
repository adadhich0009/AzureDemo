// Function to add two numbers and return the sum
// @author Ajay
let sum = function (a : number, b : number) : number{
    return a + b;
}

// Call the sum function with 10 and 20, store result and log it
// @author Ajay
let result = sum(10, 20);
console.log(`result : ${result}`);

// Arrow function to calculate the length of a given string
// @author Ajay
let lengthofString = (str : string) : number => {
 return str.length
}

// Call lengthofString with a sample string and log the result
// @author Ajay
let sLength = lengthofString('ajay kumar dadhihch');
console.log(`length is : ${sLength}`);

// Arrow function that logs a message to the console
// @author Ajay
let return1 = () => console.log("this is return 1");

// Arrow function to add two numbers (fixed syntax)
// @author Ajay
let return2 = (a : number, b : number ) => {
    let c = a + b;
    return c;
};