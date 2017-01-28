var React = require('react');

var CountupForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var secs = this.refs.countupsecs.value;
    this.props.onSecondsSubmit(parseInt(secs,10));
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="countupsecs" />
        <button className="button">Click</button>
      </form>
    );
  }
});

module.exports = CountupForm;
