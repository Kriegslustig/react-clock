const React = require('react')
const ReactDOM = require('react-dom')
const Clock = require('./clock.jsx')

setInterval(() => {
  ReactDOM.render(
    <Clock time={new Date()} />,
    document.body.children[0]
  )
}, 100)

