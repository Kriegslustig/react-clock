const React = require('react')
require('./clock.css')

module.exports = props => (
  <div className="clock">
    <div className="clock__hand clock__hand--hours" style={{
      transform: `rotate(${props.hours * 360 / 12}deg)`
    }}></div>
    <div className="clock__hand--minutes clock__hand" style={{
      transform: `rotate(${props.minutes * 360 / 60}deg)`
    }}></div>
    <div className="clock__hand--seconds clock__hand" style={{
      transform: `rotate(${props.seconds * 360 / 60}deg)`
    }}></div>
  </div>
)

