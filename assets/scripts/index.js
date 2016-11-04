'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js');
const gapiEvents = require('./gapi/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
});

$(() => {
  gameEvents.gameHandlers();
});

$(() => {
  gapiEvents.gapiHandlers();
});
