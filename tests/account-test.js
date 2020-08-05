// import module
const assert = require("assert")

// import classes
const { BankAccount, Transaction } = require("../index.js")

const bankAccount1 = new BankAccount(888, "Roger Rabbit")
const transaction1 = new Transaction(45, "Betty Boo")
bankAccount1.transactions.push(transaction1)
console.log(bankAccount1)
console.log(transaction1)
console.log(bankAccount1.transactions)



//TESTS
//declare and define variables
//
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
if (typeof describe === "function") {
  describe("BankAccount", function () {
    it("better make sure i can create a bank account: account number, name, transaction", function () {
      const bankAccount1 = new BankAccount('oooo8989', "Bobby Dylan")
      assert.equal(bankAccount1.owner, "Bobby Dylan")
      assert.equal(bankAccount1.accountNumber, "oooo8989")
      assert.equal(bankAccount1.transaction.length, 0)
      assert.equal(bankAccount1.balance(), 0)
  })
it("should return bank balance correctly", function() {
  
}
