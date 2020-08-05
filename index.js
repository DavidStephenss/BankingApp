class Transaction {
  constructor(amount, payee) {
    this.date = new Date()
    this.amount = amount
    this.payee = payee
  }
}
class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber
    this.owner = owner
    this.transaction = []
  }
  balance() {
    let total = 0
    for (let i = 0; i < this.transaction.length; i++) {
      total += this.transactions[i].amount
    }
    return total
  }

  deposit(amt) {
    if (amt > 0) {
      const depositTransaction = new Transaction(amt, "deposit")
      this.transaction.push(depositTransaction)
    }
  }
  charge(payee, amt) {
    const currentBalance = this.balance()
    if (amt <= currentBalance) {
      const chargeTransaction = new Transaction(-amt, payee)
      this.transactions.push(chargeTransaction)
    }
  }
}
class SavingsAccount extends BankAccount {
  constructor(accountNumber, owner, interestRate) {
    super(accountNumber, owner)
    this.interestRate = interestRate
  }

  accrueInterest() {
    const currentBalance = this.balance()
    const intestAmt = currentBalance * this.interestRate
    const interestTransaction = new Transaction(interestAmt, "Interest")
    this.transactions.push(interestTransaction)
  }
}
module.exports = { BankAccount, Transaction }
