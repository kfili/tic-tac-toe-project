'use strict';

const app = require('../app');
const store = require('../store');
// const getFormFields = require('../../../lib/get-form-fields.js');

//authApi.signUp(authUi.success, authUi.failure, data);

const createGame = function(){
  return $.ajax({
    url: app.host + '/games', // or '/games/' ?
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

const updateGame = function(data){
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/games/' + store.game.id,
    headers: {
        Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

module.exports = {
  getHistory,
  createGame,
  updateGame,
};
