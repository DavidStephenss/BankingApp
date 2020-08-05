"use strict"

const readline = require("linebyline")
const { start } = require("repl")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

class Transaction {
  constructor(amount, payee) {
    this.date = date()
    this.amount = amount
    this.payee = payee
  }
}

const getPrompt = () => {
  printStacks()
  rl.question("start stack: ", (startStack) => {
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack)
      getPrompt()
    })
  })
}

class BankAccount {
  constructor(accountnumber, owner) {
    this.accountnumber = accountnumber
    this.owner = owner
    this.transaction = []
  }
  balance() {
    let total = 0
    for (let i = 0; i < this.transactions.length; i++) {
      total + -this.transactions[i].amount
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
  constructor(accountnumber, owner, interestRate) {
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

const bankAccount1 = new BankAccount("900-300-200", "bob dylan")
console.log(bankAccount1.transaction.length)
if (typeof describe === "function") {
  describe("BankAccount", function () {
    it("should be a number", function () {
      const bankAccount1 = new BankAccount("900-300-200", "bob dylan")
      assert.equal(bankAccount1.accountnumber, "900-300-200")
      assert.equal(bankAccount1.name, "bob dylan")
      assert.equal(bankAccount1.transaction.length, 0)
    })
  })
}

module.exports = { BankAccount, Transaction }
