'use strict';
// const app = require('../app.js');
// const store = require('../store');


const getHistorySuccess = (data) => {
  // store.user = data.user;
  console.log(data);
  $("#messages").innerhtml("games:" data.game.length);
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
};
