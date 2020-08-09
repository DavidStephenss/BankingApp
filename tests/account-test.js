// import module
const assert = require("assert")

// import classes
const { BankAccount, Transaction } = require("../index.js")

// const bankAccount1 = new BankAccount(888, "Roger Rabbit")
// const transaction1 = new Transaction(45, "Betty Boo")
// bankAccount1.transactions.push(transaction1)
// console.log(bankAccount1)
// console.log(transaction1)
// console.log(bankAccount1.transactions)

//TESTS
//declare and define variables
if (typeof describe === "function") {
  describe("BankAccount", function () {
    it("better make sure i can create a bank account: account number, name, transaction", function () {
      const bankAccount1 = new BankAccount("oooo8989", "Bobby Dylan")
      assert.equal(bankAccount1.name, "Bobby Dylan")
      assert.equal(bankAccount1.accountNumber, "oooo8989")
      assert.equal(bankAccount1.transaction.length, 0)
      assert.equal(bankAccount1.balance(), 0)
    })
  describe("BankAccount", function () {
    it("It should check the bank balance", function () {
      const bankAccount1 = new BankAccount("oooo8989", "Bobby Dylan")
      bankAccount1.deposit(10)
      assert.equal(bankAccount1.balance(), 10)
    })
    it("shouldn't let you deposit a negative", function () {
      const bankAccount1 = new BankAccount("oooo8989", "Bobby Dylan")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.deposit(100)
      assert.equal(bankAccount1.balance(), 100)
      bankAccount1.deposit(-30)
      assert.equal(bankAccount1.balance(), 100)
    })
    it("it shouldn't let you overdraft", function () {
      const bankAccount1 = new BankAccount("oooo8989", "Bobby Dylan")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.charge("torchy's tacos", 30) 
      assert.equal(bankAccount1.balance(), 0)
    })
    it("it should allow refunds", function () {
      const bankAccount1 = new BankAccount("oooo8989", "Bobby Dylan")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.charge("torchy's tacos", -30) 
      assert.equal(bankAccount1.balance(), 30)
    })
    it("should track multiple deposits", function {
      const bankAccount1 = new BankAccount("oooo8989", "Bobby Dylan")
      bankAccount1.deposit(300, "lebron james")
      bankAccount1.deposit(400, "bob")
      bankAccount1.deposit(500, "mike")    
    })
  })
describe("Transaction", function () {
it("should create transactions using date, payee and amount", function () {
  const transaction1 = new Transaction(30, "bob marley")
      assert.equal(transaction1.amount, 50)
      assert.equal(transaction1.payee, "bob marley")
      assert.notEqual(transaction1.date, undefined)
      assert.notEqual(transaction1.date, null)
  })
it("should create transactions using date, payee and amount", function () {
  const transaction1 = new Transaction(55.01 "H.E.B")
  assert.equal(transaction1.amount, 55.01)
  assert.equal(transaction1.payee, "H.E.B")
  assert.notEqual(transaction1.date, undefined)
  assert.notEqual(transaction1.date, null)
  })
})