
interface Company1{
     name : string;
     location : string;
     getbranch : (branchName : string) => void;
}

interface Company2 extends Company1{
   //let  name : string;
     ceo : string;
     getpincode : (pincode : number) => void;
     getAnnualSalary : (monthlySalary : number) => number;
}

class Apple implements Company2{
     name : string;
     location : string;
     ceo : string;
    
    constructor(name : string , location : string , ceo : string){
        this.name = name;
        this.location = location;
        this.ceo = ceo;
    }
    getbranch = (branchName : string) : void => {
         console.log(`branch name is ${branchName}`);
         console.log(`company Name is ${this.name}`);
    }
    getpincode = (pincode: number) : void =>{
         console.log(`pincode is ${pincode}`);
    }
    
    getAnnualSalary = (monthlySalary  :number ) : number => {
        return monthlySalary * 12;
    }

}

let apple1 = new Apple("tcs" , "gurgoan", "amit kumar");
apple1.getbranch("delhi");
apple1.getpincode(110001);
let aSalary = apple1.getAnnualSalary(134000);
console.log(`annual salary is ${aSalary}`);