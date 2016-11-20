'use strict';

const api = require('./api');
const ui = require('./ui');
//const getFormFields = require('../../../lib/get-form-fields.js');

const onGetHistory = function(event){
  event.preventDefault();
  api.getHistory()
  .done(ui.getHistorySuccess)
  .fail(ui.fail);
};

const gapiHandlers = () => {
  $('#show-history-button').on('click', onGetHistory);
};

module.exports = {
  gapiHandlers,
};
