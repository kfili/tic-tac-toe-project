'use strict';

// const store = require('../store');

let over = false;
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
    board[0] === 'X' && board[1] === 'X' && board[2] === 'X'
    || board[3] === 'X' && board[4] === 'X' && board[5] === 'X'
    || board[6] === 'X' && board[7] === 'X' && board[8] === 'X'
    || board[0] === 'X' && board[3] === 'X' && board[6] === 'X'
    || board[1] === 'X' && board[4] === 'X' && board[7] === 'X'
    || board[2] === 'X' && board[5] === 'X' && board[8] === 'X'
    || board[0] === 'X' && board[4] === 'X' && board[8] === 'X'
    || board[2] === 'X' && board[4] === 'X' && board[6] === 'X'
      ) {
        console.log('X wins!!');
        return true;
      } else if (
    board[0] === 'O' && board[1] === 'O' && board[2] === 'O'
    || board[3] === 'O' && board[4] === 'O' && board[5] === 'O'
    || board[6] === 'O' && board[7] === 'O' && board[8] === 'O'
    || board[0] === 'O' && board[3] === 'O' && board[6] === 'O'
    || board[1] === 'O' && board[4] === 'O' && board[7] === 'O'
    || board[2] === 'O' && board[5] === 'O' && board[8] === 'O'
    || board[0] === 'O' && board[4] === 'O' && board[8] === 'O'
    || board[2] === 'O' && board[4] === 'O' && board[6] === 'O'
      ) {
        console.log('O wins!!');
        return true;
      } else if (
    board[0] !== '' && board[1] !== '' && board[2] !== ''
    && board[3] !== '' && board[4] !== '' && board[5] !== ''
    && board[6] !== '' && board[7] !== '' && board[8] !== ''
      ) {
        console.log('CATs game');
        return true;
      } else {
        console.log('nada');
        return false;
      }
};

const cellclick = function (e) {
  e.preventDefault();
    if (over === false) {
      if (board[$(this).data('cell')] === '' ) {
          board[$(this).data('cell')] = turn;
          $(this).text(turn);                 // sets X/O to a div
          over = isWin();         // returns true if win or draw state detected

          if (over === true) {
              console.log(over);
              $('#status').text('Player X wins!!');
              debugger;
            } else {
            console.log(over);
            switchTurn();                       // switches a variable that = X or O
            }
          }
    } else if (over === true) {
      debugger;
      emptyBoard();                           // clears the board array.
      over = false;
      switchTurn();
      }
  };

const gameHandlers = () => {
  $('.col-xs-4').on('click', cellclick);
  };

  //cellFiller
    // if cell full do nothing
    // if cell empty check turn and fill
    // call isWin?
    // switchTurn?

module.exports = {
  gameHandlers,
};

// const cellclick = function (e) {
//   e.preventDefault();
//   //check the game state
//
//
//   //update board
//   if (board[$(this).data('cell')] === '' && over === false) {
//     board[$(this).data('cell')] = turn;
//     $(this).text(turn); // sets X/O to a div
//     let over = isWin();
//
//     if (over === 'winX') {
//       debugger;
//         $('#status').text('Player X wins!!');
//         over = true;
//     }
//     switchTurn();
//   } else if (over === true) {
//     debugger
//     emptyBoard();
//   } else {
//     console.log('this cell is taken, DND!');
//   }
// };
