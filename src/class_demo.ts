class Account {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount: number) {
        if(amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }

    get balance(){
        return this._balance
    }
}

let account = new Account(1, 'lijuan', 0);
account.deposit(100);
console.log(account instanceof Account)
console.log(account.balance)


class seatAssignment {
    [seatNumber: string]: string
}

let seats = new seatAssignment();
seats.A1 = 'lijuan'
seats['A1'] = 'lijuan'