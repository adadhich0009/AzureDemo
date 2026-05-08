interface Person{
    name: string;
    age : (birthYear : number, currentYear : number) => number; 
}

let person1 : Person = {
    name : "john",
    age : (birthYear : number, currentYear : number) => {
        currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }
}


person1.age(1990, 2024);
console.log(`name is ${person1.name} and age is ${person1.age(1990, 2026)}`);   