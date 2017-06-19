#! /usr/bin/env node
const prompt = require('prompt');

prompt.start();


const ticTacToe = () => {
  let user1 = prompt('First move?')

  let newBoard = new Array(['-','-','-'], ['-','-','-'], ['-','-','-'])
  return newBoard
}

console.log(ticTacToe());