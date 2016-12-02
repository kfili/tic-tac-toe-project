'use strict';
const store = require('../store');
const gameEvents = require('../game/events');

const signInSuccess = (data) => {
  store.user = data.user;
  $("#messages").text("success");
  $(".col-xs-4").show();
  $("#status").show();
  $("#show-history").show();
  $("#change-password-open").show();
  $("#sign-out").show();
  gameEvents.onCreateGame();
};

const signOutSuccess = () => {
  $("#messages").text("success");
  $(".col-xs-4").hide();
  $("#status").hide();
  $("#show-history").hide();
  $("#change-password-open").hide();
  $("#sign-out").hide();
};

const changePasswordSuccess = () => {
  $("#messages").text("password changed");
};

const success = () => {
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
