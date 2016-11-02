'use strict';
const app = require('../app.js');
const store = require('../store');


const signInSuccess = (data) => {
  store.user = data.user;
  console.log(store.user);
  $("#messages").text("success");
};

const signOutSuccess = () => {
  app.user = null;
  $("#messages").text("success");
  console.log(app);
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
