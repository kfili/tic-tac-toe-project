'use strict';

const store = require('../store');



//--single cell was clicked - do something
// change background image in cell.
// set owner?

const onCLICKtl = function(event){
  event.preventDefault();
  if (store.tl= ) {

  }
};

//--all cells were clicked - do something
const cellsClick = function(){
  event.preventDefault();
  $(' ').data(this)
  debugger;
  // if (store.tl= ) {
  //
  // }
};

//check for horizontal wins

//check for vertical wins

//check for draws

//--Click handler
const gameHandlers = () => {
  $('.col-xs-4').on('click', cellsClick);
  $('#tc').on('click', onCLICKtc);
  $('#tr').on('click', onCLICKtr);
  $('#ml').on('click', onCLICKml);
  $('#mc').on('click', on);
  $('#mr').on('click', onClickTL);
  $('#bl').on('click', onClickTL);
  $('#bc').on('click', onClickTL);
  $('#br').on('click', onClickTL);
};

module.exports = {
  gameHandlers,
};
