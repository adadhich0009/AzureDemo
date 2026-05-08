class loan{
    loanNumber : number;
    constructor(loanNumber : number){
        this.loanNumber = loanNumber;
    }

    termConditions = () => {
        console.log(`accepting the term conditions from parent`);
     }
}

class PersonalLoan extends loan{
     interestRate : number;
     constructor(loanNumber : number, interestRate : number){
        super(loanNumber);
        this.interestRate = interestRate;
     }

     termConditions = () => {
        console.log(`accepting the term conditions from child`);
     }

}

let PersonalLoan1 = new PersonalLoan(12345, 12.5);
console.log(`loan number is ${PersonalLoan1.loanNumber} and interest rate is ${PersonalLoan1.interestRate}`);   
PersonalLoan1.termConditions();

let PersonLoan2 = new loan(67890);
console.log(`loan number is ${PersonLoan2.loanNumber}`);
PersonLoan2.termConditions();