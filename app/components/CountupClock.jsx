var React = require('react');

var CountupClock = React.createClass({
  render: function () {
    return (
      <p>{this.props.secondsDisplay}</p>
    );
  }
});

module.exports = CountupClock;
