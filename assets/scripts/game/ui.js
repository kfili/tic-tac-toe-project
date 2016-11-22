'use strict';
// const app = require('../app.js');
const store = require('../store');

// const updateGamesSuccess =

const getHistorySuccess = (data) => {
  // store.user = data.user;
  console.log(data);
  $("#messages").text("games:" + data.games.length);
};

const createGameSuccess = (data) => {
  store.game = data.game;
  console.log(data);
  $("#messages").text("New Game Created");
};

const updateGameSuccess = (data) => {
  store.game = data.game;
  console.log(data);
  $("#messages").text("Game Updated");
};

const success = (data) => {
  console.log(data);
  $("#messages").text("success");
};

const failure = (error) => {
  console.error(error);
  $("#messages").text("failure");
};

module.exports = {
  failure,
  success,
  getHistorySuccess,
  createGameSuccess
};
