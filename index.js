"use strict"

const assert = require("assert")
const readline = require("linebyline")
const { start } = require("repl")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

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
  constructor(accountnumber, owner){
  this.accountnumber = accountnumber
  this.owner = owner
  this.transaction = []
  }
  balance() { 
       function sumTotal(total, num) {    
         return total + num     
         }
             return transactions.reduce(sumTotal) 
             }

  }
  deposit(amt) {
    this.transaction = amt
    amt.push(this.transaction)
  }
  charge(payee, amt) {
    parseInt(this.transaction)
  }
}


class Transaction {
  constructor (amount, payee){
    this.date = date
    this.amount = amount
    this.payee = payee
  }
}
 const bankAccount1 = new BankAccount('900-300-200', 'bob dylan') 
 console.log(bankAccount1.transaction.length)
if (typeof describe === 'function') {
  describe('BankAccount', function(){
    it('should be a number', function(){
      const bankAccount1 = new BankAccount('900-300-200', 'bob dylan') 
      assert.equal(bankAccount1.accountnumber, '900-300-200')
      assert.equal(bankAccount1.name,'bob dylan')
      assert.equal(bankAccount1.transaction.length, 0 )

    })
  })  
}