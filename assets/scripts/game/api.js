'use strict';

const app = require('../app');
const store = require('../store');
// const getFormFields = require('../../../lib/get-form-fields.js');

//authApi.signUp(authUi.success, authUi.failure, data);

const createGame = function(){
  return $.ajax({
    url: app.host + '/games', //'games/' ?
    method: 'POST',
    game: {},
    headers : {
          Authorization: 'Token token=' + store.user.token,
    },
  });
};

const getHistory = function(){
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers : {
          Authorization: 'Token token=' + store.user.token,
    }
  });
};

module.exports = {
  getHistory,
  createGame
};
