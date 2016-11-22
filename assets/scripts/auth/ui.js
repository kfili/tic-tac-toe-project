'use strict';
const app = require('../app.js');
const store = require('../store');
const gameEvents = require('../game/events');



const signInSuccess = (data) => {
  store.user = data.user;
  console.log(store.user);
  $("#messages").text("success");
  gameEvents.onCreateGame();
};

const signOutSuccess = () => {
  $("#messages").text("success");
  console.log(store.user);
};

const changePasswordSuccess = () => {
  console.log("Password Successfully Changed.");
  $("#messages").text("success");
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
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
};
