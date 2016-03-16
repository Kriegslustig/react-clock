const React = require('react')
const ReactDOM = require('react-dom')

const Clock = require('./clock.jsx')
const time = require('./time.jsx')

setInterval(() => {
  ReactDOM.render(
    <Clock
      hours={time.hours()}
      minutes={time.minutes()}
      seconds={time.seconds()}
    />,
    document.body.children[0]
  )
}, 100)

