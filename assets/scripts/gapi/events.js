'use strict';

const api = require('./api');
const ui = require('./ui');
//const getFormFields = require('../../../lib/get-form-fields.js');

const onGetHistory = function(event){
  event.preventDefault();
  api.getHistory(data)
  .done(ui.getHistorySuccess)
  .fail(ui.fail);
};

const gapiHandlers = () => {
  $('#show-history-modal').on('submit', onGetHistory);
};

module.exports = {
  gapiHandlers,
};
