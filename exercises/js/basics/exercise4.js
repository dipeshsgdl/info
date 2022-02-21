function BankAccount (nam, balance){
        this.nam = nam;
        this.balance = balance;
        this.deposit = deposit;
        this.withdrawl = withdrawl;
}


function deposit(amount){
    this.balance = this.balance + amount;
    
}

function withdraw(amount){
    if ((this.balance - amount)<0){
        console.log ("insufficient funds")
    }
    else{
    this.balance = this.balance - amount;
    }
}




