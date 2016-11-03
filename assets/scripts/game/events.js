'use strict';

// const store = require('../store');

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

let turn = 'X';

const switchTurn = function () {
  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
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
        emptyBoard();
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
        emptyBoard();
      } else if (
    board[0] !== '' && board[1] !== '' && board[2] !== ''
    && board[3] !== '' && board[4] !== '' && board[5] !== ''
    && board[6] !== '' && board[7] !== '' && board[8] !== ''
      ) {
        console.log('CATs game');
      } else {
        console.log('nada');
      }
};

const cellclick = function (e) {
  e.preventDefault();
  if (board[$(this).data('cell')] === '') {
    board[$(this).data('cell')] = turn;
    // sets X/O to a div. target div?
    $(this).text(turn);
    isWin();
    switchTurn();
  } else {
    console.log('this cell is taken, DND!');
  }

  //update turn status
  //to X/O depending on (turnstatus)
  console.log(turn);
  console.log(board);
};

// const onCLICKtl = function(event){
//   event.preventDefault();
//   if (store.tl= ) {
//
//   }
// };

//--all cells were clicked - do something
// const cellsClick = function(){
//   event.preventDefault();
//   $(' ').data(this)
//   debugger;
//   if (store.tl= ) {
//
//   }
// };

//check for wins & whos turn is it?


//--Click handler
const gameHandlers = () => {
  $('.col-xs-4').on('click', cellclick);
  // $('#tc').on('click', onCLICKtc);
  // $('#tr').on('click', onCLICKtr);
  // $('#ml').on('click', onCLICKml);
  // $('#mc').on('click', onCLICKmc);
  // $('#mr').on('click', onCLICKmr);
  // $('#ml').on('click', onCLICKbl);
  // $('#bc').on('click', onCLICKbc);
  // $('#br').on('click', onCLICKbr);
};
//
// const gameHandlers = () => {
//   $('#tr').on('click', onCLICKtr);
//   $('#tc').on('click', onCLICKtc);
//   $('#tr').on('click', onCLICKtr);
//   $('#ml').on('click', onCLICKml);
//   $('#mc').on('click', onCLICKmc);
//   $('#mr').on('click', onCLICKmr);
//   $('#ml').on('click', onCLICKbl);
//   $('#bc').on('click', onCLICKbc);
//   $('#br').on('click', onCLICKbr);
// };

module.exports = {
  gameHandlers,
};
