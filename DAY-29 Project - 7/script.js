class Account{
    constructor(accountNumber,accountHolder,balance){
        this.accountNumber = accountNumber,
        this.accountHolder = accountHolder,
        this.balance       = balance
    }

    checkBalance(){
        return this.balance
    }
    deposit(amount){
        return this.balance = this.balance + amount 
    }
    withdraw(amount){
        if(this.balance > amount){
            return this.balance = this.balance - amount
        }
        
        else{
            return "Insufficient Balance"
        }
    }
}


let ans = new Account(830833315, "Chintan Rathod", 40000)

console.log(ans);
console.log("Total balance is : ",(ans.checkBalance()));
console.log("Desposit amount is :",(ans.deposit(15000)));
console.log("Withdraw amount is :",(ans.withdraw(3000)));

class ATM extends Account{
    constructor(accountNumber,accountHolder,balance){
        super(accountNumber,accountHolder,balance)
    }

    displayOptions(){
        console.log("Press 1 Check Balance");
        console.log("Press 2 Check Deposit");
        console.log("Press 3 Check Withdraw");
    }

    performOperation(operation, amount){
        if(operation == 1){
            console.log(this.balance);
        }
        if(operation == 2){
            console.log(ans.deposit(amount));
        }
        if(operation == 3){
            console.log(ans.withdraw(amount));
        }
    }

}

let ans1 = new ATM(830833315, "Chintan Rathod", 40000)

console.log(ans1);

ans1.displayOptions()
ans1.performOperation(2, 60000)