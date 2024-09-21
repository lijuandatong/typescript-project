"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, 'lijuan', 0);
account.deposit(100);
console.log(account instanceof Account);
console.log(account.balance);
class seatAssignment {
}
let seats = new seatAssignment();
seats.A1 = 'lijuan';
seats['A1'] = 'lijuan';
//# sourceMappingURL=class_demo.js.map