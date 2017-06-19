#! /usr/bin/env node
const prompt = require('prompt');

prompt.start();

 prompt.get(['username', 'email'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
  });
// const ticTacToe = () => {
//   let user1 = prompt('First move?')

//   let newBoard = new Array(['-','-','-'], ['-','-','-'], ['-','-','-'])
//   return newBoard
// }

