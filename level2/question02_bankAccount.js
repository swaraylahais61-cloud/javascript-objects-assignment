const account = {
    owner: "Simone",
    balance: 100,

    deposit(amount) {
        if (typeof amount !== "number" ||
            !Number.isFinite(amount) || amount <= 0) {
            console.log("Deposit rejected: amount must be a positive number.");
            return;
        }

        this.balance += amount;
        console.log(`Deposit accepted. Balance: Rp ${this.balance}`);
    },

    withdraw(amount) {
        if (typeof amount !== "number" ||
            !Number.isFinite(amount) || amount <= 0) {
            console.log("Withdrawal rejected: amount must be a positive number.");
            return;
        }

        if (amount > this.balance) {
            console.log("Withdrawal rejected: insufficient balance.");
            return;
        }

        this.balance -= amount;
        console.log(`Withdrawal accepted. Balance: Rp ${this.balance}`);
    }
};

account.deposit(50);
account.withdraw(30);
account.deposit(-10);
account.withdraw(1000);
console.log("Final balance:", account.balance);