'use strict';
const store = require('../store');
const gameEvents = require('../game/events');

const signInSuccess = (data) => {
  store.user = data.user;
  console.log(store.user);
  $("#messages").text("success");
  $(".col-xs-4").show();
  $("#status").show();
  $("#show-history").show();
  $("#change-password").show();
  $("#sign-out").show();
  gameEvents.onCreateGame();
};

const signOutSuccess = () => {
  $("#messages").text("success");
  console.log(store.user);
  $(".col-xs-4").hide();
  $("#status").hide();
  $("#show-history").hide();
  $("#change-password").hide();
  $("#sign-out").hide();
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
