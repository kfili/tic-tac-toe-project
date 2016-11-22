'use strict';

const api = require('./api');
const ui = require('./ui');

// const logic = require('./logic');
//const getFormFields = require('../../../lib/get-form-fields.js');

const onGetHistory = function(event){
  event.preventDefault();
  api.getHistory()
  .done(ui.getHistorySuccess)
  .fail(ui.fail);
};

const onCreateGame = function(){
  // event.preventDefault();
  api.createGame()
  .done(ui.createGameSuccess)
  .fail(ui.fail);
};

const gameHandlers = () => {
  $('#show-history-button').on('click', onGetHistory);
};

module.exports = {
  gameHandlers,
  onCreateGame,
};
