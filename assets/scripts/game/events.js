'use strict';

const api = require('./api');
const ui = require('./ui');
const store = require('../store');

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

const onUpdateGame = function(event){
  event.preventDefault();
  let data = {
      "game": {
        "cell": {
          "index": store.index,
          "value": "x",
        },
        "over": store.game.over,
      },
    };  // event.preventDefault();   // I also removed get form fields
  api.updateGame(data)
  .done(ui.updateGameSuccess)
  .fail(ui.failure);
};

const gameHandlers = () => {
  $('#show-history-button').on('click', onGetHistory);
  $('.col-xs-4').on('click', onUpdateGame);
};

module.exports = {
  gameHandlers,
  onCreateGame,
};
