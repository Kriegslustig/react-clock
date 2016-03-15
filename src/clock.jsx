const React = require('react')

module.exports = props => (
  <div className="clock">
    <p>It is {props.time.toString()}</p>
  </div>
)

