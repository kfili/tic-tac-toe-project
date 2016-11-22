'use strict';

const authEvents = require('./auth/events.js');
const logicEvents = require('./game/logic.js');
const gameEvents = require('./game/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
});

$(() => {
  logicEvents.logicHandlers();
});

$(() => {
  gameEvents.gameHandlers();
});
