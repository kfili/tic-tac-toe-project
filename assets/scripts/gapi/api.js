'use strict';

const app = require('../app');

const store = require('../store');
// const getFormFields = require('../../../lib/get-form-fields.js');

//authApi.signUp(authUi.success, authUi.failure, data);

const getHistory = function(data){
  return $.ajax({
    url: app.host + '/games/',
    method: 'GET',
    data,
  });
};

module.exports = {
  getHistory
};
