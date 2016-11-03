'use strict';

// const store = require('../store');

const board = [
  '', '', '',
  '', '', '',
  '', '', ''
];

let turn = 'x';

const switchTurn = function () {
  if (turn === 'x') {
    turn = 'o';
  } else {
      turn = 'x';
  }
  // board[index] = turn;
};

//--single cell was clicked - do something
// change background image in cell.
// set owner?

const isWinX = function () {
  if(board[0] === 'x' && board[1] === 'x' && board[2] === 'x'
  )
  {console.log('win');
} else {
  console.log('nope');
}
};

const setBoard = function (e) {
  e.preventDefault();
  if (board[$(this).data('cell')] !== '') {
    board[$(this).data('cell')] = turn;
  }
  //run isWin
  //isWin()
  //update turn status
  switchTurn();
  //to X/O depending on (turnstatus)
  console.log(board[0]);
  debugger;
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
  $('.col-xs-4').on('click', setBoard);
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
