module.exports = {
  hours: time => (time || new Date()).getTime() / 1000 / 60 / 60 % 12 * 360 / 12,
  minutes: time => (time || new Date()).getTime() / 1000 / 60 % 60 * 360 / 60,
  seconds: time => Math.round((time || new Date()).getTime() / 1000 % 60) * 360 / 60
}

