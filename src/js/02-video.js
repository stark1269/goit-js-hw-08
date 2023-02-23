import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

function timeUpdate(event) {
  localStorage.setItem("videoplayer-current-time", event.seconds);
};

player.on('timeupdate', throttle(timeUpdate, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));




