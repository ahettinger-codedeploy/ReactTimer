var React = require('react');
var HelpNav = require('HelpNav');

var Help = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Help</h1>
        <HelpNav/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Help;
