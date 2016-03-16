module.exports = {
  hours: time => Math.round((time || new Date()).getTime() / 1000 / 60 / 60 % 12),
  minutes: time => Math.round((time || new Date()).getTime() / 1000 / 60 % 60),
  seconds: time => Math.round((time || new Date()).getTime() / 1000 % 60)
}

