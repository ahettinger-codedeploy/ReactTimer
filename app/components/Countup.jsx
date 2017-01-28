var React = require('react');
var CountupClock = require('CountupClock');
var CountupForm = require('CountupForm');

var Countup = React.createClass({
  getInitialState: function () {
    return {
      seconds: 0,
      status: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.status !== prevState.status) {
      switch (this.state.status) {
        case 'started':
        console.log(this.state.status);
        this.startCountUp();
        break;
      }
    }
  },
  startCountUp: function () {
    this.countUp = setInterval(()=>{
      var newCount = this.state.seconds + 1;
      this.setState({
        seconds: newCount
      });
    }, 1000);
  },
  handleSubmit: function (s) {
    this.setState({
      seconds: s,
      status: 'started'
    });
  },
  render: function () {
    var {seconds} = this.state;
    return (
      <div>
      <h1>COUNTUP</h1>
      <CountupClock secondsDisplay={seconds}/>
      <CountupForm onSecondsSubmit={this.handleSubmit}/>
      </div>
    );
  }
});

module.exports = Countup;
