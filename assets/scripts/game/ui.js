'use strict';
// const app = require('../app.js');
const store = require('../store');

// const updateGamesSuccess =

const getHistorySuccess = (data) => {
  // store.user = data.user;
  $("#messages").text("Number of Games Played: " + data.games.length);
};

const createGameSuccess = (data) => {
  store.game = data.game;
  $("#messages").text("New Game Created");
};

const updateGameSuccess = (data) => {
  store.game = data.game;
  $("#messages").text("Game Updated");
};

const success = (data) => {
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
  createGameSuccess,
  updateGameSuccess
};
