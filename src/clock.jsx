const React = require('react')

module.exports = props => (
  <div className="clock">
    <div className="clock__hours" data-hours={props.hours}></div>
    <div className="clock__minutes" data-minutes={props.minutes}></div>
    <div className="clock__seconds" data-seconds={props.seconds}></div>
  </div>
)

