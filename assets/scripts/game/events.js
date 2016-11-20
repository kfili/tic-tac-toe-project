 'use strict';

// const store = require('../store');
// over true/false
debugger;
let gState = 'go';
let turn = 'X';
const board = [
  '', '', '',
  '', '', '',
  '', '', ''
];

const emptyBoard = function () {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    $('.col-xs-4').text('');
  }
};

const switchTurn = function () {
   if (turn === 'X') {
    turn = 'O';
    $('#status').text('Make your move player O');
  } else {
    turn = 'X';
    $('#status').text('Make your move player X');
  }
};

const isWin = function () {
    if(
    board[0] === 'X' && board[1] === 'X' && board[2] === 'X' ||
    board[3] === 'X' && board[4] === 'X' && board[5] === 'X' ||
    board[6] === 'X' && board[7] === 'X' && board[8] === 'X' ||
    board[0] === 'X' && board[3] === 'X' && board[6] === 'X' ||
    board[1] === 'X' && board[4] === 'X' && board[7] === 'X' ||
    board[2] === 'X' && board[5] === 'X' && board[8] === 'X' ||
    board[0] === 'X' && board[4] === 'X' && board[8] === 'X' ||
    board[2] === 'X' && board[4] === 'X' && board[6] === 'X'
      ) {
        console.log('X wins!!');
        return 'winX';
      } else if (
    board[0] === 'O' && board[1] === 'O' && board[2] === 'O' ||
    board[3] === 'O' && board[4] === 'O' && board[5] === 'O' ||
    board[6] === 'O' && board[7] === 'O' && board[8] === 'O' ||
    board[0] === 'O' && board[3] === 'O' && board[6] === 'O' ||
    board[1] === 'O' && board[4] === 'O' && board[7] === 'O' ||
    board[2] === 'O' && board[5] === 'O' && board[8] === 'O' ||
    board[0] === 'O' && board[4] === 'O' && board[8] === 'O' ||
    board[2] === 'O' && board[4] === 'O' && board[6] === 'O'
      ) {
        console.log('O wins!!');
        return 'winO';
      } else if (
    board[0] !== '' && board[1] !== '' && board[2] !== '' &&
    board[3] !== '' && board[4] !== '' && board[5] !== '' &&
    board[6] !== '' && board[7] !== '' && board[8] !== ''
      ) {
        console.log('CATs game');
        return 'cat';
      } else {
        console.log('nada');
        return 'go';
      }
};

const cellclick = function (e) {
  e.preventDefault();
    if (gState === 'go') {
      if (board[$(this).data('cell')] === '' ) {
          board[$(this).data('cell')] = turn;
          $(this).text(turn);     // sets X/O to a div
          gState = isWin();         // returns true if win or draw state detected
          // send PATCH
          debugger;
          if (gState !== 'go') {
              console.log(gState);
              if (gState === 'winX') {
                $('#status').text('Player X wins!!');
              } else if (gState === 'winO') {
                $('#status').text('Player O wins!!');
              } else {
                $('#status').text("Cat's Game.");
              }
            } else {
            console.log(gState);
            switchTurn();         // switches a variable that = X or O
            }
          }
    } else if (gState !== 'go') {
      emptyBoard();               // clears the board array.
      gState = 'go';
      switchTurn();
      }
  };

const gameHandlers = () => {
  $('.col-xs-4').on('click', cellclick);
  };



module.exports = {
  gameHandlers,
};
