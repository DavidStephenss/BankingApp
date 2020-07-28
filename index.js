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
